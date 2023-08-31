import React, { useContext, useState } from 'react'
import "../NewsPage/NewsPage.css"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'
import FeaturedNewsCard from '../../components/FeaturedNewsCard/FeaturedNewsCard'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const NewsPage = () => {



    let CategoriesInfo;

    const {lang} = useContext(AuthContext)

    if (lang === "latin") { 
      CategoriesInfo = [ 
        { 
          name: "Predsjednik",
          path: "/news/predsjednik"
        },
        { 
            name: "Zamjenik Predsjednika",
            path: "/news/zamjenikPredsjednika"
        },
        {
            name: "Generalni Sekretar",
            path: "/news/sekretar"
        },
      ]
    } else { 
      CategoriesInfo = [
        {
            name: "Предсједник",
            path: "/news/predsjednik"
        },
        {
            name: "Замјеник Предсједника",
            path: "/news/zamjenikPredsjednika"
        },
        {
            name: "Генерални Секретар",
            path: "/news/sekretar"
        },
    ];
    }



    
    let [cards, setCards] = useState([])
    const [totalPages, setTotalPages] = useState(1); // Assuming total pages will be fetched from the API response
    const [currentPage, setCurrentPage] = useState(1);
    const location_id = useLocation().pathname


    

    const getNews = async () => { 
          const response = await fetch(`http://127.0.0.1:8000/api/paginationNews/?page=${currentPage}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        let data = await response.json() 
        console.log(data)
        setCards(data.results)
        const calculatedTotalPages = Math.ceil(data.count < 5 ? 1 : data.count / 5); 
        setTotalPages(calculatedTotalPages);

        
    } 

    useEffect(() => {
         
        getNews()
   
    }, [currentPage]);


    useEffect(() => { 

      if (location_id.includes("presjednik")){ 
          const getNews = async () => { 
            const response = await fetch(`http://127.0.0.1:8000/api/paginationNews/?category=president&?page=${currentPage}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
          });
          let data = await response.json() 
          console.log(data)
          setCards(data.results)
          const calculatedTotalPages = Math.ceil(data.count < 5 ? 1 : data.count / 5); 
          setTotalPages(calculatedTotalPages);

          }
          getNews() 
          

      } else if (location_id.includes("zamjenik")) { 
        const getNews = async () => { 
          const response = await fetch(`http://127.0.0.1:8000/api/paginationNews/?category=vice_president&?page=${currentPage}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        let data = await response.json() 
        console.log(data)
        setCards(data.results)
        const calculatedTotalPages = Math.ceil(data.count < 5 ? 1 : data.count / 5); 
        setTotalPages(calculatedTotalPages);

        }
        getNews() 
          

      } else if (location_id.includes("sekretar")) { 
          const getNews = async () => { 
            const response = await fetch(`http://127.0.0.1:8000/api/paginationNews/?category=secretary&?page=${currentPage}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
          });
          let data = await response.json() 
          console.log(data)
          setCards(data.results)
          const calculatedTotalPages = Math.ceil(data.count < 5 ? 1 : data.count / 5); 
          setTotalPages(calculatedTotalPages);

          }
          getNews() 



      } else { 
        const getNews = async () => { 
          const response = await fetch(`http://127.0.0.1:8000/api/paginationNews/?page=${currentPage}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        let data = await response.json() 
        console.log(data)
        setCards(data.results)
        const calculatedTotalPages = Math.ceil(data.count < 5 ? 1 : data.count / 5); 
        setTotalPages(calculatedTotalPages);

        }
        getNews() 

      }
      
      

  }, [location_id, currentPage]);



    useEffect(()=>{ 

      window.scrollTo(0, 0); 

    },[])




  return (
    <div className='NewsPage__container-main'>
        <HeaderPhoto page_name={lang === "latin" ? "Aktuelnosti":"Актуелности"} />
        <div className='NewsPage__container'>
            <div className='NewsPage__container-left'>
                {cards?.map(card => 
                    <FeaturedNewsCard key={card?.id} 
                                      url={card?.image_url} 
                                      title={card?.title}
                                      title_cyrillic={card?.title_cyrillic}
                                      date={card?.created_eu_time} 
                                      id={card?.id}
                    />
                                  
                    )}
                
                <div className="NewsPage__pagination">
                      <button
                        className={`NewsPage__page-number ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        { lang === "latin" ? "Prethodna" : "Претходна"}
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                        if (
                          page === currentPage ||
                          page === currentPage + 1 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <button
                              key={page}
                              className={`NewsPage__page-number ${currentPage === page ? 'active' : ''}`}
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </button>
                          );
                        }
                        return null;
                      })}
                      
                      <button
                        className={`NewsPage__page-number ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        { lang === "latin" ? "Sljedeća" : "Сљедећа"}
                      </button>
                    </div>
              </div>

            
            <div className='NewsPage__container-right'>
                <Categories categories={CategoriesInfo} title={lang === "latin" ? "Kategorije Vijesti": "КАТЕГОРИЈЕ ВИЈЕСТИ"} />
            </div>

           



        </div>
    </div>
  )
}

export default NewsPage