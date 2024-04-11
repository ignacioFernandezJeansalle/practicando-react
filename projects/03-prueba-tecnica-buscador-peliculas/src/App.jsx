import "./App.css";
import { useState } from "react";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

export default function App() {
  const [searchParams, setSearchParams] = useState(null);
  const { movies } = useMovies({ searchParams });

  /* const handleChange = (event) => {
    setSearchParams(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();

    // Recuperar los parametros de búsqueda del input
    const { search } = Object.fromEntries(new window.FormData(event.target));
    setSearchParams(search);
  };

  return (
    <>
      <header>
        <h1>Buscador de películas 🔎</h1>
        <form onSubmit={handleSubmit}>
          <input name="search" type="text" placeholder="Superman, Batman..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}
