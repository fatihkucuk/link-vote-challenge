import React from "react";
import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <button
      className={`app-button ${props.disabled ? "disable" : ""}`}
      onClick={clickHandler}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
