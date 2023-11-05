import React, { useContext } from "react";
import FeaturedNewsCard from "../../components/FeaturedNewsCard/FeaturedNewsCard";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import "./SearchPage.css";

const SearchPage = () => {
  const { searchResults } = useContext(AuthContext);
  const { lang } = useContext(AuthContext);

  return (
    <div className="SearchPage__container-main">
      <HeaderPhoto page_name={"Rezultati Pretrage"} />
      <div className="SearchPage__container">
        <h1 className="SearchPage__heading">{ lang === "latin" ? "Rezultati:" : "Резултати:" }</h1>
        <div className="SearchPage__container-left">
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <FeaturedNewsCard
                key={result?.id}
                url={result?.image_url}
                title={result?.nice_title}
                title_cyrillic={result?.title_cyrillic}
                date={result?.created_eu_time}
                id={result?.id}
              />
            ))
          ) : (
            <p className="SearchPage__no-results">
              {lang === "latin" ? "Nema Rezultata" : "Нема Резултата"}
            </p>
          )}
        </div>
      </div>

      <div className="SearchPage__container-right"></div>
    </div>
  );
};

export default SearchPage;
