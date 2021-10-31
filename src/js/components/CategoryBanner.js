import "../../css/CategoryBanner.css";

/**
 * It's a component which displays a visual aid alongside a logo.
 * @param {*} props 
 * @returns 
 */
function CategoryBanner(props) {
  return (
    <div className="banner"
      style={{
        backgroundImage: `url(${props.img})`
      }}>
      <h1 className="banner-text">{props.text}</h1>
    </div>
  );
}

export default CategoryBanner;