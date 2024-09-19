import React from 'react'
import ItemList from './ItemList'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const CArt = () => {
    const addedCartItems = useSelector((appStore)=>{return appStore.cart.itemsList});
    const dispatch = useDispatch();
    const handleclearCart = ()=>{
        dispatch(clearCart())
    }
    console.log(addedCartItems);
  return (
    <div>
        <h1 className='header-cart'>Cart</h1>
        
        <div className='cart-container'>
            <ItemList data={addedCartItems}/>
            <button onClick={handleclearCart}>Clear Cart</button>
            {addedCartItems.length==0 && <h1>Cart is Empty!</h1>}
        </div>
    </div>
  )
}

export default CArt