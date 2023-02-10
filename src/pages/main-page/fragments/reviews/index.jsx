import React from "react";
import ReviewCard from "../../../../components/review-card";
import classNames from "classnames/bind";
import styles from "./reviews.module.scss";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './a.css';

SwiperCore.use([Autoplay, Navigation]);

const Reviews = ({ reviews }) => {
  const ss = classNames.bind(styles);


  return (
    <div className={ss("wrapper")}>
      <div className={ss("reviews-container")}>
        <div className={ss("review-header")}>
          <p>
            "쉽지 않겠죠, 하지만
            <span className={ss("bold")}>
              시도한 사람들은 쉽게 성공하고 돈을 법니다"
            </span>
          </p>
        </div>

        <Swiper
          className={`my-swiper ${ss("carousel-container")}`}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          // autoplay={{ delay: 1000 }}
          loop
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
          className={`my-swiper-mobile ${ss("carousel-container")}`}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          // autoplay={{ delay: 1000 }}
          loop
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default Reviews;
