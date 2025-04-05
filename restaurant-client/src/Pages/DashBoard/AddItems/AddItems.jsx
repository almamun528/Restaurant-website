import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
