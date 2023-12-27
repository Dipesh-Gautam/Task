import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=872c89ece29c9d124ecf551ca19f17ff"
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movieListContainer">
      {movieList.map((movie) => (
        <div key={movie.id} className="movieItem">
          <img
            className="moviePoster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movieDetails">
            <h3>{movie.title}</h3>
            <p>
              Description: {movie.overview}
              <br />
              Rating: {movie.vote_average}
            </p>
            <div className="controllers">
              <button
                onClick={() =>
                  localStorage.setItem(
                    movie.id.toString(),
                    JSON.stringify({
                      detail: movie,
                      status: "Wish to",
                    })
                  )
                }
              >
                Wish to
              </button>

              <button
                onClick={() =>
                  localStorage.setItem(
                    movie.id.toString(),
                    JSON.stringify({
                      detail: movie,
                      status: "Completed",
                    })
                  )
                }
              >
                Completed
              </button>

              <button
                onClick={() =>
                  localStorage.setItem(
                    movie.id.toString(),
                    JSON.stringify({
                      detail: movie,
                      status: "Watching",
                    })
                  )
                }
              >
                Watching
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
