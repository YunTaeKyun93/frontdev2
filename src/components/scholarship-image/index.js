import scholarship from "../../assets/images/scholarship-banner.png";

const ScholarshipImage = ({ className, style }) => {
  return (
    <img
      src={scholarship}
      alt={"ScholarshipImage"}
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
};

export default ScholarshipImage;
