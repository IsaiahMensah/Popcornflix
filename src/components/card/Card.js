import React from 'react'
import "./Card.css"
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img10 from "../../images/img10.jpg";
import img7 from "../../images/img7.jpg";


const Card = () => {
  return (
    <div className="card-container">
      <div class="card">
        <img src={img4} class="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 class="card-title">Traman & Teneesse </h5> */}

          <a href="#" class="btn btn-primary">
            Watch
          </a>
        </div>
      </div>
      <div class="card">
        <img src={img5} class="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 class="card-title">Card title</h5> */}

          <a href="#" class="btn btn-primary">
            Watch
          </a>
        </div>
      </div>
      <div class="card">
        <img src={img10} class="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 class="card-title">Card title</h5> */}

          <a href="#" class="btn btn-primary">
            Watch
          </a>
        </div>
      </div>
      <div class="card">
        <img src={img7} class="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 class="card-title">Card title</h5> */}

          <a href="#" class="btn btn-primary">
            Watch
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Card