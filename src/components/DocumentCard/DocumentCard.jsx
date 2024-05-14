import React, { useContext } from 'react'
import "./DocumentCard.css" 
import pdfdownload from "../../images/pdf.png";
import AuthContext from '../../Context/AuthContext';

const DocumentCard = ({title, title_cyrillic,document_number, file_link}) => {
    const {lang} = useContext(AuthContext);
    console.log(file_link);
  return (
    <div className='DocumentCard__container'> 
        <a href={file_link}>
            <img className='DocumentCard__img' src={pdfdownload} alt="" />
            <div className='DocumentCard__text-container'>
                <h2>{lang === "latin" ? title : title_cyrillic}</h2>
                <p>{lang == "latin" ? "Broj odluke: " : "Број одлуке: " + document_number}</p>
            </div>

        </a>

    </div>
  )
}

export default DocumentCard