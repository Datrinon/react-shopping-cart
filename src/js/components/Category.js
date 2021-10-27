import '../../css/Category.css';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Banner from './Banner';
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

import ebikes from "../../data/ebikes.json";
import accessories from "../../data/accessories.json";

function Category() {
  let match = useRouteMatch();
  let { categoryId } = useParams();
  let [ data, setData ] = useState([]);

  useEffect(() => {
    console.log("rerender");
    switch (categoryId) {
      case "ebikes":
        setData(ebikes);
        break;
      case "accessories":
        setData(accessories);
        break;
      default:
        break;
    }
  }, [categoryId]);

  /**
   * To be used with getProductsFromCategory to transform data into Product
   * components.
   * @param {} data
   */
  function convertToProductCards(data) {
    let images = {};

    let r = require.context("../../data/productimages", true, /\.(png|jpe?g|svg)$/);
    r.keys().forEach((item) => {
      let filepath = item.replace("./", "");
      let dir = filepath.split("/")[0];

      if (dir in images === false) {
        images[dir] = {};
      }

      images[dir][filepath] = r(item)["default"];
    })


    let productCards = data.map((elem) => {
      let src = `${elem.imgdir}/01.jpg`;

      return (
        <ProductCard
          key={elem.imgdir}
          code={elem.imgdir}
          coverImage={images[elem.imgdir][src]}
          title={elem.brand + " " + elem.name}
          price={elem.price}
          match={match}
          details={elem}
        />
      )
    });

    return productCards;
  }

  function renderProductList() {
    let section;

    switch (categoryId) {
      case "ebikes":
        section = (
          <>
            <Banner text="E-Bikes" />
            <p>Our E-Bikes.</p>
            {convertToProductCards(data)}
          </>
        );
        break;
      case "accessories":
        section = (
          <>
            <Banner text="Accessories" />
            <p>The finest accessories to accommodate your e-bike.</p>
            {convertToProductCards(data)}
          </>
        );
        break;
      default:
        break;
    }

    return section;
  }

  console.log(match.url);

  return (
    <Switch>
      <Route path={`${match.url}/:productId`}>
        <ProductDetail />
      </Route>
      <Route path={match.path}>
        <section className="Category">
          Category Page.
          {renderProductList()}
        </section>
      </Route>
    </Switch>
  );
}

export default Category;
