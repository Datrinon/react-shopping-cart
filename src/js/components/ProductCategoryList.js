import '../../css/ProductCategoryList.css';
import { useRouteMatch, Link } from "react-router-dom";

import accSquare from "../../images/accessories-square.jpg"
import ebikesSquare from "../../images/ebikes-square.jpg"

function ClickBox(props) {
  return (
    <Link to={props.link}>
    <div
      className="click-box"
      style={{
        backgroundImage: `url(${props.img})`
      }}
      >

        <h1 className="category-title">{props.title}</h1>
    </div>
    </Link>
  )
}

function ProductCategoryList() {
  let match = useRouteMatch();
  
  return (
    <div className="product-category-list">
      <ul>
        <li>
          <ClickBox 
            link={`${match.path}/ebikes`}
            img={ebikesSquare}
            title={"E-Bikes"}
          />
        </li>
        <li>
          <ClickBox 
            link={`${match.path}/accessories`}
            img={accSquare}
            title={"Accessories"}
          />
        </li>
      </ul>
    </div>
  );
}

export default ProductCategoryList;
