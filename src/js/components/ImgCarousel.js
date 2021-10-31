import "../../css/carousel.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


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
      { onClick: setCurrentIndex.bind(null, index) }
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
    <>
      <div className="carousel-controls">
        <button onClick={prevPic}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
        </button>
        <button onClick={nextPic}>
          <FontAwesomeIcon icon={faChevronRight} size="2x"/>
        </button>
      </div>

      <div className="carousel-thumbnails">
        {[...thumbnails.current]}
      </div>
    </>
  );

  return (
    <div className="picture-carousel">
      <div>
        <img alt="" src={props.images[currentIndex]} className="current-image" />
      </div>
      {images.length > 1 && controls}
    </div>
  )
}

export default ImgCarousel;