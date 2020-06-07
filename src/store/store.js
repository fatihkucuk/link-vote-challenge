import rootReducer from "./reducers";
import { combineReducers } from "redux";
import listPageReducer from "../pages/LinkListPage/store/reducers";
import addLinkPageReducer from "../pages/AddLinkPage/store/reducers";

export const combinedReducers = combineReducers({
  rootReducer,
  listPageReducer,
  addLinkPageReducer,
});
