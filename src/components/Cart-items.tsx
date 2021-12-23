import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../store/reducers'
import CartItem from './Cart-item'

 const CartItems = ( ) => {
    const items = useSelector((state:RootState) => state.cart.items)


    return (
    
        <div className="cart-items">

            {
              items.map(item => ( <CartItem product={item}/> ))
            }
         

            
      
        </div>);

}
 
export default CartItems;