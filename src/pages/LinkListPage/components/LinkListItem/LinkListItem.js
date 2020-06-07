import React, { useState } from "react";
import "./LinkListItem.css";
import Box from "../../../../components/Box/Box";
import ArrowIcon from "../../../../components/Icon/ArrowIcon";
import DeleteIcon from "../../../../components/Icon/DeleteIcon";
import PropTypes from "prop-types";

const LinkListItem = (props) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const headerStyle = {
    lineHeight: !props.showUrl && !props.showButtons && "100px",
  };

  const deleteIconClicked = () => {
    props.onDeleteIconClicked(props.link.id);
  };

  const handleMouseEnter = () => {
    setShowDeleteIcon(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteIcon(false);
  };

  const handleSubmit = () => {
    if (props.canSubmit) props.onSubmitButtonClicked();
  };

  return (
    <li
      className="link-list-group-item"
      style={{ cursor: props.cursor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleSubmit}
    >
      <div className="link-list-group-item-left">
        <Box text={props.boxText} subtext={props.boxSubtext} />
      </div>
      <div className="link-list-group-item-right">
        {props.showHeader && (
          <h4 className="link-list-group-item-header" style={headerStyle}>
            {props.link.name || props.name}
          </h4>
        )}
        {props.showUrl && (
          <p className="link-list-group-item-url">({props.link.url})</p>
        )}
        {props.showButtons && (
          <div className="link-list-group-item-buttons">
            <div className="up-vote-button">
              <ArrowIcon width="25" height="25" fill="#aaaaaa" rotateDeg="90" />
              <div className="vote-button-text">Up Vote</div>
            </div>
            <div className="down-vote-button">
              <ArrowIcon
                width="25"
                height="25"
                fill="#aaaaaa"
                rotateDeg="-90"
              />
              <div className="vote-button-text">Down Vote</div>
            </div>
          </div>
        )}
      </div>
      {props.showDeleteIcon && showDeleteIcon && (
        <div
          className="link-list-group-item-delete-icon"
          onClick={deleteIconClicked}
        >
          <DeleteIcon />
        </div>
      )}
    </li>
  );
};

LinkListItem.propTypes = {
  link: PropTypes.object,
  name: PropTypes.string,
  url: PropTypes.string,
  boxSubtext: PropTypes.string,
  showHeader: PropTypes.bool,
  showUrl: PropTypes.bool,
  showButtons: PropTypes.bool,
  showDeleteIcon: PropTypes.bool,
  canSubmit: PropTypes.bool,
  cursor: PropTypes.string,
};

LinkListItem.defaultProps = {
  link: {},
  name: "",
  url: "",
  points: "+",
  boxSubtext: "Points",
  showHeader: true,
  showUrl: true,
  showButtons: true,
  showDeleteIcon: true,
  canSubmit: false,
  cursor: "",
};

export default LinkListItem;
