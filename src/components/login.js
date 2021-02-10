// login page ----------
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginPageImage from "../assets/images/login2.jpg";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="login" style={{ overflow: "hidden" }}>
      <div id="login-bg-div">
        <img src={LoginPageImage} id="login-bg" alt="" />
      </div>
      <Container fluid>
        <Row>
          <Col></Col>

          <Col md="auto" lg="4" className="login-col">
            <Fade right>
              <div className="login-form-col" style={{ padding: "50px" }}>
                <h3 style={{ textAlign: "center" }}>Log In To Your Account</h3>

                <br />
                <Form>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      style={{ backgroundColor: "#DCDCDC" }}
                      className="form-rounded"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <br />
                  <br />
                  <div>
                    <NavLink
                      to="/seller-page"
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      <Button
                        variant="secondary"
                        rounded
                        size="lg"
                        className=" btn-block form-rounded"
                        type="submit"
                      >
                        Login
                      </Button>
                    </NavLink>
                  </div>
                </Form>
                <br />
                <div>
                  <p className="center-text">Forgot Password ?</p>
                </div>
                <hr />
                <div>
                  <p className="center-text">
                    Don't Have An Account?{" "}
                    <NavLink
                      to="/register"
                      style={{ textDecoration: "none" }}
                      className="login-link"
                    >
                      Sign Up
                    </NavLink>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
