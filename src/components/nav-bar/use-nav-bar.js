import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useNavBar = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isSubjectMenuOpen, setIsSubjectMenuOpen] = useState(false);
  const navigator = useNavigate();
  return {
    isAboutMenuOpen,
    setIsAboutMenuOpen,
    isSubjectMenuOpen,
    setIsSubjectMenuOpen,
    navigator
  };
};
export default useNavBar;

/*
/images/soccer-icon.svg
/images/basket-ball-icon.svg

import soccerSrc from '../images/soccer-icon.svg';
import basketBallSrc from '../images/basket-ball-icon.svg';

<img src={soccerSrc} style={{width: 32, height: 32}}/>
<img src={basketBallSrc}/>



<div className={styles['my-body']}>








/components/soccer-icon/index.tsx, soccer.svg
/components/basket-ball-icon/index.tsx, basket-ball.svg

const Soccer = () => {
  return <img src={soccerIcon}/>;
};

import Soccer from '../components/soccer-icon';

<Soccer/>
<BasketBall/>



const MyBody = styled.div``;

<MyBody/>
















.afdfsafdsfsafdsafds-my-body {
  width: 24px;
  height: 24px;
}

<img class='afdfsafdsfsafdsafds-my-body' src='https://asdf.com/images/3243232grrewdfd.png'/>
<img class='afdfsafdsfsafdsafds-my-body' src='base64://'/>



binary / text
이미지, 동영상, zip
txt, html, xml, json

base64: 문자열로 바이너리 저장

'base64://fdsfhdlhewgjj(800글자)'

파일 업로드: multer, s3
base64 파일 업로드

*/