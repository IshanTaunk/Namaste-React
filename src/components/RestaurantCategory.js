import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({category,showItems,clickItem}) => {
    const {title} = category;
    const handleClick=()=>{
        clickItem();
    }

  return (
    <div className='text-left w-50 category'>
        <div className='category-header' onClick={handleClick}>
            <h2>{title} ({category.itemCards.length})</h2>
            <span>Down</span>
        </div>
        {showItems && <ItemList data={category.itemCards} key={category.title}/>}
       
    </div>
  )
}

export default RestaurantCategory