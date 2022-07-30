import React from "react";
import { images } from "../data";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SingleItem = () => {
  return (
    <div>
      <h2>Single Item</h2>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          onSlideChange={() => {
            console.log("slide change");
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: "100%",
                  minHeight: "300px",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SingleItem;
