import React, { useEffect, useState, useContext } from "react";
import LinkListItem from "../LinkListItem/LinkListItem";
import LinkListFilter from "../LinkListFilter/LinkListFilter";
import Modal from "react-bootstrap/Modal";
import Button from "../../../../components/Button/Button";
import { withRouter } from "react-router-dom";
import { store } from "../../../../store/reducers";
import {
  upVoteLinkSuccess,
  downVoteLinkSuccess,
  getLinksSuccess,
  deleteLinkSuccess,
  setOrder,
  setToaster,
} from "../../../../store/actions";
import {
  getLinks,
  upVoteLink,
  downVoteLink,
  deleteLink,
} from "../../../../helpers/localStorageHelper";
import { sortLinks, paginateLinks } from "../../../../helpers/linkHelper";
import "./LinkList.css";
import { TOASTER_DELAY } from "../../../../constants";

export const LinkList = (props) => {
  const context = useContext(store);
  const {
    dispatch,
    state: { links, order, page, linkToUpdate },
  } = context;

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedLinkToDelete, setSelectedLinkToDelete] = useState();

  useEffect(() => {
    const links = getLinks();
    const sortedLinks = sortLinks(links, order);
    const paginatedLinks = paginateLinks(
      sortedLinks,
      page.pageNumber,
      page.pageCount
    );
    dispatch(
      getLinksSuccess({ links: paginatedLinks, totalItemCount: links.length })
    );
  }, [links.length, page.pageNumber, order, linkToUpdate]);

  const onDeleteIconClicked = (link) => {
    setSelectedLinkToDelete(link);
    openPopup();
  };

  const onUpVoteClicked = (link) => {
    const upVotedLink = upVoteLink(link);
    dispatch(upVoteLinkSuccess(upVotedLink));
  };

  const onDownVoteClicked = (link) => {
    const downVotedLink = downVoteLink(link);
    dispatch(downVoteLinkSuccess(downVotedLink));
  };

  const handleConfirm = () => {
    const deletedLink = deleteLink(selectedLinkToDelete.id);
    dispatch(deleteLinkSuccess({ link: deletedLink }));
    setTimeout(() => {
      dispatch(
        setToaster({
          show: false,
        })
      );
    }, TOASTER_DELAY);
    closePopup();
  };

  const handleSort = (order) => {
    dispatch(setOrder(order));
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
          onUpVoteClicked={onUpVoteClicked.bind(null, link)}
          onDownVoteClicked={onDownVoteClicked.bind(null, link)}
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
