import styled from "styled-components";

export const SearchRes = styled.ul`
  width: 50%;
  border: 1px solid black;
  padding: 0;

  li {
    cursor: pointer;
    /* margin: 0; */
    padding: 2px;
    display: flex;
    justify-content: space-between;

    :hover {
      background-color: aliceblue;
    }
  }
`;
