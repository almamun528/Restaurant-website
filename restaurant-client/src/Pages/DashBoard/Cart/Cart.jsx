import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure, { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart(); //Product items
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  //   delete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // refetch ta data and update the state
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <section className="my-3">
        {/* top Bar  */}
        <div className="flex justify-evenly">
          <h2 className="text-4xl">Items : {cart?.length} </h2>
          <h2 className="text-4xl">Total Price : {totalPrice} </h2>
          {cart?.length ? (
            <Link
              className="btn bg-amber-500 hover:bg-amber-300"
              to="/dashboard/payment"
            >
              Pay
            </Link>
          ) : (
            <button
              disabled
              className="btn text-amber-400 border-2 border-amber-500"
            >
              Pay
            </button>
          )}
        </div>

        {/* table start */}
        <div className="overflow-x-auto w-full ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>$ {item?.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item?._id)}>
                      <FaTrash className="text-red-400 text-2xl hover:text-4xl hover:text-red-500 " />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
