import React from "react";
import "./Box.css";
const Box = (props) => {
  return (
    <div className="box">
      <span className="box-text">{props.text}</span>
      <span className="box-subtext">{props.subtext}</span>
    </div>
  );
};

export default Box;
