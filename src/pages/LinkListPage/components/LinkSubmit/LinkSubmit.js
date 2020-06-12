import React from "react";
import Box from "../../../../components/Box/Box";
import "./LinkSubmit.css";

const LinkSubmit = (props) => {
  return (
    <div className="add-link-button-container">
      <Box text="+" />
      <div className="add-link-button-text">Submit a link</div>
    </div>
  );
};

export default LinkSubmit;
