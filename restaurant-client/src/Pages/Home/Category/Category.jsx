import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle";
function Category() {
  return (
    <>
      <section className="my-20">
        <SectionTitle 
        heading={"From 11:00 AM to 10:00 PM "}
        subHeading={'Order Online'}
        />

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-center -mt-28 uppercase text-white text-2xl">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-center -mt-28 uppercase text-white text-2xl">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-center -mt-28 uppercase text-white text-2xl">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-center -mt-28 uppercase text-white text-2xl">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-center -mt-28 uppercase text-white text-2xl">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Category;
