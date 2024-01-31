/* eslint-disable */
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorldCode } from "react-icons/tb";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: "smooth",
        duration: 2000,
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 640 && showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showMenu]);

  return (
    <>
      <div className="flex mt-[-2px] py-[2rem] pr-[3.5rem] sm:pl-[1.5rem] pr-[5rem] justify-between items-center relative">
        <TbWorldCode className="h-[2w] min-h-[35px] w-[7.8125vw] min-w-[134px] sm:h-[1.8rem] sm:w-[7rem]" />
        {!showMenu && (
          <ul className="hidden tm:block sm:block md:flex font-[400] text-black text-custom-20 gap-[5rem] md:gap-[3rem] lg:gap-4rem">
            <a
              className="tracking-wider hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("experience")}
            >
              Experience
            </a>
            <a
              className="tracking-wide hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("projects")}
            >
              Projects
            </a>
            <a
              className="tracking-wider hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("contact")}
            >
              Contact
            </a>
          </ul>
        )}

        {showMenu && (
          <ul className="flex flex-col font-[400] text-black text-custom-20 gap-[2rem] md:gap-[3rem] lg:gap-2rem absolute top-[4.5rem] right-[3.5rem] z-10 bg-[#f1eded] p-4 shadow-md rounded">
            <a
              className="tracking-wider hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("experience")}
            >
              Experience
            </a>
            <a
              className="tracking-wide hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("projects")}
            >
              Projects
            </a>
            <a
              className="tracking-wider hover:after:bg-black  font-[400]"
              onClick={() => scrollToComponent("contact")}
            >
              Contact
            </a>
          </ul>
        )}
      </div>
      <div className="flex">
        <div className="tm:hidden sm:hidden absolute top-[2rem] right-[3.5rem]">
          <GiHamburgerMenu
            className="h-6 w-6 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
