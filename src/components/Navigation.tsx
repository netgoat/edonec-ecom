import React  from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector  } from 'react-redux'
import {RootState} from '../store/reducers'
import { Link } from "react-router-dom";

export function Navigation() {
  const count = useSelector((state:RootState) => state.cart.items.length)

  return (
    <div className="Navigation">
      <div className="logo">
        <span>SHOPMATE</span>
      </div>
      <div className="links">
        <Link to="/shop">Women</Link>
        <Link to="/shop">Men</Link>
        <Link to="/shop">Kids</Link>
        <Link to="/shop">Shoes</Link>
        <Link to="/shop">Brands</Link>
       </div>
      <div className="search">
        <div className="searchBoox"></div>
      </div>
      <Link to="/cart">
      <div className="cart-menu">
        <AiOutlineShopping className="cart-icon" />
        <span className="cart-items-count">
          <span>{count}</span>
        </span>
      </div>
      </Link>

    </div>
  );
}
