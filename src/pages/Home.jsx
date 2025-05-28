import React, { useState, useEffect } from 'react';
import bgImage1 from '../assets/bg_img.jpeg';
import bgImage2 from '../assets/bg_img2.jpeg'; 
import bgImage3 from '../assets/bgimg4.jpeg'; 
import Gallery from './Gallery.jsx';
import Map from '../components/Footer.jsx';
import Bestsellers from './Bestsellers.jsx';
import Face from './Face/Face.jsx';
import OurStore from '../components/OurStore.jsx';

function Home() {
  const [currentBgImage, setCurrentBgImage] = useState(bgImage1);
  const [showContent, setShowContent] = useState(false); // State to control content visibility
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0 && scrollCount === 0) {
        setCurrentBgImage(bgImage2);
        setScrollCount(1);
      } else if (scrollY > window.innerHeight && scrollCount === 1){
        setCurrentBgImage(bgImage3);
        setScrollCount(2);
      } else if (scrollY > window.innerHeight * 2 && scrollCount === 2){
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount]);

  return (
    <div style={{ height: showContent ? 'auto' : '300vh', overflow: 'hidden' }}> {/*set the height of the div*/}
      <div className="Home">
        <div className="bg_img">
          <img className="bg_img" src={currentBgImage} alt="" />
        </div>
        <div className="bg-txt">
          <h1>Welcome to Clarins</h1>
          <p>
            Your Skin <br />
            Our Expertise
          </p>
        </div>
        <div className="btn_bg">
          
          <button className="btn_bg"><a href={<OurStore/>}></a>Shop Now!</button>
          
        </div>
      </div>
      {showContent && (
        <>
          <Bestsellers />
          <OurStore />
          <Gallery />
          <Map />
        </>
      )}
    </div>
  );
}

export default Home;