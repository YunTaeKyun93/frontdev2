import React from "react";

import { HiUserCircle } from "react-icons/hi";
import classNames from "classnames/bind";
import styles from "./review-card.module.scss";
const ReviewCard = ({ review }) => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("card-container")}>
      <div className={ss("card-main")}>
        <div className={ss("card-header")}>
         {review.title}
        </div>
        <div className={ss("card-contents")}>{review.content}</div>
      </div>
      <div className={ss("card-border")}></div>
      <div className={ss("card-footer")}>
        <div className={ss("user-info")}>
          <HiUserCircle className={ss("userIcon")} />
          {review.user}
        </div>
        <div className={ss("rating")}> ⭐{review.rate}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
