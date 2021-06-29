import React from "react";
import "./About.css";
import image1 from "../../../images/about-image.png";
const About = () => {
  return (
    <div className="about-main">
      <h2 className="text-center page-title">About Us</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              harum, saepe perspiciatis est aliquam veniam velit beatae
              praesentium voluptas. Sunt fugit, blanditiis necessitatibus,
              deserunt sed id fuga animi, doloribus pariatur amet perferendis
              ut. Delectus beatae deleniti harum minus sapiente similique
              recusandae totam id placeat possimus nisi accusamus perferendis
              dolorum nihil eum nobis iusto officia asperiores qui, explicabo
              quod tenetur in.Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laboriosam qui facilis quasi, provident velit
              natus accusamus minus non aliquid eligendi sapiente quae quibusdam
              perspiciatis tempore itaque eum harum nobis autem voluptas sunt
              minima obcaecati amet esse molestiae! Nihil, omnis
              laudantium.Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Laboriosam qui facilis quasi.
            </p>
          </div>
          <div className="col-md-6 about-image">
            <img src={image1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
