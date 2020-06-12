import React, { useContext } from "react";
import AddLinkForm from "./AddLinkForm/AddLinkForm";
import ArrowIcon from "../../components/Icon/ArrowIcon";
import Toaster from "../../components/Toaster/Toaster";
import { store } from "../../store/reducers";
import { NavLink } from "react-router-dom";
import "./AddLinkPage.css";

const AddLinkPage = (props) => {
  const context = useContext(store);
  const {
    state: { toaster },
  } = context;

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
