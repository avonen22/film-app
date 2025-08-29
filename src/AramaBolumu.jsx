import React, { useState } from "react";

function AramaBolumu({ setMovies }) {
    const [search, setSearch] = useState("");

    const fetchMovies = async () => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=8cd00506&s=${search}`);
        const data = await res.json();
        if (data.Search) setMovies(data.Search);
        else setMovies([]);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Film ara..."
            />
            <button onClick={fetchMovies}>Ara</button>
        </div>
    );
}

export default AramaBolumu;
