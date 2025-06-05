import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795014/1_a5pru9.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795025/19_cqt8yn.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795023/17_pon7cb.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795022/16_mtirnx.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795016/6_huvb74.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795017/4_ht19vi.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795025/18_o6i1xy.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795029/24_ucrzal.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795020/12_avn1xw.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dkaut65y6/image/upload/w_1000/v1748795021/14_sm5fcu.jpg",
  },
];

function Slider() {
  return (
    <div className="coverflow-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="coverflow-slide">
            <img src={slide.image} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-button-wrapper">
        <Link to="/gallery" className="gallery-button">
          Переглянути галерею
        </Link>
      </div>
    </div>
  );
}

export default Slider;
