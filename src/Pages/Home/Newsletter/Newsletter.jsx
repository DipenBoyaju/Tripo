import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter" id="contact">
      <div className="newsletter-overlay"></div>
      <Container>
        <div className="n-content">
          <div className="left-content">
            <div className="getintouch">
              <Form>
                <h5>Get in Touch</h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                </p>
                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>FirstName*</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Col>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Leave us a message...</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button>Submit</Button>
              </Form>
            </div>
          </div>
          <div className="right-content">
            <div className="news-content">
              <h5>Subscribe to Our Newsletter</h5>
              <Row className="rnews">
                <Col md={9} sm={12}>
                  <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
                <Col md={3} sm={12}>
                  <Button>Join</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
