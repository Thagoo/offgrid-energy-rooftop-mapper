"use client";
import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";
import { calculateSolarSize } from "@/lib/utils";

import React, { useContext, useState } from "react";

export default function Bill() {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const [bill, setBill] = useState(0);
  const { goNext } = useContext(FormStepContext);

  const hanldeSubmit = (e: any) => {
    e.preventDefault();

    updateFormData({ bill: bill, solarSize: calculateSolarSize(bill) });
    goNext();
  };

  return (
    <div className="flex flex-col text-center justify-center gap-6 items-center w-full">
      <div className="font-semibold text-2xl animate-in slide-in-from-top-4 duration-1000">
        What is your average electricity bill every month?
      </div>
      <form
        className="w-full relative animate-in slide-in-from-bottom-4 duration-1000"
        onSubmit={hanldeSubmit}
      >
        <input
          onChange={(e) => setBill(e.target.value as any)}
          className="px-10 py-4 rounded-full w-full bg-white border-none outline-none"
          placeholder="Enter Value ₹"
        />
        <button
          type="submit"
          className={`animate-in fade-in-0 duration-1000 absolute right-4 top-1/2 -translate-y-1/2 bg-[#212121] rounded-3xl md:px-4 md:py-2 px-4 py-2 text-white disabled:bg-gray-400 hover:bg-opacity-75`}
          disabled={bill >= 1000 ? false : true}
        >
          Next
        </button>
      </form>
      <p className="text-[#868687] md:text-base text-sm font-light flex items-center gap-1 animate-in fade-in duration-1000">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14Z"
            stroke="#636363"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 7.5C8.13261 7.5 8.25979 7.55268 8.35355 7.64645C8.44732 7.74021 8.5 7.86739 8.5 8V10.5C8.5 10.6326 8.55268 10.7598 8.64645 10.8536C8.74021 10.9473 8.86739 11 9 11"
            stroke="#636363"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.25 6C8.66421 6 9 5.66421 9 5.25C9 4.83579 8.66421 4.5 8.25 4.5C7.83579 4.5 7.5 4.83579 7.5 5.25C7.5 5.66421 7.83579 6 8.25 6Z"
            fill="#636363"
          />
        </svg>
        Value must be minimum ₹1000/-
      </p>
    </div>
  );
}
