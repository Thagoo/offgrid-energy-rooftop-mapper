"use client";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext, useState } from "react";

export default function Bill() {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );
  const [bill, setBill] = useState(0);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setFormState((prev: any) => ({ ...prev, bill: bill }));
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
          onChange={(e) => setBill(e.target.value)}
          className="px-10 py-4 rounded-full w-full bg-white border-none outline-none"
          placeholder="Enter Value ₹"
        />
        <button
          type="submit"
          className={`hover:transition-colors duration-300 absolute right-4 top-1/2 -translate-y-1/2 bg-[#212121] rounded-3xl md:px-4 md:py-2 px-4 py-2 text-white disabled:bg-gray-400 hover:bg-opacity-75`}
          disabled={bill >= 1000 ? false : true}
        >
          Next
        </button>
      </form>
      <p className="text-[#868687] md:text-base text-sm font-light flex items-center gap-1">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1015_622)">
            <path
              d="M0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8ZM8.5 1.5C6.77609 1.5 5.12279 2.18482 3.90381 3.40381C2.68482 4.62279 2 6.27609 2 8C2 9.72391 2.68482 11.3772 3.90381 12.5962C5.12279 13.8152 6.77609 14.5 8.5 14.5C10.2239 14.5 11.8772 13.8152 13.0962 12.5962C14.3152 11.3772 15 9.72391 15 8C15 6.27609 14.3152 4.62279 13.0962 3.40381C11.8772 2.18482 10.2239 1.5 8.5 1.5ZM7 7.75C7 7.55109 7.07902 7.36032 7.21967 7.21967C7.36032 7.07902 7.55109 7 7.75 7H8.75C8.94891 7 9.13968 7.07902 9.28033 7.21967C9.42098 7.36032 9.5 7.55109 9.5 7.75V10.5H9.75C9.94891 10.5 10.1397 10.579 10.2803 10.7197C10.421 10.8603 10.5 11.0511 10.5 11.25C10.5 11.4489 10.421 11.6397 10.2803 11.7803C10.1397 11.921 9.94891 12 9.75 12H7.75C7.55109 12 7.36032 11.921 7.21967 11.7803C7.07902 11.6397 7 11.4489 7 11.25C7 11.0511 7.07902 10.8603 7.21967 10.7197C7.36032 10.579 7.55109 10.5 7.75 10.5H8V8.5H7.75C7.55109 8.5 7.36032 8.42098 7.21967 8.28033C7.07902 8.13968 7 7.94891 7 7.75ZM8.5 6C8.23478 6 7.98043 5.89464 7.79289 5.70711C7.60536 5.51957 7.5 5.26522 7.5 5C7.5 4.73478 7.60536 4.48043 7.79289 4.29289C7.98043 4.10536 8.23478 4 8.5 4C8.76522 4 9.01957 4.10536 9.20711 4.29289C9.39464 4.48043 9.5 4.73478 9.5 5C9.5 5.26522 9.39464 5.51957 9.20711 5.70711C9.01957 5.89464 8.76522 6 8.5 6Z"
              fill="#868687"
            />
          </g>
          <defs>
            <clipPath id="clip0_1015_622">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        Value must be minimum ₹ 1000/-
      </p>
    </div>
  );
}
