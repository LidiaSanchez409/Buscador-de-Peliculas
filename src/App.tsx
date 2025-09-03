import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎬 Movie Search</h1>
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
