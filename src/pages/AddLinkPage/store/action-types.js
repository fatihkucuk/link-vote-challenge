export const ADD_LINK = "ADD_LINK";
export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";

export const addLink = (link) => {
  return {
    type: ADD_LINK,
  };
};
export const addLinkSuccess = (addedLink) => {
  return {
    type: ADD_LINK_SUCCESS,
    addedLink,
  };
};
