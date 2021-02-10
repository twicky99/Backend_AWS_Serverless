// ----------------pop-up component-------------
import React from "react";
import { Modal } from "react-bootstrap";

import leftArrow from "../assets/logo/left-arrow.svg";

const SelectCar = ({ visible, close, make, data, title }) => {
  const handleChoose = (data) => {
    make(data);
  };

  return (
    <Modal
      show={visible}
      centered
      backdrop="static"
      style={{ paddingBottom: "30px" }}
      onHide={close}
    >
      <div className="container-select">
        <div className="select-header">
          <img
            src={leftArrow}
            className="left-arrow"
            onClick={close}
            alt="left-arrow"
          />
          <h5 className="select-car-header">{title}</h5>
          <br />
        </div>
        <div className="select-list">
          {data.map((item, key) => (
            <div
              key={key}
              className="select-list-item"
              role="button"
              onClick={() => handleChoose(item.name.toLowerCase())}
            >
              {item.img ? (
                <img src={item.img} alt={item.name.toLowerCase()} />
              ) : (
                <div className="select-icon" />
              )}
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SelectCar;
