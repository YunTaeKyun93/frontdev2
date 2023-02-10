import columnImageSrc from "../../assets/images/column-img1.png";

const ColumnImage1 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={columnImageSrc}
      alt={"ColumnImage1"}
    />
  );
};
export default ColumnImage1;
