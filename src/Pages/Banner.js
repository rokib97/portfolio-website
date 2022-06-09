import React from "react";
import TypewriterComponent from "typewriter-effect";
const Banner = () => {
  return (
    <div className="lg:mb-32 lg:px-28 w-full">
      <div className="flex-col w-full mx-auto justify-around lg:flex-row-reverse">
        <div className="max-w-2xl">
          <p className="text-3xl">Hello! I am</p>
          <h1 className="text-6xl font-extrabold my-3">Rokibul Hasan Rokib</h1>
          <div className="text-3xl leading-relaxed mb-5">
            <span className="font-semibold">
              <TypewriterComponent
                options={{
                  strings: ["MERN Stack Developer"],
                  deleteSpeed: 50,
                  pauseFor: 500,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
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
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
