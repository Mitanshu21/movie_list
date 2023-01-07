import { useState, useEffect } from "react";
import MoviesCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <>
      <h1 className="heading">Movie list</h1>
      <div className="main">
        <div className="container">
          <div className="movies">
            {movies.map((movie) => (
              <MoviesCard
                name={movie?.name}
                rating={movie?.rating}
                released={movie?.releaseDate}
                key={movie?.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
