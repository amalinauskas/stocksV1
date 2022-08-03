import React from "react";
import * as S from "./Details.styles";
import Card from "../Card/Card";

const Details = ({ details }) => {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <S.Details>
      <Card>
        <ul>
          {Object.keys(detailsList).map((item) => {
            return (
              <li key={item}>
                <span>{detailsList[item]}</span>
                <span>
                  {item === "marketCapitalization"
                    ? `${convertMillionToBillion(details[item])}B`
                    : details[item]}
                </span>
              </li>
            );
          })}
        </ul>
      </Card>
    </S.Details>
  );
};

export default Details;
