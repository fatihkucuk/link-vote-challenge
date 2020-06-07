import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LinkList.css";
import LinkListItem from "../LinkListItem/LinkListItem";
import LinkListFilter from "../LinkListFilter/LinkListFilter";
import { getLinks, deleteLink, sortLinks } from "../../store/action-types";
import Popup from "../../../../components/Popup/Popup";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/Button/Button";
import { withRouter } from "react-router-dom";

export const LinkList = (props) => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedLinkToDelete, setSelectedLinkToDelete] = useState();

  const dispatch = useDispatch();
  const links = useSelector((state) => state.listPageReducer.links);

  useEffect(() => {
    dispatch(getLinks());
  }, []);

  const onDeleteIconClicked = (link) => {
    setSelectedLinkToDelete(link);
    openPopup();
  };

  const handleConfirm = () => {
    dispatch(deleteLink(selectedLinkToDelete.id));
    closePopup();
  };

  const handleSort = (sortOption) => {
    console.log(sortOption);
    dispatch(sortLinks(sortOption));
  };

  const openPopup = () => {
    setShowConfirmPopup(true);
  };

  const closePopup = () => {
    setShowConfirmPopup(false);
  };

  const navigateToAddLink = () => {
    props.history.push("./add-link");
  };

  const linkListItems =
    links &&
    links.map((link) => {
      return (
        <LinkListItem
          key={link.id}
          link={link}
          boxText={link.points}
          onDeleteIconClicked={onDeleteIconClicked.bind(null, link)}
        />
      );
    });

  return (
    <React.Fragment>
      <ul className="link-list-group">
        <LinkListItem
          name="SUBMIT A LINK"
          url=""
          boxText="+"
          boxSubtext=""
          showHeader={true}
          showUrl={false}
          showButtons={false}
          showDeleteIcon={false}
          canSubmit={true}
          cursor="pointer"
          onSubmitButtonClicked={navigateToAddLink}
        />
        <li className="link-list-group-item">
          <LinkListFilter sortSelectionChanged={handleSort}></LinkListFilter>
        </li>
        {linkListItems}
      </ul>
      {/* <Popup
        show={showConfirmPopup}
        cancel={cancelButtonClicked}
        confirm={confirmButtonClicked}
      /> */}
      <Modal show={showConfirmPopup} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="popup-text question">Do you want to remove:</p>
          <h4 className="popup-text link-name">
            {selectedLinkToDelete && selectedLinkToDelete.name}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button name="OK" onClick={handleConfirm}></Button>
          <Button name="Cancel" onClick={closePopup}></Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(LinkList);
