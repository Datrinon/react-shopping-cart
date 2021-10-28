import { useContext } from 'react';
import '../../css/Cart.css';
import ItemQuantity from './ItemQuantity';
import { CartContext, CartDispatch } from './Router';

// use the cart state to output items
// use the cart dispatch function to modify the cart
// we should be able to adjust quantity and remove items.


function Cart() {

  const dispatch = useContext(CartDispatch);
  const cart = useContext(CartContext);

  function removeCartItem(event) {
    event.preventDefault();
    
    dispatch({
      type: "deleteItem",
      payload: {
        productCode: event.target.dataset.sku
      }
    });
  }

  function getCartTotal() {
    return Object.keys(cart).reduce((total, sku) => {
      total += cart[sku]["price"] * cart[sku]["quantity"];
      return total;
    }, 0);
  }

  function onQuantityChange(sku, quantity) {
    if (isNaN(quantity)) {
      return;
    }
    
    dispatch({
      type: "editItemQuantity",
      payload: {
        productCode: sku,
        quantity: quantity
      }
    });
  }

  function enumerateCartItems() {
    return Object.keys(cart).map(sku => {
      const item = cart[sku];

      return (
        <div 
          key={item.productCode}
          className="cart-item">
          <img
            className="product-pic"
            src={item.thumbnail}
            alt={`Side view of the ${item.name}`}
          />
          <div>
            <h2 className="product-name">{item.name}</h2>
            <p className="product-price">${item.price}</p>
            <form onSubmit={removeCartItem} data-sku={item.productCode}>
              <ItemQuantity
                initialQuantity={item.quantity}
                callbackOnChange={onQuantityChange}
                identifier={item.productCode}
                />
              <button>
                Remove
              </button>
            </form>
          </div>
        </div>
      );
    });

  }

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      <div className="items">
        {enumerateCartItems()}
      </div>
      <div>
        <p>Total: {getCartTotal()}</p>
        <button disabled>Go to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
