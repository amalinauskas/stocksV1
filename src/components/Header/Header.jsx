import React from "react";
import Search from "../Search/Search";

const Header = ({ name }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <Search />
      </div>
    </>
  );
};

export default Header;
