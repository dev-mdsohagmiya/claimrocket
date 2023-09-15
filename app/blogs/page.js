import Blogs from "@/components/Blogs";
import React from "react";

const Blog = () => {
  const blogData = [
    {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "", // Replace with your image path
      date: "September 1, 2023",
    },
    {
      title: "Blog Post 2",
      description: "Pellentesque ac ligula in tellus tristique hendrerit.",
      imageUrl: "", // Replace with your image path
      date: "August 25, 2023",
    },
    // Add more blog data as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog, index) => (
          <Blogs
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
