import React, { useEffect, useState, useContext } from "react";
import LinkListItem from "../LinkListItem/LinkListItem";
import LinkListFilter from "../LinkListFilter/LinkListFilter";
import Button from "../../../../components/Button/Button";
import Popup from "../../../../components/Popup/Popup";
import CustomPopup from "../../../../components/CustomPopup/CustomPopup";
import LinkListItemDetail from "../LinkListItemDetail/LinkListItemDetail";
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
import LinkListItemDetailHeader from "../LinkListItemDetail/LinkListItemDetailHeader.js/LinkListItemDetailHeader";
import LinkListItemDetailFooter from "../LinkListItemDetail/LinkListItemDetailFooter/LinkListItemDetailFooter";

export const LinkList = (props) => {
  const context = useContext(store);
  const {
    dispatch,
    state: { links, order, page, linkToUpdate },
  } = context;

  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [selectedLinkToDelete, setSelectedLinkToDelete] = useState();
  const [selectedLinkToShowDetail, setSelectedLinkToShowDetail] = useState();

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
    openConfirmPopup();
  };

  const onUpVoteClicked = (link) => {
    const upVotedLink = upVoteLink(link);
    dispatch(upVoteLinkSuccess(upVotedLink));
  };

  const onDownVoteClicked = (link) => {
    const downVotedLink = downVoteLink(link);
    dispatch(downVoteLinkSuccess(downVotedLink));
  };

  const onShowDetailClicked = (link) => {
    setSelectedLinkToShowDetail(link);
    openDetailPopup();
  };

  const handleConfirm = () => {
    const deletedLink = deleteLink(selectedLinkToDelete.id);
    dispatch(deleteLinkSuccess({ link: deletedLink }));
    closeConfirmPopup();
    setTimeout(() => {
      dispatch(
        setToaster({
          show: false,
        })
      );
    }, TOASTER_DELAY);
  };

  const handleSort = (order) => {
    dispatch(setOrder(order));
  };

  const openConfirmPopup = () => {
    setShowConfirmPopup(true);
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false);
  };

  const openDetailPopup = () => {
    setShowDetailPopup(true);
  };

  const closeDetailPopup = () => {
    setShowDetailPopup(false);
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
          onShowDetailClicked={onShowDetailClicked.bind(null, link)}
        />
      );
    });

  const ConfirmDialogBody = (
    <React.Fragment>
      <p className="popup-text question">Do you want to remove:</p>
      <h4 className="popup-text link-name">
        {selectedLinkToDelete && selectedLinkToDelete.name}
      </h4>
    </React.Fragment>
  );

  const ConfirmDialogFooter = (
    <React.Fragment>
      <Button name="OK" onClick={handleConfirm}></Button>
      <Button name="Cancel" onClick={closeConfirmPopup}></Button>
    </React.Fragment>
  );

  const LinkDetailHeader = (
    <React.Fragment>
      {selectedLinkToShowDetail && (
        <LinkListItemDetailHeader
          linkName={selectedLinkToShowDetail.name}
          linkUrl={selectedLinkToShowDetail.url}
          linkPoints={selectedLinkToShowDetail.points}
        />
      )}
    </React.Fragment>
  );

  const LinkDetailBody = (
    <React.Fragment>
      <LinkListItemDetail link={selectedLinkToShowDetail} />
    </React.Fragment>
  );

  const LinkDetailFooter = (
    <React.Fragment>
      {selectedLinkToShowDetail && <LinkListItemDetailFooter />}
    </React.Fragment>
  );

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
      {showConfirmPopup && (
        <Popup
          show={showConfirmPopup}
          title="Remove Link"
          body={ConfirmDialogBody}
          footer={ConfirmDialogFooter}
          onClosePopup={closeConfirmPopup}
        />
      )}
      {/* {showDetailPopup && (
        <Popup
          show={showDetailPopup}
          body={LinkDetail}
          size="lg"
          onClosePopup={closeDetailPopup}
        />
      )} */}

      {showDetailPopup && (
        <CustomPopup
          showCloseIcon={true}
          header={LinkDetailHeader}
          body={LinkDetailBody}
          footer={LinkDetailFooter}
          onClosePopup={closeDetailPopup}
        />
      )}
    </React.Fragment>
  );
};

export default withRouter(LinkList);
