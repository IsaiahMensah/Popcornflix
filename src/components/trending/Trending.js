import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import"./Trending.css"
import Card from "../../components/card/Card";

const Trending = () => {

    

    // fetch(
    //   "https://imdb8.p.rapidapi.com/title/get-all-images?tconst=tt0944947"
      
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.error(err));

  return (
    <div className="trending">
      <div className="wrapper">
        <div className="title">
          <h1>Trending</h1>
        </div>
        <div className="trending-card">
          {/* <div class="card" >
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>

          <div class="card" style={{ backgroundImage: `url(${img7})` }}>
            {/* <img src={img4} class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
          <div class="card" style={{ backgroundImage: `url(${img10})` }}>
            {/* <img src={img4} class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
          <div class="card" style={{ backgroundImage: `url(${img10})` }}>
            {/* <img src={img10} class="card-img-top" alt="..." /> 
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              
              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
  </div>*/}
  <Card/>
        </div> 
      </div>
    </div>
  );
};

export default Trending;
