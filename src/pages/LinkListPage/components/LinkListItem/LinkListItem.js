import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LinkListItem.css";
import Box from "../../../../components/Box/Box";
import ArrowIcon from "../../../../components/Icon/ArrowIcon";
import DeleteIcon from "../../../../components/Icon/DeleteIcon";
import PropTypes from "prop-types";
import { upVoteLink, downVoteLink, getLinks } from "../../store/actions";

const LinkListItem = (props) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const order = useSelector((state) => state.listPageReducer.order);
  const page = useSelector((state) => state.listPageReducer.page);
  const dispatch = useDispatch();

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

  const handleUpVote = () => {
    dispatch(upVoteLink(props.link));
    dispatch(getLinks({ page, order }));
  };

  const handleDownVote = () => {
    dispatch(downVoteLink(props.link));
    dispatch(getLinks({ page, order }));
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
          <a href={props.link.url} className="link-list-group-item-url">
            ({props.link.url})
          </a>
        )}
        {props.showButtons && (
          <div className="link-list-group-item-buttons">
            <div className="up-vote-button" onClick={handleUpVote}>
              <ArrowIcon width="25" height="25" fill="#aaaaaa" rotateDeg="90" />
              <div className="vote-button-text">Up Vote</div>
            </div>
            <div className="down-vote-button" onClick={handleDownVote}>
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
