import React,{useState} from 'react';

const CartItem = () => {
    let [quantity, setquantity] = useState(0);

 
    return ( <>
    
                  
    <div className="cart-item">
        <div className="item-img">
            <img src="https://picsum.photos/150" alt="" />
        </div>
        <div className="item-info">
            <label htmlFor="">Label</label>
            <span>Category</span>
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
            <label htmlFor="">150DT</label>
       
        </div>
        </div>
        
        </>);
    
}
export default CartItem;