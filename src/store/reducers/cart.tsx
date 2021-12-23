import * as actionTypes from "../actionTypes";

 
 const INITIAL_STATE = {
   
    items: [],
    totalSum: 0
   };

const cartReducer = (state = INITIAL_STATE, action) =>{

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
               
          // Check if Item is in cart already
          const inCart = state.items.find((item) =>
            item.id === action.payload.product_id ? true : false
          );
    
          return {
            ...state,
            items: inCart
              ? state.items.map((item) =>
                  item.id === action.payload.product_id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.items, { ...action.payload, qty: 1 }],
          };
       
        default:
          return state;
      }

}

export default cartReducer;