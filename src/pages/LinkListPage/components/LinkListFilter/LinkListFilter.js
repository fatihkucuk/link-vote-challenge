import React from "react";
import Form from "react-bootstrap/Form";
import { setOrder } from "../../store/action-types";
import { useSelector, useDispatch } from "react-redux";
import { SORTING_ORDER } from "../../../../constants";
const LinkListFilter = (props) => {
  const defaultOrder = useSelector((state) => state.listPageReducer.order);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setOrder(e.target.value));
    props.sortSelectionChanged(e.target.value);
  };
  return (
    <div className="link-list-filter">
      <Form.Control
        as="select"
        onChange={handleChange}
        defaultValue={defaultOrder}
      >
        <option value={SORTING_ORDER.DESC}>Most Voted (Z->A)</option>
        <option value={SORTING_ORDER.ASC}>Less Voted (A->Z)</option>
      </Form.Control>
    </div>
  );
};

export default LinkListFilter;
