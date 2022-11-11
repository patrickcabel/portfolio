import React from "react";
import { Link } from "react-router-dom";
import Patrick from "../assets/patrick.png";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[1100px] px-10 justify-evenly mx-auto items-center snap-center"
    >
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
          <img alt="Patrick" src={Patrick}></img>
        </span>
      </span>
      <div class="space-y-10 px-0 md:px-10 max-w-[700px]">
        <h3 class="text-4xl font-thin">
          <p class="text-base">
            I'm a full stack web developer who specializes in front end and
            design. I first fell in love with Front End development when I saw
            some of the creativity with website designs. I do a lot of drawing
            and painting, so i was already intune with designing. I'm excited to
            find out where Web Development can take me. I love problem solving,
            asking questions, and making something from seemingly nothing.
          </p>
        </h3>
      </div>
    </section>
  );
};

export default About;
