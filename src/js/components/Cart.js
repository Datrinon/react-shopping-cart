import { useContext } from 'react';
import '../../css/Cart.css';
import ItemQuantity from './ItemQuantity';
import { CartContext } from './Router';

// use the cart state to output items
// use the cart dispatch function to modify the cart
// we should be able to adjust quantity and remove items.


function Cart() {

  const cart = useContext(CartContext);

  function onCartItemModify(event) {
    event.preventDefault();
  }

  function getCartTotal() {
    return Object.keys(cart).reduce((total, sku) => {
      total += cart[sku]["price"] * cart[sku]["quantity"];
      return total;
    }, 0);
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
            <form onSubmit={onCartItemModify}>
              <ItemQuantity initialQuantity={item.quantity} />
              <button>Remove</button>
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
