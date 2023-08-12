import React from 'react'
import "../Categories/Categories.css"



const Categories = ({categories}) => {

        console.log(categories)
  return (
    <div className='Categories__main-container'>
        <h1 className='Categories__heading'>Kategorije</h1>
        <div className='Categories__container'>
            {categories.map(category => (
                <p key={category.id}>{category.name}</p>
            ))}
         
        </div>
    </div>
  )
}

export default Categories