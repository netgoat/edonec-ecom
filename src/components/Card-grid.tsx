import React, {useState,useEffect } from "react";

import api from '../services/api';
import { Card } from './Card';
export function CardGrid() {

const [products, setproducts] = useState([]);

useEffect(() => {
api.products.findAll().then( response => setproducts(response.data.rows))
    },[])
    

    return (
        <div className="card-grid">
 
          
            {
              products.map(product=>( <Card product={product}/> ))
            }
         
    
       </div>
    )
}