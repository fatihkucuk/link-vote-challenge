import React from "react";
import LinkSubmit from "./components/LinkSubmit/LinkSubmit";
import LinkListFilter from "./components/LinkListFilter/LinkListFilter";
import LinkList from "./components/LinkList/LinkList";
import LinkListItem from "./components/LinkListItem/LinkListItem";
import Pagination from "./components/Pagination/Pagination";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./LinkListPage.css";

const LinkListPage = (props) => {
  return (
    <div className="link-list-page-container">
      {/* <div className="link-submit-container"> */}
      {/* <LinkSubmit></LinkSubmit> */}
      {/* <ul className="link-list-group">
          <LinkListItem
            name="Submit a link"
            url=""
            points="+"
            boxSubtext=""
            showHeader={true}
            showUrl={false}
            showButtons={false}
          />
        </ul> */}
      {/* </div> */}
      {/* <div className="link-list-filter-container">
        <LinkListFilter></LinkListFilter>
      </div> */}
      <div className="link-list-container">
        <LinkList />
      </div>
      <div className="pagination-container">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default LinkListPage;
