import React, { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useEffect } from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";

function PopularMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>{ 
        const popularItems = data.filter(item=>item.category==='popular')
        setMenu(popularItems)});
  }, []);


  return (
    <section>
      <SectionTitle heading={"from Our Menu"} subHeading={"Popular Items"} />
      <br />
      {/* popular menu item and send it Menu items shared component */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                   menu?.map(item=><MenuItems item={item} key={item._id}/>)
                }
            </div>
    </section>
  );
}

export default PopularMenu;
