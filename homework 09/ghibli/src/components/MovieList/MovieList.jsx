import "./MovieList.css";
import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then(
        (movie) => {
          setIsLoading(true);
          setMovies(movie);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  } else if (!isLoading) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="container">
        <h1 className="title">Movie List</h1>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
