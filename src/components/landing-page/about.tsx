import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen my-32 md:my-64">
      <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold mr-auto pl-2 md:ml-16 mt-10">
        <span className="border-b border-gold pb-1" id="about">
          About
        </span>
      </div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center my-32 md:my-64">
        <div className="flex-1 md:flex-none flex flex-col md:ml-32 ml-auto mr-auto items-center md:items-start justify-center">
          <h1 className="text-4xl font-title font-bold my-10 animate-about-title text-center md:text-left">
            Digital agency
          </h1>
          <p className="font-body text-3xl mb-10 md:text-left text-center md:mr-32">
            Be proud of your achievements. Let the world see what you are made
            of and use us as your digital guide!
          </p>
        </div>
        <div className="flex justify-center items-center img-about h-full w-full md:mr-16 mb-32 mr-12 ml-12"></div>
      </div>
    </div>
  );
};
