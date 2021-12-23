 import React, { useState, useEffect } from "react";
import api from "../services/api";

export function Filter() {

    let [colors, setColors] = useState([]);
    let [sizes, setSizes] = useState([]);
   
    useEffect(() => {
     
      api.products.getAttributeList(1).then(response => setSizes(response.data) );
      api.products.getAttributeList(2).then(response => setColors(response.data) );
    }, []);

    return (
        <div className="filter">
            <div className="filter-param">
                
            </div>
          <div className="filter-form">
          <div className="item-color ">
          <label htmlFor="">Color</label>
          <div className="item-color-list">
            {colors.map((color) => (
              <span
                className="item-color-preview"
                style={{ backgroundColor: color.value }}
              ></span>
            ))}
          </div>
        </div>
        <div className="item-size ">
          <label htmlFor="">Size</label>
          <div className="item-size-list">
            {sizes.map((size) => (
              <span className="item-size-preview">                
                {size.value} 
              </span>
            ))}
          </div>
        </div>
  
          </div>
          <div className="filter-footer">
              <button>Apply</button>
          </div>
       </div>
    )
}