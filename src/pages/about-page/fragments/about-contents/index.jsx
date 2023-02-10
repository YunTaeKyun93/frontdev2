import React from "react";
import classNames from "classnames/bind";
import styles from "./about-contents.module.scss";

import AboutContentsImage1 from "./../../../../components/about-contents-image1/index";
import AboutContentsImage2 from "./../../../../components/about-contents-image2/index";
import AboutContentsImage3 from "./../../../../components/about-contents-image3/index";
import AboutContentsImage4 from "./../../../../components/about-contents-image4/index";
const AboutContents = () => {
  const ss = classNames.bind(styles);

  return (
    <div className={ss("wrapper")}>
      <div className={ss("about-container")}>
        <div className={ss("about-item", "about-img-right")}>
          <div className={ss("about-contents")}>
            <div>
              <h3>이게 무슨 말인가요?</h3>
            </div>
            <div className={ss("about-text")}>
              <p>저는 물리치료사로 일하면서 의문을 가졌습니다.</p>
              <span>'내가 과연 이 일을 평생 할 수 있을까?'</span>
              <span>'이 월급으로 내 가족을 지킬 수 있을까?'</span>
              <span>'나는 지금 누구를 위해 일하고 있는걸까?'</span>
              <p>
                좋아하는 일이라도 타인에 의해 정해진 공간과 시간에서 하게 되면
                그것은 일이 됩
              </p>
              <p>
                니다. 결국 버티는 인생을 살며 퇴근과 주말만 기다리겠죠. 저는
                INFP 유형으로 남
              </p>
              <p>눈치를 많이 보고, 혼자 일할 떄 행복을 느낍니다.</p>
              <span>
                그래서 퇴근 이후에는 직장을 탈출하는 방법을 연구했습니다.
              </span>
            </div>
          </div>
          <AboutContentsImage1 className={ss("about-image")} />
        </div>
        <div className={ss("about-item", "about-img-left")}>
          <AboutContentsImage2 className={ss("about-image")} />

          <div className={ss("about-contents")}>
            <div>
              <h3>직장을 다니면서</h3>
              <h3>도대체 뭘 한 건가요?</h3>
            </div>
            <div className={ss("about-text")}>
              <span>
                유튜브 채널을 운영하면서 가장 많이 들었던 질문이기도 합니다.
              </span>
              <span>
                제가 직장을 다니면서 얻으려고 했던 능력은 크게 두 가지 입니다.
              </span>
              <p>1.사람을 모으는 방법</p>
              <p>2.사람을 설득하는 방법</p>
              <p>
                두 가지 능력만 엳게 된다면, 무엇을 하든 돈을 벌 수 있을거라
                확신했습니다.
              </p>
              <p>
                이 능력들을 얻기 위해 수 백권의 책을 읽고 강의를 들었습니다.
                당연히 무수한
              </p>
              <p>
                장애물을 만나 실패했고 20대 전부를 소비했습니다. 그리고 결국 돈
                없이 시작훌
              </p>
              <p>수 있는 '메신저 사업'을 발견했죠</p>
            </div>
          </div>
        </div>
        <div className={ss("about-item", "about-img-right")}>
          <div className={ss("about-contents")}>
            <div>
              <h3>왜 강의를 들어도</h3>
              <h3>인생이 달라지지 않을까</h3>
            </div>
            <div className={ss("about-text")}>
              <p>
                사실, 요즘은 돈 버는 방법을 쉽게 알 수 있는 세상입니다. 하지만
                10명 9명이
              </p>
              <p>성과를 내지 못하는데, 그 이유에는 두 가지가 있습니다.</p>
              <p></p>
              <p>1.완강을 하지 않는다</p>
              <p>2.해보지를 않는다</p>
              <p></p>
              <p>
                저는 2년 넘게 여러 곳에서 강의를 해봤습니다. 해당 관리자님들한테
                들어보니 강
              </p>
              <p>
                의 완강률이 15%도 안 나온다는 겁니다. 저는 그때 큰 충격을
                받았습니다. 심지어
              </p>
              <p>
                강의를 듣고 실제로 해본느 사람은 매우 드물었습니다. 그러니
                당연히 인생이 달라
              </p>
              <p>
                지지 않겠죠. 완강률을 높일 수 있는 방법, 실행을 할 수 있게
                만드는 방법에 대해
              </p>
              <p>
                고민했습니다. 이 두가지 목표를 이루기 위해서는 다양한 기능이
                필요했습니다.
              </p>
              <p></p>

              <span>
                따라서 5개월이라는 시간과 수천 만원의 투자금이 들어간 끝에
                "직장탈출학교"
              </span>
              <span>를 론칭하게 되었습니다.</span>
            </div>
          </div>
          <AboutContentsImage3 className={ss("about-image")} />
        </div>
        <div className={ss("about-item", "about-img-left")}>
          <AboutContentsImage4 className={ss("about-image")} />

          <div className={ss("about-contents")}>
            <div>
              <h3>광고를 하지 않는 이상한 곳</h3>
            </div>
            <div className={ss("about-text")}>
              <p>
                2020년 1월, 온라인 강의 초창기 때부터 강의를 해왔습니다. 그리고
                코로나가
              </p>
              <p>
                확산되면서 온라인 시장은 미친듯이 커졌죠. 근데 요즘 공포 심리를
                자극하는 문
              </p>
              <p>
                구가 너무 많이 보입니다. 실제로 여러 사업을 하면서 다음과 같은
                말을 자주
              </p>
              <p>들었습니다. </p>
              <span>"일단 어그로를 끌어서 이런게 있다고 알려야지"</span>
              <span>
                "이번에 신청하지 않으면 기회가 없도록 공포를 조성해야해"
              </span>
              <p>
                물론 이렇게 하는게 판매가 잘 되고 매출이 좋습니다. 저도 다른
                플랫폼에서 강
              </p>
              <p>
                의를 할 떄 이런 식으로 홍보를 했으니까요. 하지만, 그러다 보니
                저만의 고유
              </p>
              <p>
                한 색깔을 잃어가고 있었습니다. 그래서 담당자님에게 독립하겠다
                말하고 직장
              </p>
              <p>탈출 학교를 만들게 되었습니다.</p>
              <span>
                못 벌어도 그냥 제가 좋은거 하려구요. 결이 비슷한 사람들에게만 제
                에네지를{" "}
              </span>
              <span>
                모두 쏟고 싶은 마음이 큽니다. 그래서 저는 직원을 따로 두지 않고
                미련하게 혼
              </span>
              <span>자서 일하는 걸 고집합니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContents;
