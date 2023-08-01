import React, { useState } from 'react'
import "./StaffCard.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const StaffCard = ({staff}) => {

    const [IsHoverd,setIsHovered] = useState(false)
    const ToggleHovered = (boolean) => { 
        setIsHovered(boolean)
    }

    // style={{overflow: "hidden", border: "1px solid green"}} 
return (
    <div className='Staff__container'>
        <Link  className='Staff__img-container'>
            <motion.img  
                        animate={{scale: IsHoverd? 1.2: 1}}
                        src={staff.image} alt="staff_img" 
                        onMouseEnter={()=> ToggleHovered(true)}
                        onMouseLeave={()=> ToggleHovered(false)}
                        />

        </Link>
        
        <div className='Staff__info-container'>
            <h1>{staff.name}</h1>
            <p>{staff.role}</p>
        </div>

    </div>
  )
}

export default StaffCard