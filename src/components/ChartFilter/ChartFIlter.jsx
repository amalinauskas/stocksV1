import React from "react";
import * as S from "./ChartFIlter.styles";

const ChartFIlter = ({ text, onClick }) => {
  return <S.ChartFIlter onClick={onClick}>{text}</S.ChartFIlter>;
};

export default ChartFIlter;
