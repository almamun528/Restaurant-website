import React from "react";

function SectionTitle({ heading, subHeading }) {
  return (
    <>
      <section>
        <p className="text-center">---{subHeading}---</p>
        <h2 className="mx-auto text-lg text-yellow-500 text-center my-5 border-t-2 w-6/12 border-t-gray-500 border-b-2 border-b-gray-500 py-5">
          {heading}
        </h2>
      </section>
    </>
  );
}

export default SectionTitle;
