import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure, { axiosSecure } from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

export default function FoodCard({ item }) {
  const navigate = useNavigate();
  const { name, image, price, recipe, _id } = item;
  // get the user and send the email to add to cart
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddTOCart = () => {
    if (user && user?.email) {
      // menuCart Item object
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update the items cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes! Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="bg-slate-900 text-white absolute right-3 top-3 p-2 rounded ">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name} </h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddTOCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
