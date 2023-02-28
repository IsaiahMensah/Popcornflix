import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Movies.css";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img10 from "../../images/img10.jpg";
import img7 from "../../images/img7.jpg";
import Card from "../card/Card";

const Movies = () => {
  // fetch(
  //   "https://imdb8.p.rapidapi.com/title/get-all-images?tconst=tt0944947"

  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => console.error(err));

  return (
    <div className="movies">
      <div className="m-wrapper">
        <div className="title">
          <h1>All Movies</h1>
        </div>
        <div className="movies-card">
          <Card/>
          
        </div>
      </div>
    </div>
  );
};

export default Movies;
