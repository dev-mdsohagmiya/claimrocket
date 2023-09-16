"use client";
import React from "react";
import { blogData } from "../page";
import { BsFillPersonFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";
import BlogList from "@/components/Blogs/BlogList";
import SearchBlog from "@/components/Blogs/SearchBlog";
import FoundedBlogs from "@/components/Blogs/FoundedBlogs";

const page = ({ params }) => {
  console.log(typeof params.blogId);
  const matchedBlog = blogData.find(
    (blog) => blog.id === Number(params.blogId)
  );
  console.log(matchedBlog.description);
  return (
    <div className=" py-[80px]  md:py-[130px] px-[20px] md:px-[50px] relative grid grid-cols-1 md:grid-cols-12 gap-12 ">
      <div className="bg-gray-900 min-h-screen rounded-sm   py-10  px-10 md:px-[60px] col-span-8 ">
        <div>
          <h1 className="text-3xl font-semibold italic text-gray-300 text-start">
            {matchedBlog.title}
          </h1>
          <div className=" mt-8">
            <div className="flex items-center pb-1 gap-2 ">
              <span>
                <BsFillPersonFill className="w-4 h-4 text-gray-300" />
              </span>{" "}
              <span className="text-xs text-gray-300">Written by:</span>
              <span className="text-xs text-green-500 font-semibold ">
                {" "}
                {matchedBlog.author}
              </span>
            </div>
            <div className="flex items-center  gap-2 ">
              <MdDateRange className="w-4 h-4 text-gray-300" />
              <span className="text-xs text-gray-300">Posted on : </span>
              <span className="text-xs text-green-500 font-semibold ">
                {matchedBlog.date}
              </span>
            </div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center mt-10">
            <Image
              src={matchedBlog.imageUrl}
              alt={matchedBlog.title}
              width={800}
              height={500}
            />
          </div>
          <div className="mt-8 text-gray-200 text-base ">
            {...matchedBlog.description.map((desc, i) => {
              return (
                <div className="my-3">
                  <p
                    className={`${
                      i === 0 ? "text-3xl font-bold" : "text-2xl font-semibold"
                    } ${i === 3 ? "italic" : "not-italic"} py-2`}
                  >
                    {desc.miniDescription}
                  </p>
                  <p className={`${i === 3 ? "italic" : "not-italic"}`}>
                    {desc.miniPara}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:col-span-4 col-span-8">
        <div>
          <FoundedBlogs />
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default page;
