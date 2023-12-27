import React, { useState, useEffect } from "react";

const WatchingList = () => {
  const [watchingMovies, setWatchingMovies] = useState([]);

  useEffect(() => {
    const watchingMoviesFromStorage = Object.entries(localStorage)
      .filter(([_, value]) => {
        const parsedValue = JSON.parse(value);
        return parsedValue.status === "Watching";
      })
      .map(([_, value]) => JSON.parse(value));

    setWatchingMovies(watchingMoviesFromStorage);
  }, []);

  return (
    <div className="watchingListContainer">
      <h2>Movies Watching</h2>
      {watchingMovies.map((movie) => (
        <div key={movie.detail.id} className="watchingItem">
          <img
            className="watchingPoster"
            src={`https://image.tmdb.org/t/p/w500${movie.detail.poster_path}`}
            alt={movie.detail.title}
          />
          <div className="watchingDetails">
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

export default WatchingList;
