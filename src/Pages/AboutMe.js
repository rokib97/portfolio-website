import React from "react";
import rokib from "../Images/rokib.png";
const AboutMe = () => {
  return (
    <div className="lg:my-44  my-12">
      <div className="hero">
        <div className="hero-content w-full flex-col justify-between lg:flex-row-reverse">
          <img className="" src={rokib} class="lg:max-w-sm rounded-lg" alt="" />

          <div className="max-w-2xl mr-0 lg:mr-16">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4">ABOUT ME</h1>
            <p className="text-xl leading-relaxed mb-5">
              Hello! I'm Rokibul Hasan, a passionate Web Developer. My core
              skill is based on JavaScript and I love to do most of the things
              using JavaScript.I am working with React, JavaScript, HTML, and
              CSS and familiarity with back-end technologies such as NodeJS and
              ExpressJS. I love to make the web more open to the world.I am
              available for any kind of job opportunity that suits my interests.
            </p>
            <a
              href="https://drive.google.com/file/d/1HjygocBdppINjJQ9laEe88QnDGac4Jz8/view?usp=sharing"
              target="_blank"
              className="btn btn-primary text-white mr-2"
              rel="noreferrer"
            >
              Get Resume
            </a>

            <a
              href="/"
              target="_blank"
              className="btn btn-primary hover:text-white btn-outline text-white"
              rel="noreferrer"
            >
              My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
