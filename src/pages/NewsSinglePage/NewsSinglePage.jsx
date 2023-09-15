import {React, useContext, useState} from 'react'
import "../NewsSinglePage/NewsSinglePage.css"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'
import NewsGallery from '../../components/NewsGallery/NewsGallery'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import AuthContext from '../../Context/AuthContext'



const NewsSinglePage = () => {

    let [News, setNews] = useState({})
    let [noGallery, setNoGallery] = useState(false)
    const {lang} = useContext(AuthContext)

    const location_id = useParams().id
    const mobileScreen = window.innerWidth < 768
    let CategoriesInfo;

    if (lang === "latin") { 
      CategoriesInfo = [ 
          {
            name: "Sve Vijesti",
            path: "/news/"
          }
        // { 
        //   name: "Predsjednik",
        //   path: "/news/predsjednik"
        // },
        // { 
        //     name: "Zamjenik Predsjednika",
        //     path: "/news/zamjenikPredsjednika"
        // },
        // {
        //     name: "Generalni Sekretar",
        //     path: "/news/sekretar"
        // },
      ]
    } else { 
      CategoriesInfo = [
        // {
        //     name: "Предсједник",
        //     path: "/news/predsjednik"
        // },
        // {
        //     name: "Замјеник Предсједника",
        //     path: "/news/zamjenikPredsjednika"
        // },
        // {
        //     name: "Генерални Секретар",
        //     path: "/news/sekretar"
        // },
        {
            name: "Све Вијести",
            path: "/news/"
        }
          
    ];
    }

    useEffect(() => {
        
        window.scrollTo(0, 0); 
        getSingleNews()


    }, [location_id]);

    const getSingleNews = async () => { 
       
        const response = await fetch(`http://127.0.0.1:8000/api/news/${location_id}/`)
        let data = await response.json() 
        data.created = data.created.slice(0,10)
        setNews(data)
        console.log(data)
        setNoGallery(data.gallery.length > 0) 


       
        
     
    
  } 

  
    

    

  return (
        <div className='SingleNewsPage__container-main'>
            <HeaderPhoto page_name={lang === "latin" ? "Vijesti" : "Вијести"} />
            { News && 
            <div className='SingleNewsPage__container'>
                <div className='SingleNewsPage__container-left'>

                    <div className='SingleNewsPage__news-container'>
                        <div className='SingleNewsPage__img-container'>
                            <img src={News.image_url} alt="img" />
                            <div className='SingleNewsPage__small-info'>
                                <p>{News.created_eu_time}</p>
                                <h3>{News.category}</h3>
                            </div>
                        </div>
                        <div className='SingleNewsPage__info-container'>
                            <h1>{lang === "latin" ? News.title : News.title_cyrillic}</h1>
                            {parse(String( lang === "latin" ? News.content: News.content_cyrillic))}
                            
                        </div>


                         
                            <div className='SinglePageNews__photoGallery-container'>

                                {noGallery ?
                                    <>
                                        <h1 className='GalleryFont-header'>{lang === "latin" ? "Galerija" : "Галерија"}</h1>

                                        <div className='Gallery__container-singleStaff__page'>
                                            { News["gallery"].length <= 2 ? 
                                                <>  
                                                    <img src={News["gallery"][0]?.image_url} alt="galery_photo" /> 
                                                    <img src={News["gallery"][1]?.image_url} alt="galery_photo" /> 
                                                </>                                           
                                                : 
                                                <> 
                                                    <img src={News["gallery"][0]?.image_url} alt="galery_photo" /> 
                                                    <NewsGallery slides={News.gallery} />   
                                                </>
                                                

                                            }
                                        </div>
                                    </>
                                    
                                    : <> </>
                                }
                            </div> 
                        
                    
                        
                    </div>                


                </div>
                
                <div className='SingleNewsPage__container-right'>
                    <Categories categories={CategoriesInfo} title={lang === "latin" ? "Kategorije Vijesti": "КАТЕГОРИЈЕ ВИЈЕСТИ"} />
                </div>

            </div>
            }
        </div>

      
    
  )
}

export default NewsSinglePage