import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Navigation from "../Navigation/Navigation";
const Home = () => {
  return (
    <>
      <Navigation />
      <Header></Header>
      <About></About>
      <Blogs></Blogs>
    </>
  );
};

export default Home;
