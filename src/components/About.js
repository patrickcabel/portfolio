import React from "react";
import { Link } from "react-router-dom";
import Patrick from "../assets/patrick.png";
const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-start"
    >
      <h3 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
        About Me
      </h3>
      <span
        style={{
          boxSizing: "border-box",
          display: "inline-block",
          overflow: "hidden",
          width: "initial",
          height: "initial",
          background: "none",
          opacity: "1",
          border: "0px",
          margin: "0px",
          padding: "0px",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <span
          style={{
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: "1",
            border: "0px",
            margin: "0px",
            padding: "0px",
            maxWidth: "100%",
          }}
        >
          <img class="w-[300px] h-[200px]" alt="Patrick" src={Patrick}></img>
        </span>
      </span>
      <div class="space-y-10 px-0 md:px-10 max-w-[700px]">
        <h3 class="text-4xl font-thin">
          <p class="text-base">
            I am a skilled front-end full-stack web developer with a passion for
            art. With experience in both web development and design, I possess
            the ability to bring creative ideas to life through code and design.
            I am able to create visually appealing and user-friendly websites
            while utilizing the latest technologies and best practices. My
            experience in both technical and artistic fields makes me a valuable
            asset to any team.
          </p>
        </h3>
      </div>
    </section>
  );
};

export default About;
