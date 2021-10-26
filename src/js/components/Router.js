// This is the starting point of the web application.
// css
import "../../css/Router.css"
// js
// react-router-dom
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import NavHeader from "./NavHeader";
import Footer from "./Footer";
import Home from "./Home";
import ProductCategoryList from "./ProductCategoryList";
import Category from "./Category";
import Cart from "./Cart";
import NotFound from "./NotFound";


function Router() {
  return (
    <>
      <BrowserRouter>
      <NavHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:categoryId" component={Category}/>
          <Route exact path="/products" component={ProductCategoryList} />
          <Route exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Router;