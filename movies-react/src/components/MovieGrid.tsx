import React from "react";
import keys from "../assets/keys/keys.json";
import { AppContext } from "../context/AppContextProvider";
import Movie from "./Movie";

export default function MovieGrid() {
  const { currentGenre, setTotalPages, currentPage } =
    React.useContext(AppContext);
  const [movies, setMovies] = React.useState<MovieList>();

  async function getMoviesByGenre(genre: number) {
    let URI = undefined;

    if (genre == 0)
      URI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${keys.api_key}&page=${currentPage}`;
    else
      URI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${keys.api_key}&page=${currentPage}&with_genres=${genre}`;

    const json = await fetch(URI).then((res) => res.json());

    setMovies(json);
    setTotalPages(json?.total_pages);
  }

  React.useEffect(
    function () {
      if (currentGenre == undefined || currentGenre == null) return;
      getMoviesByGenre(currentGenre);
    },
    [currentGenre, currentPage]
  );

  return (
    <div className="movies-container">
      {movies?.results.map((movie) => (
        <Movie key={movie.id} movie={movie}>
          {movie.original_title}
        </Movie>
      ))}
    </div>
  );
}
