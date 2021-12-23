 import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import   action   from "../store/actions"
import api from "../services/api";
const  ProductDetails = () =>  {
  let { product_id }: any = useParams();
  let [product, setProduct] = useState({});
  let [colors, setColors] = useState([]);
  let [sizes, setSizes] = useState([]);
  let [quantity, setquantity] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    api.products
      .findById(product_id)
      .then((response) => setProduct(response.data));
    api.products.getAttributes(product_id).then((response) => {
      setColors(
        response.data.filter((item) => item.attribute_name === "Color")
      );
      setSizes(response.data.filter((item) => item.attribute_name === "Size"));
    });
  }, []);

  const handleAddToCart = () => {
  dispatch(action.cart.add(product))
   };


  return (
    <div className="product-details">
      <div className="product-preview">
        <div className="main-img">
          <img
            src={
              "https://backendapi.turing.com/images/products/" +
              product["image"]
            }
            alt=""
          />
        </div>
        <div className="img-slider">
          <div className="slider-item">
            <img
              src={
                "https://backendapi.turing.com/images/products/" +
                product["image"]
              }
              alt=""
            />
          </div>
          <div className="slider-item">
            <img
              src={
                "https://backendapi.turing.com/images/products/" +
                product["image_2"]
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="product-informations">
        <div>nav</div>
        <div>rating</div>
        <div className="item-description ">{product["name"]}</div>
        <div className="item-description ">{product["description"]}</div>
        <div className="item-price ">{product["price"] + " DT"}</div>
        <div className="item-color ">
          <label htmlFor="">Color</label>
          <div className="item-color-list">
            {colors.map((color) => (
              <span
                className="item-color-preview"
                style={{ backgroundColor: color.attribute_value }}
              ></span>
            ))}
          </div>
        </div>
        <div className="item-size ">
          <label htmlFor="">Size</label>
          <div className="item-size-list">
            {sizes.map((size) => (
              <span className="item-size-preview">
                {" "}
                {size.attribute_value}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="item-quantity">
          <label htmlFor="">Quantity</label>
          <div className="quantity-control">
            <button onClick={() => { (quantity > 0 ) && setquantity((quantity) => quantity - 1)  }}>
              -
            </button>

            <input defaultValue={quantity} />

            <button onClick={() => setquantity((quantity) => quantity + 1)}>
              +
            </button>
          </div>
        </div>
 
 <div >
   <button className="add-to-cart-btn" onClick={ handleAddToCart}>Add to Cart</button>
 </div>
      </div>
    </div>
  );
}


export default  ProductDetails;