import React from "react";
import { AppContext } from "../context/AppContextProvider";

export default function PageManager() {
  const { currentPage, totalPages, setPage } = React.useContext(AppContext);
  const [pageRange, setPageRange] = React.useState<Number[]>([]);

  React.useEffect(
    function () {
      if (!currentPage) return;

      let range = [];

      if (currentPage > 1) range.push(currentPage - 1);
      range.push(currentPage);
      if (currentPage < totalPages) range.push(currentPage + 1);

      setPageRange(range);
    },
    [totalPages, currentPage]
  );

  return (
    <div className="page-container">
      {pageRange.map((page) => (
        <div
          onClick={() => setPage(page)}
          data-page-id={page}
          key={`page_manager_${page}`}
        >
          {page}
        </div>
      ))}
    </div>
  );
}
