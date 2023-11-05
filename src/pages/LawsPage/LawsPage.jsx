import React, { useContext, useState, useEffect } from 'react'
import Categories from '../../components/Categories/Categories'
import AuthContext from '../../Context/AuthContext';
import "./LawsPage.css" 
import { useLocation } from 'react-router-dom';
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto';

const LawsPage = () => {
  
  const { lang } = useContext(AuthContext);
  const location = useLocation().pathname;

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
        let filter;
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
          console.log(data);


  }


  useEffect(() => {
    window.scrollTo(0, 0);
    getDocuments()
    
  }, []);

  return (
    <div className='LawsPage__main-container'>
        <HeaderPhoto
        page_name={
          lang === "latin" ? "Zakoni i propisi" : "Zakoni i propisi"
        }
      />
    <div className='LawsPage__container'>
        <div className='LawsPage__left-container'>
            <h1>DOKUMENTA</h1>
            <div>

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