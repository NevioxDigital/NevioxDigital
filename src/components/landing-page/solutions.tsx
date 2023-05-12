import React from "react";
import { SolutionCard } from "../cards/solution-card";

export const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen my-32 md:my-64">
      <div className="h-16 flex items-center justify-center text-white text-xl font-title font-bold mr-auto pl-2 md:ml-16 mt-10">
        <span className="border-b border-gold pb-1" id="solutions">
          Solutions
        </span>
      </div>
      <div className="flex-1 flex items-start my-32 md:my-64 md:ml-0">
        <div className="flex flex-col md:flex-row my-32 md:my-64 mx-4">
          <SolutionCard
            title="Web Applications"
            description="Establish a strong online presence, showcase products or services and grow business"
          />
          <div className="md:mt-16 md:ml-8">
            <SolutionCard
              title="Mobile Applications"
              description="Reach a wider audience, improve efficiency, and enhance overall user experience"
            />
          </div>
          <div className="md:ml-8 ">
            <SolutionCard
              title="Digital Marketing"
              description="Engage with target audience, build brand awareness or increase website traffic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
