import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "./action-types";
import {
  getLinksSuccess,
  deleteLinkSuccess,
  sortLinksSuccess,
} from "./actions";

export function* getLinks(action) {
  try {
    const links = JSON.parse(localStorage.getItem("links"));
    yield put(getLinksSuccess(links));
  } catch (error) {
    alert(error); //For just demo purpose
  } finally {
  }
}

export function* deleteLink(action) {
  try {
    let links = JSON.parse(localStorage.getItem("links"));
    links = links.filter((link) => link.id !== action.id);
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(deleteLinkSuccess(action.id));
  } catch (error) {
    yield alert(error); //For just demo purpose
  } finally {
  }
}

export function* sortLinks(action) {
  try {
    let links = JSON.parse(localStorage.getItem("links"));
    links = links.sort((a, b) => {
      if (action.order === "desc") {
        return b.points - a.points || b.name.localeCompare(a.name);
      }
      return a.points - b.points || a.name.localeCompare(b.name);
    });
    const stringifiedLinks = JSON.stringify(links);
    localStorage.setItem("links", stringifiedLinks);
    yield put(sortLinksSuccess(links));
  } catch (error) {
    yield alert(error); //For just demo purpose
  } finally {
  }
}

export default function* listPageServices() {
  yield takeLatest(actionTypes.GET_LINKS, getLinks);
  yield takeLatest(actionTypes.DELETE_LINK, deleteLink);
  yield takeLatest(actionTypes.SORT_LINKS, sortLinks);
}
