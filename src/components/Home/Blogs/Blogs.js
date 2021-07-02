import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllBlogs from "../AllBlogs/AllBlogs";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://bagged-poutine-86328.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div>
      <h1 className="page-title">Blogs</h1>
      {blogs.map((blog) => (
        <AllBlogs data={blog} />
      ))}
    </div>
  );
};

export default Blogs;
