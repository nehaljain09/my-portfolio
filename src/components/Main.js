import React from "react";
import myImage from "./../assets/main_image.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from "./Typewriter";
import myPDF from "../assets/Nehal_Resume.pdf";

function Main() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = myPDF;
    link.download = "Nehal_Resume.pdf";
    link.click();
  };

  return (
    <div
      id="main"
      className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
        <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
          <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
            Hi,
          </h1>
          <blockquote className="font-[800] text-[2rem] text-[#ec6e59;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
            I'm
            <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#ec6e59;] relative inline-block">
              <span className="relative text-[#fffffff0]">
                Nehal
              </span>
            </span>
          </blockquote>
          <div className="h-10 mt-4">
            <Typewriter />
          </div>
          <p className="text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
            I am a skilled Software Developer with over 3+ years of professional
            experience. Currently working as Software Developer in Walmart. 
            My expertise includes a wide range of technologies and
            tools, with a strong focus on web development. I am proficient in
            JavaScript, ReactJS, NextJs, React-Redux, Typescript, graphQl, Sass, Tailwind
            CSS, HTML, CSS, and Git. I am passionate about creating efficient
            and user-friendly web applications and continuously seek
            opportunities for learning and growth in the dynamic field of
            software development.
          </p>

          <div className="border-2 border-solid border-[#ec6e59] bg-[#ec6e59] rounded-full text-white sm:w-48 p-4 mt-6 mb-6 text-center">
            <button onClick={handleDownload} className="cursor-pointer">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
          <div className="box">
            <div className="h-full justify-end flex items-center sm:justify-center">
              <img
                src={myImage}
                alt="main"
                className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="flex place-content-center mt-7 ">
          <div className="flex flex-row sm:flex-col gap-4">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/nehaljain7675/"
              target="_blank"
            >
              <AiFillLinkedin size={40} className="cursor-pointer" />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/nehaljain09"
              target="_blank"
            >
              <AiFillGithub size={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
