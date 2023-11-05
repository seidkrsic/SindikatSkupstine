import React, { useContext, useState, useEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import AuthContext from '../../Context/AuthContext';
import "./LawsPage.css" 
import { useLocation } from 'react-router-dom';
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto';
import pdfdownload from "../../images/pdf.png";

const LawsPage = () => {
  
  const { lang } = useContext(AuthContext);
  const location = useLocation().pathname;
  let filter;

  const [documents, setDocuments] = useState([]);
  let CategoriesInfo;



  if (lang === "latin") {
    CategoriesInfo = [
      {
        name: "",
        path: "/zakoni/izvrsniodbor",
      },
      {
        name: "",
        path: "/zakoni/predsjednici",
      },
      {
        name: "",
        path: "/zakoni/nadzorni odbor",
      },

    ];
  } else {
    CategoriesInfo = [
      {
        name: "Извршни одбор",
        path: "/saziv/izvrsniodbor",
      },
      {
        name: "Бивши предсједници",
        path: "/saziv/predsjednici",
      },
      {
        name: "Надзорни одбор",
        path: "/saziv/nadzorniodbor",
      },
      
    ];
  }

  const getDocuments = async () => { 
        
        if (location.includes("akti_sindikata")) { 
            filter = "legislation"
        } else if (location.includes("opsti_akti")) { 
            filter = "laws"
        } else if (location.includes("formulari")) { 
            filter = "regulations"
        }

        const response = await fetch(
            `http://apisindikat.skupstina.me/api/allDocuments/?name=${filter}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          let data = await response.json();
          if (response.ok) { 
            setDocuments(data)
          } else { 
              setDocuments([])
          }
     


  }


  useEffect(() => {
    window.scrollTo(0, 0);
    getDocuments()
    
  }, [location]);

  return (
    <div className='LawsPage__main-container'>
        <HeaderPhoto
        page_name={
          lang === "latin" ? "Zakoni i propisi" : "Zakoni i propisi"
        }
        image_url={null}
      />
    <div className='LawsPage__container'>
        <h1>{filter}</h1>
        <div className='LawsPage__left-container'>
            <div className='LawsPage__document-container'>
            {
                documents.map( (item) => 
                <a
                    href={item?.download_link}
                    key={item?.id}
                    className=""
                    >
                    <img src={pdfdownload} alt="pdf" />
                    <div className="LawsPage__text-container">
                        <p>{lang === "latin" ? item?.title : item?.title_cyrillic}</p>
                        {/* <p className="">{item?.created_eu_time}</p> */}
                    </div>
                </a>
                )
                
            }
            </div>

            
        </div>

        <div className='LawsPage__right-container'>
            {/* <Categories /> */}
        </div>
    </div>

    </div>
  )
}

export default LawsPage