import Movies from "./components/Movies";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data?.movies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/:name" element={<MovieDetails movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
