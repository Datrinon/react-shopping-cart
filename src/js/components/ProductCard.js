import { Link } from "react-router-dom";

function ProductCard(props) {
  console.log(props.match.url);

  return (
    <div className="product-card">
      <Link to={`${props.match.url}/${props.code}`} details={props.elem}>
        <div>
          <img src={props.src} style={{width: "128px"}} alt="product-card"/>
          <h2 className="product-name">{props.title}</h2>
          <p className="product-price">${props.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;