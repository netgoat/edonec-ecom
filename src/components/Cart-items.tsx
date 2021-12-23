import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../store/reducers'

 const CartItems = ( ) => {
    const items = useSelector((state:RootState) => state.cart)


    return (
    
        <div className="cart-items">

           {
               JSON.stringify(items)
           }
      
        </div>);

}
 
export default CartItems;