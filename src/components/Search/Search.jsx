import React, { useState } from "react";
import SearchRes from "../SearchRes/SearchRes";
import * as S from "./Search.styles";
import { searchSymbol } from "../../api/stock-api";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbol(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };

  return (
    <S.Search>
      <div>
        {" "}
        <input
          type="text"
          value={input}
          className="searchInput"
          placeholder="Insert company name..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              updateBestMatches();
            }
          }}
        />
        {input && (
          <button className="clearBtn" onClick={clear}>
            Clear
          </button>
        )}
        <button className="searchBtn" onClick={updateBestMatches}>
          Search
        </button>
      </div>

      {input && bestMatches.length > 0 ? (
        <SearchRes results={bestMatches} />
      ) : null}
    </S.Search>
  );
};

export default Search;
