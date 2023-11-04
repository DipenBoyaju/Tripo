import { Container } from "react-bootstrap";
import "./Review.css";
import { AiFillStar } from "react-icons/ai";
const Review = () => {
  return (
    <div className="reviews">
      <Container>
        <div className="review-title">
          <div className="rating">
            <span>
              <AiFillStar className="ricon" /> <span>4.2 Rating</span>
            </span>
          </div>
          <div className="title">
            <h1>Reviews</h1>
          </div>
        </div>
        <div className="reviewcontent">
          <div className="review-card">
            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <h5>Omar Zaine</h5>
          </div>
          <div className="review-card">
            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <h5>Omar Zaine</h5>
          </div>
          <div className="review-card">
            <p>
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.”
            </p>
            <h5>Omar Zaine</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
