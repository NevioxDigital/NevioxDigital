import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-column h-screen">
      <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold mr-auto">
        <span className="border-b border-gold pb-1" id='about'>About</span>
      </div>
      <div className="flex-1 flex mt-64 items-center flex-col">
        <div className="max-w-md mr-auto mb-10 float-left">
          <h1 className="text-4xl  font-title font-bold mb-10">Mobile and web development</h1>
          <p className="font-body text-3xl">Be proud of your achievements. Let the world see what you are made of and use us as your digital guide!</p>
        </div>
        <div className="flex justify-center items-center">
            <p>TEST TEST TEST</p>
        </div>
      </div>
    </div>
  );
};

