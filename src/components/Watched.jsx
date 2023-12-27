import React, { useState, useEffect } from "react";

const WatchedList = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const watchedMoviesFromStorage = Object.entries(localStorage)
      .filter(([_, value]) => {
        const parsedValue = JSON.parse(value);
        return parsedValue.status === "Completed";
      })
      .map(([_, value]) => JSON.parse(value));

    setWatchedMovies(watchedMoviesFromStorage);
  }, []);

  return (
    <div className="watchedListContainer">
      <h2>Movies Watched</h2>
      {watchedMovies.map((movie) => (
        <div key={movie.detail.id} className="watchedItem">
          <img
            className="watchedPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.detail.poster_path}`}
            alt={movie.detail.title}
          />
          <div className="watchedDetails">
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

export default WatchedList;
