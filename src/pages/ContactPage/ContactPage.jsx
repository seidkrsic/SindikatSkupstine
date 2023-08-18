import React from 'react'
import "./ContactPage.css"
import { Link } from 'react-router-dom'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'


const ContactPage = () => {

    const sector = { 
        phone: "+382 68 111-222", 
        email: "sindikat@skupstina.me", 
        title: "Odjeljenje za odnose sa Javnošću",
    }


  return (
    <div className='Contact__container-main'>
        <HeaderPhoto page_name={"Kontakt"}  />
        <div className='Contact__container'>
            <div className='Contact__info-container'>
                <h5>{sector.title}</h5>
                <p>Telefon <Link>{sector.phone}</Link></p>
                <p>Mejl <Link>{sector.email}</Link></p>
            </div>

            <div className='Contact__info-container'>
                <h5>{sector.title}</h5>
                <p>Telefon <Link>{sector.phone}</Link></p>
                <p>Mejl <Link>{sector.email}</Link></p>
            </div>
            
        </div> 
        

    </div>
  )
}

export default ContactPage