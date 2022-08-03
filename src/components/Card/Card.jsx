import React from "react";
import * as S from "./Card.styles";

const Card = ({ children }) => {
  return <S.Card> {children} </S.Card>;
};

export default Card;
