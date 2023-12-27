import React, { useState, useEffect } from "react";

const Watchlist = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  useEffect(() => {
    const watchlistMoviesFromStorage = Object.entries(localStorage)
      .filter(([_, value]) => {
        const parsedValue = JSON.parse(value);
        return parsedValue.status === "Wish to";
      })
      .map(([_, value]) => JSON.parse(value));

    setWatchlistMovies(watchlistMoviesFromStorage);
  }, []);

  return (
    <div className="watchlistContainer">
      <h2>Movies Wish to Watch</h2>
      {watchlistMovies.map((movie) => (
        <div key={movie.detail.id} className="watchlistItem">
          <img
            className="watchlistPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.detail.poster_path}`}
            alt={movie.detail.title}
          />
          <div className="watchlistDetails">
            <h3>{movie.detail.title}</h3>
            <p>
              Description: {movie.detail.overview}
              <br />
              Rating: {movie.detail.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
