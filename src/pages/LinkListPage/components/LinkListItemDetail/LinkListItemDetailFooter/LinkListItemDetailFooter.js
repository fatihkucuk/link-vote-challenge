import React from "react";
import "./LinkListItemDetailFooter.css";

const LinkListItemDetailFooter = (props) => {
  return (
    <div className="link-list-item-detail-footer">
      <button
        className="redirect-button"
        onClick={() => (window.location.href = "https://www.hepsiburada.com/")}
      >
        hepsiburada.com
      </button>
    </div>
  );
};

export default LinkListItemDetailFooter;
