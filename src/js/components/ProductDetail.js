import { useParams } from 'react-router-dom';

function ProductDetail(props) {
  
  let randomObj = useParams();

  console.log({props});
  console.log(randomObj);

  return(
    <div>
      Show Product Details here.
    </div>
  )
}

export default ProductDetail;