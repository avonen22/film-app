import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function FilmDetayi({ favorites, setFavorites }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const filmAl = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=8cd00506&i=${id}&plot=full`);
            const data = await res.json();
            setMovie(data);
        };
        filmAl();
    }, [id]);

    if (!movie) return <p>Yükleniyor...</p>;

    const isFav = favorites.some((fav) => fav.imdbID === movie.imdbID);
    const toggleFavorite = () => {
        if (isFav) setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
        else setFavorites([...favorites, movie]);
    };

    return (
        <div style={{ padding: 20 }}>
            <Link to="/">⬅ Geri dön</Link>
            <h2>{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt={movie.Title} width="250" />
            <p><b>Tür:</b> {movie.Genre}</p>
            <p><b>Oyuncular:</b> {movie.Actors}</p>
            <p><b>Yönetmen:</b> {movie.Director}</p>
            <p><b>IMDB:</b> {movie.imdbRating}</p>
            <p><b>Konu:</b> {movie.Plot}</p>
            <button onClick={toggleFavorite}>{isFav ? "❌ Kaldır" : "⭐ Favori"}</button>
        </div>
    );
}

export default FilmDetayi;
