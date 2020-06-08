import React, { useState, useEffect } from "react";
import Pager from "react-bootstrap/Pagination";
import PropTypes from "prop-types";
import { setPage } from "../../store/actions";
import { useDispatch } from "react-redux";

const Pagination = (props) => {
  const [pages, setPages] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fillPagesArray();
  }, [props.totalItemCount]);

  const getTotalPageCount = () => {
    return Math.ceil(props.totalItemCount / props.pageCount);
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
        active={pageNumber === props.pageNumber}
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
        disabled={props.pageNumber === 1}
        onClick={handlePageChange.bind(null, props.pageNumber - 1)}
      />
      {pagesHtml}
      <Pager.Next
        disabled={props.pageNumber * props.pageCount >= props.totalItemCount}
        onClick={handlePageChange.bind(null, props.pageNumber + 1)}
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
