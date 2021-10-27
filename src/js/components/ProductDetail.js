import "../../css/ProductDetail.css";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import ImgCarousel from "./ImgCarousel";

const MAX_ITEMS = 10;

function ProductDetail(props) {
  
  let details = useLocation()["state"]["details"];
  let images = useLocation()["state"]["images"];

  let [quantity, setQuantity] = useState(1);

  function decrement(event) {
    setQuantity((prevQ) => {
      let dec = prevQ - 1;
      if (dec < 1) {
        return prevQ;
      } else {
        return dec;
      }
    });
  }

  function increment(event) {
    setQuantity((prevQ) => {
      let inc = prevQ + 1;
      if (inc > MAX_ITEMS) {
        return prevQ;
      } else {
        return inc;
      }
    });
  }

  function onChangeQuantity(e) {
    
    let q; 
    try {
      q = parseInt(e.target.value);  
    } catch (error) {
      
    }
    

    if (q >= MAX_ITEMS) {
      q = MAX_ITEMS;
      document.querySelector(".increment").disabled = true;
    } else {
      document.querySelector(".increment").disabled = false;
    }

    if (q <= 1) {
      q = 1;
      document.querySelector(".decrement").disabled = true;
    } else {
      document.querySelector(".decrement").disabled = false;
    }

    setQuantity(q);
  }

  return(
    <section>
      <h1 className="product-title">{details.brand} {details.name}</h1>
      <ImgCarousel images={images} />
      <p className="price">${details.price}</p>
      <form>
        <div>
          <button type="button" className="decrement" onClick={decrement}>-</button>
          <input type="number" onChange={onChangeQuantity} value={quantity} min="1" max="10"/>
          <button type="button" className="increment" onClick={increment}>+</button>
        </div>
        <button type="submit">Add to Cart</button> 
        {/*!!! Input number cannot be edited. Good. */}
        {/*!!! After adding to cart, delay with a timeout for 3 seconds this timer. */}
        {/*Then, replace this with Go to Cart with a Link.... */}
      </form>
      <div>
        <h2>Description</h2>
        <p className="description">
          {details.summary}
        </p>
      </div>
    </section>
  )
}

export default ProductDetail;