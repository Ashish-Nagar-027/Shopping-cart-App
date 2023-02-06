import React from 'react'

const Categories = ({categories, currentCategory, setCurrentCategory}) => {
  return (
    <div className='category-section'>
    {
      categories.map((category,index) => {
        let categoryClass = 'category'

        if(category === currentCategory) {
          categoryClass = 'category active-category'
        }
        
        return <span key={index} className={categoryClass} onClick={() =>setCurrentCategory(category)}>{category}</span>
      })
    }
  </div>
  )
}

export default Categories