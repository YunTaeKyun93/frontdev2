import React from "react";
import classNames from "classnames/bind";
import styles from "./entrance-school-banner.module.scss";
import EntranceSchoolImage from "./../../../../components/entrance-school-image/index";

const EntranceSchoolBanner = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("entrance-school-banner-container")}>
        <div className={ss("entrance-school-banner-contents")}>
          <div className={ss("entrance-school-banner-header")}>
            <p>
              당신의 인생에<span className={ss("bold")}>터닝포인트가</span>
            </p>
            <p> 되길 바랍니다.</p>
          </div>
          <div className={ss("entrance-school-banner-main")}>
            <p> 저는 28살 때부터 직장 탈출을 준비했고 불과</p>
            <p> 2년만에 연봉 3억을 만들게 됩니다. 도대체 뭘</p>
            <p>했길래 이런 일이 생길 수 있었을까요?</p>

            <span>직장탈출학교 대표 OOO</span>
          </div>
          <button className={ss("entrance-school-banner-btn")}>
            직장탈출학교 입학하기
          </button>
        </div>
     
      </div>
    </div>
  );
};

export default EntranceSchoolBanner;
