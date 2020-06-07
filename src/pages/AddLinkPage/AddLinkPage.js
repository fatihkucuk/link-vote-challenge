import React from "react";
import AddLinkForm from "./AddLinkForm/AddLinkForm";
import { NavLink } from "react-router-dom";

const AddLinkPage = (props) => {
  return (
    <div className="add-link-page">
      <NavLink to="/home" exact>
        Return to list
      </NavLink>
      <AddLinkForm />
    </div>
  );
};

export default AddLinkPage;
