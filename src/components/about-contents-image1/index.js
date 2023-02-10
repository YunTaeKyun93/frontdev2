import AboutContentsImage1Src from "../../assets/images/about-img1.png";

const AboutContentsImage1 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={AboutContentsImage1Src}
      alt={"AboutContentsImage1"}
    />
  );
};
export default AboutContentsImage1;
