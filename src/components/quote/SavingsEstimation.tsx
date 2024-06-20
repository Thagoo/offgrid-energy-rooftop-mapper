"use client";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import {
  calculateCo2,
  calculateCostWithSolar,
  calculateCostWithoutSolar,
  calculateSolarSize,
  calculateTressPlanted,
} from "@/lib/utils";
import React, { useContext, useEffect } from "react";

export default function SavingsEstimation() {
  const { formState, setFormState, updateFormState } = useContext<any>(
    QuoteGeneratorContext
  );

  return (
    <div className="bg-white rounded-3xl flex flex-col gap-3 items-center px-4 py-5 md:py-5 md:px-20 md:w-3/4">
      <h1 className="font-medium text-2xl">Savings From Solar</h1>
      <p className="text-sm text-[#868687] text-center">
        Below are the calculated returns and savings by switching to solar.
      </p>
      <div className="grid grid-cols-2 grid-rows-3 w-full border-[1px] rounded-2xl">
        <div className="md:px-8 md:py-4 py-3 px-3 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-medium">
            {formState?.bill.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </h1>
          <p className="text-xs md:text-sm text-[#868687]">Monthly Savings</p>
        </div>
        <div className="md:px-8 md:py-4 py-3 px-3 flex justify-center items-center border-b-[1px] border-dashed">
          <div>
            <h1 className="text-2xl font-medium text-nowrap">
              {formState?.lifetimeSavings.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              })}
            </h1>
            <p className="text-xs md:text-sm text-[#868687] ">
              Lifetime Savings
            </p>
          </div>
        </div>
        <div className="md:px-8 md:py-4 py-3 px-3 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-medium">{formState.breakEven} years</h1>
          <p className="text-xs md:text-sm text-[#868687]">Payback Period</p>
        </div>
        <div className="md:px-8 md:py-4 py-3 px-3 flex justify-center items-center  border-b-[1px] border-dashed">
          <div className="md:px-8 md:py-4 py-3 px-3 space-y-2 col-span-2 text-nowrap">
            <h1 className="text-2xl font-medium">
              {formState.yearlyEnergy.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}{" "}
              kWh
            </h1>
            <p className="text-xs md:text-sm text-[#868687]">
              Annual Energy Production
            </p>
          </div>
        </div>
        <div className="md:px-8 md:py-4 py-3 px-3 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-medium">
            {Math.round(
              calculateTressPlanted(formState.yearlyEnergy)
            ).toLocaleString()}
          </h1>
          <p className="text-xs md:text-sm text-[#868687]">Trees Planted</p>
        </div>
        <div className="md:px-8 md:py-4 py-3 px-3 flex justify-center items-center  border-b-[1px] border-dashed text-nowrap">
          <div>
            <h1 className="text-2xl font-medium">
              {Math.round(calculateCo2(formState.yearlyEnergy)).toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 0,
                }
              )}{" "}
              tons
            </h1>
            <p className="text-xs md:text-sm text-[#868687]">CO2 Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
