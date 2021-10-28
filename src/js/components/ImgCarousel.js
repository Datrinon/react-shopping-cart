import "../../css/carousel.css";
import React, { useRef, useState } from "react";

function ImgCarousel(props) {

  let images = Object.keys(props.images).map((imgpath, index) => {
    return (<img key={index}
      src={props.images[imgpath]}
      alt="carousel member"
      className="carousel-img"
    />);
  });
  let [currentIndex, setCurrentIndex] = useState(0);
  let thumbnails = useRef(images.map((thumbnail, index) => {
    return React.cloneElement(
      thumbnail,
      { onClick : setCurrentIndex.bind(null, index)}
    );
  }));

  function prevPic() {
    setCurrentIndex((lastIndex) => {
      if (lastIndex <= 0) {
        return images.length - 1;
      } else {
        return lastIndex - 1;
      }
    })
  }

  function nextPic() {
    setCurrentIndex((lastIndex) => {
      if (lastIndex >= images.length - 1) {
        return 0;
      } else {
        return lastIndex + 1;
      }
    })
  }

  let controls = (
    <div className="carousel-controls">
    <button onClick={prevPic}>Previous</button>
    <button onClick={nextPic}>Next</button>
    <div className="carousel-thumbnails">
      {[...thumbnails.current]}
    </div>
  </div>
  );

  return (
    <div className="picture-carousel">
      {images.length > 1 && controls}
      <div>
        <img alt="" src={props.images[currentIndex]} className="current-image"/>
      </div>
    </div>
  )
}

export default ImgCarousel;