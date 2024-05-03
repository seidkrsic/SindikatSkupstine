import parse from "html-react-parser";
import { React, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import NewsGallery from "../../components/NewsGallery/NewsGallery";
import AuthContext from "../../Context/AuthContext";
import "../NewsSinglePage/NewsSinglePage.css";
import salon from "../../images/Zgrada_skupstine.jpg";

const NewsSinglePage = () => {
    const navigate = useNavigate();
    let [News, setNews] = useState({});
    let [noGallery, setNoGallery] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const { lang } = useContext(AuthContext);
    const { NewsInfo } = useContext(AuthContext);
    const {NewsTitle} = useContext(AuthContext);
    const { domain_url } = useContext(AuthContext);

    let location_id = useParams().id;
    // const mobileScreen = window.innerWidth < 768;
    let CategoriesInfo;

    if (lang === "latin") {
        CategoriesInfo = [
            {
                name: "Sve aktuelnosti",
                path: "/aktuelnosti/",
            },
        ];
    } else {
        CategoriesInfo = [
            {
                name: "Све актуелности",
                path: "/aktuelnosti/",
            },
        ];
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        let NewsTitle1 = NewsTitle.trim() 
        if (NewsInfo !== null && NewsInfo !== undefined && location_id === NewsTitle) { 
            getSingleNews();
        }     
        else { 
                navigate("/");
        }
        
    }
        
      
        
     
      
   
        
        
    , [location_id, NewsInfo, NewsTitle]);

    const getSingleNews = async () => {
 
            
            try { 
                const response = await fetch(
                    `${domain_url}api/news/${localStorage.getItem("NewsInfo")}/`
                );
    
            if (!response.ok) { 
                throw new Error("Error 404 Page not Found.")
            } 

            let data = await response.json();
            data.created = data.created.slice(0, 10);
            setNews(data);
            setNoGallery(data.gallery.length > 0);
   
          
           
            
              
            } 
            catch(error) { 
                navigate("/");
            } 
        
            

    
    
}
        

    return (
        <div className="SingleNewsPage__container-main">
            <HeaderPhoto
                image_url={salon}
                page_name={lang === "latin" ? "AKTUELNOSTI" : "АКТУЕЛНОСТИ"}
            />
            {News && (
                <div className="SingleNewsPage__container">
                    <div className="SingleNewsPage__container-left">
                        <div className="SingleNewsPage__news-container">
                            <div className="SingleNewsPage__img-container">
                                <img
                                    src={News.image_url}
                                    alt=""
                                    style={{
                                        display: imageLoaded ? "block" : "none",
                                    }}
                                    onLoad={() => setImageLoaded(true)}
                                />
                                <div className="SingleNewsPage__small-info">
                                    <p>{News.created_eu_time}</p>
                                    <h3>{News.category}</h3>
                                </div>
                            </div>
                            <div className="SingleNewsPage__info-container">
                                <h1>
                                    {lang === "latin"
                                        ? News.nice_title
                                        : News.title_cyrillic}
                                </h1>
                                {parse(
                                    String(
                                        lang === "latin"
                                            ? News.nice_content
                                            : News.content_cyrillic
                                    )
                                )}
                            </div>

                            <div className="SinglePageNews__photoGallery-container">
                                {noGallery ? (
                                    <>
                                        <h1 className="GalleryFont-header">
                                            {lang === "latin"
                                                ? "Galerija"
                                                : "Галерија"}
                                        </h1>

                                        <div className="Gallery__container-singleStaff__page">
                                            {News["gallery"].length <= 2 ? (
                                                <>
                                                    {News["gallery"].length ===
                                                    2 ? (
                                                        <div>
                                                            <img
                                                                src={
                                                                    News[
                                                                        "gallery"
                                                                    ][0]
                                                                        ?.image_url
                                                                }
                                                                alt="galery_photo"
                                                            />
                                                            <img
                                                                src={
                                                                    News[
                                                                        "gallery"
                                                                    ][1]
                                                                        ?.image_url
                                                                }
                                                                alt="galery_photo"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={
                                                                News[
                                                                    "gallery"
                                                                ][0]?.image_url
                                                            }
                                                            alt="galery_photo"
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        src={
                                                            News["gallery"][0]
                                                                ?.image_url
                                                        }
                                                        alt="galery_photo"
                                                    />
                                                    <NewsGallery
                                                        slides={News.gallery}
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <> </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="SingleNewsPage__container-right">
                        <Categories
                            categories={CategoriesInfo}
                            title={
                                lang === "latin" ? "KATEGORIJE" : "КАТЕГОРИЈЕ"
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsSinglePage;
