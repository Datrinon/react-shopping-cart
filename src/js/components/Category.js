import '../../css/Category.css';
import { useParams } from 'react-router-dom';

import Banner from './Banner';

function Category() {
  let { categoryId } = useParams();

  function getProducts() {
    
  }

  function determineSectionToRender() {
    let section;

    switch (categoryId) {
      case "ebikes":
        section = (
          <>
            <Banner text="E-Bikes"/>
            <p>Our E-Bikes.</p>
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
