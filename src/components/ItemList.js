import React from 'react'

const ItemList = ({data}) => {
    console.log(data,"proop")
  return (<div>
    {data.map((item)=>{
        return (
            <div key={item.card.info.id} className='single-item'>
                <div>
                    <h4 className='marginZero'>{item.card.info.name}</h4>
                    <span className='font-xs'>₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</span>
                </div>
                <p className='item-desc'>{item.card.info.description}</p> 
            </div>
        )
    })}
    </div>
  )
}

export default ItemList