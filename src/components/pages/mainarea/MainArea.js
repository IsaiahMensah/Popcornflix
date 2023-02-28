import React from 'react'
import "./MainArea.css"
import img2 from "../../../images/img2.jpg"
import img3 from "../../../images/img3.jpg";
import img1 from "../../../images/img1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Trending from '../../trending/Trending';
import Movies from '../../All movies/Movies';
import black from "../../../images/black.webp"
import Ra from "../../../images/ra.jpeg"
import xane from"../../../images/xane.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const MainArea = () => {
  return (
    <div className="main-area">
      <div className="m-area">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={black} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <a href="">
                  <button className='btn btn-primary'>Watch</button>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src={xane} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
                <a href="">
                  <button className='btn btn-primary'>Watch</button>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Ra} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <a href="">
                  <button className='btn btn-primary'>Watch</button>
                </a>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <Trending />
        <Movies />
      </div>
    </div>
  );
}

export default MainArea