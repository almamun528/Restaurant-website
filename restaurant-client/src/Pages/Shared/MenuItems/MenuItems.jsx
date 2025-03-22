import React from "react";

function MenuItems({ item }) {
  const { name, image, recipe, category, price } = item;
  return (
    <div className="flex gap-3 ">
      <img  className="w-[120px]"
      style={{borderRadius:'0 200px 200px'}}
      src={image} alt="" />
      <div>
        <h3 className="text-2xl ">{name}-------</h3>
        <p>{recipe}</p>
        <p className="font-semibold text-yellow-400">$ {price}</p>
      </div>
    </div>
  );
}

export default MenuItems;
