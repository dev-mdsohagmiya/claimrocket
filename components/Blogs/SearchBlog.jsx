"use client";
import React, { useState } from "react";

const SearchBlog = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <div className="bg-gray-900 pt-4 pb-2 px-4 mb-6 rounded-md">
      <h1 className="text-2xl font-semibold text-red-500">Search Blogs</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className=" p-2 my-4 mr-2 w-[75%]"
        />
        <button
          className="bg-red-500 text-white p-2 hover:bg-red-700 transform transition-all delay-75 ease-in font-semibold"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBlog;
