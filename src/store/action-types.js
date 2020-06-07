export const SET_TOASTER = "SET_TOASTER";

export const setToaster = (toaster) => {
  return {
    type: SET_TOASTER,
    toaster,
  };
};
