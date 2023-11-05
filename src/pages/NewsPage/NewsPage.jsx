import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FeaturedNewsCard from "../../components/FeaturedNewsCard/FeaturedNewsCard";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import "../NewsPage/NewsPage.css";
import salon from "../../images/salon1.jpeg"

const NewsPage = () => {
  const { lang } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const location_id = useLocation().pathname;

  const getNews = async () => {
    const response = await fetch(
      `http://apisindikat.skupstina.me/api/paginationNews/?page=${currentPage}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const Data = await response.json();
    const data = Data.results;
    setCards(data);
    const calculatedTotalPages = Math.ceil(Data.count < 7 ? 1 : Data.count / 6);
    setTotalPages(calculatedTotalPages);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getNews();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="NewsPage__container-main">
      <HeaderPhoto
        image_url={salon}
        page_name={lang === "latin" ? "Aktuelnosti" : "Актуелности"}
      />
      <div className="NewsPage__container">
        <div className="NewsPage__container-left">
          <div className="NewsPage__news-container">
            {cards?.map((card) => (
              <FeaturedNewsCard
                key={card?.id}
                url={card?.image_url}
                title={card?.nice_title}
                title_cyrillic={card?.title_cyrillic}
                date={card?.created_eu_time}
                id={card?.id}
              />
            ))}
          </div>
          <div className="NewsPage__pagination">
            <button
              className={`NewsPage__page-number ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {lang === "latin" ? "Prethodna" : "Претходна"}
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`NewsPage__page-number ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}

            <button
              className={`NewsPage__page-number ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {lang === "latin" ? "Sljedeća" : "Сљедећа"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
