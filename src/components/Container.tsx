import React, { useState } from 'react';
 import { Route, Switch } from 'react-router-dom';
import   ProductDetails   from '../pages/Product-Details';
import   Cart   from '../pages/Cart';
import Shop from '../pages/Shop';
 
 
export function Container() {
 

    return (
        <div className="container">
 
 <Switch>
     <Route exact={true} path="/shop" component={Shop} />
      <Route exact={true} path="/shop/:product_id" component={ProductDetails} />
      <Route exact={true} path="/cart" component={Cart} />

  </Switch>

       </div>
    )
}