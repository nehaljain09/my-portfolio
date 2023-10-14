// import React from "react";
// import { AiFillGithub } from "react-icons/ai";

// function Projects({ image, name, live, source, desc, stack }) {
//   return (
//     <div className="flex flex-col-reverse gap-20 mt-12 sm:flex-row sm:items-center sm:justify-between">
//       <div className="w-full sm:w-1/2">
//         <div className="flex flex-col gap-2">
//           <h1 className="text-xl font-bold text-[#ec6e59]">{name}</h1>
//           <p className="sm:text-justify font-light  leading-loose text-sm sm:text-base">
//             {desc}
//           </p>
//           <div className="flex gap-5 mt-7">
//             <a
//               href={live}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm"
//             >
//               Demo
//             </a>
//             <a
//               href={source}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm bg-white dark:bg-[#20262E]"
//             >
//               <AiFillGithub className="w-6 h-6" /> Code
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="w-full sm:w-1/2">
//         <img
//           alt="project"
//           src={image}
//           className="rounded-md w-full sm:w-[60%]"
//         />
//       </div>
//     </div>
//   );
// }

// export default Projects;

import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Projects({ image, name, desc, live, source }) {
  return (
    <div>
      <div className="p-4 w-full">
        <div className="bg-white dark:bg-[#20262E] shadow-md rounded-md overflow-hidden">
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
              className="flex items-center p-[0.3rem] border border-black rounded-md text-sm bg-white dark:bg-[#20262E]"
            >
              <AiFillGithub className="w-6 h-6" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
