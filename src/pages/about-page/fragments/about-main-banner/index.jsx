import React from "react";
import classNames from "classnames/bind";
import styles from "./about-main-banner.module.scss";
import EntranceSchoolImage from "./../../../../components/entrance-school-image/index";

const AboutMainBanner = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("banner-wrapper")}>
      <div className={ss("banner-container")}>
        <div className={ss("banner-contents")}>
          <div className={ss("banner-header")}>
            <p>우리의 목적은</p>
            <p className={ss("bold")}> 회사를 위해 사는 것이 아닌</p>
            <p className={ss("bold")}>
              나 자신의 몸값을 올리는 것{" "}
              <span className={ss("regular")}>입니다.</span>{" "}
            </p>
          </div>

          <span>직장탈출학교</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMainBanner;
