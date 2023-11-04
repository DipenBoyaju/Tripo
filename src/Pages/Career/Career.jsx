import About_Banner from "../About/About_Banner/About_Banner";
import CV from "./CV/CV";
import "./Career.css";
import Job_Opening from "./Job_Opening/Job_Opening";

const Career = () => {
  return (
    <>
      <About_Banner
        subTitle="Help Us Change the Way People Play"
        title="We’re Hiring"
        info="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
      />
      <Job_Opening />
      <CV />
    </>
  );
};

export default Career;
