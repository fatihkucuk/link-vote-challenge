import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { SORTING_ORDER } from "../../../../constants";
import { store } from "../../../../store/reducers";

const LinkListFilter = (props) => {
  const context = useContext(store);
  const {
    state: { order },
  } = context;

  const handleChange = (e) => {
    props.sortSelectionChanged(e.target.value);
  };

  return (
    <div className="link-list-filter">
      <Form.Control as="select" onChange={handleChange} defaultValue={order}>
        <option value={SORTING_ORDER.DESC}>Most Voted</option>
        <option value={SORTING_ORDER.ASC}>Less Voted</option>
      </Form.Control>
    </div>
  );
};

export default LinkListFilter;
