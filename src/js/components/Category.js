import '../../css/Category.css';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CategoryBanner from './CategoryBanner';
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import NotFound from './NotFound';

import ebikes from "../../data/ebikes.json";
import accessories from "../../data/accessories.json";
import ebikesBanner from "../../images/ebikes-banner-2.jpg";
import accessoriesBanner from "../../images/accessories-banner.jpg";


function Category() {
  let match = useRouteMatch();
  let { categoryId } = useParams();
  let [ data, setData ] = useState([]);
  let [ validCategory, setValidCategory] = useState(true);

  useEffect(() => {
    setValidCategory(true);
    switch (categoryId) {
      case "ebikes":
        setData(ebikes);
        break;
      case "accessories":
        setData(accessories);
        break;
      default:
        setValidCategory(false);
        break;
    }
  }, [categoryId]);

  if (!validCategory) {
    return (<NotFound />);
  } 

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
        images[dir] = [];
      }

      images[dir].push(r(item)["default"]);
    })

    let productCards = data.map((elem) => {

      return (
        <ProductCard
          key={elem.imgdir}
          code={elem.imgdir}
          coverImage={images[elem.imgdir][0]}
          title={elem.brand + " " + elem.name}
          price={elem.price}
          match={match}
          details={elem}
          images={images[elem.imgdir]}
        />
      )
    });

    return (
      <div className="products">
      {productCards}
      </div>
      );
  }

  function renderProductList() {
    let section;

    switch (categoryId) {
      case "ebikes":
        section = (
          <>
            <CategoryBanner text="E-Bikes" img={ebikesBanner} />
            <p className="category-caption">Current Line Up</p>
            {convertToProductCards(data)}
          </>
        );
        break;
      case "accessories":
        section = (
          <>
            <CategoryBanner text="Accessories" img={accessoriesBanner} />
            <p className="category-caption">Available Products</p>
            {convertToProductCards(data)}
          </>
        );
        break;
      default:
        break;
    }

    return section;
  }

  return (
    <Switch>
      <Route path={`${match.url}/:productId`}>
        <ProductDetail />
      </Route>
      <Route path={match.path}>
        <section className="category">
          {renderProductList()}
        </section>
      </Route>
    </Switch>
  );
}

export default Category;
