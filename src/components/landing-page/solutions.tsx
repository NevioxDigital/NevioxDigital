import React from 'react';
import {SolutionCard} from '../cards/solution-card';

export const Solution = () => {
  return (
    <div className="flex flex-row h-screen">
        <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold mr-auto ml-16 mt-10">
            <span className="border-b border-gold pb-1" id='solutions'>Solutions</span>
        </div>
        <div className="flex-1 flex mt-64 items-start ">
        <SolutionCard title="Web Applications" image="web-app" description="Establish a strong online presence,showcase products or services and grow business"/>
        <div className='mt-16'>
            <SolutionCard title="Mobile Applications" image="mobile-app" description="Reach a wider audience,improve efficiency, and enhance overall user experience" />
        </div>
        <div className='mr-16'>
        <SolutionCard title="Digital Marketing" image="marketing" description="Engage with target audience,build brand awareness or increase website traffic" />
        </div>
        </div>
    </div>
  
  );
};

