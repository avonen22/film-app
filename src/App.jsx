import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./AramaBolumu.jsx";
import FilmListesi from "./FilmListesi.jsx";
import FilmDetayi from "./FilmDetayi.jsx";
import Favoriler from "./Favoriler.jsx";

function App() {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>🎬 Movie App</h1>
                            <SearchBar setMovies={setMovies} />
                            <FilmListesi movies={movies} favorites={favorites} setFavorites={setFavorites} />
                        </div>
                    }
                />
                <Route path="/movie/:id" element={<FilmDetayi favorites={favorites} setFavorites={setFavorites} />} />
                <Route path="/favorites" element={<Favoriler favorites={favorites} />} />
            </Routes>
        </Router>
    );
}

export default App;
