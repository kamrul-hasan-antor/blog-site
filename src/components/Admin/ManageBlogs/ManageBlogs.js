import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ManageBlogs.css";
const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://bagged-poutine-86328.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://bagged-poutine-86328.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("deleted"));
  };

  return (
    <div className="container-fluid">
      <div className="links">
        <Link to="/">Home</Link> <div></div>
        <Link to="/addBlogs"> Add Blogs </Link>
        <div></div>
        <Link to="/manageBlogs">Manage Blogs</Link>
      </div>
      <h2 className="page-title"> manage blogs</h2>
      <div className="row text-center bg-white mt-2 pt-2">
        <div className="col-md-2 text-left">
          <h5>Image</h5>
        </div>
        <div className="col-md-2">
          <h5>Title</h5>
        </div>
        {/* <div className="col-md-5">
          <h5>Description</h5>
        </div> */}
        <div className="col-md-2">
          <h5>Action</h5>
        </div>
      </div>
      {blogs.map((blog) => {
        return (
          <div className="mt-3 manageBlog-items">
            <div className="row text-center mt-1 text-center">
              <div className="col-md-2">
                <img className="img-fluid" src={blog.imageURL} alt="" />
              </div>

              <div className="col-md-2">
                <h5 className="">{blog.title}</h5>
              </div>
              {/* <div className="col-md-5">
                <p>${blog.description}</p>
              </div> */}
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(`${blog._id}`)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageBlogs;
