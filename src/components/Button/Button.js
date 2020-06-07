import React from "react";
import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button className="app-button" onClick={clickHandler}>
      {props.name}
    </button>
  );
};

export default Button;
