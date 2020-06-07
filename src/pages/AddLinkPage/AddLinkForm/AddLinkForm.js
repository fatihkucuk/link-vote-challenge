import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddLinkForm.css";
import Form from "react-bootstrap/Form";
import Button from "../../../components/Button/Button";
import { addLink } from "../store/action-types";

const AddLinkForm = (props) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const handleLinkNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleAddLink = () => {
    const newLink = {
      name: name,
      url: url,
    };
    dispatch(addLink(newLink));
  };

  return (
    <div className="add-link-form">
      <h2 className="add-link-form-header">Add New Link</h2>
      <Form>
        <Form.Group>
          <Form.Label>Link Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Alphabet"
            onChange={handleLinkNameChange}
            size="lg"
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
            size="lg"
          />
        </Form.Group>
        <Form.Group>
          <Button name="ADD" onClick={handleAddLink} disabled={!name || !url} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddLinkForm;
