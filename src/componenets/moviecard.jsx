import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function Card({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.imdbID);

  function onFavClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.imdbID);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default Card;
