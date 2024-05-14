
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import "./Paginator.css"

const Paginator = ({totalPages, onPageChange, currentPage}) => {


    const { lang } = useContext(AuthContext);

    

  return (
    <div className="Paginator__pagination">
                        <button
                            className={`Paginator__page-number ${
                                currentPage === 1 ? "disabled" : ""
                            }`}
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            {lang === "latin" ? "Prethodna" : "Претходна"}
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (
                            <button
                                key={page}
                                className={`Paginator__page-number ${
                                    currentPage === page ? "active" : ""
                                }`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            className={`Paginator__page-number ${
                                currentPage === totalPages ? "disabled" : ""
                            }`}
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            {lang === "latin" ? "Sljedeća" : "Сљедећа"}
                        </button>
                    </div>
  )
}

export default Paginator