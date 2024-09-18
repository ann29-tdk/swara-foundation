import React from 'react';
import carousel1 from "../../assets/images/carousel-a.jpg"
import carousel2 from "../../assets/images/carousel-2.png"
import carousel3 from "../../assets/images/carousel-3.jpg"

function Carousel() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img 
            src="https://i.imgur.com/T4bcB8D.jpeg"
            className="d-block w-100 c-img" 
            alt="Slide 0"
            style={{ objectFit: 'fill'}} // Inline CSS for Slide 0
          />
        </div>
        <div className="carousel-item c-item">
          <img 
            src={carousel1} 
            className="d-block w-100 c-img" 
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item c-item">
          <img 
            src={carousel2} 
            className="d-block w-100 c-img" 
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item c-item">
          <img 
            src={carousel3} 
            className="d-block w-100 c-img" 
            alt="Slide 3"
          />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;
