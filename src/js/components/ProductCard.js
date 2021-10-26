function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.src} style={{width: "128px"}} alt="product-card"/>
      <h2 className="product-name">{props.title}</h2>
      <p className="product-price">${props.price}</p>
    </div>
  )
}

export default ProductCard;