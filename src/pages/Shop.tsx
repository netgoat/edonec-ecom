import React from 'react';
 import { CardGrid } from '../components/Card-grid';
 import { Filter } from '../components/Filter';
 

const Shop = () =>  {
 
    return (
      <div className="shop" >
        <Filter/>
       <CardGrid/>
      
      </div>
    );
  }
 

export default Shop;
