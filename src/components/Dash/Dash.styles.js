import styled from "styled-components";

export const Dash = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;

  .container {
    width: 100%;
    display: flex;
    @media (max-width: 40em) {
      flex-direction: column;
    }
  }
  .split {
    width: 50%;
    @media (max-width: 40em) {
      width: 100%;
    }
  }
  .header {
    width: 100%;
  }

  .chart {
    width: 50%;
    @media (max-width: 40em) {
      width: 100%;
    }
  }
  .overview {
    width: 100%;
    @media (max-width: 40em) {
      margin-top: 10vh;
    }
  }
  .details {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;
