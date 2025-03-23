import React from "react";
import SectionCover from "../../../Components/SectionCover";
import menuImage from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";



const Menu = () => {


  
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
      <PopularMenu />
    </>
  );
};

export default Menu;
