import React from "react";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start">
      <p className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
        email:pabelnwa@gmail.com
      </p>
      <a
        className="inline items-center w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        href={resume}
      >
        resume
      </a>
    </div>
  );
};

export default Contact;
