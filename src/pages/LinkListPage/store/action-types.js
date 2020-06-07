export const GET_LINKS = "GET_LINKS";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
export const SORT_LINKS = "SORT_LINKS";
export const SORT_LINKS_SUCCESS = "SORT_LINKS_SUCCESS";
export const DELETE_LINK = "DELETE_LINK";
export const DELETE_LINK_SUCCESS = "DELETE_LINK_SUCCESS";

export const getLinks = () => {
  return {
    type: GET_LINKS,
  };
};

export const getLinksSuccess = (links) => {
  return {
    type: GET_LINKS_SUCCESS,
    links,
  };
};

export const sortLinks = (order) => {
  return {
    type: SORT_LINKS,
    order: order,
  };
};

export const sortLinksSuccess = (links) => {
  return {
    type: SORT_LINKS_SUCCESS,
    links,
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
