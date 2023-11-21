import React, { useContext, useEffect, useState } from "react";
import DocumentHome from "../../components/DocumentHome/DocumentHome";
import FeaturedNewsCard from "../../components/FeaturedNewsCard/FeaturedNewsCard";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Timeline from "../../components/Timeline/Timeline";
import AuthContext from "../../Context/AuthContext";
import "./HomePage.css";

const HomePage = () => {
  let [cards, setCards] = useState([]);
  let [slides, setSlides] = useState([]);
  let [docs, setDocs] = useState([]);
  const { lang } = useContext(AuthContext);

  const getNews = async () => {
    const response = await fetch("http://apisindikat.skupstina.me/api/news/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();
    setCards(data);
  };

  const getDocs = async () => {
    const response = await fetch("http://apisindikat.skupstina.me/api/documents/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();

    for (const item in data) {
      data[item].created = data[item].created.slice(0, 10);
    }
    setDocs(data);
  };

  const getNewsForSlides = async () => {
    const response = await fetch("http://apisindikat.skupstina.me/api/slides/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();
    setSlides(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getNews();
    getNewsForSlides();
    getDocs();
  }, []);

  return (
    <div className="HomePage__container">
      <ImageSlider slides={slides} />
      <div className="PageContainerGrid-main">
        <div className="PageContainerGrid">
          <div className="PageContainerGrid__bigger">
            <div className="flex-col">
              <div className="HomePage__special-doc">
                <a href="http://apisindikat.skupstina.me/api/importantDocuments/31c8511a-670b-4494-a397-a1dfb4056248/download/">
                  {lang === "latin" ? "Pristupnica" : "Приступница"}
                </a>
              </div>
              <h1 className="additional-margin__left">
                {lang === "latin" ? "NAJNOVIJE VIJESTI" : "НАЈНОВИЈЕ ВИЈЕСТИ"}
              </h1>
              <div className="flex-row">
                {cards.map((card) => (
                  <FeaturedNewsCard
                    key={card.id}
                    url={card.image_url}
                    title={card.nice_title}
                    title_cyrillic={card.title_cyrillic}
                    date={card.created_eu_time}
                    id={card.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="PageContainerGrid__smaller">
            <div className="flex-col">
              <h1 className="noBottom-margin">
                {lang === "latin" ? "DOKUMENTA" : "ДОКУМЕНТА"}
              </h1>
              <div className="flex-row">
                {/* Here we have DOCUMENTS COMPONENT FOR HOMEPAGE ONLY */}

                <div className="HomePage__doc-container">
                  {docs.map((doc) => (
                    <DocumentHome key={doc.id} document={doc} />
                  ))}

                  {/* <Link>Vidi više...</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="PageBreaker"></div>
        <div className="PageBreakerDoubleLine"></div>
        <h1 className="Section__heading">
          {lang === "latin"
            ? "Istorijat i djelovanje  Sindikalne organizacije Skupštine Crne Gore"
            : "Историјат и дјеловање  Синдикалне организације Скупштине Црне Горе"}
        </h1>

        {/* NEXT SECTION IN HOMEPAGE  */}

        <div className="PageContainerGrid maxWidth">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
