import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./action-types";
import * as rootActionTypes from "../../../store/action-types";
import { v4 as uuidv4 } from "uuid";
import { TOASTER_TYPE } from "../../../constants";

function* addLink({ link }) {
  try {
    const newLink = {
      id: uuidv4(),
      name: link.name,
      url: link.url,
      points: 0,
    };
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push(newLink);
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(actionTypes.addLinkSuccess(newLink));
    yield put(
      rootActionTypes.setToaster({
        show: true,
        linkName: newLink.name,
        message: "added.",
        toasterType: TOASTER_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    yield put(
      rootActionTypes.setToaster({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export default function* addLinkPageServices() {
  yield takeLatest(actionTypes.ADD_LINK, addLink);
}
