import React from "react";

export default function Movie(props: { movie: Movie }) {
  return (
    <div className="movie">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w1280${props.movie.poster_path}`}
        />
      </div>
      <div className="overview">
        <p>Overview</p>
        {props.movie.overview}
      </div>
      <div className="footer">
        <div className="title">{props.movie.original_title}</div>
        <div
          className={`popularity ${
            props.movie.vote_average >= 4
              ? props.movie.vote_average >= 8
                ? "green"
                : "yellow"
              : "red"
          }`}
        >
          {props.movie.vote_average}
        </div>
      </div>
    </div>
  );
}
