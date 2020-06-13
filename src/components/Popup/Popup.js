import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Popup.css";

const Popup = ({ show, title, body, footer, onClosePopup, size }) => {
  const closePopup = () => {
    onClosePopup();
  };

  return (
    <Modal show={show} onHide={closePopup} centered size={size}>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{body}</Modal.Body>
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default Popup;
