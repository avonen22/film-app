import React from "react";
import MovieCard from "./FilmKarti.jsx";
import FilmKarti from "./FilmKarti.jsx";

function FilmListesi({ movies, favorites, setFavorites }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {movies.map((movie) => (
                <FilmKarti key={movie.imdbID} movie={movie} favorites={favorites} setFavorites={setFavorites} />
            ))}
        </div>
    );
}

export default FilmListesi;
