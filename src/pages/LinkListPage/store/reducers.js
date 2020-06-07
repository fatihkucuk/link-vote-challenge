import * as actionTypes from "./action-types";
const initialState = {
  links: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LINKS:
      return {
        ...state,
      };
    case actionTypes.GET_LINKS_SUCCESS:
      const sortedLinks = action.links.sort((a, b) => b.points - a.points);
      return {
        ...state,
        links: sortedLinks,
      };
    case actionTypes.DELETE_LINK:
      return {
        ...state,
      };
    case actionTypes.DELETE_LINK_SUCCESS:
      return {
        ...state,
        links: [...state.links.filter((link) => link.id !== action.id)],
      };
    case actionTypes.SORT_LINKS:
      return {
        ...state,
        links: state.links,
      };

    case actionTypes.SORT_LINKS_SUCCESS:
      return {
        ...state,
        links: action.links,
      };
    default:
      return state;
  }
};

export default reducer;
