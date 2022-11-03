import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start">
      <h1 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
        Patrick Abel-Nwachukwu
      </h1>
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
        FrontEnd Software Engineer
      </h2>
      <div className="pt-5 hover:shadow-outline">
        <a
          className="inline w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 scroll-smooth"
          href="/#about"
        >
          about
        </a>
        <a
          className="inline w-20 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 "
          href="/#skills"
        >
          skills
        </a>
        <a
          className="inline w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 "
          href="/#projects"
        >
          projects
        </a>
        <a
          className="inline w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 "
          href="/contact"
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
