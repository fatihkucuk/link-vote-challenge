import * as actionTypes from "./action-types";

const initialState = {
  link: {
    id: undefined,
    name: "",
    url: "",
    points: 0,
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
    default:
      return state;
  }
};

export default reducer;
