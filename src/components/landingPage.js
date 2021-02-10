// --- home landing page-----

import React from "react";
import LandingPageImage from "../assets/images/landingPage1.jpg";
import NavBar from "./navBar";
import Slide from "react-reveal/Slide";
import { Redirect } from "react-router-dom";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

export default class LandingPage extends React.Component {
  state = {
    redirect: false,
    div: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 6000);
    this.div = setTimeout(() => this.setState({ div: true }), 500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
    clearTimeout(this.div);
  }
  render() {
    return this.state.redirect ? (
      <Redirect to="/main-page" />
    ) : (
      <div>
        <NavBar />
        <Slide top>
          <div id="landing-bg-div">
            <img src={LandingPageImage} id="landing-bg" alt="" />
          </div>
        </Slide>

        {this.state.div ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              lineHeight: "3em",
              marginTop: "-110px",
            }}
            className="landingText"
          >
            <Slide left>
              <p style={{ fontSize: "60px", fontWeight: "bold" }}>Welcome </p>
              <p style={{ fontSize: "60px", fontWeight: "bold" }}>To</p>
            </Slide>
            <Slide right cascade>
              <p style={{ fontSize: "100px", fontFamily: "'PT Serif', serif" }}>
                Motorry
              </p>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="sweet-loading">
                <ScaleLoader
                  css={override}
                  size={50}
                  color={"white"}
                  loading={this.state.loading}
                />
              </div>
            </Slide>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
