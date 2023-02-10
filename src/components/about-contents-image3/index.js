import AboutContentsImage3Src from "../../assets/images/about-img3.png";

const AboutContentsImage3 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={AboutContentsImage3Src}
      alt={"AboutContentsImage3"}
    />
  );
};
export default AboutContentsImage3;
