import React, { useEffect, useState } from 'react'
import FeaturedNewsCard from '../../components/FeaturedNewsCard/FeaturedNewsCard'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import "./HomePage.css"
import DocumentHome from '../../components/DocumentHome/DocumentHome'
import pdfdownload from "../../images/pdf.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StaffCard from '../../components/StaffCard/StaffCard'
import Timeline from '../../components/Timeline/Timeline'



const HomePage = () => {

  const [ButtonHovered, setButtonHovered] = useState(false)
  const [ButtonHovered1, setButtonHovered1] = useState(false)

  const ToggleButtonHovered = (boolean) => { 
    setButtonHovered(boolean)
  }
  const ToggleButtonHovered1 = (boolean) => { 
    setButtonHovered1(boolean)
  }

  const slides = [ 
    {
      url: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "We’re Family that is really happy and we are all hard-working persons!",
      info: "No matter where you are in life, there is a place for you at our church.No matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our church",
    },
    {
      url: "https://e0.pxfuel.com/wallpapers/856/284/desktop-wallpaper-new-york-city-wide-8k-laptop-full-background-and-new-york-1920x1080.jpg",
      title: "We can’t always see where the road leads",
      info: "but god promises there’s something better up ahead we just have to trust him",
    },
   
  ]

  const cards = [
      {
        url: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "We cant always see where the road leads, We cant always see where the road leads We cant always see where the road leads",
        info: "No matter where you are in life, there is a place for you at our church.No matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our church",
        date: "19.02.2023",
      },
      {
        url: "https://static.vecteezy.com/system/resources/previews/022/875/505/original/smart-city-and-big-data-concept-futuristic-cityscape-at-night-with-neon-colors-city-infrastructure-hologram-created-with-generative-ai-free-photo.jpg",
        title: "We cant always see where the road leads We cant always see where the road leads, We cant always see where the road leads We cant always see where the road leads  ",
        info: "but god promises theres something better up ahead we just have to trust him",
        date: "19.02.2023",
      },
      {
        url: "https://wallpaperaccess.com/full/4983594.jpg",
        title: "We cant always see where the road leadsasfsfs",
        info: "but god promises theres something better up ahead we just have to trust him",
        date: "19.02.2023",
      },

  ]

  for (let i in cards) { 
      if (window.innerWidth<767) {
          cards[i].title = cards[i].title.slice(0,100)  
         
      } 
      else if (768<window.innerWidth<991) { 
          
          cards[i].title = cards[i].title.slice(0,50)
      }
      else if (window.innerWidth>=991) { 
          
          cards[i].title = cards[i].title.slice(0,75)
      }
  }

  
  const DocInfo = [ 
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Statut Sindikata SKupstine Crne Gore",
      image: pdfdownload,
      date: "19.02.2023",
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Pravilnik o organizaciji izbora za predsjednika SKupstine, Izvrsnog Odbora i Generalnog sekretara.",
      image: pdfdownload,
      date: "19.02.2023",
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Statut Skupstine Crne Gore, preciscena verzija",
      image: pdfdownload,
      date: "19.02.2023",
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Ustav Crne Gore",
      image: pdfdownload,
      date: "19.02.2023",
    },

  ]

  for (let i in DocInfo) { 
    if (document.documentElement.clientWidth<767) {
      DocInfo[i].title = DocInfo[i].title.slice(0,40)  
  } 
  else if (768<document.documentElement.clientWidth<991) { 
      DocInfo[i].title = DocInfo[i].title.slice(0,20)
  }
  }

  const StaffInfo = [ 
    {
      image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
      name: "Seid Krsic", 
      role: "president"
    }, 
    {
     image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
      name: "Aleksandar Plamenac", 
      role: "vice president"
    }, 

  ]

  useEffect(()=> { 

    for (let i in cards) { 
        if (document.documentElement.clientWidth<767) {
            cards[i].title = cards[i].title.slice(0,100)  
           
        } 
        else if (768<document.documentElement.clientWidth<991) { 
            
            cards[i].title = cards[i].title.slice(0,100)
        }
        else if (document.documentElement.clientWidth > 991) { 
            
            cards[i].title = cards[i].title.slice(0,100)
        }
    }

    for (let i in slides) { 
      if (document.documentElement.clientWidth<767) {
          slides[i].title = slides[i].title.slice(0,40)  
          slides[i].info = slides[i].info.slice(0,100)  
         
      } 
      else if (768<document.documentElement.clientWidth<991) { 
          
          slides[i].title = slides[i].title.slice(0,80)
          slides[i].info = slides[i].info.slice(0,320)   
      }
      else if (document.documentElement.clientWidth > 991) { 
          
          slides[i].title = slides[i].title.slice(0,80)
          slides[i].info = slides[i].info.slice(0,320)   
      }
  }
  
    
    const DocInfo = [ 
      {
        download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "Statut Sindikata SKupstine Crne Gore",
        image: pdfdownload,
        date: "19.02.2023",
      },
      {
        download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "Pravilnik o organizaciji izbora za predsjednika SKupstine, Izvrsnog Odbora i Generalnog sekretara.",
        image: pdfdownload,
        date: "19.02.2023",
      },
      {
        download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "Statut Skupstine Crne Gore, preciscena verzija",
        image: pdfdownload,
        date: "19.02.2023",
      },
      {
        download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "Ustav Crne Gore",
        image: pdfdownload,
        date: "19.02.2023",
      },
  
    ]
  
    for (let i in DocInfo) { 
      if (document.documentElement.clientWidth<767) {
        DocInfo[i].title = DocInfo[i].title.slice(0,40)  
    } 
    else if (768<document.documentElement.clientWidth<991) { 
        DocInfo[i].title = DocInfo[i].title.slice(0,20)
    }
    }
  
    const StaffInfo = [ 
      {
        image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
        name: "Seid Krsic", 
        role: "president"
      }, 
      {
       image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
        name: "Aleksandar Plamenac", 
        role: "vice president"
      }, 
  
    ]


  }, [])



  return (
    <div className='HomePage__container'>

        <ImageSlider slides={slides} />
        <div className='PageContainerGrid-main'>
            <div className='PageContainerGrid'>
                <div className='PageContainerGrid__bigger'>
                    <div className='flex-col'>
                        <h1 className='additional-margin__left'>NAJNOVIJE VIJESTI</h1>
                        <div className='flex-row'>

                            {cards.map((card, index) => 
                                <FeaturedNewsCard key={card.title+index} 
                                                  url={card.url} 
                                                  title={card.title}
                                                  date={card.date} 
                                />
                              
                            )}
                           
                          
                    
                        </div>
                    </div>
                </div>

                <div className='PageContainerGrid__smaller'>
                    <div className='flex-col'>
                        <h1 className='noBottom-margin'>DOKUMENTA</h1>
                        <div className='flex-row'>
                            {/* Here we have DOCUMENTS COMPONENT FOR HOMEPAGE ONLY */}
                            
                            <div className='HomePage__doc-container'>
                                  {DocInfo.map((doc, index) =>  
                                      <DocumentHome key={index} document={doc} />
                                  )}
                                  
                                      
                                  <Link>Vidi više...</Link>
                                  
                            </div>

                      </div>
                </div>
            </div>
        

        </div>
        
        <div className='PageBreaker'></div>
        <div className='PageBreakerDoubleLine'></div>
        <h1 className='Section__heading'>Istorijat Sindikata Skupštine Crne Gore</h1> 

            {/* NEXT SECTION IN HOMEPAGE  */}

        <div className='PageContainerGrid maxWidth'>

        <Timeline />
        
        
        </div>

      



    </div>
      

       

    </div>
  )
}

export default HomePage