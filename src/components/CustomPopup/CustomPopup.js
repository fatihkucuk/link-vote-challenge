import React, { useEffect, useRef } from "react";
import "./CustomPopup.css";

const CustomPopup = (props) => {
  let popupRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, false);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (popupRef.current !== e.target) return;
    props.onClosePopup();
  };

  return (
    <div className="bg-popup" ref={popupRef}>
      <div className="popup-content">
        {props.showCloseIcon && (
          <span
            className="close-icon"
            title="Close"
            onClick={props.onClosePopup}
          >
            +
          </span>
        )}
        <div className="popup-header">{props.header}</div>
        <div className="popup-body">{props.body}</div>
        <div className="popup-footer">{props.footer}</div>
      </div>
    </div>
  );
};

export default CustomPopup;
