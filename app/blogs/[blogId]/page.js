"use client";
import React from "react";
import { blogData } from "../page";
import { BsFillPersonFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import Image from "next/image";

const page = ({ params }) => {
  console.log(typeof params.blogId);
  const matchedBlog = blogData.find(
    (blog) => blog.id === Number(params.blogId)
  );
  console.log(matchedBlog);
  return (
    <div className="px-[45px] py-[80px]  md:p-[130px]  relative ">
      <div className="bg-gray-800 min-h-screen rounded-sm   py-10  px-10 md:px-[120px] ">
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
            <span
              dangerouslySetInnerHTML={{ __html: matchedBlog.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
