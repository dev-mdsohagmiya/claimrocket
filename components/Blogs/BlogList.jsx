"use client";
import { blogData } from "@/app/blogs/page";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const BlogList = () => {
  return (
    <div className="bg-gray-800 rounded-md p-8  ">
      <h1 className="pb-2 text-xl font-bold text-red-500">Latest post</h1>
      {blogData.map((blog) => {
        return (
          <div>
            <div className="py-1">
              <h1 className="flex items-center gap-3">
                <span className="text-gray-300">
                  <BsArrowRightCircle />
                </span>
                <Link href={`${blog.id}`}>
                  <span className="text-white hover:text-red-400 transform transition-all duration-150 ease-in">
                    {" "}
                    {blog.title}
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
