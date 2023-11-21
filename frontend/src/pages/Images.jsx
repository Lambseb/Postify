import { useEffect, useState } from "react";
import SearchBar from "../components/Searchbar/SearchBar";
import ButtonByTheme from "../components/FilterButton/ButtonsByTheme";
import ImageSample from "../components/ImageSample/ImageSample";

function Images() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=20`,
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
    <div>
      <ButtonByTheme setQuery={setQuery} />
      <SearchBar setQuery={setQuery} results={results} />
      <ImageSample pictures={pictures} setPictures={setPictures} />
    </div>
  );
}

export default Images;
