import "../../css/ProductDetail.css";
import "../../css/ItemQuantity.css";
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext, CartDispatch } from "./Router";

import ImgCarousel from "./ImgCarousel";
import ItemQuantity from "./ItemQuantity";

import { MAX_ITEMS } from "./Router";

function ProductDetail(props) {
  const dispatch = useContext(CartDispatch);
  const cart = useContext(CartContext);

  let details = useLocation()["state"]["details"];
  let images = useLocation()["state"]["images"];


  function addToCart(ev) {
    console.log("adding to cart...");
    ev.preventDefault();

    if (details.imgdir in cart && cart[details.imgdir]["quantity"] >= MAX_ITEMS) {
      alert(`Error: Item limit of ${MAX_ITEMS} reached for this product.`);
      //!
      // TODO
      // This is where you put a modal showing that the max number of items was reached.
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
          {/*!!! Input number cannot be edited. Good. */}
          {/*!!! After adding to cart, delay with a timeout for 3 seconds this timer. */}
          {/*Then, replace this with Go to Cart with a Link.... */}
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