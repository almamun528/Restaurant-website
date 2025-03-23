import React from "react";
import SectionCover from "../../../Components/SectionCover";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {
const [menu]= UseMenu()
const desserts = menu.filter((item) => item.category === "dessert");
const soup = menu.filter((item) => item.category === "soup");
const salad = menu.filter((item) => item.category === "salad");
const pizza = menu.filter((item) => item.category === "pizza");
const offered = menu.filter((item) => item.category === "offered");


  return (
    <>
      <SectionCover
        img={menuImage}
        title={"Our menu"}
        
      />
      <br /><br />
      <SectionTitle heading={"Don't miss todays Offer"} subHeading={'Best deal for black Friday Offered'}/>
      <br /> <br />

      {/* offered menu items */}
      
      <MenuCategory items={offered} />


        {/* Dessert menu Items */}
        <MenuCategory items={desserts} title={"Desert"} img={dessertImage} />
        <MenuCategory items={pizza} title={"Pizza"} img={pizzaImage} />
        <MenuCategory items={salad} title={"salad"} img={saladImg} />
        <MenuCategory items={soup} title={"soup"} img={soupImg} />

  
    </>
  );
};

export default Menu;
