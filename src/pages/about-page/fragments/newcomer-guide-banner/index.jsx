import React from "react";
import classNames from "classnames/bind";
import styles from "./newcomer-guide-banner.module.scss";
import NewcomerGuideBannerImage from "../../../../components/newcomer-guide-banner-image/index";

const NewcomerGuideBanner = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("newcomer-guide-banner-container")}>
        <div className={ss("newcomer-guide-banner-contents")}>
          <div className={ss("newcomer-guide-banner-header")}>
            <h3>직장탈출학교는 교육법에 따른 시설이 아닌,</h3>
            <h3 className={ss("bold")}>학교컨셉입니다.</h3>
          </div>
          <button className={ss("newcomer-guide-banner-btn")}>
            신입생 가이드 보러가기
          </button>
        </div>
        <div className={ss("newcomer-guide-banner-image")}>
          <NewcomerGuideBannerImage />
        </div>
      </div>
    </div>
  );
};

export default NewcomerGuideBanner;
