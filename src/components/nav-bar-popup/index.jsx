import React from "react";
import classNames from "classnames/bind";
import styles from "./nav-bar-popup.module.scss";
import { HiOutlineX } from "react-icons/hi";
import useNavbarPopup from "./use-navbar-popup";

const NavBarPopup = () => {
  const { isPopupOpen, setIsPopOpen } = useNavbarPopup();
  const ss = classNames.bind(styles);
  return (
    <div className={ss(`${isPopupOpen ? "wrapper" : "popupClose"}`)}>
      <div className={ss("popup-container")}>
        <div className={ss('popup-open')}>
          <span className={ss("popupWord")}>
            🤔 회사를 위한 것이 아닌, 나의 가치를 높이며 살자!
          </span>
          <div className={ss("closeBtn")}>
            <span>1일 동안 보지않기</span>
            <HiOutlineX
              className={ss("close")}
              onClick={() => setIsPopOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarPopup;
