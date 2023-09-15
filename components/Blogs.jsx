import Image from "next/image";
import React from "react";

const Blogs = ({ title, description, imageUrl, date }) => {
  return (
    <div className="pt-[80px] ">
      <div className="mx-5">
        <div className="bg-[#1c1c1c]  shadow-xl overflow-hidden">
          <Image
            height={300}
            width={350}
            src={imageUrl}
            alt={title}
            className="w-full h-[300px] object-cover object-center "
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
            <p className="text-[#757575] text-sm mb-2">{date}</p>
            <p className="text-gray-100">{description}</p>
            <div className="mt-4">
              <button className="bg-[#E02B20] text-white font-semibold py-2 px-4  hover:bg-black transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
