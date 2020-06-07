import * as actionTypes from "./action-types";

const initialState = {
  link: {
    id: undefined,
    name: "",
    url: "",
    points: 0,
    updatedAt: undefined,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LINK:
      return {
        ...state,
      };
    case actionTypes.ADD_LINK_SUCCESS:
      return {
        ...state,
        link: action.addedLink,
      };
    case actionTypes.SET_LINK:
      return {
        ...state,
        link: action.link,
      };
    default:
      return state;
  }
};

export default reducer;
