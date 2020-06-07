import React from "react";
import LinkList from "./components/LinkList/LinkList";
import Pagination from "./components/Pagination/Pagination";
import "./LinkListPage.css";
import { useSelector } from "react-redux";
import Toaster from "../../components/Toaster/Toaster";

const LinkListPage = (props) => {
  const links = useSelector((state) => state.listPageReducer.links);
  const page = useSelector((state) => state.listPageReducer.page);
  const toaster = useSelector((state) => state.rootReducer.toaster);
  return (
    <div className="link-list-page-container">
      {toaster.show && <Toaster toaster={toaster} />}
      <div className="link-list-container">
        <LinkList />
      </div>
      {links.length > 0 && (
        <div className="pagination-container">
          <Pagination
            totalItemCount={page.totalItemCount}
            pageNumber={page.pageNumber}
            pageCount={page.pageCount}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default LinkListPage;
