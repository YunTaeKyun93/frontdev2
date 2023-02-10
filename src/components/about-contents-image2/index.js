import AboutContentsImage2Src from "../../assets/images/about-img2.png";

const AboutContentsImage2 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={AboutContentsImage2Src}
      alt={"AboutContentsImage2"}
    />
  );
};
export default AboutContentsImage2;
