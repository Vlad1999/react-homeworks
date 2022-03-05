import "./MovieInfo.css";
import { useState, useEffect } from "react";

function MovieInfo() {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
    )
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoading(true);
          setResult(res);
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
      <div className="results">
        <div className="result" key={result.id}>
          <h3>{result.title}</h3>
          <p>
            <b>Release Date: </b>
            {result.release_date}
          </p>
          <p>
            <b>Director: </b>
            {result.director}
          </p>
          <p>
            <b>Producer: </b>
            {result.producer}
          </p>
          <p>
            <b>Description: </b>
            {result.description}
          </p>
        </div>
      </div>
    );
  }
}

export default MovieInfo;