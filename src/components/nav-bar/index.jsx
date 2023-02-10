import React from "react";
import classNames from "classnames/bind";
import styles from "./nav-bar.module.scss";
import NavBarPopup from "./../nav-bar-popup/index";
import { HiUserCircle } from "react-icons/hi";
import useNavBar from "./use-nav-bar";

const NavBar = () => {
  const ss = classNames.bind(styles);
  const {
    isAboutMenuOpen,
    setIsAboutMenuOpen,
    isSubjectMenuOpen,
    setIsSubjectMenuOpen,
    navigator
  } = useNavBar();
  return (
    <div className={ss("wrapper")}>
      <NavBarPopup />
      <div className={ss("head-container")}>
        <span className={ss("logo")} onClick={()=>navigator('/')}>직장탈출학교</span>
        <div className={ss("menu-container")}>
          <div className={ss("menu-list")}>
            <span
              onMouseEnter={() => setIsAboutMenuOpen(true)}
              onMouseLeave={() => setIsAboutMenuOpen(false)}
            >
              입학안내
              <div
                className={ss("menuTrigger")}
                onMouseEnter={() => setIsAboutMenuOpen(true)}
              ></div>
              {/* 질문할 것 */}
              <div
                onMouseLeave={() => setIsAboutMenuOpen(false)}
                className={ss(
                  `${isAboutMenuOpen ? "sub-menu-open" : "sub-menu-close"}`
                )}
              >
                <span onClick={()=>navigator('/about')}>직장탈출학교란</span>
                <span>신입생가이드</span>
                <span>FAQ</span>
              </div>
            </span>
            <span
              onMouseEnter={() => setIsSubjectMenuOpen(true)}
              onMouseLeave={() => setIsSubjectMenuOpen(false)}
            >
              교육과목
              <div
                className={ss("menuTrigger")}
                onMouseEnter={() => setIsSubjectMenuOpen(true)}
              ></div>
              {/* 질문할 것 */}
              <div
                onMouseLeave={() => setIsSubjectMenuOpen(false)}
                className={ss(
                  `${isSubjectMenuOpen ? "sub-menu-open" : "sub-menu-close"}`
                )}
              >
                <span>수학</span>
                <span>과학</span>
                <span>지리</span>
              </div>
            </span>
            <span>입학안내</span>
            <span>교육과목</span>
          </div>
        </div>
        <HiUserCircle className={ss("userIcon")} />
      </div>
    </div>
  );
};

export default NavBar;

