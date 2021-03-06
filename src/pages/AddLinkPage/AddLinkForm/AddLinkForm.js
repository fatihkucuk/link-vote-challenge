import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../../components/Button/Button";
import { addLinkSuccess, setToaster } from "../../../store/actions";
import { TOASTER_DELAY } from "../../../constants";
import { store } from "../../../store/reducers";
import { addLink } from "../../../helpers/localStorageHelper";
import "./AddLinkForm.css";

const AddLinkForm = (props) => {
  const context = useContext(store);
  const { dispatch } = context;

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

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
    const addedLink = addLink(newLink);
    dispatch(addLinkSuccess(addedLink));
    clearFormData();
    setTimeout(() => {
      dispatch(
        setToaster({
          show: false,
        })
      );
    }, TOASTER_DELAY);
  };

  const clearFormData = () => {
    setName("");
    setUrl("");
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
            value={name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Link URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. http://abc.xyz"
            onChange={handleLinkUrlChange}
            size="lg"
            value={url}
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
