import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AddLinkForm.css";
import Form from "react-bootstrap/Form";
import Button from "../../../components/Button/Button";
import { addLink } from "../store/action-types";

const AddLinkForm = (props) => {
  const dispatch = useDispatch();
  const link = useSelector((state) => state.addLinkPageReducer.link);

  const handleLinkNameChange = (e) => {
    link.name = e.target.value;
  };

  const handleLinkUrlChange = (e) => {
    link.url = e.target.value;
  };

  const handleAddLink = () => {
    dispatch(addLink(link));
  };

  return (
    <div className="add-link-form">
      <Form>
        <Form.Group>
          <Form.Label>Link Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Alphabet"
            onChange={handleLinkNameChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group>
          <Form.Label>Link URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. http://abc.xyz"
            onChange={handleLinkUrlChange}
          />
        </Form.Group>

        <Button name="ADD" onClick={handleAddLink} />
      </Form>
    </div>
  );
};

export default AddLinkForm;
