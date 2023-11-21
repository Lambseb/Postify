import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar/SearchBar";
import ButtonByTheme from "../components/FilterButton/ButtonsByTheme";

function Results() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=40`,
        {
          headers: {
            Authorization:
              "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setResults(data.photos))
        .catch((err) => {
          console.error(err);
        });
    }
  }, [query]);

  return (
    <>
      <div>
        <ButtonByTheme setQuery={setQuery} />
        <SearchBar setQuery={setQuery} />
      </div>
      <div className="grid-container">
        {results &&
          results.map((photo) => (
            <NavLink to={`/postcard/${photo.id}`} key={photo.id}>
              <img
                src={photo.src.medium}
                alt={photo.alt}
                className="image-results"
              />
            </NavLink>
          ))}
      </div>
    </>
  );
}

export default Results;
