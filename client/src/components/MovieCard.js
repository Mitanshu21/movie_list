import { useNavigate } from "react-router-dom";

const MoviesCard = ({ name, rating, released }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${name}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk="
        alt={name}
        height={"300px"}
        width={"100%"}
        className="image"
      />
      <h3>Title: {name}</h3>
      <p>Rating: {rating}⭐ </p>
      <p>Release Date: {released}</p>
    </div>
  );
};

export default MoviesCard;
