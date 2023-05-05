import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-row h-screen">
    <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold mr-auto ml-16 mt-10">
      <span className="border-b border-gold pb-1" id='about'>About</span>
    </div>
    <div className="flex-1 flex mt-64 items-start">
      <div className="max-w-md mr-10">
        <h1 className="text-4xl font-title font-bold my-10">Digital development agency</h1>
        <p className="font-body text-3xl mb-10">Be proud of your achievements.Let the world see what you are made of and use us as your digital guide!</p>
      </div>
      <div className="flex justify-center items-center img-about h-full w-full mr-16 mb-32">
      </div>
    </div>
  </div>
  
  );
};

