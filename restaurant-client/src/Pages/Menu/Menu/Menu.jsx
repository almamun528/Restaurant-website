import React from "react";
import SectionCover from "../../../Components/SectionCover";
import menuImage from "../../../assets/menu/banner3.jpg";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
const [menu]= UseMenu()
const dessert = menu.filter((item) => item.category === "dessert");
const soup = menu.filter((item) => item.category === "soup");
const salad = menu.filter((item) => item.category === "salad");
const pizza = menu.filter((item) => item.category === "pizza");
const offered = menu.filter((item) => item.category === "offered");


  return (
    <>
      <SectionCover
        img={menuImage}
        title={"Our menu"}
        description={
          "we are highly remanded to test our food and also share your experience into our community"
        }
      />
      <br /> <br />
      {/* <PopularMenu />
       */}
       <SectionTitle subHeading={"don't miss"} heading={'Todays Best Offer'} />
       <MenuCategory items={offered}/>
    </>
  );
};

export default Menu;
