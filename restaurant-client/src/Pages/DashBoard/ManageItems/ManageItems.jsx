import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu] = UseMenu();

  const handleDeleteItem = (item) => {

    console.log(item._id, " needs to delete ");

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
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };


  //   for update
  const handleUpdateItem = (item) => {
    console.log(item, " needs to delete");
  };
  return (
    <>
      <div>
        <SectionTitle heading="Manage All Items" subHeading={"Hurry Up"} />

        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idex) => (
                <tr key={item._id}>
                  <th>{idex + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleUpdateItem(item)}
                      className="text-center"
                    >
                      <FaEdit className="text-2xl text-green-500 cursor-pointer" />
                    </button>
                  </th>
                  <th>
                    <button onClick={() => handleDeleteItem(item)}>
                      <FaTrash className="text-red-400 text-2xl cursor-pointer hover:text-4xl hover:text-red-500 " />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageItems;
