import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .clearBtn {
    background-color: #d61c4e;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin: 5px;
    padding: 3px 15px;
  }

  .searchBtn {
    background-color: #7dce13;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin: 5px;
    padding: 3px 32px;
  }

  .searchInput {
    /* width: 50%; */
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
