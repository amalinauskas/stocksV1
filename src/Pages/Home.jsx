import { useState } from "react";
import Dash from "../components/Dash/Dash";
import StockContext from "../context/StockContext";

const Home = () => {
  const [stockSymbol, setStockSymbol] = useState("FB");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Dash />;
    </StockContext.Provider>
  );
};

export default Home;
