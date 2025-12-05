import PropTypes from "prop-types";

export default function Carousel({ images = [], reverse = false }) {
  return (
    <div className={`carousel-container ${reverse ? "reverse" : ""}`}>
      <div className="carousel">
        {images.map((src, index) => (
          <div key={index} className="item" style={{ "--delay": `${index}s` }}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  reverse: PropTypes.bool,
};
