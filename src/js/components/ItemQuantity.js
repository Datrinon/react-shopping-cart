import React, { useEffect, useState } from 'react'

import { MAX_ITEMS } from './Router';

/**
 * A component which has a numeric input, alongside some buttons for increasing/decreasing
 * the value inside of the field. Accepts props which are:
 * @param {number} initialQuantity - The starting quantity of the field.
 * @param {function} callbackOnChange - (Optional) A callback to invoke if the quantity is changed.
 * The callback should passes back the identifier given to it in initialization.
 * @param {string} identifier - (Optional) Identifies which numeric input this component belongs to.
 * @returns JSXElement
 */
export default function ItemQuantity({initialQuantity, callbackOnChange, identifier}) {

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    if (callbackOnChange !== undefined
    && identifier !== undefined) {
      callbackOnChange(identifier, quantity);
    }
  }, [quantity]);

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
