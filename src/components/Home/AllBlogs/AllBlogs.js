import React from "react";
import { useHistory } from "react-router-dom";
import "./AllBlogs.css";

const AllBlogs = ({ data }) => {
  const { _id, title, imageURL } = data;

  const history = useHistory();
  const handleReadMore = (id) => {
    const url = `blog/${id}`;
    history.push(url);
  };

  return (
    <div className="d-inline-flex col-12 mt-auto col-lg-4 p-4">
      <div class="mainCard card">
        <img src={imageURL} class="cardImg p-2" alt="..." />
        <div class="card-body text-center ">
          <h5 class="card-title">{title} </h5>
          <button onClick={() => handleReadMore(_id)} class="btn btn-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
