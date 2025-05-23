const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.Strip_Secret_key);
const jwt = require("jsonwebtoken");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.34ihq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
app.use(express.json());
const port = process.env.PORT || 3001;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173", // Change "*" to the frontend origin
    credentials: true, // Allow cookies/auth headers
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const menuCollection = client.db("restruentDB").collection("menu");
    const reviewCollection = client.db("restruentDB").collection("reviews");
    const cartCollection = client.db("restruentDB").collection("carts");
    const userCollection = client.db("restruentDB").collection("users");

    // ?______________JWT related APIs______________
    // middle wear JWT
    const verifyToken = (req, res, next) => {
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "forbidden access" });
      }

      const token = req.headers.authorization.split(" ")[1];

      jwt.verify(token, process.env.Access_Token, (error, decoded) => {
        if (error) {
          return res.status(401).send({ message: "forbidden access" });
        }
        req.decoded = decoded;
        next();
      });
    };
    // ! check user is Admin or not
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }
      next();
    };

    // !------------JWT Request--------------------
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Access_Token, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // !-------------------user related apis------------------

    app.post("/users", verifyToken, verifyAdmin, async (req, res) => {
      const user = req.body;
      // query {search the email } if the email is already exist or not
      const query = { email: user.email }; //search by user email
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        //if user is exist , we will not save the data again,
        return res.send({
          message: "user is already exist in database ",
          insertedId: null,
        });
      }

      try {
        // save the data if user is not exist into database.
        const result = await userCollection.insertOne(user);

        res.status(201).send(result); // 201 for successful creation
      } catch (error) {
        res.status(500).send({ message: "Failed to insert user", error });
      }
    });

    // !get all users
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    // ! delete a single User
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    // ! make a user to admin
    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });
    // ! ______________Admin APi_________________

    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "unauthorized access" });
      }
      const query = { email: email };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });

    //!----------- get all menu -------------
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    // !____________ Post a menu____________
    app.post("/menu", async (req, res) => {
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result);
    });
    // !---------Delete a single Menu ----------
    app.delete("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });
    //! ----------get  a single menu item---------
    app.get("/menu/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await menuCollection.findOne(query);
      res.send(result);
    });

    //!----------- get all reviews -------------
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find().toArray();
      res.send(result);
    });
    //!-----------  cart collection -------------
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });
    //!----------- Show All cart collection -------------
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });
    // !----------- Delete cart  -------------
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // !?------------------------------------------------------
    // -------------------Payment related Apis------------
    // !?------------------------------------------------------
    // app.post("/create-payment-intent", async (req, res) => {
    //   const { price } = req.body;
    //   const amount = parseInt(price * 100); // convert dollars to cents
    //   const paymentIntent = await stripe.paymentIntents.create({
    //     amount: amount,
    //     currency: "usd",
    //     payment_method_types: ["card"], // ✅ fixed key name
    //   });
    //   // https://docs.stripe.com/payments/quickstart
    //   // doc to apply the same methods
    //   res.send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
    // });
    app.post("/create-payment-intent", async (req, res) => {
      try {
        const { price } = req.body;
        const amount = parseInt(price * 100);

        if (!amount || amount < 50) {
          // Stripe requires minimum 50 cents
          return res.status(400).send({ error: "Invalid amount" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: "usd",
          payment_method_types: ["card"],
        });

        res.send({
          clientSecret: paymentIntent.client_secret,
        });
      } catch (error) {
        console.error("Payment error:", error);
        res.status(500).send({ error: error.message });
      }
    });

    // !?------------------------------------------------------
    // !?------------------------------------------------------
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//! Example Route to Fetch Data
app.get("/", (req, res) => {
  res.send("App is running successfully!");
});

// !----------------------- Naming convention  -------------------------------

// Start the Server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
