import * as actionTypes from "./action-types";
import { TOASTER_TYPE } from "../constants";
const initialState = {
  toaster: {
    show: false,
    linkName: "",
    message: "",
    toasterType: TOASTER_TYPE.SUCCESS,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOASTER:
      return {
        ...state,
        toaster: action.toaster,
      };
    default:
      return state;
  }
};

export default reducer;
