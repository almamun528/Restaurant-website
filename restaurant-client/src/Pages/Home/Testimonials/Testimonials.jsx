import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa6";
import "@smastrom/react-rating/style.css";


function Testimonials() {

  const [reviews, setReviews]= useState([])
  useEffect(()=>{
    fetch('reviews.json')
    .then(res=> res.json())
    .then(data => setReviews(data))
  },[])


  return (
    <>
      <section>
        <SectionTitle
          subHeading={"What Our client say"}
          heading={"Testimonials"}
        />{" "}
        <br />
        {/*  */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              {/* icons  */}
              <FaQuoteLeft className='text-7xl my-2 w-1/2 mx-auto' />
              {/* ratting */}

              <Rating
                className="w-1/2 mx-auto my-3"
                style={{ maxWidth: 180 }}
                value={review?.rating}
                readOnly
              />

              <div className="text-center w-11/12 mx-auto">
                <p>{review.details}</p>
                <h3 className="text-orange-500 text-2xl">{review.name}</h3>
              </div>
              <br />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials;
