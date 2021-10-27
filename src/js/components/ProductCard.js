import { Link } from "react-router-dom";

function ProductCard(props) {

  console.log(props.details);

  return (
    <div className="product-card">
      <Link 
        to={{
          pathname: `${props.match.url}/${props.code}`,
          state: { details : props.details }
      }}>
        <div>
          <img src={props.coverImage} style={{width: "128px"}} alt="product-card"/>
          <h2 className="product-name">{props.title}</h2>
          <p className="product-price">${props.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;