import React, { useContext, useEffect, useState } from 'react'
import FeaturedNewsCard from '../../components/FeaturedNewsCard/FeaturedNewsCard'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import "./HomePage.css"
import DocumentHome from '../../components/DocumentHome/DocumentHome'
import pdfdownload from "../../images/pdf.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StaffCard from '../../components/StaffCard/StaffCard'
import Timeline from '../../components/Timeline/Timeline'
import MainMenuCopy from '../../components/MainMenuCopy/MainMenuCopy'
import AuthContext from '../../Context/AuthContext'



const HomePage = () => {

  


  let [cards, setCards] = useState([])
  let [slides, setSlides] = useState([])
  let [docs, setDocs] = useState([])
  const {lang} = useContext(AuthContext)

    

    const getNews = async () => { 
          const response = await fetch("http://127.0.0.1:8000/api/news/", { 
            method: "GET", 
            headers: {"Content-Type" : "application/json"}

        })
        let data = await response.json() 
        setCards(data)
        
    } 

    const getDocs = async () => { 
      const response = await fetch("http://127.0.0.1:8000/api/documents/", { 
        method: "GET", 
        headers: {"Content-Type" : "application/json"}

    })
    let data = await response.json() 
 
    for (const item in data) { 
      data[item].created = data[item].created.slice(0,10)

  }
    setDocs(data)
    
} 

    const getNewsForSlides = async () => { 
      const response = await fetch("http://127.0.0.1:8000/api/slides/", { 
        method: "GET", 
        headers: {"Content-Type" : "application/json"}

    })
    let data = await response.json() 
    setSlides(data)
    
} 

    useEffect(() => {
        
      window.scrollTo(0, 0); 
      getNews()
      getNewsForSlides()
      getDocs()

      

    }, []);



  return (
    <div className='HomePage__container'>
        <ImageSlider slides={slides} />
        <div className='PageContainerGrid-main'>
            <div className='PageContainerGrid'>
                <div className='PageContainerGrid__bigger'>
                    <div className='flex-col'>
                        <div className='HomePage__special-doc'>
                            <a href="http://127.0.0.1:8000/api/importantDocuments/6207c607-c5fa-4e97-8d45-48776d031c4a/download/">{lang === 'latin' ? "Pristupnica" : "Приступница"}</a>
                        </div>
                        <h1 className='additional-margin__left'>{ lang==="latin" ? "NAJNOVIJE VIJESTI" : "НАЈНОВИЈЕ ВИЈЕСТИ" }</h1>
                        <div className='flex-row'>

                            {cards.map((card) => 
                                <FeaturedNewsCard key={card.id} 
                                                  url={card.image_url} 
                                                  title={card.title}
                                                  title_cyrillic={card.title_cyrillic}
                                                  date={card.created_eu_time} 
                                                  id={card.id}
                                />
                              
                            )}
                           
                          
                    
                        </div>
                    </div>
                </div>

                <div className='PageContainerGrid__smaller'>
                    <div className='flex-col'>
                        <h1 className='noBottom-margin'>{lang==="latin" ?  "DOKUMENTA" : "ДОКУМЕНТА"}</h1>
                        <div className='flex-row'>
                            {/* Here we have DOCUMENTS COMPONENT FOR HOMEPAGE ONLY */}
                            
                            <div className='HomePage__doc-container'>
                                  {docs.map((doc, ) =>  
                                      <DocumentHome key={doc.id} document={doc} />
                                  )}
                                  
                                      
                                  {/* <Link>Vidi više...</Link> */}
                                  
                            </div>

                      </div>
                </div>
            </div>
        

        </div>
        
        <div className='PageBreaker'></div>
        <div className='PageBreakerDoubleLine'></div>
        <h1 className='Section__heading'>{ lang === "latin" ? "Istorijat Sindikata Skupštine Crne Gore" : "Историјат Синдиката Скупштине Црне Горе"}</h1> 

            {/* NEXT SECTION IN HOMEPAGE  */}

        <div className='PageContainerGrid maxWidth'>

        <Timeline />
        
        
        </div>

      



    </div>
      

       

    </div>
  )
}

export default HomePage