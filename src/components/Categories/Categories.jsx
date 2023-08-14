import React from 'react'
import "../Categories/Categories.css"



const Categories = ({categories, title}) => {

        console.log(categories)
  return (
    <div className='Categories__main-container'>
        <h1 className='Categories__heading'>{title}</h1>
        <div className='Categories__container'>
            {categories.map(category => (
                <p key={category.id}>{category.name}</p>
            ))}
         
        </div>
    </div>
  )
}

export default Categories