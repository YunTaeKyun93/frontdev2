import reviewData from "../../temporary-data/review-data";
const useReadReviewData = () => {
  console.log(reviewData);
  return async () => {
    return reviewData;
  };
};
export default useReadReviewData;
