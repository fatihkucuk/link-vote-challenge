import React from "react";
import AddLinkForm from "./AddLinkForm/AddLinkForm";
import { NavLink } from "react-router-dom";
import ArrowIcon from "../../components/Icon/ArrowIcon";
import "./AddLinkPage.css";
import { useSelector } from "react-redux";
import Toaster from "../../components/Toaster/Toaster";

const AddLinkPage = (props) => {
  const toaster = useSelector((state) => state.rootReducer.toaster);

  return (
    <div className="add-link-page-container">
      {toaster.show && <Toaster toaster={toaster} />}
      <div className="add-link-page-navigator-container">
        <NavLink to="/home" exact>
          <ArrowIcon width="20" height="20" fill="#000" rotateDeg="0" />
          Return to list
        </NavLink>
      </div>

      <AddLinkForm />
    </div>
  );
};

export default AddLinkPage;
