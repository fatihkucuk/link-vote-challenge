import React, { createContext, useReducer } from "react";
import { TOASTER_TYPE, SORTING_ORDER } from "../constants";
import * as actionTypes from "./action-types";

const initialState = {
  links: [],
  order: SORTING_ORDER.DEFAULT,
  page: {
    pageNumber: 1,
    pageCount: 5,
    totalItemCount: 0,
  },
  link: {
    id: undefined,
    name: "",
    url: "",
    points: 0,
    updatedAt: undefined,
  },
  linkToUpdate: undefined,
  toaster: {
    show: false,
    linkName: "",
    message: "",
    toasterType: TOASTER_TYPE.SUCCESS,
  },
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_TOASTER:
        return {
          ...state,
          toaster: action.toaster,
        };
      case actionTypes.GET_LINKS_SUCCESS:
        const totalItemCount = action.totalItemCount;
        return {
          ...state,
          links: action.links,
          page: { ...state.page, totalItemCount },
        };
      case actionTypes.DELETE_LINK_SUCCESS:
        return {
          ...state,
          links: [...state.links.filter((link) => link.id !== action.link.id)],
          toaster: {
            show: true,
            linkName: action.link.name,
            message: "removed.",
            toasterType: TOASTER_TYPE.SUCCESS,
          },
        };
      case actionTypes.UP_VOTE_LINK_SUCCESS:
        return {
          ...state,
          links: [
            ...state.links.filter((link) => link.id !== action.link.id),
            action.link,
          ],
          linkToUpdate: action.link,
        };
      case actionTypes.DOWN_VOTE_LINK_SUCCESS:
        return {
          ...state,
          links: [
            ...state.links.filter((link) => link.id !== action.link.id),
            action.link,
          ],
          linkToUpdate: action.link,
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
      case actionTypes.ADD_LINK_SUCCESS:
        return {
          ...state,
          link: action.addedLink,
          toaster: {
            show: true,
            linkName: action.addedLink.name,
            message: "added.",
            toasterType: TOASTER_TYPE.SUCCESS,
          },
        };
      case actionTypes.SET_LINK:
        return {
          ...state,
          link: action.link,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
