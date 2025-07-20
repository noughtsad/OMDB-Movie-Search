import Card from "../componenets/moviecard";
import { useState } from "react";
import { searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="submit-form">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <Card
          key={movie.imdbID}
          movie={movie}
        />
        
        ))}
      </div>
    </div>
  );
}

export default Home;
