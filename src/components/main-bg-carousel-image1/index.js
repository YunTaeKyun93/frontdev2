import mainBg1 from "../../assets/images/main-carousel1.png";

const MainBgCarouselImage1 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={mainBg1}
      alt={"MainBgCarouselImage1"}
    />
  );
};

export default MainBgCarouselImage1;
