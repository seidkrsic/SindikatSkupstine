import React from 'react'
import "../StaffPage/StaffPage.css"
import { useLocation } from 'react-router-dom'
import StaffCard from '../../components/StaffCard/StaffCard'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import Categories from '../../components/Categories/Categories'


const StaffPage = () => {
    const page_name = useLocation().state

    const StaffInfo = [ 
        {
          image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
          name: "Seid Krsic", 
          role: "president", 
          id: 1,
        }, 
        {
         image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
          name: "Aleksandar Plamenac", 
          role: "vice president",
          id: 2,
        }, 
        {
            image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
            name: "Seid Krsic", 
            role: "president",
            id: 3,
          }, 
          {
           image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
            name: "Aleksandar Plamenac", 
            role: "vice president", 
            id: 4,
          }, 
    
      ]

    const CategoriesInfo = [ 
        {id: 101, 
         name: "Izvršni odbor",
        },
        {id: 102, 
            name: "Bivši Predsjednici",
        },
        {id: 103, 
            name: "Statutarna Komisija",
        },
    ]

  return (

    <div className='StaffPage__container-Big'>

        <HeaderPhoto />
   

        <div className='StaffPage__container'>
            
            <div className='StaffPage__staff-main'>
                <div className='StaffPage__staff-left'>
                    {StaffInfo.map((person, index)=> 
                                <StaffCard key={index} staff={person} />
                            )}
                </div>
                <div className='StaffPage__staff-right'>
                    
                    <Categories categories={CategoriesInfo} />
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default StaffPage