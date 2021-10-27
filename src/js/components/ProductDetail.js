import "../../css/ProductDetail.css";
import { useLocation } from 'react-router-dom';

function ProductDetail(props) {
  
  let details = useLocation()["state"]["details"];
  let images = useLocation()["state"]["images"];

  console.log({details, images});


  return(
    <section>
      <h1>{details.brand} {details.name}</h1>
    </section>
  )
}

export default ProductDetail;