import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[1100px] px-10 justify-evenly mx-auto items-center snap-center"
    >
      <span></span>
      <div class="space-y-10 px-0 md:px-10 max-w-[700px]">
        <h3 class="text-4xl font-thin">
          <p class="text-base">
            I'm a full stack web developer who specializes in front end and
            design. I first fell in love with the creative possibilities of the
            web. I'm excited to find out where Web Development can take me. I
            love problem solving, asking questions, and making something from
            seemingly nothing.
          </p>
        </h3>
      </div>
      About
    </section>
  );
};

export default About;
