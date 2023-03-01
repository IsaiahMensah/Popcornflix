import React, { useState, useEffect } from "react";
import "./Movies.css";
import Card from "../card/Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0fcd4e56cdmshae683283257fb84p1ff150jsn21667b2b4b77",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    fetch(
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=all%20american",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.d))
      .catch((err) => console.error(err));
  }, []);

  console.log(movies);
  return (
    <div className="main-area">
      <div className="movies">
        <div className="c-wrapper">
          <div className="heading">
            <h1>All Movies</h1>
          </div>
          {/* <Card /> */}
          <div className="card-container">
            {movies.map((movie) => (
              <div class="card">
                <img src={movie.i.imageUrl} class="card-img-top" alt="..." />
                <div className="card-body">
                  {/* <h5 class="card-title">Card title</h5> */}

                  <a href="#" class="btn btn-primary">
                    Watch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
