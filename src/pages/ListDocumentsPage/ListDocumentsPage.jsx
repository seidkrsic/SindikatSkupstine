import React from 'react'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import "./ListDocumentsPage.css" 
import pdfdownload from "../../images/pdf.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'



const ListDocumentsPage = () => {

    const documents =  [
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
            {
                id: 22212, 
                title: "Statut Sindikata Skupstine", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Izvjestaj za 2023 godinu / FInansijski izvjestaj za organizaciju poslova za Izvrsni odbor i ambasade Crne Gore po svijetu.", 
                created: "20.12.2022",
            },
        ]

    useEffect(() => {
    
        window.scrollTo(0, 0); 

    }, []);


  return (
    <div className='ListDocumentsPage__container-main'>
        <HeaderPhoto page_name={"Izvještaji i dokumenta"} />
        <div className='ListDocumentsPage__container'>
            {
            documents.map((item, index) => 
                <Link key={index} className='ListDocumentsPage__document-container'>
                    <img src={pdfdownload} alt="pdf" />
                    <div className='ListDocumentsPage__text-container'>
                        <p>{item.title}</p>
                        <p className='dateFont'>{item.created}</p>
                    </div>
                    
                </Link>
            
            )}
          
        </div>

    </div>
  )
}

export default ListDocumentsPage