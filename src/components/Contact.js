import React from "react";
import resume from "../assets/resume.pdf";
import email from "../assets/email.png";
import resumeIcon from "../assets/resume.png";
import linkedIn from "../assets/linkedIn.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start"
    >
      <h3 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
        Contact Me
      </h3>

      <div className="flex flex-row items-center space-x-4">
        <a
          href="mailto:pabelnwa@gmail.com"
          className=" inline items-center w-[200px] h-[200px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
        >
          <img src={email} alt="" />
        </a>
        <a
          className="inline items-center w-[200px] h-[200px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          href={resume}
        >
          <img src={resumeIcon} alt="" />
        </a>
        <a
          className="inline items-center w-[200px] h-[200px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          href="https://www.linkedin.com/in/patrickabelnwachukwu/"
        >
          <img src={linkedIn} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
