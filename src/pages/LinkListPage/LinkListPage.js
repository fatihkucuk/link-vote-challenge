import React, { useContext } from "react";
import LinkList from "./components/LinkList/LinkList";
import Pagination from "./components/Pagination/Pagination";
import Toaster from "../../components/Toaster/Toaster";
import { store } from "../../store/reducers";
import "./LinkListPage.css";

const LinkListPage = (props) => {
  const {
    state: {
      links,
      page: { pageNumber, pageCount, totalItemCount },
      toaster,
    },
  } = useContext(store);

  return (
    <div className="link-list-page-container">
      {toaster.show && <Toaster toaster={toaster} />}
      <div className="link-list-container">
        <LinkList />
      </div>
      {links.length > 0 && (
        <div className="pagination-container">
          <Pagination
            totalItemCount={totalItemCount}
            pageNumber={pageNumber}
            pageCount={pageCount}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default LinkListPage;
