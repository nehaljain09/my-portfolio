import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const strings = [
    "Software Developer",
    "Frontend Developer",
    "ReactJs",
    "Javascript",
    "VueJs",
    "React Redux",
    "HTML / CSS",
    "Mobile-First Design",
    "Responsive Design",
    "Version Control (Git)",
  ];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 500);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(
            strings[currentStringIndex].slice(0, currentString.length + 1)
          );
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === "") {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
    // eslint-disable-next-line
  }, [currentString, currentStringIndex, isTyping]);

  return (
    <span className="font-[500] text-black text-[1.5rem] mb-2 sm:text-[2rem]">
      {currentString}
    </span>
  );
};

export default Typewriter;
