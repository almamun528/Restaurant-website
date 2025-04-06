import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // image BB APi keys

  const imageHosting_key = import.meta.env.VITE_IMAGE_HOSTING_KRY;
  const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${imageHosting_key}`;
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    // image upload to Image BB and get url
    const res = await axiosPublic.post(image_hosting_Api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      // now send the menu data to the server with image link
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      //send the data to backend
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added into the list`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <SectionTitle heading="Add an Item" subHeading="what's new?" />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name</legend>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-full"
              placeholder="Type recipe name"
            />
          </fieldset>
          <div className="flex gap-3">
            {/* select Category  */}
            <select
              {...register("category", { required: true })}
              defaultValue="Pick a Framework"
              className="select select-info my-2 flex-1"
            >
              <option disabled={true}>Select a category</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks"> Drinks</option>
            </select>
            {/* Price  */}
            <fieldset className="fieldset mt-1 flex-1">
              <input
                {...register("price", { required: true })}
                type="number"
                className="input w-full"
                placeholder="Price "
              />
            </fieldset>
          </div>

          <textarea
            {...register("recipe", { required: true })}
            type="text"
            className="textarea w-full"
            placeholder="Details"
          ></textarea>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input my-2"
          />
          <br />

          <button className="btn btn-primary mt-2" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
