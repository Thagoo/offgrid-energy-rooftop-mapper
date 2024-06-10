import LoadingSpinner from "@/app/ui/loading-spinner";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { quoteCreate, quoteDetails } from "@/lib/action";
import {
  calculateBreakEven,
  calculateCostWithSolar,
  calculateCostWithoutSolar,
  calculateSolarSize,
  calculateYearlyEnergy,
  energyCovered,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export default function Analysis({ setCurrentStep, currentStep }) {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNext = async () => {
    setLoading(true);
    await quoteDetails(formState);
    setLoading(false);
    setFormState((prev) => ({
      ...prev,
      solarSize: calculateSolarSize(formState.bill),
      price: {
        basic: calculateCostWithSolar(calculateSolarSize(formState.bill)).basic,
        standard: calculateCostWithSolar(calculateSolarSize(formState.bill))
          .standard,
        premium: calculateCostWithSolar(calculateSolarSize(formState.bill))
          .premium,
      },
      lifetimeSavings: calculateCostWithSolar(
        calculateSolarSize(formState.bill)
      ).basic,
      yearlyEnergy: calculateYearlyEnergy(formState.bill),
      breakEven: calculateBreakEven(formState.bill),
    }));

    router.push("/quote");
  };

  return (
    <div className="flex flex-col gap-4 h-auto pt-4 md:pb-16">
      <div className="rounded-2xl bg-white py-5 px-6 flex flex-col gap-4 drop-shadow-md animate-in fade-in duration-1000">
        <h1 className="font-semibold text-2xl animate-in slide-in-from-top-8 duration-1000">
          Solar Potential Analysis
        </h1>
        <span className="flex w-full justify-between animate-in slide-in-from-top-6 duration-1000">
          <p>Yearly Energy Generated</p>
          <p>{calculateYearlyEnergy(formState.bill)}</p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-5 duration-1000">
          <p>Yearly Sunshine Hours</p>
          <p>3,500</p>
        </span>{" "}
        <span className="flex w-full justify-between animate-in slide-in-from-top-4 duration-1000">
          <p>Your Installation Size</p>
          <p>{calculateSolarSize(formState.bill)} KW</p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p>Energy Covered</p>
          <p>{energyCovered(formState.bill)}%</p>
        </span>
      </div>
      <div className="rounded-2xl bg-white py-5 px-6 flex flex-col gap-4 drop-shadow-md animate-in fade-in duration-1000">
        <h1 className="font-semibold animate-in slide-in-from-top-8 duration-1000">
          Cost Analysis for 25 Years
        </h1>
        <Image src={"/assets/graph.svg"} width={390} height={183} alt="graph" />
        <span className="flex w-full justify-between animate-in slide-in-from-top-6 duration-1000">
          <p>Cost without Solar</p>
          <p>{calculateCostWithoutSolar(formState.bill).toLocaleString()}</p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-4  duration-1000">
          <p>Cost with Solar</p>
          <p>
            {calculateCostWithSolar(
              calculateSolarSize(formState.bill)
            ).basic.toLocaleString()}
          </p>
        </span>{" "}
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p>Savings</p>
          <p>
            {(
              calculateCostWithoutSolar(formState.bill) -
              calculateCostWithSolar(calculateSolarSize(formState.bill)).basic
            ).toLocaleString()}
          </p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p>Break even</p>
          <p>{calculateBreakEven(formState.bill)} years</p>
        </span>
      </div>
      <div className="flex justify-between">
        <button
          className="animate-in duration-1000 hover:bg-opacity-90 px-6 py-2 rounded-full border border-slate-600 hover:opacity-80"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          {"<-"} Back
        </button>
        <Submit handleNext={handleNext} loading={loading} />
      </div>
    </div>
  );
}

function Submit({ handleNext, loading }) {
  return (
    <button
      className="focus:outline-none animate-in duration-1000 hover:bg-opacity-90 bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full disabled:bg-gray-600 flex items-center justify-center gap-2"
      disabled={loading}
      onClick={handleNext}
    >
      Next
      {loading ? (
        <LoadingSpinner height={20} width={20} />
      ) : (
        <span>&#8594;</span>
      )}
    </button>
  );
}
