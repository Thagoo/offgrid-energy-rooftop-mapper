import React from "react";

export default function StepTwo({ setFormState, formState }) {
  return (
    <div className=" flex flex-col justify-center w-[400px] items-center gap-4">
      <div className=" font-semibold text-xl">
        How many floors does your building have?
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                1: "one",
              };
            });
          }}
          className="bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[1] === "one" && (
              <div className=" h-[8px] w-full rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>One</div>
        </div>
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                1: "two",
              };
            });
          }}
          className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[1] === "two" && (
              <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>Two</div>
        </div>
        </div>
        <div className="flex gap-4">
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                1: "three",
              };
            });
          }}
          className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[1] === "three" && (
              <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>Three</div>
        </div>
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                1: "four",
              };
            });
          }}
          className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[1] === "four" && (
              <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>Four+</div>
        </div></div>
      </div>
    </div>
  );
}
