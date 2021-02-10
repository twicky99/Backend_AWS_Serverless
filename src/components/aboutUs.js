// -----------------about us--------//
import about from "../assets/images/about.jpg";
import Header from "./header/header";
import first from "../assets/members/first.jpg";
import { Col, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div id="about">
        <img src={about} id="seller-bg" alt="" />
      </div>

      <div className="main-container">
        {/* image gallery for about us */}
        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>

        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>

        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>
        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>
        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>
        <div className="main-item">
          <img src={first} class="about-us-test-img" alt="Responsive" />
          <div className="overlay">
            <div class="text" align="center">
              Car 1<br />
              Bugatti Veyron
              <br />
              Model : 2019351
              <br />
              CC : 1500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
