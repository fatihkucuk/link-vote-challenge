import React from "react";
import Form from "react-bootstrap/Form";
const LinkListFilter = (props) => {
  const handleChange = (e) => {
    props.sortSelectionChanged(e.target.value);
  };
  return (
    <div className="link-list-filter">
      <Form.Control as="select" onChange={handleChange}>
        <option hidden>Order By</option>
        <option value={"desc"}>Most Voted (Z->A)</option>
        <option value={"asc"}>Less Voted (A->Z)</option>
      </Form.Control>
    </div>
  );
};

export default LinkListFilter;
