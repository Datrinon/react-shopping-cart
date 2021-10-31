import { Link } from "react-router-dom";

function ProductCard(props) {

  return (
    <div className="product-card">
      <Link 
        to={{
          pathname: `${props.match.url}/${props.code}`,
          state: {
            details : props.details,
            images : props.images
           }
      }}>
        <div className="product-info">
          <img className="product-img" src={props.coverImage} alt="product-card"/>
          <h2 className="product-name">{props.title}</h2>
          <p className="product-price">${props.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard;