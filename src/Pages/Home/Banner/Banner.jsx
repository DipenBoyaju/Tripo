import { Container } from "react-bootstrap";
import "./Banner.css";
import Apple_Store from "../../../assets/Apple-Store.webp";
import Google_Play from "../../../assets/Google Play.webp";
// import { useEffect } from "react";
import "animate.css";

const Banner = () => {
  /*useEffect(() => {
    // Find the element with the 'parallax-bg' ID
    const parallaxBg = document.getElementById("parallax-bg"); 

    // Add a scroll event listener to create the parallax effect
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      parallaxBg.style.transform = `translateX(-${scrollValue * 0.1}px)`; // Adjust the scroll speed by changing the multiplier (0.2 in this example)
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/
  return (
    <div className="banner">
      <div className="banner-bg" id="parallax-bg"></div>
      <Container>
        <div className="banner-content animate__animated animate__fadeIn">
          <div className="banner-info">
            <h1>Made to Be played</h1>
            <p>The Very Best in Mobile Gaming</p>
          </div>
          <div className="banner-social">
            <img src={Apple_Store} alt="" />
            <img src={Google_Play} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
