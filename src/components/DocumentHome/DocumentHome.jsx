import React from 'react'
import "./DocumentHome.css" 
import { Link } from 'react-router-dom'




const DocumentHome = ({document}) => {
  return (
    <div className='Document__container'>
        <img src={document.image} alt="" />
        <Link to={document.download}>
            {document.title.length > 30? document.title.slice(0,30)+"..." : document.title }
        </Link>
    </div>
  )
}

export default DocumentHome