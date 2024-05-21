import React from "react";

const halfDayArray = [40, 20, 80, 40, 30, 40, 90, 100, 80, 40, 30, 10, 30];

const fullDayArray = [80, 90, 100, 90, 80, 90, 80, 100, 120, 100, 120, 90, 90];

export default function StepThree({ setFormState, formState }) {
  return (
    <div className=" flex flex-col justify-center w-[400px] items-center gap-4">
      <div className=" font-semibold text-xl">
        When is your peak electricity usage?
      </div>
      <div
        onClick={() =>
          setFormState((prev) => {
            return {
              ...prev,
              2: "half",
            };
          })
        }
        className=" h-[220px] cursor-pointer w-[400px] bg-yellow-200 relative rounded-lg"
      >
        <div className="absolute h-[30px] top-[40%] left-2 w-[30px] flex justify-center items-center bg-white rounded-full">
          {formState[2] === "half" && (
            <div className=" h-[20px] w-[20px] bg-blue-800 rounded-full" />
          )}
        </div>
        <div className=" h-[120px] flex gap-4 ml-12 mt-8 mr-5">
          {halfDayArray.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className=" w-[10px] h-[120px] bg-white rounded-md flex flex-col justify-end"
            >
              <div
                style={{ height: `${item}px` }}
                className={` bg-yellow-600 rounded-md`}
              ></div>
            </div>
          ))}
        </div>
        <div className=" text-center my-4 font-semibold">Half of the day</div>
      </div>
      <div
        onClick={() =>
          setFormState((prev) => {
            return {
              ...prev,
              2: "full",
            };
          })
        }
        className=" h-[220px] cursor-pointer w-[400px] bg-yellow-200 relative rounded-lg"
      >
        <div className="absolute h-[30px] top-[40%] left-2 w-[30px] flex justify-center items-center bg-white rounded-full">
          {formState[2] === "full" && (
            <div className=" h-[20px] w-[20px] bg-blue-800 rounded-full" />
          )}
        </div>
        <div className="  h-[120px] flex gap-4 ml-12 mt-8 mr-5">
          {fullDayArray.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className=" w-[10px] h-[120px] bg-white rounded-md flex flex-col justify-end"
            >
              <div
                style={{ height: `${item}px` }}
                className={` bg-yellow-600 rounded-md`}
              ></div>
            </div>
          ))}
        </div>
        <div className=" text-center my-4 font-semibold">All day</div>
      </div>
    </div>
  );
}
