import { Container } from "react-bootstrap";
import PT_Banner from "./PT_Banner/PT_Banner";
import PT_Explain from "./PT_Explain/PT_Explain";
import "./PT.css";

const Terms = () => {
  return (
    <div className="terms">
      <PT_Banner catt="terms" />
      <Container>
        <div className="pt-container">
          <span>
            Terms and conditions (“Terms”) are a set of legal terms defined by
            the owner of a website. They set forth the terms and conditions
            governing the activities of the website visitors on the said website
            and the relationship between the site visitors and the website
            owner.
            <br />
            Terms must be defined according to the specific needs and nature of
            each website. For example, a website offering products to customers
            in e-commerce transactions requires Terms that are different from
            the Terms of a website only providing information.
            <br />
            Terms provide the website owner the ability to protect themselves
            from potential legal exposure.
          </span>
          <span>
            In general, what should you cover in your Terms & Conditions?
          </span>
          <ol type="1">
            <li>
              Who can use your website; what are the requirements to create an
              account (if relevant)
            </li>
            <li>Key commercial Terms offered to customers</li>
            <li>Retention of right to change offering</li>
            <li>Warranties & responsibility for services and products</li>
            <li>Ownership of intellectual property, copyrights and logos</li>
            <li>Right to suspend or cancel member account</li>
            <li>Indemnification</li>
            <li>Limitation of liability</li>
            <li>Right to change and modify Terms</li>
            <li>Preference of law and dispute resolution</li>
            <li>Contact info</li>
          </ol>
          <span>
            You can check out this support article to receive more information
            about how to create a privacy policy
          </span>
        </div>
      </Container>
      <PT_Explain catt="terms" />
    </div>
  );
};

export default Terms;
