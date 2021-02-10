// seller page
import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { carSellerType, carSellerMake } from "../for_popup/selectData";

import SellerPageImage from "../assets/images/sellerPageImg.jpg";
import { NavLink } from "react-router-dom";
import Header from "./header/header";
import SelectCar from "./selectCar";

export default function Sell() {
  const [visibleMake, setVisibleMake] = useState(false);
  const [visibleType, setVisibleType] = useState(false);
  const [make, setMake] = useState(null);
  const [type, setType] = useState(null);

  // function to handle open and close popup
  const handleOpenSelectMake = () => {
    setVisibleMake(true);
  };

  const handleOpenSelectType = () => {
    setVisibleType(true);
  };

  const handleCloseSelectMake = () => {
    setVisibleMake(false);
  };

  const handleCloseSelectType = () => {
    setVisibleType(false);
  };
  // function to handle selection in popup

  const handleSelectMake = (m) => {
    setMake(m);
    setVisibleMake(false);
  };

  const handleSelectType = (m) => {
    setType(m);
    setVisibleType(false);
  };

  const SelectMakeButton = () => {
    return (
      <Button
        variant="info"
        className="selling-vehicle-button btn btn-light"
        onClick={handleOpenSelectMake}
      >
        {make ? make : "Select Make"}
      </Button>
    );
  };

  const SelectTypeButton = () => {
    return (
      <Button
        variant="info"
        className="selling-vehicle-button btn btn-light"
        onClick={handleOpenSelectType}
      >
        {type ? type : "Select Type"}
      </Button>
    );
  };

  const getYear = () => {
    let start = 2000;
    let end = new Date().getFullYear();
    let options = [];
    for (let year = start; year <= end; year++) {
      options.push(year);
    }
    return options;
  };

  return (
    <div className="register">
      <Header />

      <div id="main-page-img-div">
        <img src={SellerPageImage} id="main-page-img" alt="" />
      </div>

      <Form id="formController">
        <Form.Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridMake">
              <SelectTypeButton />
            </Form.Group>
          </Col>

          <Col md={6} xs={12}>
            <Form.Group controlId="formGridModel">
              <SelectMakeButton />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridTransmission">
              <Form.Label>
                Model<label id="star">*</label>
              </Form.Label>
              <Form.Control type="name" />
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridCondition">
              <Form.Label>
                Year of Manufacture<label id="star">*</label>
              </Form.Label>
              <Form.Control as="select" custom>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridEngineCapacity">
              <Form.Label>
                Mileage(km)<label id="star">*</label>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridYear">
              <Form.Label>
                Engine Capacity(cc)<label id="star">*</label>
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridMilage">
              <Form.Label>
                Transmission<label id="star">*</label>
              </Form.Label>
              <fieldset id="radioBtns">
                <div key={`custom-inline-radio`} className="mb-4">
                  <Form.Group as={Row}>
                    <Form.Check
                      custom
                      inline
                      type="radio"
                      label="Automatic"
                      name="transmission"
                      id="automatic"
                    />
                    <Form.Check
                      custom
                      inline
                      type="radio"
                      label="Manual"
                      name="transmission"
                      id="manual"
                    />
                    <Form.Check
                      custom
                      inline
                      type="radio"
                      label="Triptonic"
                      name="transmission"
                      id="triptonic"
                    />
                  </Form.Group>
                </div>
              </fieldset>
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group controlId="formGridFuelType">
              <label>
                Fuel Type<label id="star">*</label>
              </label>
              <fieldset id="radioBtns">
                {["radio"].map((type) => (
                  <div key={`custom-inline-${type}`} className="mb-4">
                    <Form.Group as={Row}>
                      <Form.Check
                        custom
                        inline
                        type="radio"
                        label="Petrol"
                        name="formHorizontalRadios"
                        id={`custom-inline-${type}-1`}
                      />
                      <Form.Check
                        custom
                        inline
                        type="radio"
                        label="Diesel"
                        name="formHorizontalRadios"
                        id={`custom-inline-${type}-2`}
                      />
                      <Form.Check
                        custom
                        inline
                        type="radio"
                        label="Hybrid"
                        name="formHorizontalRadios"
                        id={`custom-inline-${type}-3`}
                      />
                      <Form.Check
                        custom
                        inline
                        type="radio"
                        label="Electric"
                        name="formHorizontalRadios"
                        id={`custom-inline-${type}-4`}
                      />
                    </Form.Group>
                  </div>
                ))}
              </fieldset>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
      <NavLink
        to="/main-page"
        style={{ textDecoration: "none" }}
        className="link"
      >
        <div id="predictionButton">
          <Button className="predict-price" variant="success">
            Predict the price
          </Button>{" "}
        </div>
      </NavLink>
      {/* popup components for Type, Make */}

      {visibleMake && (
        <SelectCar
          visible={visibleMake}
          close={handleCloseSelectMake}
          make={handleSelectMake}
          data={carSellerMake}
          title="Choose Make"
        />
      )}

      {visibleType && (
        <SelectCar
          visible={visibleType}
          close={handleCloseSelectType}
          make={handleSelectType}
          data={carSellerType}
          title="Choose Type"
        />
      )}
    </div>
  );
}

