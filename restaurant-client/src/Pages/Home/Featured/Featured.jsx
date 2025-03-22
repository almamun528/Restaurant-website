import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css'
function Featured() {
  return (
    <>
      <main className="featured-items">
        <br />
        <SectionTitle
          subHeading={"Check it out"}
          heading={"Featured Item"}
        />{" "}
        <br />
        <div className="lg:flex gap-10 justify-center items-center md:my-20 md:px-36 px-10">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="text-white bg-[#00000068] rounded p-1">
            <br />
            <p>Aug 20, 2025</p>
            <p>Where can I get some ?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum accusantium libero asperiores explicabo architecto qui
              placeat ad adipisci. Non nihil numquam minima quaerat possimus,
              quibusdam et harum? Numquam fugit accusamus, at nam similique ad
              veniam recusandae hic minima voluptatem voluptates?
            </p>
            <button className="my-2 btn btn-outline">Read ME</button>
            <br />
          </div>
          
        </div>
        <br />
      </main>
    </>
  );
}

export default Featured;
