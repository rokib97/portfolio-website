import { useEffect, useState } from "react";

import Project from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="projects" className="mb-32">
      <h1 className="lg:text-4xl text-3xl font-bold mb-6">MY PROJECTS</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
