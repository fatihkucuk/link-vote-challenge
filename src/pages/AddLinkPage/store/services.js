import { put, takeLatest } from "redux-saga/effects";
import { ADD_LINK } from "./action-types";
import { addLinkSuccess as addLinkSuccessAction } from "./actions";
import { setToaster as setToasterAction } from "../../../store/actions";
import { v4 as uuidv4 } from "uuid";
import { TOASTER_TYPE } from "../../../constants";

function* addLink({ link }) {
  try {
    const newLink = {
      id: uuidv4(),
      name: link.name,
      url: link.url,
      points: 0,
      updatedAt: null,
    };
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push(newLink);
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(addLinkSuccessAction(newLink));
    yield put(
      setToasterAction({
        show: true,
        linkName: newLink.name,
        message: "added.",
        toasterType: TOASTER_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    yield put(
      setToasterAction({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export default function* addLinkPageServices() {
  yield takeLatest(ADD_LINK, addLink);
}
