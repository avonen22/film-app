import React from "react";
import { Link } from "react-router-dom";

function Favoriler({ favorites }) {
    if (favorites.length === 0) return <p>Favori film yok.</p>;

    return (
        <div style={{ padding: 20 }}>
            <Link to="/">⬅ Geri dön</Link>
            <h2>⭐ Favoriler</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {favorites.map((movie) => (
                    <div key={movie.imdbID} style={{ margin: 10 }}>
                        <Link to={`/movie/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={movie.Title} width="150" />
                            <h3>{movie.Title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favoriler;
