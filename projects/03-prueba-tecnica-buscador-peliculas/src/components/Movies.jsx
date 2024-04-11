import "./Movies.css";

function ListOfMovies({ movies }) {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id}>
          <h2>
            {movie.title} / {movie.year}
          </h2>
          <img src={movie.image} alt={`Poster de la película ${movie.title}`} />
        </li>
      ))}
    </ul>
  );
}

function NoResults() {
  return <p>No hay resultados para mostrar...</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />;
}
