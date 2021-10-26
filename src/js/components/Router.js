// This is the starting point of the web application.
// css
import "../../css/Router.css"
// js
// react-router
import { BrowserRouter, Switch, Route } from "react-router";
// components
import NavHeader from "./NavHeader";
import Footer from "./Footer";


function Router() {
  return (
    <>
      <NavHeader />
      <Footer />
    </>
  );
}

export default Router;