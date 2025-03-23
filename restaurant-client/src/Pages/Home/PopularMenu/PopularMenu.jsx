import React, { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

import UseMenu from "../../../Hooks/UseMenu";
import Loading from "../../../Components/Loading";
import MenuItems from "../../Shared/MenuItems/MenuItems";

function PopularMenu() {
  const [menu, loading] = UseMenu();
  if (loading) return <Loading />
  const popular = menu.filter(item=> item.category==='popular')

  return (
    <section>
      <SectionTitle heading={"from Our Menu"} subHeading={"Popular Items"} />
      <br />
      
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {popular?.map((item) => (
          <MenuItems item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
}

export default PopularMenu;
