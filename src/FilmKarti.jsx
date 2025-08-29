import React from "react";
import { Link } from "react-router-dom";

function FilmKarti({ movie, favorites, setFavorites }) {
    const favMi = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const favoriGecisi = () => {
        if (favMi) {
            setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <div style={{ margin: 10, border: "1px solid #ccc", padding: 10, width: 180 }}>
            <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} width="150" />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </Link>
            <button onClick={favoriGecisi}>{favMi ? "❌ Kaldır" : "⭐ Favori"}</button>
        </div>
    );
}

export default FilmKarti;
