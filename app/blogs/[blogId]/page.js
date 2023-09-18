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
    <div className="blog-post">
      <div className="container mx-auto">
        <div className=" py-[80px]  md:py-[130px] px-[20px] md:px-[50px] relative grid grid-cols-1 md:grid-cols-12 gap-12 ">
          <div className="bg-[#1c1c1c] min-h-screen rounded-sm   py-10  px-10 md:px-[60px] col-span-8 ">
            <div>
              <h1 className="text-[35px] font-semibold  text-white text-start">
                {matchedBlog.title}
              </h1>
              <div className=" mt-8">
                <div className="flex items-center pb-1 gap-2 text-[#757575] ">
                  <span>
                    <BsFillPersonFill className="w-4 h-4 text-[#757575] " />
                  </span>{" "}
                  <span className="text-xs ">Written by:</span>
                  <span className="text-xs  font-semibold ">
                    {" "}
                    {matchedBlog.author}
                  </span>
                </div>
                <div className="flex items-center  gap-2 text-[#757575]  ">
                  <MdDateRange className="w-4 h-4 text-[#757575]" />
                  <span className="text-xs ">Posted on : </span>
                  <span className="text-xs  font-semibold ">
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
              <div className="mt-8 text-white text-base ">
                {...matchedBlog.description.map((desc, i) => {
                  return (
                    <div className="my-3" key={Date.now()}>
                      <p
                        className={`${
                          i === 0
                            ? "text-3xl font-bold"
                            : "text-2xl font-semibold"
                        } ${i === 3 ? "" : ""} py-2`}
                      >
                        {desc.miniDescription}
                      </p>
                      <p
                        className={`text-[15px] font-extralight ${
                          i === 3 ? "" : ""
                        }`}
                      >
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
      </div>
    </div>
  );
};

export default page;
