import React from "react";
import classNames from "classnames/bind";
import styles from "./footer.module.scss";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  const ss = classNames.bind(styles);
  return (
    <div className={ss("wrapper")}>
      <div className={ss("footer-container")}>
        <div className={ss("footer-main")}>
          <div className={ss("footer-content1")}>
            <div className={ss("footer-header")}>
              <span>직장탈출학교</span>
              <p>
                직장을 탈출하기 위해서 우리는 <br />
                학교에서 가르치지 않는걸 배워야 합니다.
              </p>
            </div>
            <div className={ss("youtube-contents")}>
              <BsYoutube className={ss("youtube-logo")} />
              <span>Youtube</span>
            </div>
          </div>
          <div className={ss("footer-content2")}>
            <div className={ss("footer-menu", "menu1")}>
              <div className={ss("footer-submenu")}>
                <span>입학안내</span>
                <span>교육과목</span>
                <span>교육활동</span>
                <span>칼럼</span>
                <span>장학금</span>
              </div>
            </div>
            <div className={ss("footer-menu", "menu2")}>
              <div className={ss("footer-submenu")}>
                <span>개인정보처리방침</span>
                <span>이용약관</span>
                <span>환불정책</span>
              </div>
            </div>
          </div>
          <div className={ss("footer-content3")}>
            <span>운영시간</span>
            <p>오전 10:00 ~ 오후 6:00 (주말,공휴일 제외)</p>
          </div>
        </div>
        <div className={ss("border")}></div>
        <div className={ss("footer-info")}>
          <div className={ss("footer-address")}>
            <p>
              서울특별시 광진구 능동로 13길 75, 2층 에이 186호 | 대표자 채병도 |
              사업자등록번호: 235-88-02242
            </p>
            <p>
              통신판매신고번호: 2021-서울광진-2595 | 출판사신고번호:
              제2021-000067호
            </p>
          </div>
          <div className={ss("footer-copyright")}>
            <p>COPYRIGHT 2022. 직장탈출학교 ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
