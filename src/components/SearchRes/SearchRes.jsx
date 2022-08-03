import React, { useContext } from "react";
import * as S from "./SearchRes.styles";
import StockContext from "../../context/StockContext";

const SearchRes = ({ results }) => {
  const { setStockSymbol } = useContext(StockContext);
  return (
    <S.SearchRes>
      {results.map((item) => {
        return (
          <li key={item.symbol} onClick={() => setStockSymbol(item.symbol)}>
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </S.SearchRes>
  );
};

export default SearchRes;
