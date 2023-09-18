"use client";
import { blogData } from "@/app/blogs/page";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const BlogList = () => {
  return (
    <div className="bg-[#1c1c1c] rounded-md p-8  ">
      <h1 className="pb-2 text-xl font-bold text-red-500">Latest post</h1>
      {blogData.map((blog, index) => {
        return (
          <div key={index}>
            <div className="py-1 text-white">
              <h1 className="flex items-center gap-3">
                <span className="text-white">
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
