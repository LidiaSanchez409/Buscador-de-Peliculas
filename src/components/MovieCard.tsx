import React from "react";

interface MovieCardProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image"}
        alt={movie.Title}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
