import React from "react";
export const Hero = () => {
  return (
    <>
      <section id="hero" className="py-40">
        <div className="hero container mx-auto">
          <div className="sm:flex font-poppins items-center justify-between">
            <div className="hero-info space-y-3 sm:w-2/5 text-center sm:text-left mb-10 sm:mb-0">
              <span className="inline-flex ml-2 h-6 w-6 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex justify-center items-center text-white rounded-full h-6  w-6 bg-green-500 text-sm">
                  js
                </span>
              </span>
              <h4 className=" text-xl">Start Your Journey</h4>
              <h1 className="font-bold text-4xl">
                With <span className="text-green-400">React</span> JS
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                tenetur dolorum nihil iste, laudantium ea!
              </p>
              <button className="text-gray-50 p-3 px-5 transition hover:bg-green-500 bg-green-400">
                Start Journey
              </button>
            </div>
            <div className="image-info sm:w-1/2 grid place-items-center">
              <img
                src={require("../../images/1623869589264.png")}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
        <a
          href="#services"
          className="scroll-down animate-bounce absolute bottom-5 left-1/2 w-10 h-10 bg-green-400 text-white grid place-items-center cursor-pointer rounded-full"
        >
          <span className="text-2xl">&#8595;</span>
        </a>
      </section>
    </>
  );
};
