import "./SearchResults.css";
import loadingImage from "../../assests/images/loadingImage.gif";

function SearchResults({ results, subject, isLoading }) {
  return (
    <div className="results">
      {!isLoading ? (
        results.map((result, i) => {
          return (
            <div className="result" key={i}>
              <h3>{result.title}</h3>
              <p>
                <b>Author Name: </b>
                {result.author_name}
              </p>
              <p>
                <b>First Publish Year: </b>
                {result.first_publish_year}
              </p>
              <p>
                <b>Subject: </b>
                {subject[i]}
              </p>
            </div>
          );
        })
      ) : (
        <div>
          <img className="loadingImage" src={loadingImage} />
        </div>
      )}
    </div>
  );
}

export default SearchResults;
