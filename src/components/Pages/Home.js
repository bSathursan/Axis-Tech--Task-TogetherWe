import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import banner from "../../images/Illustration.png";

const Home = () => {
  return (
    <div>
      <NavBar />

      <div className="banner">
        <img src={banner} className="bannerImage" alt="banner" />
        <div className="textContainer">
          <h1 className="headContainer">
            We Want to give them a better tommorow!
          </h1>
          <p className="paraContainer">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever <br /> since the 1500s
          </p>
          <button className="buttonContainer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
