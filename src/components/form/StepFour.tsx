import React from "react";

export default function StepFour({ setFormState, formState }) {
  return (
    <div className=" flex flex-col w-[400px] text-center justify-center gap-4 items-center">
      <div className=" font-semibold text-2xl">
        What is your average electricity bill every month?
      </div>
      <input
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, 3: e.target.value }))
        }
        className=" p-4 rounded-full w-[80%] bg-yellow-200 border-none outline-none"
        placeholder="Enter Value"
      />
    </div>
  );
}
