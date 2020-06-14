import * as actionTypes from "./action-types";

export const setToaster = (toaster) => {
  return {
    type: actionTypes.SET_TOASTER,
    toaster,
  };
};

export const getLinksSuccess = ({ links, totalItemCount }) => {
  return {
    type: actionTypes.GET_LINKS_SUCCESS,
    links,
    totalItemCount,
  };
};

export const deleteLinkSuccess = ({ link }) => {
  return {
    type: actionTypes.DELETE_LINK_SUCCESS,
    link,
  };
};

export const upVoteLinkSuccess = (link) => {
  return {
    type: actionTypes.UP_VOTE_LINK_SUCCESS,
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

export const addLinkSuccess = (addedLink) => {
  return {
    type: actionTypes.ADD_LINK_SUCCESS,
    addedLink,
  };
};

export const setLink = (link) => {
  return {
    type: actionTypes.SET_LINK,
    link,
  };
};
