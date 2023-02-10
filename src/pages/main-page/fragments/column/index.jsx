import React from "react";
import classNames from "classnames/bind";
import styles from "./column.module.scss";
import ColumnImage1 from "../../../../components/column-image1";
import ColumnImage2 from "./../../../../components/column-image2";
const Column = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("column-container")}>
        <div className={ss("container", "column-introduction")}>
          <div className={ss("column-introduction-header")}>
            <h2>칼럼만 읽어도</h2>
            <h2 className={ss("bold")}>직장이 탈출이 가능합니다</h2>
          </div>

          <p>
            기존의 고정관념을 깨지 않으면 당신의 인생은 절대 변하지 않습니다.
            칼러만 읽어도 여러분의 삶을 충분히 바꿀 수 있습니다.
          </p>
          <button className={ss("column-btn")}>6가지 칼럼 읽기</button>
        </div>
        <div className={ss("container", "column-list")}>
          <ColumnImage1 />
          <div className={ss("column-list-content")}>
            <button className={ss("column-btn")}>칼럼1</button>
            <p>돈을 벌기 위해 반드시 필요한 신념들</p>
          </div>
        </div>
        <div className={ss("container", "column-list")}>
          <ColumnImage2 />
          <div className={ss("column-list-content")}>
            <button className={ss("column-btn")}>칼럼2</button>
            <p>재테크보다 소득을 높이는게 최우선이다</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
