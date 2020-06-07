import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LinkList.css";
import LinkListItem from "../LinkListItem/LinkListItem";
import LinkListFilter from "../LinkListFilter/LinkListFilter";
import { getLinks, deleteLink } from "../../store/action-types";
import { setToaster } from "../../../../store/action-types";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/Button/Button";
import { withRouter } from "react-router-dom";

export const LinkList = (props) => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedLinkToDelete, setSelectedLinkToDelete] = useState();

  const links = useSelector((state) => state.listPageReducer.links);
  const order = useSelector((state) => state.listPageReducer.order);
  const page = useSelector((state) => state.listPageReducer.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks({ page, order }));
  }, [page.pageNumber]);

  const onDeleteIconClicked = (link) => {
    setSelectedLinkToDelete(link);
    openPopup();
  };

  const handleConfirm = () => {
    dispatch(deleteLink(selectedLinkToDelete.id));
    closePopup();

    setTimeout(() => {
      dispatch(setToaster({ show: false }));
    }, 2000);
  };

  const handleSort = (order) => {
    dispatch(getLinks({ page, order }));
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
        {links.length > 0 && (
          <li className="link-list-group-item">
            <LinkListFilter sortSelectionChanged={handleSort}></LinkListFilter>
          </li>
        )}
        {linkListItems}
      </ul>
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
