// -----------------registration page---------------
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginPageImage from "../assets/images/login2.jpg";
import Fade from "react-reveal/Fade";

import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="login" style={{ overflow: "hidden" }}>
      <div id="login-bg-div">
        <img src={LoginPageImage} id="login-bg" alt="" />
      </div>
      <Container fluid>
        <Row>
          <Col md="auto" lg="4" className="login-col register-page">
            <Fade left>
              <div className="login-form-col" style={{ padding: "50px" }}>
                <h3 style={{ textAlign: "center" }}>Register Account</h3>
                <br />

                <Form>
                  <Form.Group controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="username"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridMobile">
                    <Form.Label>Phone No:</Form.Label>
                    <Form.Control
                      type="mobile"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>

                  <hr />
                  <div>
                    <p className="center-text">
                      Already Have An Account?
                      <NavLink
                        to="/login"
                        style={{ textDecoration: "none" }}
                        className="login-link"
                      >
                        {" "}
                        Sign In
                      </NavLink>
                    </p>
                  </div>
                  <br />

                  <div>
                    <Button
                      variant="secondary"
                      size="lg"
                      className=" btn-block form-rounded"
                      type="submit"
                    >
                      Register
                    </Button>
                  </div>
                </Form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Fade>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
