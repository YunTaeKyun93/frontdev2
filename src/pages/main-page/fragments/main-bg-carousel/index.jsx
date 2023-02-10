import React from "react";
import classNames from "classnames/bind";
import styles from "./main-bg-carousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import MainBgCarouselImage1 from "../../../../components/main-bg-carousel-image1";
import { ReactComponent as PrevArrow } from "../../../../assets/svg/prev-arrow.svg";
import { ReactComponent as NextArrow } from "../../../../assets/svg/next-arrow.svg";

const StyledSlider = styled(Slider)`
  height: 461px;
  width: 100vw;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;
const DivNext = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

const MainBgCarousel = () => {
  const ss = classNames.bind(styles);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <DivPre>
        <PrevArrow width="30" height="30" />
      </DivPre>
    ),
    nextArrow: (
      <DivNext>
        <NextArrow width="30" height="30" />
      </DivNext>
    )
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <div>
          <div className={ss("carousel", "carousel-list1")}>
            <div className={ss("carousel-img")}>
              <MainBgCarouselImage1 />
            </div>
            <div className={ss("carousel-contents")}>
              <p>직장을 탈출하기 위해서</p>
              <p className={ss("bold")}>우리는 학교에서 가르치지 않는걸</p>
              <p className={ss("bold")}>배워야합니다.</p>
              <span>직장학교탈출란?</span>
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: 500, background: "red" }}>
            <h2>Hello2</h2>
          </div>
        </div>
        <div>
          <div style={{ height: 500, background: "red" }}>
            <h2>Hello3</h2>
          </div>
        </div>
      </StyledSlider>
    </div>
  );
};

export default MainBgCarousel;

/*
개발할때는 new-line: <br/>
대신, <p>를 여러 번

(x)
<div>
  나는
  <br/>
  맛있는
  <br/>
  사과를 먹고있다.
</div>

(x)
<div>
  <p>
    나는
    <br/>
    맛있는
    <br/>
    사과를 먹고있다.
  </p>
</div>


.bold-title {
  font-weight: extra-bold;
}

<div>
  <p>나는</p>
  <p className="bold-title">맛있는</p>
  <p>사과를 먹고있다.</p>
</div>
*/
