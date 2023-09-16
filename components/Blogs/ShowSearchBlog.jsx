import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowSearchBlog = ({ searchResults }) => {
  return (
    <div>
      <div className="bg-[#1c1c1c] rounded-md my-6 grid grid-cols-2 gap-2">
        {searchResults.map((blog) => (
          <div key={blog.id}>
            <Link href={`${blog.id}`}>
              <div className="p-2 bg-gray-700 rounded-md border border-gray-700 m-2 hover:shadow-lg hover:shadow-gray-800 transform transition-all delay-100 ease-in ">
                {" "}
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={140}
                  height={90}
                />
                <h2 className="text-gray-200 text-sm py-1 hover:text-red-500 transform transition-all delay-100 ease-in ">
                  {blog.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSearchBlog;
