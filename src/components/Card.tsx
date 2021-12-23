import React from 'react';
import { Link } from "react-router-dom";

export function Card({product}) {
    return (
        <Link to={"/shop/"+product.product_id}>
             <div className="card">
            <img src={"https://backendapi.turing.com/images/products/"+product.thumbnail} alt="" />
            <div className="title">{product.name}</div>
            <div className="price">{product.price} DT</div>
            <button>Buy now</button>
       </div></Link>

   
    )
}