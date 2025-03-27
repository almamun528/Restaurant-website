import React from "react";
import coverImage from '../../assets/shop/Order.jpg'
import SectionCover from "../../Components/SectionCover";



export default function Order() {
  return (
    <>
      <section>
        <SectionCover  img={coverImage} title={'Order Food'}/>
      </section>
    </>
  );
}
