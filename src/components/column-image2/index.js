import columnImageSrc from "../../assets/images/column-img2.png";

// const ColumnImage2 = () => {
//   return <img src={columnImageSrc} alt={'ColumnImage2'} />;
// };
const ColumnImage2 = ({ className, style }) => {
  return (
    <img
      className={className}
      style={{ ...style, objectFit: "cover" }}
      src={columnImageSrc}
      alt={"ColumnImage2"}
    />
  );
};
export default ColumnImage2;
