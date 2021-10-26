import '../../css/ProductCategoryList.css';
import { useRouteMatch, Link } from "react-router-dom";

function ProductCategoryList() {
  let match = useRouteMatch();
  
  return (
    <div className="ProductCategoryList">
      This is the page where you list e-bikes or accessories.
      {console.log(match.path)}
      <ul>
        <li>
          <Link to={`${match.path}/ebikes`}>E-Bikes</Link>
        </li>
        <li>
          <Link to={`${match.path}/accessories`}>Accessories</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductCategoryList;
