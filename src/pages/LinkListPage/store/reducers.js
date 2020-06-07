import * as actionTypes from "./action-types";
import { SORTING_ORDER } from "../../../constants";

const initialState = {
  links: [],
  order: SORTING_ORDER.DEFAULT,
  page: {
    pageNumber: 1,
    pageCount: 5,
    totalItemCount: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LINKS:
      return {
        ...state,
        page: action.page,
      };
    case actionTypes.GET_LINKS_SUCCESS:
      const totalItemCount = action.totalItemCount;
      return {
        ...state,
        links: action.links,
        page: { ...state.page, totalItemCount },
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
    case actionTypes.UP_VOTE_LINK:
      return {
        ...state,
        link: state.link,
      };
    case actionTypes.UP_VOTE_LINK_SUCCESS:
      return {
        ...state,
        links: [
          ...state.links.filter((link) => link.id !== action.link.id),
          action.link,
        ],
      };
    case actionTypes.DOWN_VOTE_LINK:
      return {
        ...state,
        link: state.link,
      };
    case actionTypes.DOWN_VOTE_LINK_SUCCESS:
      return {
        ...state,
        links: [
          ...state.links.filter((link) => link.id !== action.link.id),
          action.link,
        ],
      };
    case actionTypes.SET_ORDER:
      return {
        ...state,
        order: action.order,
      };
    case actionTypes.SET_PAGE:
      return {
        ...state,
        page: { ...state.page, pageNumber: action.page },
      };
    default:
      return state;
  }
};

export default reducer;
