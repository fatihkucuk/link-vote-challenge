import React from "react";
import "./LinkListItemDetailHeader.css";

const LinkListItemDetailHeader = (props) => {
  return (
    <div className="link-list-item-detail-header">
      <div className="circle-container">
        <svg viewBox="0 0 100 100" className="circle-svg">
          <circle cx="50" cy="50" r="45" className="hb-circle-color-orange" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-orange-dark"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-blue-light"
          />
          <circle cx="50" cy="50" r="45" className="hb-circle-color-purple" />
          <circle cx="50" cy="50" r="45" className="hb-circle-color-blue" />
          <circle
            cx="50"
            cy="50"
            r="45"
            className="hb-circle-color-purple second"
          />
        </svg>
        <span className="link-info link-points">{props.linkPoints} POINTS</span>
      </div>
      <a id="url" href={props.linkUrl} className="link-info link-name">
        {props.linkName}
      </a>
    </div>
  );
};

export default LinkListItemDetailHeader;
