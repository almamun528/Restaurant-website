import React from "react";
// import menuBackgroundBG from '.././assets/menu/menu-bg.png'
function SectionCover({ img, title, description }) {
  return (
    <>
      <div
        className="hero h-[700px]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCover;
