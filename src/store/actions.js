import * as actionTypes from "./action-types";

export const setToaster = (toaster) => {
  return {
    type: actionTypes.SET_TOASTER,
    toaster,
  };
};
