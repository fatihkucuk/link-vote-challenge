export const GET_LINKS = "GET_LINKS";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
export const DELETE_LINK = "DELETE_LINK";
export const DELETE_LINK_SUCCESS = "DELETE_LINK_SUCCESS";
export const UP_VOTE_LINK = "UP_VOTE_LINK";
export const UP_VOTE_LINK_SUCCESS = "UP_VOTE_LINK_SUCCESS";
export const DOWN_VOTE_LINK = "DOWN_VOTE_LINK";
export const DOWN_VOTE_LINK_SUCCESS = "DOWN_VOTE_LINK_SUCCESS";
export const SET_ORDER = "SET_ORDER";
export const SET_PAGE = "SET_PAGE";
export const SET_TOASTER = "SET_TOASTER";

export const getLinks = ({ page, order }) => {
  return {
    type: GET_LINKS,
    page,
    order,
  };
};

export const getLinksSuccess = ({ links, totalItemCount }) => {
  return {
    type: GET_LINKS_SUCCESS,
    links,
    totalItemCount,
  };
};

export const deleteLink = (id) => {
  return {
    type: DELETE_LINK,
    id,
  };
};

export const deleteLinkSuccess = (id) => {
  return {
    type: DELETE_LINK_SUCCESS,
    id,
  };
};

export const upVoteLink = (link) => {
  return {
    type: UP_VOTE_LINK,
    link,
  };
};

export const upVoteLinkSuccess = (link) => {
  return {
    type: UP_VOTE_LINK_SUCCESS,
    link,
  };
};

export const downVoteLink = (link) => {
  return {
    type: DOWN_VOTE_LINK,
    link,
  };
};

export const downVoteLinkSuccess = (link) => {
  return {
    type: DOWN_VOTE_LINK_SUCCESS,
    link,
  };
};

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    order,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setToaster = ({ show, linkName, message, toasterType }) => {
  return {
    type: SET_TOASTER,
    show,
    linkName,
    message,
    toasterType,
  };
};
