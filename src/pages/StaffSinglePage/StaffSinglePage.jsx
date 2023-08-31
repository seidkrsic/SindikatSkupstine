import React, { useContext, useState } from 'react'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import "../StaffSinglePage/StaffSinglePage.css"
import { Link } from 'react-router-dom'
import StaffCard from '../../components/StaffCard/StaffCard'
import Categories from '../../components/Categories/Categories'
import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const StaffSinglePage = () => {

    let CategoriesInfo;
    const {lang} = useContext(AuthContext)

    if (lang === "latin") { 
        CategoriesInfo = [ 
            { 
                name: "Izvršni odbor",
                path: "/staff/izvrsniodbor"
            },
            { 
                name: "Bivši Predsjednici",
                path: "/staff/predsjednici"
            },
            {
                name: "Statutarna Komisija",
                path: "/staff/komisija"
            },
        ]
    }

    else { 
        CategoriesInfo = [
            {
                name: "Извршни одбор",
                path: "/staff/izvrsniodbor"
            },
            {
                name: "Бивши Предсједници",
                path: "/staff/predsjednici"
            },
            {
                name: "Статутарна Комисија",
                path: "/staff/komisija"
            },
        ];
    }

    const [staff, setStaff] = useState({})
    const location = useLocation().pathname
    const location_id = useParams().id
    
      
  

    useEffect(() => {

        if (location.includes("predsjednik")) { 

            const getProfile = async () => { 
                const response = await fetch(`http://127.0.0.1:8000/api/getPresident/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setStaff(data)

            } 
            getProfile()
        } else if (location.includes("zamjenik")) { 
            const getProfile = async () => { 
                const response = await fetch(`http://127.0.0.1:8000/api/getVicePresident/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setStaff(data)

            } 
            getProfile()
        } else if (location.includes("Sekretar")) { 
            const getProfile = async () => { 
                const response = await fetch(`http://127.0.0.1:8000/api/getSecretary/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setStaff(data)

            } 
            getProfile()

        } else { 
            const getProfile = async () => { 
                const response = await fetch(`http://127.0.0.1:8000/api/getProfile/${location_id}/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setStaff(data)

            } 
            getProfile()


           
        } 
    
       
    

    }, [location]);


  return (
    <div className='StaffSinglePage__container-main'>
        <HeaderPhoto page_name={lang === "latin" ? staff?.name : staff?.name_cyrillic} />
        <div className='StaffSinglePage__container'>

            <div className='StaffSinglePage__container-left'>
                <h2>{ lang === "latin" ? "Biografija": "Биографија"}</h2>
                <p>{lang === "latin" ? staff?.bio : staff?.bio_cyrillic}</p>
                <div>
                    <div>{lang === "latin" ? "Telefon:" : "Телефон:"}<Link>{staff?.phone}</Link></div>
                    <div>{lang === "latin" ? "Mejl:" : "Мејл:"} <Link>{staff?.email}</Link></div>
                </div>
             
            </div>
            <div className='StaffSinglePage__container-right'>
                <div className='StaffSinglePage__card-container'>
                    {staff.active_role  && <StaffCard staff={staff} role={lang === "latin" ? staff.active_role[0] :  staff.active_role[1] } />}
                  
                </div>
                
            </div>

        </div>
        <h1 className='StaffSinglePage__categorier-headerSpecial'>{lang === "latin" ? "Kategorije" : "Категорије"}</h1>
        <Categories categories={CategoriesInfo} />
        
    </div>
  )
}

export default StaffSinglePage