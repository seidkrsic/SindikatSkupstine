import React, { useContext } from 'react'
import "./ContactPage.css"
import { Link } from 'react-router-dom'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import { useEffect } from 'react'
import logo from "../../images/Artboard.png"
import AuthContext from '../../Context/AuthContext'

const ContactPage = () => {

    const {lang} = useContext(AuthContext)

    let sector;

    if (lang === "latin") { 
        sector = { 
            phone: "+382 68 111-222", 
            email: "sindikat@skupstina.me", 
            title: "Odjeljenje za odnose sa Javnošću",
        }

    } else { 
        sector =  {
            phone: "+382 68 111-222",
            email: "синдикат@скупштина.ме",
            title: "Одељење за односе са Јавношћу",
        }

    }
 
    useEffect(() => {
        
        window.scrollTo(0, 0); 

    }, []);


  return (
    <div className='Contact__container-main'>
        <HeaderPhoto page_name={ lang === "latin" ? "Kontakt" : "Контакт"}  />
        <div className='Contact__container'>

            <div className='Contact__info-container'> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.424293841211!2d19.257811875668885!3d42.4399876711856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb4808ff6f23%3A0xad6daae286de4eb0!2sParliament%20of%20Montenegro!5e0!3m2!1sen!2s!4v1693400311580!5m2!1sen!2s" 
                width="400" height="313" 
                // style="border:0;" 
                allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


         
       
        <div className='Contact__info-container-right'>
            <img src={logo} alt="" />
            <h5>{sector.title}</h5>
            <p>{lang === "latin" ? "Phone" : "Телефон"} <Link>{sector.phone}</Link></p>
            <p>{lang === "latin" ? "Email" : "Мејл"} <Link>{sector.email}</Link></p>
        </div>
            
        </div> 
        

    </div>
  )
}

export default ContactPage