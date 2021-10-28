import "../../css/ProductDetail.css";
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartDispatch } from "./Router";

import ImgCarousel from "./ImgCarousel";

const MAX_ITEMS = 10;

function ProductDetail(props) {
  const dispatch = useContext(CartDispatch);

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
    q = parseInt(e.target.value);  

    if (q >= MAX_ITEMS) {
      q = MAX_ITEMS;
    } else if (q <= 1) {
      q = 1;
    } 
    setQuantity(q);
  }

  function addToCart(ev) {
    ev.preventDefault();

    // brand name, cover-image, quantity, price.

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
    <section>
      <h1 className="product-title">{details.brand} {details.name}</h1>
      <ImgCarousel images={images} />
      <p className="price">${details.price}</p>
      <form>
        <div>
          <button type="button" className="decrement" onClick={decrement}>-</button>
          <input  type="number" className="item-quantity" onChange={onChangeQuantity} value={quantity} min="1" max="10"/>
          <button type="button" className="increment" onClick={increment}>+</button>
        </div>
        <button type="submit" onClick={addToCart}>Add to Cart</button> 
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