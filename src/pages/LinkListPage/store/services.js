import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./action-types";
import { setToaster } from "../../../store/action-types";
import { SORTING_ORDER, TOASTER_TYPE } from "../../../constants";

export function* getLinks({ page, order }) {
  try {
    const { pageNumber, pageCount } = page;
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links = links.sort((a, b) => {
      if (order === SORTING_ORDER.DESC) {
        return b.points - a.points || b.updatedAt - a.updatedAt;
      }
      return a.points - b.points || b.updatedAt - a.updatedAt;
    });
    const pageIndex = pageNumber - 1;
    const slicedLinks = links.slice(
      pageIndex * pageCount,
      pageIndex * pageCount + pageCount
    );
    yield put(
      actionTypes.getLinksSuccess({
        links: slicedLinks,
        totalItemCount: links.length,
      })
    );
  } catch (error) {
    yield put(
      setToaster({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export function* deleteLink(action) {
  try {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    const link = links.find((link) => link.id === action.id);
    links = links.filter((link) => link.id !== action.id);
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(actionTypes.deleteLinkSuccess(action.id));
    yield put(
      setToaster({
        show: true,
        linkName: link.name,
        message: "removed.",
        toasterType: TOASTER_TYPE.SUCCESS,
      })
    );
  } catch (error) {
    yield put(
      setToaster({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export function* upVoteLink(action) {
  try {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    const upVotedLink = links.find((link) => link.id === action.link.id);
    upVotedLink.points++;
    upVotedLink.updatedAt = new Date().getTime();
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(actionTypes.upVoteLinkSuccess(upVotedLink));
  } catch (error) {
    yield put(
      setToaster({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export function* downVoteLink(action) {
  try {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    const downVotedLink = links.find((link) => link.id === action.link.id);
    downVotedLink.points--;
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(actionTypes.downVoteLinkSuccess(downVotedLink));
  } catch (error) {
    yield put(
      setToaster({
        show: true,
        linkName: "",
        message: error.message,
        toasterType: TOASTER_TYPE.ERROR,
      })
    );
  }
}

export default function* listPageServices() {
  yield takeLatest(actionTypes.GET_LINKS, getLinks);
  yield takeLatest(actionTypes.DELETE_LINK, deleteLink);
  yield takeLatest(actionTypes.UP_VOTE_LINK, upVoteLink);
  yield takeLatest(actionTypes.DOWN_VOTE_LINK, downVoteLink);
}
