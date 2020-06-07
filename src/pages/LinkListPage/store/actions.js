import * as actionTypes from "./action-types";

export const getLinksSuccess = (links) => {
  return actionTypes.getLinksSuccess(links);
};

export const deleteLinkSuccess = (id) => {
  return actionTypes.deleteLinkSuccess(id);
};

export const sortLinksSuccess = (links) => {
  return actionTypes.sortLinksSuccess(links);
};
