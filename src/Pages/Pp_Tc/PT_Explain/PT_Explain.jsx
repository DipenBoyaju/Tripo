import { Container } from "react-bootstrap";
import "./PT_Explain.css";
import rules from "../../../assets/rules";

const PT_Explain = ({ catt }) => {
  return (
    <div className="ptExplain">
      <Container>
        <div className="ptexplain-content">
          {rules.map((item) => {
            if (catt === item.catt) {
              return <p key={item.id}>{item.description}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default PT_Explain;
