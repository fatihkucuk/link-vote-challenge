import * as actionTypes from "./action-types";

export const getLinks = ({ page, order }) => {
  return {
    type: actionTypes.GET_LINKS,
    page,
    order,
  };
};

export const getLinksSuccess = ({ links, totalItemCount }) => {
  return {
    type: actionTypes.GET_LINKS_SUCCESS,
    links,
    totalItemCount,
  };
};

export const deleteLink = (id) => {
  return {
    type: actionTypes.DELETE_LINK,
    id,
  };
};

export const deleteLinkSuccess = (id) => {
  return {
    type: actionTypes.DELETE_LINK_SUCCESS,
    id,
  };
};

export const upVoteLink = (link) => {
  return {
    type: actionTypes.UP_VOTE_LINK,
    link,
  };
};

export const upVoteLinkSuccess = (link) => {
  return {
    type: actionTypes.UP_VOTE_LINK_SUCCESS,
    link,
  };
};

export const downVoteLink = (link) => {
  return {
    type: actionTypes.DOWN_VOTE_LINK,
    link,
  };
};

export const downVoteLinkSuccess = (link) => {
  return {
    type: actionTypes.DOWN_VOTE_LINK_SUCCESS,
    link,
  };
};

export const setOrder = (order) => {
  return {
    type: actionTypes.SET_ORDER,
    order,
  };
};

export const setPage = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    page,
  };
};

export const setToaster = ({ show, linkName, message, toasterType }) => {
  return {
    type: actionTypes.SET_TOASTER,
    show,
    linkName,
    message,
    toasterType,
  };
};
