import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/SearchBox/SearchBox";
import SearchResults from "./components/SearchResults/SearchResults";
import PaginationPanel from "./components/Pagination/Pagination";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [subject, setSubject] = useState([]);

  const [totalPageCount, setTotalPageCount] = useState(1);
  const [showPagination, setShowPagination] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [remountComponent, setRemountComponent] = useState(0);

  useEffect(() => {
    setRemountComponent(Math.random());
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e, currentPage = 1) => {
    
    if (e) {
      e.preventDefault(); 
      setShowPagination(false);     
    }

    if (search === "") {
      setShowPagination(false);
      return;
    }

    setIsLoading(true);

    const res = await fetch(
      `http://openlibrary.org/search.json?q=${search
        .split(" ")
        .join("+")}&page=${currentPage}`
    );

    if (!res.ok) {
      throw Error(res.statusText);
    }

    const data = await res.json();

    setTotalPageCount(Math.ceil(data.numFound / 100));

    setIsLoading(false);

    data.docs.map((result) => {
      let subj = result.subject
        ? result.subject.slice(0, 5).join(", ")
        : "No Subject!";
      setSubject((prevState) => [...prevState, subj]);
    });

    setShowPagination(true);
    setResults(data.docs);
    setSearchInfo(data);
  };

  return (
    <div className="App">
        <Header
          handleSearch={handleSearch}
          handleChange={handleChange}
          search={search}
          searchInfo={searchInfo}
        />
        <SearchResults
          results={results}
          subject={subject}
          isLoading={isLoading}
        />
        <PaginationPanel
          key={remountComponent}
          handleSearch={handleSearch}
          showPagination={showPagination}
          totalPageCount={totalPageCount}
        />
    </div>
  );
}

export default App;
