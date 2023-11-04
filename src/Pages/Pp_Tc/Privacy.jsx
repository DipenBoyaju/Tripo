import { Container } from "react-bootstrap";
import PT_Banner from "./PT_Banner/PT_Banner";
import PT_Explain from "./PT_Explain/PT_Explain";
import "./PT.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <PT_Banner catt="privacy" />
      <Container>
        <div className="pt-container">
          <span>
            A privacy policy is a statement that discloses some or all of the
            ways a website collects, uses, discloses, and manages the data of
            its visitors and customers. It fulfills a legal requirement to
            protect a visitor or client's privacy. Countries have their own laws
            with different requirements per jurisdiction regarding the use of
            privacy policies. Make sure you are following the legislation
            relevant to your activities and location.{" "}
          </span>
          <br />
          <br />
          <span>In general, what should you cover in your Privacy Policy?</span>
          <ol type="1">
            <li>What type of information do you collect?</li>
            <li>How do you collect information?</li>
            <li>Why do you collect such personal information?</li>
            <li>
              How do you store, use, share and disclose your site visitors'
              personal information?
            </li>
            <li>How (and if) do you communicate with your site visitors?</li>
            <li>
              Is your service targeting and collecting information from Minors?
            </li>
            <li>Privacy policy updates</li>
            <li>Contact Information</li>
          </ol>
          <span>
            You can check out this support article to receive more information
            about how to create a privacy policy
          </span>
        </div>
      </Container>
      <PT_Explain catt="privacy" />
    </div>
  );
};

export default Privacy;
