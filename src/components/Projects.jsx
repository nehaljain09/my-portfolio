import React from "react";
import Project from "./Project";
import data from "./../data/projectsData.js";

function Projects() {
  return (
    <>
      <div className="sm:pl-[5rem] sm:p-8 p-16 pb-0 mt-4 sm:mt-0 sm:px-4 sm:py-2">
        <div>
          <h1 className="w-72 mb-4 tracking-wider font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2.5xl sm:mb-4 sm:w-full">
            Projects
          </h1>
        </div>
      </div>
      <div
        id="projects"
        className="sm:pl-[5rem] pt-0 p-16 mt-4 sm:mt-0 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {data?.map((project) => {
          return (
            <Project
              key={project.id}
              image={project.img}
              name={project.name}
              live={project.live}
              source={project.source}
              desc={project.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
