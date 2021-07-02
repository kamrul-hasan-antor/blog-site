import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./AddBlogs.css";
const AddBlogs = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      imageURL: imageURL,
      description: data.description,
    };
    const url = "https://bagged-poutine-86328.herokuapp.com/addBlogs";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blogData),
    }).then((res) => console.log(res));
  };
  const handleImageUpload = (e) => {
    const imgData = new FormData();
    imgData.set("key", "d6e632f3c56512e7e488a9c05a90ab9a");
    imgData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container-main">
      <div className="links">
        <Link to="/">Home</Link> <div></div>
        <Link to="/addBlogs"> Add Blogs </Link>
        <div></div>
        <Link to="/manageBlogs">Manage Blogs</Link>
      </div>
      <h2 className="page-title">Add Blogs</h2>
      <form id="addBlogForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div>
            <input
              className="form-control mt-3 "
              name="title"
              placeholder="Title"
              {...register("title", { required: true })}
            />
          </div>

          <div>
            <textarea
              className="form-control mt-3"
              name="description"
              placeholder="Description"
              rows="6"
              id="comment"
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div className="mt-3">
            <input onChange={handleImageUpload} type="file" name="image" />
            <input className="btn btn-primary" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
