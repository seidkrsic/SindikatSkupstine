import React from 'react'
import "./Footer.css" 
import { Link } from 'react-router-dom'
import logo from "../../images/Artboard.png"


const Footer = () => {
  return (
    <div className='Footer__container'>
        <div className='Footer__container-top'>
            <div className='Footer__container-top__col footer_center'>
                <div className='Footer__image-container'>
                  <img src={logo} alt="" />
                  <div className='Footer__info-container'>
                    <p>©2023 Sindikat Skupštine Crne Gore</p>
                    <p>Sva prava zadržana.</p>
                  </div>
                </div>
            </div>
            <div className='Footer__container-top__bigCol'> 
                <div className='Footer__container-top__col'>
                    <h1>Dokumenta</h1>
                    <Link>Statut Sindikata</Link>
                    <Link>Poslovnik o Radu</Link>
                    <Link>Ustav Crne Gore</Link>
                </div>
                <div className='Footer__container-top__col'>
                <h1>Materijali</h1>
                    <Link>Video Arhiva</Link>
                    <Link>Foto Arhiva</Link>
                    <Link></Link>
                </div>

            </div>
            
        </div>
        <div className='Footer__container-bottom'>
            <p>Sindikat Skupštine Crne Gore, Bulevar Svetog Petra Cetinjskog broj 10, 81000 Podgorica</p>
            <p>tel: +382 20 404 513 email: press@skupstina.me</p>
        </div>
    </div>
  )
}

export default Footer