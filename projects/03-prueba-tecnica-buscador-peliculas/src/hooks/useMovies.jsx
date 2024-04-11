import { useState, useEffect } from "react";

const API_KEY = "3eafa8a5";

export default function useMovies({ searchParams }) {
  const [movies, setMovies] = useState(null);

  const getMovies = () => {
    if (!searchParams) return setMovies(null);

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParams}`)
      .then((res) => res.json())
      .then((data) => {
        const responseOk = data.Response === "True";
        if (!responseOk) return setMovies(null);
        if (responseOk) {
          const newMovies = data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
          }));
          return setMovies(newMovies);
        }
      });
  };

  useEffect(getMovies, [searchParams]);

  return { movies };
}
