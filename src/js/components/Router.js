// This is the starting point of the web application.
// css
import "../../css/Router.css"
// js
// react-router-dom
import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Home from "./Home";
import ProductCategoryList from "./ProductCategoryList";
import Category from "./Category";
import Cart from "./Cart";
import NotFound from "./NotFound";

export const CartDispatch = React.createContext(null);
export const CartContext = React.createContext(null);

/**
 * This reducer function handles the state of cart. It is used in the product 
 * detail page and the cart page. We use it with context provider so that
 * we don't have to pass it through callbacks.
 * @param {*} state - The latest state.
 * @param {*} action 
 */
function cartReducer(state, action) {
  console.trace();
  switch (action.type) {
    case 'additem':
      const newCart = {...state};

      if (action.payload.productCode in newCart) {
        newCart[action.payload.productCode]["quantity"] += action.payload.quantity;
      } else {
        newCart[action.payload.productCode] = {...action.payload};
      }

      console.log(newCart);
      return newCart;
    default:
      return state;
  }
}

function Router() {

  const [cart, dispatch] = useReducer(cartReducer, {});

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={cart}>
          <CartDispatch.Provider value={dispatch}>
          <NavHeader />
          <React.StrictMode>
            <main className="App content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products/:categoryId" component={Category} />
                <Route exact path="/products" component={ProductCategoryList} />
                <Route exact path="/cart" component={Cart} />
                <Route component={NotFound} />
              </Switch>
            </main>
            </React.StrictMode>
          </CartDispatch.Provider>
        </CartContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;