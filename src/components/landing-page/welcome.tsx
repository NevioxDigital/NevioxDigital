import React from 'react';

export const Welcome = () => {
  return (
    <div className="flex h-screen flex-col">
    <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold">
      <span className="border-b border-gold pb-1 mr-auto" id='welcome'>Welcome</span>
    </div>
    <div className="max-w-md text-center mx-auto mt-20 mr-auto">
      <h1 className="text-4xl font-title font-bold mb-10 p-12">What you see is what you get</h1>
      <p className="font-body text-4xl w-auto">At Neviox Digital, we are focused on delivering an effective, modern, and robust product adapted to everyones capabilities!</p>
    </div>
  </div>
  
  );
};

