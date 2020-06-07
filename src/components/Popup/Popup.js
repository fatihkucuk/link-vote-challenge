import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Popup.css";
import Button from "react-bootstrap/Button";
const Popup = (props) => {
  console.log(props);
  const handleOk = () => {
    console.log("ok button clicked");
    props.confirm();
  };

  const handleDelete = () => {
    props.cancel();
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer {...props}>
        <Button onClick={props.confirm}>OK</Button>
        <Button onClick={props.cancel} name={"Cancel"} />
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
