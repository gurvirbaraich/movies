import React from "react";
import genres from "../assets/json/genres.json";
// @ts-ignore: Unreachable code error
import styles from "../assets/css/header.module.css";
import { AppContext } from "../context/AppContextProvider";

export default function Header() {
  const { setGenre } = React.useContext(AppContext);

  return (
    <header className={styles.header}>
      <div data-logo>Movies</div>
      <div data-pc>
        {genres.map((genre) => (
          <div
            key={genre.id}
            onClick={() => setGenre(genre.id)}
            data-genre={genre.id}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div className="dropdown" data-mobile>
        <span className="text">More Gernes...</span>
        <div className="content">
          {genres.map((genre) => (
            <li key={genre.id}>
              <div onClick={() => setGenre(genre.id)} data-genre={genre.id}>
                {genre.name}
              </div>
            </li>
          ))}
        </div>
      </div>
    </header>
  );
}
