import React, { useState } from 'react'

export default function ItemQuantity({MAX_ITEMS}) {

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

  return (
    <div className="item-quantity-adjust">
      <button type="button" className="decrement" onClick={decrement}>-</button>
      <input type="number" className="item-quantity" onChange={onChangeQuantity} value={quantity} min="1" max="10" />
      <button type="button" className="increment" onClick={increment}>+</button>
    </div>
  )
}
