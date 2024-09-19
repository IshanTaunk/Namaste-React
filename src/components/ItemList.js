import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ItemList = ({data}) => {
    //console.log(data,"proop");
    const dispatch = useDispatch();
    const handleClick = (item)=>{
        dispatch(
            addItems(item)
        )
    }
  return (<div>
    {data.map((item)=>{
        return (
            <div key={item.card.info.id} className='single-item' data-testid="menuItem">
                <div>
                    <h4 className='marginZero'>{item.card.info.name}</h4>
                    <span className='font-xs'>₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</span>
                </div>
                <p className='item-desc'>{item.card.info.description}</p>
                <div>
                    <button onClick={()=>handleClick(item)}>Add +</button>
                </div> 
            </div>
        )
    })}
    </div>
  )
}

export default ItemList