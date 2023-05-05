import React from 'react';

export const Welcome = () => {
  return (
    <div className="flex h-screen flex-col bg-welcome pb-64">
    <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold ml-16">
      <span className="border-b border-gold pb-1 mr-auto" id='welcome'>Welcome</span>
    </div>
    <div className="max-w-md text-center mx-auto mt-20 mr-auto ">
      <h1 className="mt-32 bg-black bg-opacity-25 text-4xl font-title m-auto font-black text-outline">What you see is what you get</h1>
      <p className="mt-16 bg-black bg-opacity-25 font-body text-5xl font-bold w-full text-outline-body">At Neviox Digital, we are focused on delivering an effective, modern, and robust product adapted to everyones capabilities!</p>
    </div>
  </div>
  
  );
};

