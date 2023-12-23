import React , { useState } from "react";

export default function SearchBar({inputValue,handleInputChange,handleEnterKeyPress}) {
  return (
    <>
      <input
        className="search_input"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
      />
    </>
  );
}
