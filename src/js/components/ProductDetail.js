import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import "../../css/ProductDetail.css";
import "../../css/ItemQuantity.css";
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext, CartDispatch } from "./Router";

import NotFound from './NotFound';

import ImgCarousel from "./ImgCarousel";
import ItemQuantity from "./ItemQuantity";
import Utility from "../util/utility";

import { MAX_ITEMS } from "./Router";

const PAGE_STATES = {
  READY: "ready",
  LOADING: "loading",
  NOT_FOUND: "not_found"
};

function ProductDetail(props) {
  // related to loading
  const category = useRouteMatch().path.split("/")[2];
  const productParam = useParams().productId;
  const [pageState, setPageState] = useState(PAGE_STATES.LOADING);
  // reloated to cart
  const dispatch = useContext(CartDispatch);
  const cart = useContext(CartContext);
  const [itemLimitReached, setItemLimitReached] = useState(false);

  // react router and data
  const locationState = useLocation()["state"];
  let [details, setDetails] = useState(null);
  let [images, setImages] = useState(null);

  useEffect(() => {
    if (locationState !== undefined) {
      setDetails(locationState.details);
      setImages(locationState.images);
      setPageState(PAGE_STATES.READY);
    } else {
      fetchData(productParam, category).then((result) => {
        if (result === null) {
          setPageState(PAGE_STATES.NOT_FOUND);
        } else {
          setDetails(result.details);
          setImages(result.images);
          setPageState(PAGE_STATES.READY);
        }
      })

    }
  }, []);


  /**
   * when the link was navigated to directly thru URL, which occurs when bookmarked.
   *  we have to fetch the data manually ourselves.
   */
  async function fetchData(productID, category) {
    let db;
    let details;
    let images = [];

    // preprocess url parameter
    productID = productID.toLowerCase();

    // load correct db based on the parameter here.
    switch(category) {
      case "ebikes":
        db = await import("../../data/ebikes.json");
        break;
      case "accessories":
        db = await import("../../data/accessories.json");
        break;
      default:
        // incorrect category given; return null (which will later trigger NOT_FOUND state.)
        return null;
    }

    db = db.default;
    // use parameter and db to identify item details
    details = db.find(item => item.imgdir === productID);

    // if item not found, retur null.
    if (details === undefined) {
      return null;
    }

    // otherwise, it was, and we can get the images.
    let r = require.context("../../data/productimages", true, /\.(png|jpe?g|svg)$/);

    r.keys().forEach((item) => {
      let filepath = item.replace("./", "");
      let dir = filepath.split("/")[0];

      if (dir === productID) {
        images.push(r(item)["default"]);
      }
    });

    return {details, images};
  }

  function addToCart(ev) {
    console.log("adding to cart...");
    ev.preventDefault();

    if (details.imgdir in cart && cart[details.imgdir]["quantity"] >= MAX_ITEMS) {
      Utility.triggerAnimation(document.querySelector(".add-to-cart"),
      "tremble");
      setItemLimitReached(true);
      
      return;
    }

    Utility.triggerAnimation(
      document.querySelector(".successful-message"),
      "successful-flash"
    );


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

  switch(pageState) {
    case PAGE_STATES.READY:
      return (
        <section className="product-details">
        <h1 className="product-title">{details.brand} {details.name}</h1>
        <ImgCarousel images={images} />
        <div className="product-price-desc">
          <p className="price">${details.price}</p>
          <form className="cart-form">
            <ItemQuantity initialQuantity={1} />
            <div>
              <button className="add-to-cart" type="submit" onClick={addToCart}>Add to Cart</button>
              <span className="successful-message">Added! ✔</span>
            </div>
            {itemLimitReached && (
              <div className="error-message">
                <div className="error-title">
                  <h1><FontAwesomeIcon icon={faExclamationCircle}/> Error: Item Limit Reached!</h1>
                </div>
                <p className="error-desc">
                  You may only have a maximum of {MAX_ITEMS} of any item in a cart.
                </p>
              </div>
            )}
          </form>
          <div className="summary">
            <h2 className="title">About the {details.name}</h2>
            <p className="description">
              {details.summary}
            </p>
          </div>
        </div>
      </section>
      );
    case PAGE_STATES.LOADING:
      return (
        <p>Loading...</p>
      );
    case PAGE_STATES.NOT_FOUND:
    default: 
      return (
        <NotFound />
      );
  }
}

export default ProductDetail;