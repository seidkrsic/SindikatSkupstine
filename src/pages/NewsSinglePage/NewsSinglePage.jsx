import {React, useState} from 'react'
import "../NewsSinglePage/NewsSinglePage.css"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import NewsGallery from '../../components/NewsGallery/NewsGallery'


const NewsSinglePage = () => {


    const slides1 = [ 
        {
          url: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
        },
        {
          url: "https://e0.pxfuel.com/wallpapers/856/284/desktop-wallpaper-new-york-city-wide-8k-laptop-full-background-and-new-york-1920x1080.jpg",
        },
       
      ]

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

      const News = {
          url: 'https://themes.wplook.com/html/benevolence/images/slider/slider1.jpg',
          info: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
          title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", 
          date: "19.02.2023",
          category: "Predsjednik",
          photo_archive: slides1, 
        }
    
    

    

  return (
        <div className='SingleNewsPage__container-main'>
            <HeaderPhoto page_name={"Vijesti"} />
            <div className='SingleNewsPage__container'>
                <div className='SingleNewsPage__container-left'>

                    <div className='SingleNewsPage__news-container'>
                        <div className='SingleNewsPage__img-container'>
                            <img src={News.url} alt="" />
                            <div className='SingleNewsPage__small-info'>
                                <p>{News.date}</p>
                                <h3>{News.category}</h3>
                            </div>
                        </div>
                        <div className='SingleNewsPage__info-container'>
                            <h1>{News.title}</h1>
                            <p>{News.info}</p>
                            
                        </div>


                         
                            <div className='SinglePageNews__photoGallery-container'>

                                {News.photo_archive?
                                    <>
                                        <h1 className='GalleryFont-header'>Galerija</h1>
                                        <NewsGallery slides={News.photo_archive} />
                                    </>
                                    
                                    : <> </>
                                }
                            </div> 
                        
                    
                        
                    </div>                


                </div>
                
                <div className='SingleNewsPage__container-right'>
                    <Categories categories={CategoriesInfo} title={"Kategorije Vijesti"} />
                </div>

            </div>
        </div>
  )
}

export default NewsSinglePage