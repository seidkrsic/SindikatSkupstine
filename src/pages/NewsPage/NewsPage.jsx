import React from 'react'
import "../NewsPage/NewsPage.css"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'
import FeaturedNewsCard from '../../components/FeaturedNewsCard/FeaturedNewsCard'
import { useEffect } from 'react'

const NewsPage = () => {

    const CategoriesInfo = [ 
      {id: 101, 
      name: "Predsjednik",
      },
      {id: 102, 
          name: "Zamjenik Predsjednika",
      },
      {id: 103, 
          name: "Generalni Sekretar",
      },
    ]

    const cards = [
      {
        url: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        title: "We cant always see where the road leads, We cant always see where the road leads We cant always see where the road leads",
        info: "No matter where you are in life, there is a place for you at our church.No matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our churchNo matter where you are in life, there is a place for you at our church",
        date: "19.02.2023",
        id: 1123,
      },
      {
        url: "https://static.vecteezy.com/system/resources/previews/022/875/505/original/smart-city-and-big-data-concept-futuristic-cityscape-at-night-with-neon-colors-city-infrastructure-hologram-created-with-generative-ai-free-photo.jpg",
        title: "We cant always see where the road leads We cant always see where the road leads, We cant always see where the road leads We cant always see where the road leads  ",
        info: "but god promises theres something better up ahead we just have to trust him",
        date: "19.02.2023",
        id: 3434,
      },
      {
        url: "https://wallpaperaccess.com/full/4983594.jpg",
        title: "We cant always see where the road leadsasfsfs",
        info: "but god promises theres something better up ahead we just have to trust him",
        date: "19.02.2023",
        id: 12121212,
      },

    ]

    for (let i in cards) { 
    if (window.innerWidth<767) {
        cards[i].title = cards[i].title.slice(0,100)  
      
    } 
    else if (768<window.innerWidth<991) { 
        
        cards[i].title = cards[i].title.slice(0,61)
    }
    else if (window.innerWidth > 991) { 
        
        cards[i].title = cards[i].title.slice(0,81)
    }
    }

    useEffect(() => {
        
      window.scrollTo(0, 0); 

    }, []);




  return (
    <div className='NewsPage__container-main'>
        <HeaderPhoto page_name={"Aktuelnosti"} />
        <div className='NewsPage__container'>
            <div className='NewsPage__container-left'>
                {cards.map((card, index) => 
                    <FeaturedNewsCard key={card.title+index} 
                                      url={card.url} 
                                      title={card.title}
                                      date={card.date} 
                                      id={card.id}
                    />
                                  
                    )}
            </div>
            
            <div className='NewsPage__container-right'>
                <Categories categories={CategoriesInfo} title={"Kategorije Vijesti"} />
            </div>

        </div>
    </div>
  )
}

export default NewsPage