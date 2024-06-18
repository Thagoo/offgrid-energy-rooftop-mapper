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
      <h1 className="font-medium text-xl">Savings From Solar</h1>
      <p className="text-light text-sm text-[#868687] text-center">
        Below are the calculated returns and savings by switching to solar.
      </p>
      <div className="grid grid-cols-2 grid-rows-4  w-full border-[1px] rounded-2xl">
        <div className="px-8 py-4 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-semibold">
            ₹{formState.bill.toLocaleString()}
          </h1>
          <p className="text-sm text-[#868687]">Monthly Savings</p>
        </div>
        <div className="px-8 py-4 flex justify-center items-center border-b-[1px] border-dashed">
          <div>
            <h1 className="text-2xl font-semibold text-nowrap">
              ₹
              {(
                calculateCostWithoutSolar(formState.bill) -
                calculateCostWithSolar(formState.solarSize).basic
              ).toLocaleString()}
            </h1>
            <p className="text-sm text-[#868687] ">Lifetime Savings</p>
          </div>
        </div>
        <div className="px-8 py-4 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-semibold">
            {formState.breakEven} years
          </h1>
          <p className="text-sm text-[#868687]">Payback Period</p>
        </div>
        <div className="px-8 py-4 flex justify-center items-center  border-b-[1px] border-dashed">
          <div>
            <h1 className="text-2xl font-semibold">20%* p.a.</h1>
            <p className="text-sm text-nowrap text-[#868687]">
              Return on Investment
            </p>
          </div>
        </div>
        <div className="px-8 py-4 border-b-[1px] border-r-[1px] border-dashed flex justify-center flex-col">
          <h1 className="text-2xl font-semibold">
            {Math.round(calculateTressPlanted(formState.yearlyEnergy))}
          </h1>
          <p className="text-sm text-[#868687]">Trees Planted</p>
        </div>
        <div className="px-8 py-4 flex justify-center items-center  border-b-[1px] border-dashed text-nowrap">
          <div>
            <h1 className="text-2xl font-semibold">
              {Math.round(
                calculateCo2(formState.yearlyEnergy)
              ).toLocaleString()}{" "}
              tons
            </h1>
            <p className="text-sm text-[#868687]">CO2 Saved</p>
          </div>
        </div>
        <div className="px-8 py-4 space-y-2 col-span-2">
          <h1 className="text-4xl font-semibold">
            {formState.yearlyEnergy.toLocaleString()} kWh
          </h1>
          <p className="text-sm text-[#868687]">Annual Energy Production</p>
        </div>
      </div>
    </div>
  );
}
