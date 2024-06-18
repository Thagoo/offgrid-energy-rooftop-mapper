import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext } from "react";

const halfDayArray = [40, 20, 80, 40, 30, 40, 90, 100, 80, 40, 30, 10, 30];

const fullDayArray = [60, 70, 60, 70, 60, 70, 60, 70, 80, 60, 50, 60, 70];

export default function PeekUsage() {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const { goNext } = useContext(FormStepContext);

  return (
    <div className="flex flex-col justify-center md:items-center gap-6 w-full">
      <div className="font-semibold text-lg md:text-2xl text-center animate-in slide-in-from-top-4 duration-1000">
        When is your peak electricity usage?
      </div>
      <div
        onClick={() => {
          updateFormData({ peekUsage: "half" });
          goNext();
        }}
        className={`animate-in slide-in-from-bottom-2 duration-1000 hover:bg-[#FBF4D8] border border-black md:h-40 cursor-pointer w-full relative rounded-lg flex flex-col items-center justify-center py-6 gap-4 ${
          formState && formState.peekUsage == "half"
            ? "bg-[#FBF4D8]"
            : "bg-white"
        }`}
      >
        <div className="flex gap-3">
          {halfDayArray.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="w-2 h-20 bg-[#D9D8D6] rounded-md flex flex-col justify-end"
            >
              <div
                style={{ height: `${item}px` }}
                className={` bg-primary rounded-md`}
              ></div>
            </div>
          ))}
        </div>
        <div className="text-center">Half of the day</div>
      </div>

      <div
        onClick={() => {
          updateFormData({ peekUsage: "full" });
          goNext();
        }}
        className={`animate-in slide-in-from-bottom-4 duration-1000 hover:bg-[#FBF4D8] border border-black md:h-40 cursor-pointer w-full  relative rounded-lg flex flex-col items-center justify-center py-6 gap-4 ${
          formState && formState.peekUsage == "full"
            ? "bg-[#FBF4D8]"
            : "bg-white"
        }`}
      >
        <div className="flex gap-3">
          {fullDayArray.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="w-2 h-20 bg-[#D9D8D6] rounded-md flex flex-col justify-end"
            >
              <div
                style={{ height: `${item}px` }}
                className={` bg-primary rounded-md`}
              ></div>
            </div>
          ))}
        </div>
        <div className=" text-center">All day</div>
      </div>
    </div>
  );
}
