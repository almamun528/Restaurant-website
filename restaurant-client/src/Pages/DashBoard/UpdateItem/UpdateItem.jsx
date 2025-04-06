import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const item = useLoaderData();
  
  console.log(item);
  return (
    <>
      <SectionTitle
        heading={"Update an Item"}
        subHeading={"You can Update all field"}
      />
    </>
  );
};

export default UpdateItem;
