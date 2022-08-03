import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import * as S from "./Dash.styles";
import Header from "../Header/Header";
import Details from "../Details/Details";
import Overview from "../Overview/Overview";
import Chart from "../Chart/Chart";
import StockContext from "../../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../../api/stock-api";

const Dash = () => {
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <S.Dash>
      <div className="header">
        <Card>
          <Header name={stockDetails.name} />
        </Card>
      </div>
      <div className="container">
        <div className="chart">
          <Chart />
        </div>
        <div className="split">
          <div className="overview">
            <Overview
              symbol={stockSymbol}
              price={quote.pc}
              change={quote.d}
              changePercent={quote.dp}
              currency={stockDetails.currency}
            />
          </div>
          <div className="details">
            <Details details={stockDetails} />
          </div>
        </div>
      </div>
    </S.Dash>
  );
};

export default Dash;
