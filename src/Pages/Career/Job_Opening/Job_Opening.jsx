import { Container } from "react-bootstrap";
import "./Job_Opening.css";
import jobs from "../../../assets/jobs";

const Job_Opening = () => {
  return (
    <div className="job-opening">
      <Container>
        <div className="job-content">
          <h1>Job Openings</h1>
          <div className="job-list">
            {jobs.map((item) => {
              return (
                <div className="job-card" key={item.id}>
                  <div className="job-image">
                    <img src={item.image} alt="" />
                  </div>
                  <h5>{item.post}</h5>
                  <h6>{item.location}</h6>
                  <p>{item.description}</p>
                  <button>Apply</button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Job_Opening;
