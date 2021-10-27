import "../../css/ProductDetail.css";
import { useLocation } from 'react-router-dom';

function ProductDetail(props) {
  
  let details = useLocation()["state"]["details"];

  console.log(details);


  return(
    <section>
      <h1>{details.brand} {details.name}</h1>
      <div className="img-carousel">
        <img alt="product image" src=""/>
      </div>
    </section>
  )
}

export default ProductDetail;