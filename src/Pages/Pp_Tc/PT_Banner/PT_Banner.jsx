import { Container } from "react-bootstrap";
import "./PT_Banner.css";
import rules from "../../../assets/rules";

const PT_Banner = ({ catt }) => {
  return (
    <div className="pp_tc">
      <Container>
        {rules.map((item) => {
          if (catt === item.catt) {
            return <h1 key={item.id}>{item.title}</h1>;
          }
        })}
      </Container>
    </div>
  );
};

export default PT_Banner;
