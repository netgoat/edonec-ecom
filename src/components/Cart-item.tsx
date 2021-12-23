import React,{useState} from 'react';

const CartItem = ({product}) => {
    let [quantity, setquantity] = useState(0);

 
    return ( <>
    
                  
    <div className="cart-item">
         <div className="item-img">
        <img src={"https://backendapi.turing.com/images/products/"+product.thumbnail} alt="" />
         </div>
        <div className="item-info">
            <label htmlFor="">{product.name}</label>
            <p>{product.description}</p>
            <span>Remove <span className="remove"> x</span></span>
        </div>
        <div className="item-info">
            <label htmlFor="">XXL</label>
          
        </div>
        <div className="quantity-control">
    <button onClick={() => { (quantity > 0 ) && setquantity((quantity) => quantity - 1)  }}>
      -
    </button>

    <input defaultValue={quantity} />

    <button onClick={() => setquantity((quantity) => quantity + 1)}>
      +
    </button>
  </div>
      
        <div className="item-info">
            <label htmlFor="">{product.price}DT</label>
       
        </div>
        </div>
        
        </>);
    
}
export default CartItem;