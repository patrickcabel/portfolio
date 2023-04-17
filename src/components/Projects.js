import React from "react";
import NFTIcon from "../assets/nft.png";
import BrainIcon from "../assets/brain.png";
import FoodIcon from "../assets/food.png";
import BoxIcon from "../assets/box.png";

const Projects = () => {
  return (
    <section id="projects" className="snap-start flex justify-center">
      <div class="container">
        <div class="project-wrapper">
          <div
            class="relative flex flex-col text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
            style={{ opacity: "1" }}
          >
            <div class="flex flex-col max-w-[600px] justify-center">
              <h3 className="text-xl uppercase text-gray-500 pb-2 tracking-[12px]">
                Projects
              </h3>

              <div class="flex flex-col max-w-[450px] p-5 m-5 border z-10">
                <div class="flex flex-row items-center space-x-4">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="text-3xl font-thin tracking-[2px]">Ecommerce</h3>
                    <div>
                      <p class="mb-4">
                        This is a beautiful ecommerce website that uses next.js,
                        sanity and stripe .
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://ecommerce-patrickcabel-git-main-patrickcabel.vercel.app/"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://github.com/patrickcabel/ecommerce/tree/main"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a
                      rel="noreferrer"
                      href="https://jazzy-bienenstitch-25023d.netlify.app/"
                      target="_blank"
                    >
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
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
                            <img alt="" src={BoxIcon} />
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col max-w-[450px] p-5 m-5 border z-10">
                <div class="col-lg-4 col-sm-12">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="text-3xl font-thin tracking-[2px]">
                      FoodDelivery
                    </h3>
                    <div>
                      <p class="mb-4">
                        This uses the lastest react and tailwind to create a
                        design for a food delivery service.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2  border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://patrickcabel.github.io/FoodDelivery/"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2  border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://github.com/patrickcabel/FoodDelivery/tree/main"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a
                      rel="noreferrer"
                      href="https://soft-florentine-6aaa88.netlify.app/"
                      target="_blank"
                    >
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
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
                            <img
                              alt="ProjectImage"
                              class="img-fluid"
                              src={FoodIcon}
                            />
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col max-w-[450px] p-5 m-5 border z-10">
                <div class="col-lg-4 col-sm-12">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="text-3xl font-thin tracking-[2px]">
                      NFT MarketPlace
                    </h3>
                    <div>
                      <p class="mb-4">
                        This is an upscale NFT MarketPlace that lets users
                        connect their wallets and purchase and sell NFTS.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://cold-feather-7956.on.fleek.co/"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="relative flex flex-col w-25 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-8 scroll-smooth text-left items-center mx-auto px-10 max-w-[400px] md:max-w-[700px] lg:max-w-[1200px]"
                      href="https://github.com/patrickcabel/MarketPlaceShowCase"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a
                      rel="noreferrer"
                      href="https://incandescent-gnome-cafc39.netlify.app/"
                      target="_blank"
                    >
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
                      >
                        <img alt="" src={NFTIcon} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
