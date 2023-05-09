import React from 'react';

export const Welcome = () => {
  return (
    <div className="flex h-screen flex-col bg-welcome pb-64">
    <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold ml-16">
      <span className="border-b border-gold pb-1 mr-auto relative animate-slide-in overflow-hidden" id='welcome'>Welcome</span>
    </div>
    <div className="max-w-lg text-center mx-auto mt-20 mr-auto ">
    <h1 className="jt --debug font-title h-max-4">
      <span className="jt__row">
        <span className="jt__text">What you see is what you get</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">What you see is what you get</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">What you see is what you get</span>
      </span>
      <span className="jt__row jt__row--sibling" aria-hidden="true">
        <span className="jt__text">What you see is what you get</span>
      </span>
    </h1>
      <p className="mt-16 font-body text-5xl font-bold w-full ">At Neviox Digital, we are focused on delivering an effective, modern, and robust product adapted to everyones capabilities!</p>
    </div>
  </div>
  
  );
};

