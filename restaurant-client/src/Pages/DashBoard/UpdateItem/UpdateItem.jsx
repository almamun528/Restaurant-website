import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateItem = () => {
  const item = useLoaderData(); // Loaded via route loader
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
    },
  });

  const onSubmit = (data) => {
    console.log("Updated Data:", data);
    // 🔁 Send PATCH or PUT request to backend to update
  };

  return (
    <>
      <SectionTitle
        heading={"Update an Item"}
        subHeading={"You can Update all fields"}
      />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              {...register("category", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: true })}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateItem;
