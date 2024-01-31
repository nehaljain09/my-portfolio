import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Projects({ image, name, desc, live, source }) {
  return (
    <div>
      <div className="p-4 w-full">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="mb-4">
            <img
              alt="project"
              src={image}
              className="rounded-md w-full h-48 object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#ec6e59] mb-2 px-4">{name}</h1>
          <p className="font-light leading-loose text-sm px-4">{desc}</p>
          <div className="mt-4 mb-4 gap-5 flex items-center px-4">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm"
            >
              View
            </a>
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-[0.3rem] border border-black rounded-md text-sm bg-white"
            >
              <AiFillGithub className="w-6 h-6 pr-1" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
