import entranceSchool from "../../assets/images/entrance.png";

const EntranceSchoolImage = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={entranceSchool}
      alt={"EntranceSchoolImage"}
    />
  );
};

export default EntranceSchoolImage;
