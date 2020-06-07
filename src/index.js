import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { combinedReducers } from "./store/store";
import createSagaMiddleware from "redux-saga";
import listPageServices from "./pages/LinkListPage/store/services";
import addLinkPageServices from "./pages/AddLinkPage/store/services";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

function startServices() {
  sagaMiddleware.run(listPageServices);
  sagaMiddleware.run(addLinkPageServices);
}
startServices();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
