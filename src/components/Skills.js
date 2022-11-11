import React from "react";
import JavaScriptIcon from "../assets/js.png";
import PythonIcon from "../assets/python.png";
import ReactIcon from "../assets/react.png";
import ReactNativeIcon from "../assets/react-native.png";
import NodeIcon from "../assets/node.png";
import TailWindIcon from "../assets/tailwind.png";
import GitIcon from "../assets/git.png";
import NextJsIcon from "../assets/next-js.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[1100px] px-10 justify-evenly mx-auto items-center snap-center"
    >
      <div className="h-screen relative flex overflow-hidden flex-col text-center md:text-left justify-evenly mx-auto items-center px-10 max-w-[550px] md:max-w-[600px] lg:max-w-[1500px] xl:flex-row">
        <div className="px-5 flex flex-col">
          <div>
            <h3 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
              My Skills/Technologies
            </h3>
            <div className="lg:max-w-[600px]">
              <p>
                Thanks to my experience in Zero to Masterys' intensive web
                development course, I'm able to quickly adapt to using new
                technologies and adopt existing codebases. While my skillset is
                Full Stack, My specialty is in the Front End. Writing code to
                create something from nothing on the page helps me combine my
                passion for art and coding.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              <img
                alt=""
                src={JavaScriptIcon}
                decoding="async"
                data-nimg="fill"
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                sizes="100vw"
              ></img>
              <noscript></noscript>
            </span>
            <h4 className="relative top-10 pt-6">JavaScript</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              <img
                alt=""
                src={PythonIcon}
                decoding="async"
                data-nimg="fill"
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-6">Python</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={ReactIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out  "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-6">React</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={ReactNativeIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-2">React-Native</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={NodeIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-2">Node.js</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={TailWindIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-2">tailwind</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={GitIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-2">Git</h4>
          </div>
          <div className="flex relative p-3 m-3 justify-center">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              {" "}
              <img
                alt=""
                src={NextJsIcon}
                className="h-4 w-4 hover:grayscale hover:filter transition duration-1000 ease-in-out "
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              ></img>
            </span>
            <h4 className="relative top-10 pt-2">Next.js</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
