import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import "../../css/ProductDetail.css";
import "../../css/ItemQuantity.css";
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext, CartDispatch } from "./Router";

import ImgCarousel from "./ImgCarousel";
import ItemQuantity from "./ItemQuantity";
import Utility from "../util/utility";

import { MAX_ITEMS } from "./Router";

function ProductDetail(props) {
  const dispatch = useContext(CartDispatch);
  const cart = useContext(CartContext);

  let details = useLocation()["state"]["details"];
  let images = useLocation()["state"]["images"];
  
  const [itemLimitReached, setItemLimitReached] = useState(false);


  function addToCart(ev) {
    console.log("adding to cart...");
    ev.preventDefault();

    if (details.imgdir in cart && cart[details.imgdir]["quantity"] >= MAX_ITEMS) {
      Utility.triggerAnimation(document.querySelector(".add-to-cart"),
      "tremble");
      setItemLimitReached(true);
    }

    dispatch({
      type: "additem",
      payload: {
        productCode: details.imgdir,
        name: details.brand + " " + details.name,
        thumbnail: images[0],
        quantity: parseInt(document.querySelector(".item-quantity").value),
        price: details.price
      }
    });
  }


  return(
    <section className="product-details">
      <h1 className="product-title">{details.brand} {details.name}</h1>
      <ImgCarousel images={images} />
      <div className="product-price-desc">
        <p className="price">${details.price}</p>
        <form className="cart-form">
          <ItemQuantity initialQuantity={1} />
          <button className="add-to-cart" type="submit" onClick={addToCart}>Add to Cart</button> 
          {itemLimitReached && (
            <div className="error-message">
              <div className="error-title">
                <h1><FontAwesomeIcon icon={faExclamationCircle}/> Error: Item Limit Reached!</h1>
              </div>
              <p className="error-desc">
                You may only have a maximum of {MAX_ITEMS} of any item in a cart.
              </p>
            </div>
          )}
        </form>
        <div className="summary">
          <h2 className="title">About the {details.name}</h2>
          <p className="description">
            {details.summary}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail;