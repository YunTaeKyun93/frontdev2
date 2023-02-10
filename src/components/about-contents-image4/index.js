import AboutContentsImage4Src from "../../assets/images/about-img4.png";

const AboutContentsImage4 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={AboutContentsImage4Src}
      alt={"AboutContentsImage4"}
    />
  );
};
export default AboutContentsImage4;
