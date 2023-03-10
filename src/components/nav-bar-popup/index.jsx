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
            π€ νμ¬λ₯Ό μν κ²μ΄ μλ, λμ κ°μΉλ₯Ό λμ΄λ©° μ΄μ!
          </span>
          <div className={ss("closeBtn")}>
            <span>1μΌ λμ λ³΄μ§μκΈ°</span>
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
