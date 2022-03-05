import "./Pagination.css";

import ReactPaginate from "react-paginate";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PaginationPanel({
  key,
  handleSearch,
  showPagination,
  totalPageCount
}) {
  const handlePageChange = async (pageNumber) => {
    await handleSearch(null, pageNumber.selected + 1);
  };

  const Pagination = () => {
    if (showPagination) {
      return (
        <ReactPaginate
          onPageChange={handlePageChange}
          pageCount={totalPageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          breakLabel="..."
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          containerClassName="pagination"
          pageClassName="page num"
          pageLinkClassName="link"
          nextClassName="page num"
          nextLinkClassName="link"
          previousClassName="page num"
          previousLinkClassName="link"
          breakClassName="page dots"
          breakLinkClassName="dotsLink"
          activeClassName="active"
        ></ReactPaginate>
      );
    }
  };
  return <div key={key} className="pagination-bar">{Pagination()}</div>;
}

export default PaginationPanel;
