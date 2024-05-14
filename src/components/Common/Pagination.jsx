import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPosts, postPerPage, onClick }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <ul className="pagination">
      {pages.map((page) => {
        <li key={page}>
          <button className="pagination_button" onClick={() => onClick(page)}>
            {page}
          </button>
        </li>;
      })}
    </ul>
  );
};

export default Pagination;
