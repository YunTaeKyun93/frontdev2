import { useEffect, useState } from "react";
import useReadReviewData from "./../../../services/read-review-data/index";
const useLogic = () => {
  const readReviewData = useReadReviewData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const init = async () => {
      const review = await readReviewData();
      setReviews(review);
    };
    init();
  });
  return { reviews };
};
export default useLogic;
