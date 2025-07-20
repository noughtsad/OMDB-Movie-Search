import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import Card from "../componenets/moviecard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No favorites yet</h2>
        </div>
      )}
    </div>
  );
}

export default Favorites;