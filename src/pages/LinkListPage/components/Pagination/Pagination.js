import React, { useState, useEffect } from "react";
import Pager from "react-bootstrap/Pagination";
import PropTypes from "prop-types";
import { setPage } from "../../store/action-types";
import { useSelector, useDispatch } from "react-redux";

const Pagination = ({ page: { totalItemCount, pageNumber, pageCount } }) => {
  const [pages, setPages] = useState([]);

  const dispatch = useDispatch();

  const page = useSelector((state) => state.listPageReducer.page);

  useEffect(() => {
    fillPagesArray();
  }, []);

  const getTotalPageCount = () => {
    return Math.ceil(totalItemCount / pageCount);
  };

  const fillPagesArray = () => {
    const totalPageCount = getTotalPageCount();
    const calculatedPages = [];
    for (let pageNumber = 1; pageNumber <= totalPageCount; pageNumber++) {
      calculatedPages.push(pageNumber);
    }
    setPages(calculatedPages);
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const pagesHtml = pages.map((pageNumber) => {
    return (
      <Pager.Item
        active={pageNumber === page.pageNumber}
        key={pageNumber}
        onClick={handlePageChange.bind(null, pageNumber)}
      >
        {pageNumber}
      </Pager.Item>
    );
  });

  return (
    <Pager>
      <Pager.Prev
        disabled={page.pageNumber === 1}
        onClick={handlePageChange.bind(null, pageNumber - 1)}
      />
      {pagesHtml}
      <Pager.Next
        disabled={page.pageNumber * page.pageCount >= page.totalItemCount}
        onClick={handlePageChange.bind(null, pageNumber + 1)}
      />
    </Pager>
  );
};

Pagination.propTypes = {
  totalItemCount: PropTypes.number,
  pageNumber: PropTypes.number,
  pageCount: PropTypes.number,
};

Pagination.defaultProps = {
  totalItemCount: 0,
  pageNumber: 1,
  pageCount: 3,
};

export default Pagination;
