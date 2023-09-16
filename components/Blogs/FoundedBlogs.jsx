"use client";
import React, { useState } from "react";
import SearchBlog from "./SearchBlog";
import ShowSearchBlog from "./ShowSearchBlog";
import { blogData } from "@/app/blogs/page";

const FoundedBlogs = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredBlogs = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredBlogs);
  };
  return (
    <div>
      <SearchBlog onSearch={handleSearch} />
      <ShowSearchBlog searchResults={searchResults} />
    </div>
  );
};

export default FoundedBlogs;
