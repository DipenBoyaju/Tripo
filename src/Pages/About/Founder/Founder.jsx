import { Container } from "react-bootstrap";
import "./Founder.css";
import founder from "../../../assets/founder";

const Founder = () => {
  return (
    <div className="founder">
      <Container>
        <div className="founder-content">
          <h1>Meet the Founders</h1>
          <div className="founder-list">
            {founder.map((item) => {
              return (
                <div className="founder-card" key={item.id}>
                  <div className="founder-img">
                    <div className="founder-card-overlay"></div>
                    <img src={item.image} alt="" />
                  </div>
                  <h6>{item.name}</h6>
                  <p>{item.post}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Founder;
