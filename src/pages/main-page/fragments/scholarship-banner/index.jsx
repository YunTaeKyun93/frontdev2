import React from "react";
import classNames from "classnames/bind";
import styles from "./scholarship.module.scss";
import ScholarshipImage from "../../../../components/scholarship-image";
const ScholarshipBanner = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("banner-container")}>
        <div className={ss("banner-contents")}>
          <div className={ss('contents-container')}>
          <p>직장탈출에서 <span className={ss("bold")}>누구나 받을 수 있는</span></p>
          <p  className={ss("bold")}>장학금도 받아가세요</p>
          </div>
          <div className={ss("button-container")}>
            <button className={ss("banner-btn")}>자세히보기</button>
          </div>
        </div>
        <div className={ss("banner-img")}>
        <ScholarshipImage className={'banner-img'} style={{width:'500px'}} />

        </div>
      </div>
    </div>
  );
};

export default ScholarshipBanner;
