import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext, useState } from "react";

export default function RoofType() {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );

  return (
    <div className=" flex flex-col justify-center gap-4 items-center">
      <div className=" font-semibold text-2xl">Roof Type</div>
      <div className=" text-gray-400">
        is your roof flat, pitched or flat with beams ?
      </div>
      <div className=" flex w-full justify-center gap-2">
        <div
          onClick={() =>
            setFormState((prev) => ({ ...prev, roofType: "pitched" }))
          }
          className={`${
            formState && formState.roofType == "pitched"
              ? "bg-primary"
              : "bg-white"
          } border-black border-[1px] hover:bg-primary hover:transition-opacity hover:transform w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium">Pitched</span>
        </div>
        <div
          onClick={() =>
            setFormState((prev) => ({ ...prev, roofType: "flat" }))
          }
          className={`${
            formState && formState.roofType == "flat"
              ? "bg-primary"
              : "bg-white"
          } border-black border-[1px] hover:bg-primary hover:transition-opacity hover:transform w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium">Flat</span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div
          onClick={() =>
            setFormState((prev) => ({ ...prev, roofType: "flat_with_beams" }))
          }
          className={`${
            formState && formState.roofType == "flat_with_beams"
              ? "bg-primary"
              : "bg-white"
          } border-black border-[1px] hover:bg-primary hover:transition-opacity hover:transform w-1/2 justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium text-nowrap">Flat with beams</span>
        </div>
      </div>
    </div>
  );
}
