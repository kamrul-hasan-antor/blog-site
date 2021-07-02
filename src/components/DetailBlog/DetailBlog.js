import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DetailBlog.css";
const DetailBlog = () => {
  const { _id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const url = `https://bagged-poutine-86328.herokuapp.com/blog/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [_id]);
  const { title, description, imageURL } = detail;

  return (
    <div className="detail_container">
      <h2 className="page-title"> blog detail </h2>
      <div className="text-center mt-5">
        <img src={imageURL} alt="" />
        <h2>{title} </h2>
      </div>
      <p className="align-item-center">{description} </p>
    </div>
  );
};

export default DetailBlog;
