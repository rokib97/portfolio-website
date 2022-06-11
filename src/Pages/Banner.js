import TypewriterComponent from "typewriter-effect";
const Banner = () => {
  return (
    <div id="home" className="hero lg:mb-32">
      <div className="hero-content w-full mx-auto flex-col justify-between lg:flex-row">
        <div className="max-w-2xl">
          <p className="text-3xl">Hello! I am</p>
          <h1 className="lg:text-6xl text-4xl font-extrabold my-3">
            Rokibul Hasan Rokib
          </h1>

          <div className="text-3xl leading-relaxed mb-5">
            <span className="font-semibold text-primary">
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
          <div className="mb-4">
            <ul className="lg:flex mb-2 text-2xl">
              <li className="mr-1">Web Developer | </li>
              <li className="mr-1">Programmer | </li>
              <li>Software Engineer </li>
            </ul>
          </div>
          <a
            href="https://drive.google.com/file/d/1N2WoVMIoo_jNmySNHGYEJGzwV1N-_hSn/view?usp=sharing"
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
