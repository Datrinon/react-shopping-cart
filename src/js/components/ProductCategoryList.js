import '../../css/ProductCategoryList.css';
import { useRouteMatch, Link } from "react-router-dom";

import accSquare from "../../images/accessories-square.jpg"
import ebikesSquare from "../../images/ebikes-square.jpg"

function ClickBox(props) {
  return (
    <div className="click-box">
      <Link to={props.link}>
        <img src={props.img}/>
        <h1>{props.title}</h1>
      </Link>
    </div>
  )
}

function ProductCategoryList() {
  let match = useRouteMatch();
  
  return (
    <div className="ProductCategoryList">
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
