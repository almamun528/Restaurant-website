import React from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import SectionCover from "../../../Components/SectionCover";
import { Link } from 'react-router-dom';

function MenuCategory({ items, img, title }) {
  console.log(title, ' I am from menu cate')
  return (
    <>
     {title &&  <SectionCover img={img}  title={title} />}
      {/* offered */}

      <div className="grid md:grid-cols-2 gap-6 my-10">
        {items?.map((item) => (
          <MenuItems item={item} key={item._id} />
        ))}
      </div>
        <div className="flex justify-center my-3 ">
          <Link className="btn bg-amber-500 hover:bg-amber-800 text-white w-4/12 text-xl"
           to={`/order/${title}`}>
          <button >
            Order Now
            </button></Link>
        </div>
    </>
  );
}

export default MenuCategory;
