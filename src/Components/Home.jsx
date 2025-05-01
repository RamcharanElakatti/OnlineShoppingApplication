import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-4">WELCOME TO ONLINE SHOPPING</h1>

      <div
        id="carouselExample"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="product">
              <img
                src="https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="product">
              <img
                src="https://www.thepackshotpeople.co.uk/wp-content/uploads/2018/05/PILE_02-1.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="product">
              <img
                src="https://www.thoughtco.com/thmb/dUZhKsB5qY5L962u-ED9553poE0=/3620x2750/filters:fill(auto,1)/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
                className="d-block w-100"
                alt="Slide 3"
              />
            </Link>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
