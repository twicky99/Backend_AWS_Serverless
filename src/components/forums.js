// forum page-------
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import facebook from "../assets/logo/facebook.png";
import twitter from "../assets/logo/twitter.png";
import instagram from "../assets/logo/instagram.png";
import Header from "./header/header";

export default function Forums() {
  return (
    <div className="forum-bg">
      <Header />
      <Container fluid className="wrapper forum-form-container">
        <div className="forum-form">
          <h4 className="forum-header">Forum</h4>
          <Form>
            <Row>
              <Col md="6">
                <Form.Group className="form-margin">
                  <Form.Label htmlFor="fname">
                    FIRST NAME:
                    <span className="forum-required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-input"
                    id="fname"
                    required
                  />
                </Form.Group>
                <Form.Group className="form-margin">
                  <Form.Label htmlFor="lname">
                    LAST NAME:
                    <span className="forum-required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-input"
                    id="lname"
                    required
                  />
                </Form.Group>
                <Form.Group className="form-margin">
                  <Form.Label htmlFor="email">
                    EMAIL:
                    <span className="forum-required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-rounded forum-input"
                    id="email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="form-margin">
                  <Form.Label htmlFor="comment">COMMENTS:</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-textarea"
                    id="email"
                    as="textarea"
                    required
                  />
                </Form.Group>
                <h5>
                  RATE US
                  <span className="forum-required-field">*</span>
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  color="white"
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                />
              </Col>
            </Row>

            <Row className="forum-submit-container">
              <Col md="4" />
              <Col md="4">
                <Button
                  variant="secondary"
                  rounded
                  size="lg"
                  className=" btn-block btn-outline form-rounded"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
              <Col md="4" />
            </Row>
          </Form>
        </div>
        <div className="social-nav">
          <a href="https://facebook.com/motorry">
            <img src={facebook} className="nav-item" alt="facebook-icon" />
          </a>
          <a href="https://instagram.com/motorry">
            <img src={instagram} className="nav-item" alt="instagram-icon" />
          </a>
          <a href="https://twitter.com/motorry">
            <img src={twitter} className="nav-item" alt="twitter-icon" />
          </a>
        </div>
      </Container>
    </div>
  );
}
