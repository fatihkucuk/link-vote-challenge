import * as actionTypes from "./action-types";

export const addLink = (link) => {
  return {
    type: actionTypes.ADD_LINK,
    link: link,
  };
};

export const addLinkSuccess = (addedLink) => {
  return {
    type: actionTypes.ADD_LINK_SUCCESS,
    addedLink,
  };
};
