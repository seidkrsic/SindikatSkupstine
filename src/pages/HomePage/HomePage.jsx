import React, { useState } from 'react'
import FeaturedNewsCard from '../../components/FeaturedNewsCard/FeaturedNewsCard'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import "./HomePage.css"
import DocumentHome from '../../components/DocumentHome/DocumentHome'
import pdfdownload from "../../images/pdf.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer/Footer'
import StaffCard from '../../components/StaffCard/StaffCard'



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
        title: "We cant always see where the road leads",
        info: "No matter where you are in life, there is a place for you at our church.No matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our church",
      },
      {
        url: "https://static.vecteezy.com/system/resources/previews/022/875/505/original/smart-city-and-big-data-concept-futuristic-cityscape-at-night-with-neon-colors-city-infrastructure-hologram-created-with-generative-ai-free-photo.jpg",
        title: "We cant always see where the road leads We cant always see where the road leads ",
        info: "but god promises theres something better up ahead we just have to trust him",
      },
      {
        url: "https://wallpaperaccess.com/full/4983594.jpg",
        title: "We cant always see where the road leadsasfsfs",
        info: "but god promises theres something better up ahead we just have to trust him",
      },

  ]

  for (let i in cards) { 
       console.log(cards[i])
      if (document.documentElement.clientWidth<767) {
          cards[i].title = cards[i].info.slice(0,90) + "..." 
          cards[i].info = cards[i].info.slice(0,150) + "..."
      } 
      else if (768<document.documentElement.clientWidth<991) { 
          cards[i].info = cards[i].info.slice(0,110) + "..."
          cards[i].title = cards[i].info.slice(0,20) + "..." 
      }
  }

   

  const DocInfo = [ 
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Statut Sindikata SKupstine Crne Gore",
      image: pdfdownload,
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Pravilnik o organizaciji izbora za predsjednika SKupstine, Izvrsnog Odbora i Generalnog sekretara.",
      image: pdfdownload,
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Statut Skupstine Crne Gore, preciscena verzija",
      image: pdfdownload,
    },
    {
      download: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
      title: "Ustav Crne Gore",
      image: pdfdownload,
    },

  ]

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



  return (
    <div className='HomePage__container'>

        <ImageSlider slides={slides} />
        <div className='PageContainerGrid-main'>
            <div className='PageContainerGrid'>
                <div className='PageContainerGrid__bigger'>
                    <div className='flex-col'>
                        <h1>NAJNOVIJE VIJESTI</h1>
                        <div className='flex-row'>

                            {cards.map((card) => 
                                <FeaturedNewsCard key={card.title} 
                                                  url={card.url} 
                                                  title={card.title}
                                                  info={card.info} 
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
                                  <div className='HomePage__doc-button__container'>
                                    <motion.div 
                                                animate={{scale: ButtonHovered? [1,.5,1] : 1}} 
                                                transition={{duration: .2}}
                                                className='HomePage__doc-motion border-right' 
                                                onMouseEnter={()=>ToggleButtonHovered(true)}
                                                onMouseLeave={()=>ToggleButtonHovered(false)}
                                                >
                                        <Link className='HomePage__doc-button'>Vidi više</Link>
                                    </motion.div>
                                    <motion.div 
                                                animate={{scale: ButtonHovered1? [1,.5,1] : 1}}  
                                                className='HomePage__doc-motion'
                                                transition={{duration: .2}}
                                                onMouseEnter={()=>ToggleButtonHovered1(true)}
                                                onMouseLeave={()=>ToggleButtonHovered1(false)}
                                                >
                                        <Link className='HomePage__doc-button'>Aktuelnosti</Link>
                                    </motion.div>
                                      
                                  </div>
                                  
                            </div>

                      </div>
                </div>
            </div>
        

        </div>

        <div className='PageBreaker'>
            <h1>Organi Sindikata Skuštine Crne Gore</h1>                        
        </div>

            {/* NEXT SECTION IN HOMEPAGE  */}

        <div className='PageContainerGrid maxWidth'>

          {/* LEFT PART  */}

          <div className="PageContainerGrid__half-container__withHeader">
              <h1 className='padding-bottom-small'>BIVŠI PREDSJEDNICI</h1>
              <div className='PageContainerGrid__half-container'>
                    {StaffInfo.map((person, index)=> 
                        <StaffCard key={index} staff={person} />
                    )}
              </div>
          </div>

          {/* RIGHT PART  */}

          <div className="PageContainerGrid__half-container__withHeader">
              <h1 className='padding-bottom-small'>IZVRŠNI ODBOR</h1>
              <div className='PageContainerGrid__half-container'>
                    {StaffInfo.map((person, index)=> 
                        <StaffCard key={index} staff={person} />
                    )}
              </div>
          </div>
          

        </div>

      



    </div>
      

       

    </div>
  )
}

export default HomePage