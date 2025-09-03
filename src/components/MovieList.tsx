import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: any[];
}

function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return <p className="text-center text-gray-400">No hay resultados</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
