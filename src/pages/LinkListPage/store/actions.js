import * as actionTypes from "./action-types";

export const getLinksSuccess = ({ links, totalItemCount }) => {
  return actionTypes.getLinksSuccess({ links, totalItemCount });
};

export const deleteLinkSuccess = (id) => {
  return actionTypes.deleteLinkSuccess(id);
};

export const upVoteLinkSuccess = (link) => {
  return actionTypes.upVoteLinkSuccess(link);
};

export const downVoteLinkSuccess = (link) => {
  return actionTypes.downVoteLinkSuccess(link);
};

export const setOrder = (order) => {
  return actionTypes.setOrder(order);
};

export const setPage = (page) => {
  return actionTypes.setPage(page);
};

export const setToaster = ({ show, linkName, message, toasterType }) => {
  return actionTypes.setToaster({ show, linkName, message, toasterType });
};
