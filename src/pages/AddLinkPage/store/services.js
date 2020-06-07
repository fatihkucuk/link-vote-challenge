import { put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./action-types";
import { v4 as uuidv4 } from "uuid";

function* addLink({ link, callback }) {
  try {
    const newLink = {
      id: uuidv4(),
      name: link.name,
      url: link.url,
      points: 0,
    };
    yield put(actionTypes.addLinkSuccess(newLink));
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
  }
}

export default function* detailPageServices() {
  yield takeLatest(actionTypes.ADD_LINK, addLink);
}
