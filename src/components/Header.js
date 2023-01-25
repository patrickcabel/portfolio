import React from "react";
import resume from "../assets/resume.pdf";
import linkedIn from "../assets/linkedIn.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

const Header = () => {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-around mx-auto xl:items-center z-20 bg-white ">
      <div className="flex flex-row items-center">
        <span className="flex mt-3">
          <a
            rel="noreferrer"
            target="_blank"
            class="inline w-16 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
            href="https://www.linkedin.com/in/patrickabelnwachukwu/"
          >
            <img src={linkedIn} alt="" />
          </a>
        </span>

        <span className="flex mt-3">
          <a
            rel="noreferrer"
            class="inline items-center w-16 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            href="https://github.com/patrickcabel"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>
        </span>
        <span className="flex mt-3 text-lg">
          <a
            rel="noreferrer"
            target="_blank"
            className="inline items-center w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            href={resume}
          >
            Resume
          </a>
        </span>
      </div>
      <div className="flex flex-row items-center cursor-pointer text-lg">
        <span className="flex mt-3 ">
          <a
            rel="noreferrer"
            target="_blank"
            className="inline items-center w-16 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            href="mailto:pabelnwa@gmail.com"
          >
            <img src={email} alt="" />
          </a>
        </span>
        <span className="hidden md:inline-flex text-lg mt-3  ">
          <a
            href="/#contact"
            className="inline items-center w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Contact Me
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
