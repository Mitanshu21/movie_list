import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { name } = useParams();
  const [movie, setMovies] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(movie);
  return (
    <div className="moviedetails">
      <img
        src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk="
        alt={movie?.name}
        height={"300px"}
        width={"100%"}
        className="image"
      />
      <h3>Title: {movie?.name}</h3>
      <p>Rating: {movie?.rating}⭐ </p>
      <p>Release Date: {movie?.releaseDate}</p>
    </div>
  );
};

export default MovieDetails;
