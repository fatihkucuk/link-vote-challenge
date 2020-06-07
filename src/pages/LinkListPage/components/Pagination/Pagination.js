import React from "react";
import Pager from "react-bootstrap/Pagination";
const Pagination = (props) => {
  return (
    <Pager>
      {/* <Pager.First /> */}
      <Pager.Prev />
      <Pager.Item>{1}</Pager.Item>
      <Pager.Item>{2}</Pager.Item>
      <Pager.Item>{3}</Pager.Item>
      <Pager.Item>{4}</Pager.Item>
      <Pager.Item>{5}</Pager.Item>
      {/* <Pager.Item active>{12}</Pager.Item> */}
      {/* <Pager.Item disabled>{14}</Pager.Item> */}
      <Pager.Next />
      {/* <Pager.Last /> */}
    </Pager>
  );
};

export default Pagination;
