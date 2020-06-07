export const ADD_LINK = "ADD_LINK";
export const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
export const SET_LINK = "SET_LINK";

export const addLink = (link) => {
  return {
    type: ADD_LINK,
    link: link,
  };
};
export const addLinkSuccess = (addedLink) => {
  return {
    type: ADD_LINK_SUCCESS,
    addedLink,
  };
};
export const setLink = (link) => {
  return {
    type: SET_LINK,
    link,
  };
};
