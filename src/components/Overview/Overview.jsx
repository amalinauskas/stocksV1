import React from "react";
import * as S from "./Overview.styles";
import Card from "../Card/Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <S.Overview>
      <Card>
        <span>{symbol}</span>
        <div className="overviewDiv">
          <span>
            ${price}
            <span>{currency}</span>
          </span>
          <span>
            {change} <span>({changePercent}%)</span>
          </span>
        </div>
      </Card>
    </S.Overview>
  );
};

export default Overview;
