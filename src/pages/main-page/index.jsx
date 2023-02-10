import React from "react";
import NavBar from "./../../components/nav-bar/index";
import MainBgCarousel from "./fragments/main-bg-carousel/index";
import useLogic from "./use-logic";
import Column from "./fragments/column/index";
import Reviews from "./fragments/reviews/index";
import ScholarshipBanner from "./fragments/scholarship-banner";
import EntranceSchoolBanner from './fragments/entrance-school-banner/index';
import Footer from "../../components/footer";
const MainPage = () => {
  const logic = useLogic();
  return (
    <div>
      <NavBar />
      <MainBgCarousel />
      <Column />
      <Reviews reviews={logic.reviews} />
      <ScholarshipBanner/>
      <EntranceSchoolBanner/>
      <Footer/>
    </div>
  );
};

export default MainPage;

/*

<div style={{backgroundColor: 'brown'}}>
  <div style={{margin: 'auto', maxWidth: 1180}}>
    1일동안 보지않기
  </div>
</div>
<div style={{position: 'relative'}}>
  <img style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover'}} src=''/>
  <div style={{position: 'relative', margin: 'auto', maxWidth: 1180}}>
    헤더
  </div>
</div>
<div>
  <div style={{margin: 'auto', maxWidth: 1180}}>
    우리의 목적은 회사를 위해 사는 것이 아닌
  </div>
</div>
<div>
  <div style={{margin: 'auto', maxWidth: 1180}}>
    직장탁출학교는 교육법에...
  </div>
</div>

*/