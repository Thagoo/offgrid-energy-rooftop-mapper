import React from "react";

const BarGraph = ({
  costWithoutSolar,
  costWithSolar,
}: {
  costWithoutSolar: number;
  costWithSolar: number;
}) => {
  const maxCost = Math.max(costWithoutSolar, costWithSolar);

  return (
    <div className="flex flex-col items-center space-y-4 md:h-[200px] h-[162px]">
      <div className="flex w-full max-w-md h-full md:gap-4 gap-2">
        <div className="flex flex-col items-center justify-end">
          <div
            style={{ height: `${(costWithoutSolar / maxCost) * 100}%` }}
            className="w-14 md:w-16 bg-[#868687] animate-in duration-1000"
          ></div>
          <span className="text-xs md:text-sm text-nowrap ">No Solar</span>
        </div>
        <div className="flex flex-col items-center justify-end ">
          <div
            style={{ height: `${(costWithSolar / maxCost) * 100}%` }}
            className="w-14 md:w-16 bg-primary animate-in duration-1000"
          ></div>
          <span className="text-xs md:text-sm text-nowrap">With Solar</span>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
