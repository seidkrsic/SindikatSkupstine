import React from 'react'
import "./DocumentHome.css" 
import { Link } from 'react-router-dom'




const DocumentHome = ({document}) => {
  return (
    <div className='Document__container'>
        <img src={document.image} alt="" />
        
        <div className='Document__container-info'>
          <Link to={document.download}>
              {document.title}  
          </Link>
          <p>{document.date}</p>
        </div>
        
    </div>
  )
}

export default DocumentHome