
// ---buyer page ---/
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import SellerPageImage from "../assets/images/sellerPageImg.jpg";
import SelectCar from "./selectCar";
import { carType, carMake, carCondition } from "../for_popup/selectData";
import Header from "./header/header";

export default function MainPage() {
  const [visibleMake, setVisibleMake] = useState(false);
  const [visibleType, setVisibleType] = useState(false);
  const [visibleCondition, setVisibleCondition] = useState(false);
  const [make, setMake] = useState(null);
  const [type, setType] = useState(null);
  const [condition, setCondition] = useState(null);

  // function to handle popup (opening and closing)
  const handleOpenSelectMake = () => {
    setVisibleMake(true);
  };

  const handleCloseSelectMake = () => {
    setVisibleMake(false);
  };

  const handleOpenSelectType = () => {
    setVisibleType(true);
  };

  const handleCloseSelectType = () => {
    setVisibleType(false);
  };

  // function to handle selection in popup
  const handleOpenSelectCondition = () => {
    setVisibleCondition(true);
  };

  const handleCloseSelectCondition = () => {
    setVisibleCondition(false);
  };

  const handleSelectMake = (m) => {
    setMake(m);
    setVisibleMake(false);
  };

  const handleSelectType = (m) => {
    setType(m);
    setVisibleType(false);
  };

  const handleSelectCondition = (m) => {
    setCondition(m);
    setVisibleCondition(false);
  };

  // dynamic SelectButton for the popups
  const SelectMakeButton = () => {
    return (
      <Button
        variant="info"
        className="main-page-make-button btn btn-light"
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
        className="main-page-type-button btn btn-light"
        onClick={handleOpenSelectType}
      >
        {type ? type : "Select Type"}
      </Button>
    );
  };

  const SelectConditionButton = () => {
    return (
      <button
        type="button"
        className="main-page-type-button btn btn-light"
        onClick={handleOpenSelectCondition}
        style={{ width: "100%" }}
      >
        {condition ? condition : "Select Condition"}
      </button>
    );
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <Header />
      <div id="main-page-img-div">
        <img src={SellerPageImage} id="main-page-img" alt="seller car" />{" "}
      </div>

     
      <div id="buyer-form">
        <Container>
          <Card style={{ backgroundColor: "	#d3d3d3" }}>
            
            <Card.Body>
              <Container>
                <Form>
                  <Row xs={12} md={12} className="buyer-btn">
                    <Col xs={12} md={4} className="buyer-select-container">
                      <SelectTypeButton />
                      <SelectMakeButton />
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      className="buyer-select-container-mobile"
                    >
                      <Form.Group controlId="button">
                        <SelectTypeButton />
                      </Form.Group>
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      className="buyer-select-container-mobile"
                    >
                      <Form.Group controlId="button">
                        <SelectMakeButton />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group controlId="model">
                        <Form.Control type="Text" placeholder="Enter Model" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group controlId="location">
                        <Form.Control type="Text" placeholder="Location" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={12} md={12} className="buyer-btn">
                    <Col md={4} xs={12}>
                      <Form.Group controlId="button">
                        <SelectConditionButton />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group controlId="min-price">
                        <Form.Control
                          type="number"
                          placeholder="Enter Min Price"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4} xs={12}>
                      <Form.Group controlId="max-price">
                        <Form.Control
                          type="number"
                          placeholder="Enter Max Price"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row xs={12} md={12} className="buyer-btn">
                    <Col md={6} xs={12}>
                      <Form.Group controlId="key-word-search">
                        <Form.Control
                          type="text"
                          placeholder="Keyword Search"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} xs={12}>
                      <Button variant="secondary">Search</Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </div>
      
{/* popup components for Type, Make and Condition */}
      {visibleMake && (
        <SelectCar
          visible={visibleMake}
          close={handleCloseSelectMake}
          make={handleSelectMake}
          data={carMake}
          title="Choose Make"
        />
      )}

      {visibleType && (
        <SelectCar
          visible={visibleType}
          close={handleCloseSelectType}
          make={handleSelectType}
          data={carType}
          title="Choose Type"
        />
      )}

      {visibleCondition && (
        <SelectCar
          visible={visibleCondition}
          close={handleCloseSelectCondition}
          make={handleSelectCondition}
          data={carCondition}
          title="Choose Condition"
        />
      )}
    </div>
  );
}
