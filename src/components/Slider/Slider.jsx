// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderWrapper, StyledSwiperButton } from "./SliderWrapper.module";
import "swiper/css";

import "swiper/css/navigation"; // Імплементуйте стиль для навігації
import { Navigation } from "swiper/modules";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

export const Slider = () => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation]}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SliderWrapper>
          <h2>Choose your camper and add it to your favorites</h2>
          <img src={img1} alt="" />
        </SliderWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <SliderWrapper>
          <h2>You can view detailed information about the camper</h2>
          <img src={img2} alt="" />
        </SliderWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <SliderWrapper>
          <h2>Read reviews</h2>
          <img src={img3} alt="" />
        </SliderWrapper>
      </SwiperSlide>
      <StyledSwiperButton className="swiper-button-prev"></StyledSwiperButton>
      {/* Стрілка вліво */}
      <StyledSwiperButton className="swiper-button-next"></StyledSwiperButton>
      {/* Стрілка вправо */}
    </Swiper>
  );
};
