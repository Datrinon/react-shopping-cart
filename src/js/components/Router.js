// This is the starting point of the web application.
// css
import "../../css/Router.css"
// js
// react-router-dom
import React, { useReducer } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
// components
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Home from "./Home";
import ProductCategoryList from "./ProductCategoryList";
import Category from "./Category";
import Cart from "./Cart";
import NotFound from "./NotFound";

import _, { cloneDeep } from 'lodash';


export const MAX_ITEMS = 10;
export const CART_KEY = "mako-bikes-cart";

export const CartDispatch = React.createContext(null);
export const CartContext = React.createContext(null);

/**
 * This reducer function handles the state of cart. It is used in the product 
 * detail page and the cart page. We use it with context provider so that
 * we don't have to pass it through callbacks.
 * @param {*} state - The latest state of the cart.
 * @param {*} action 
 */
function cartReducer(state, action) {
  let newCart;
  
  switch (action.type) {
    case 'additem': {
      newCart = _.cloneDeep(state);

      if (action.payload.productCode in newCart) {
        newCart[action.payload.productCode]["quantity"] += action.payload.quantity;
        if (newCart[action.payload.productCode]["quantity"] >= MAX_ITEMS) {
          newCart[action.payload.productCode]["quantity"] = MAX_ITEMS;
        }
      } else {
        newCart[action.payload.productCode] = {...action.payload};
      }

      break;
    }
    case 'editItemQuantity':{
      newCart = _.cloneDeep(state);
      newCart[action.payload.productCode]["quantity"] = action.payload.quantity;

      break;
    }
    case 'deleteItem': {
      newCart = _.cloneDeep(state);
      delete newCart[action.payload.productCode];

      break;
    }
    default:
      return state;
  }

  window.localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  return newCart;
}

function Router() {

  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(window.localStorage.getItem(CART_KEY)) ?? {});

  return (
    <>
      <HashRouter>
        <CartContext.Provider value={cart}>
          <CartDispatch.Provider value={dispatch}>
          <NavHeader />
            <main className="App content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products/:categoryId" component={Category} />
                <Route exact path="/products" component={ProductCategoryList} />
                <Route exact path="/cart" component={Cart} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </CartDispatch.Provider>
        </CartContext.Provider>
        <Footer />
      </HashRouter>
    </>
  );
}

export default Router;