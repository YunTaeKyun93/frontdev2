import React from 'react'
import NavBar from './../../components/nav-bar/index';
import Footer from './../../components/footer/index';
import AboutMainBanner from './fragments/about-main-banner/index';
import NewcomerGuideBanner from './fragments/newcomer-guide-banner';
import AboutContents from './fragments/about-contents/index';


const AboutPage = () => {
  return (
    <div>
        <NavBar/>
        <AboutMainBanner/>
        <AboutContents/>
        <NewcomerGuideBanner/>
        <Footer/>
    </div>
  )
}

export default AboutPage