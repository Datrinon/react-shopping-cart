import "../../css/ProductDetail.css";
import { useLocation } from 'react-router-dom';

import ImgCarousel from "./ImgCarousel";

function ProductDetail(props) {
  
  let details = useLocation()["state"]["details"];
  let images = useLocation()["state"]["images"];

  console.log({details, images});


  return(
    <section>
      <h1>{details.brand} {details.name}</h1>
      <ImgCarousel images={images} />
    </section>
  )
}

export default ProductDetail;