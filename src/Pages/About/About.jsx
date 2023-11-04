import "./About.css";
import About_Banner from "./About_Banner/About_Banner";
import About_Content from "./About_Content/About_Content";
import Founder from "./Founder/Founder";
import What_We from "./What_We/What_We";
import Office from "./Office/Office";

const About = () => {
  return (
    <>
      <About_Banner
        subTitle="We Are Tripo"
        title="We're creating the best in
interactive entertainment by
making games that change the
way people have fun."
      />
      <About_Content />
      <What_We />
      <Founder />
      <Office />
    </>
  );
};

export default About;
