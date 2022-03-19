import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, error, loading, handleFetch } = useFetch("https://catfact.ninja/fact");

  if (error) return <h3 className="error">{error.message}</h3>;
  
  return (
    <div className="App">
      {loading ? <p className="loading">Loading...</p> : <p>{data?.fact}</p>} 
      <button className="btn" onClick={() => handleFetch("https://catfact.ninja/fact")}>New Fact</button>
    </div>
  );
}

export default App;
