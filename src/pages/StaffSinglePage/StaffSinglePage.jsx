import React from 'react'
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import "../StaffSinglePage/StaffSinglePage.css"
import { Link } from 'react-router-dom'
import StaffCard from '../../components/StaffCard/StaffCard'
import Categories from '../../components/Categories/Categories'

const StaffSinglePage = () => {

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

    const member = {
                    image: "https://themes.wplook.com/html/benevolence/images/staff-4.jpg", 
                    name: "Aleksandar Plamenac", 
                    role: "vice president", 
                    phone: "+38268619730",
                    email: "plamenac@gmail.com",
                    bio: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
                    id: 4,
                }


  return (
    <div className='StaffSinglePage__container-main'>
        <HeaderPhoto />
        <div className='StaffSinglePage__container'>

            <div className='StaffSinglePage__container-left'>
                <h2>Biografija</h2>
                <p>{member.bio}</p>
            </div>
            <div className='StaffSinglePage__container-right'>
                <div className='StaffSinglePage__card-container'>
                    
                    <StaffCard staff={member} />
                    <div className='StaffSinglePage__card-info__container'>
                        <p className='border-bottom__onlyOneElement'>Phone <Link>{member.phone}</Link></p>
                        <p>Email <Link>{member.email}</Link></p>
                    </div>
                </div>
                <Categories categories={CategoriesInfo} />
            </div>

        </div>
        
    </div>
  )
}

export default StaffSinglePage