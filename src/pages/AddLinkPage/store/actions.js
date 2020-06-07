import * as actionTypes from "./action-types";

export const addLink = (link) => {
  return actionTypes.addLink(link);
};

export const addLinkSuccess = (link) => {
  return actionTypes.addLinkSuccess(link);
};

export const setLink = (link) => {
  return actionTypes.setLink(link);
};
