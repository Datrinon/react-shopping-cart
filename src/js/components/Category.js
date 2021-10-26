import '../../css/Category.css';
import { useParams } from 'react-router-dom';

import Banner from './Banner';
import ProductCard from "./ProductCard";

import ebikes from "../../data/ebikes.json";
import accessories from "../../data/accessories.json";

function Category() {
  let { categoryId } = useParams();

  function getProductsFromCategory(category) {
    let data;
    let imgAttrName;
    let productCards;

    switch (category) {
      case "ebikes":
        data = ebikes;

        break;
      default:
        break;
    }

    console.log(data);
    productCards = convertToProductCards(data);

    return productCards;
  }

  /**
   * To be used with getProductsFromCategory to transform data into Product
   * components.
   * @param {} data
   */
  function convertToProductCards(data) {
    let images = {};

    let r = require.context("../../data/productimages", true, /01\.(png|jpe?g|svg)$/);
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    })

    let productCards = data.map((elem, index) => {

      let src = `${elem.imgdir}/01.jpg`;

      return (
        <ProductCard
          key={elem.imgdir}
          src={images[src]['default']}
          title={elem.brand + " " + elem.name}
          price={elem.price}
        />
      )
    });

    return productCards;
  }

  function determineSectionToRender() {
    let section;

    switch (categoryId) {
      case "ebikes":
        section = (
          <>
            <Banner text="E-Bikes" />
            <p>Our E-Bikes.</p>
            {getProductsFromCategory(categoryId)}
          </>
        );
        break;
      case "accessories":
        break;
      default:
        break;
    }

    return section;
  }

  return (
    <section className="Category">
      Category Page.
      {determineSectionToRender()}
    </section>
  );
}

export default Category;
