import React, { useState } from "react";

interface SearchBarProps {
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

function SearchBar({ setMovies }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const url = new URL("https://www.omdbapi.com/");
      url.searchParams.append("apikey", "TU_API_KEY"); // 👈 pon aquí tu API key
      url.searchParams.append("s", query);

      if (type) url.searchParams.append("type", type);
      if (year) url.searchParams.append("y", year);

      const res = await fetch(url.toString());
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6"
    >
      {/* Buscador principal */}
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-lg text-black w-64 focus:outline-none"
      />

      {/* Select de tipo */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-3 py-2 rounded-lg text-black"
      >
        <option value="">Todos</option>
        <option value="movie">Películas</option>
        <option value="series">Series</option>
        <option value="episode">Episodios</option>
      </select>

      {/* Input año */}
      <input
        type="number"
        placeholder="Año"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="px-3 py-2 rounded-lg text-black w-24"
      />

      {/* Botón */}
      <button
        type="submit"
        className="bg-yellow-400 px-4 py-2 rounded-lg text-gray-900 font-semibold hover:bg-yellow-500 transition"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
