import React from "react";

export default function StepOne({ setFormState, formState }) {
  return (
    <div className="flex flex-col justify-center w-[400px] items-center gap-4">
      <div className=" font-semibold text-xl">
        Where do you want to install solar?
      </div>
      <div className="flex w-full gap-4">
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                0: "home",
              };
            });
          }}
          className=" bg-yellow-100 w-full justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[0] === "home" && (
              <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>Home</div>
        </div>
        <div
          onClick={() => {
            setFormState((prev) => {
              return {
                ...prev,
                0: "office",
              };
            });
          }}
          className=" bg-yellow-100 w-full justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
        >
          <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
            {formState[0] === "office" && (
              <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
            )}
          </div>
          <div>Office</div>
        </div>
      </div>
    </div>
  );
}
