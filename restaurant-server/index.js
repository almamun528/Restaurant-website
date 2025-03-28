const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.34ihq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}

connectDB();

// Example Route to Fetch Data
app.get("/", (req, res) => {
  res.send("App is running successfully!");
});


// Start the Server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
console.log('user name ',process.env.DB_USER)
console.log('user password ',process.env.DB_PASSWORD)