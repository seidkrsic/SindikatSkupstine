import React, { useContext, useState } from 'react'
import "../StaffPage/StaffPage.css"
import StaffCard from '../../components/StaffCard/StaffCard'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'


const StaffPage = () => {
    
    const [staff, setStaff] = useState([])
    const {lang} = useContext(AuthContext)
    useEffect(()=> { 
        window.scrollTo(0, 0); 

    }, [])

    let CategoriesInfo;

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

    const location_id = useLocation().pathname
    const [role, setRole] = useState('')
    const [roleHeader, setRoleHeader] = useState('')
    

   

    useEffect(() => { 

        if (location_id.includes("izvrsniodbor")){ 
            const getStaff = async () => { 

                const response = await fetch(`http://127.0.0.1:8000/api/getBoardMembers/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setRole(lang === "latin" ? "Izvršni Odbor": "Извршни Одбор")
              setRoleHeader(lang === "latin" ? "Izvršni Odbor": "Извршни Одбор")
          
              setStaff(data)
              
            } 
            getStaff()

        }
        else if (location_id.includes("komisija")) { 
            const getStaff = async () => { 

                const response = await fetch(`http://127.0.0.1:8000/api/getCommission/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setRole( lang === "latin" ? "Statutarna Komisija" : "Статутарна Комисија")
              setRoleHeader(lang === "latin" ? "Statutarna Komisija" : "Статутарна Комисија")
              setStaff(data)
              
            } 
            getStaff()

        } else { 
            const getStaff = async () => { 

                const response = await fetch(`http://127.0.0.1:8000/api/getPresidents/`, { 
                  method: "GET", 
                  headers: {"Content-Type" : "application/json"}
        
              })
              let data = await response.json() 
              setRole(lang === "latin" ? "Bivši Predsjednik": "Бивши Предсједник")
              setRoleHeader(lang === "latin" ? "Bivši Predsjednici": "Бивши Предсједници")
              setStaff(data)
              
            } 
            getStaff()

        }
        
        

    }, [location_id]);

  return (

    <div className='StaffPage__container-Big'>

        <HeaderPhoto page_name={roleHeader} />
   

        <div className='StaffPage__container'>
            
            <div className='StaffPage__staff-main'>
                <div className='StaffPage__staff-left'>
                    {staff?.map((person)=> 
                                <StaffCard key={person.id} staff={person} role={role} />
                            )}
                </div>
                <div className='StaffPage__staff-right'>
                    
                    <Categories categories={CategoriesInfo} title={lang === "latin" ? "Kategorije": "Категорије"} />
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default StaffPage