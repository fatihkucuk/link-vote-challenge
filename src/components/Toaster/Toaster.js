import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import "./Toaster.css";
import { TOASTER_TYPE, TOASTER_DELAY } from "../../constants";
const Toaster = (props) => {
  const [show, setShow] = useState(true);
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={props.delay || TOASTER_DELAY}
      autohide
    >
      <Toast.Body
        className={{ error: props.toaster.toasterType === TOASTER_TYPE.ERROR }}
      >
        <h4
          className={`toast-text toast-link-name ${
            props.toaster.toasterType === TOASTER_TYPE.ERROR ? "error" : ""
          }`}
        >
          {props.toaster.linkName}
        </h4>
        <p
          className={`toast-text toast-message ${
            props.toaster.toasterType === TOASTER_TYPE.ERROR ? "error" : ""
          }`}
        >
          {" " + props.toaster.message}
        </p>
      </Toast.Body>
    </Toast>
  );
};

export default Toaster;
