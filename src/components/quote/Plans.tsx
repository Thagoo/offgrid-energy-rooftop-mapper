"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Drawer from "./Drawer";
import SystemSize from "./SystemSize";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { calculateCostWithSolar } from "@/lib/utils";

export default function Plans() {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );
  const [plan, setPlan] = useState("");

  const [price, setPrice] = useState(0);

  return (
    <>
      <div className="flex md:flex-row flex-col gap-5">
        <Drawer
          solarSize={formState.solarSize}
          plan={plan}
          setPlan={setPlan}
          price={price}
        />
        <div className="bg-white rounded-l-3xl md:rounded-3xl px-6 py-8 md:px-5 md:py-6 md:w-3/4 w-full gap-4 flex justify-between overflow-scroll">
          {/* card one */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col gap-2 py-4 px-4 ${
              plan === "basic" ? "border-[1px] border-[#FFCB00]" : ""
            }`}
          >
            <h1 className="md:text-2xl text-lg">Basic Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm md:text-base">
              Basic brand solar panels and inverter.
            </p>
            <div className="flex justify-between items-center">
              <div className="space-y-1 text-center">
                <Image
                  src={"/assets/brands/waaree.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <Image
                  src={"/assets/brands/luminous.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <p className="text-xs text-[#868687]">or similar</p>
              </div>
              <div>
                <Image
                  src={"/assets/solar.svg"}
                  alt="waree"
                  width={114}
                  height={140}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Quotation Price</p>
              <h1 className="font-medium text-2xl">
                {formState &&
                  calculateCostWithSolar(
                    formState.solarSize
                  ).basic.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
              </h1>
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap ${
                  plan === "basic"
                    ? "bg-[#FFCB00] text-black"
                    : "bg-black text-white"
                } `}
                onClick={() => {
                  setPlan("basic");
                  setPrice(formState.price.basic);
                }}
              >
                {" "}
                More Details
              </button>
            </div>
          </div>
          {/* card two */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col gap-2 py-4 px-4 ${
              plan === "standard" ? "border-[1px] border-[#FFCB00]" : ""
            }`}
          >
            <h1 className="text-lg md:text-2xl">Standard Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm md:text-base">
              Trusted brand solar panels and inverter.
            </p>
            <div className="flex justify-between items-center">
              <div className="space-y-1 text-center">
                <Image
                  src={"/assets/brands/tata.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <Image
                  src={"/assets/brands/bluebird.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <p className="text-xs text-[#868687]">or similar</p>
              </div>
              <div>
                <Image
                  src={"/assets/solar.svg"}
                  alt="waree"
                  width={114}
                  height={140}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Quotation Price</p>
              <h1 className="font-medium text-2xl">
                {" "}
                {formState &&
                  calculateCostWithSolar(
                    formState.solarSize
                  ).standard.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
              </h1>
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap  ${
                  plan === "standard"
                    ? "bg-[#FFCB00] text-black"
                    : "bg-black text-white"
                } `}
                onClick={() => {
                  setPlan("standard");
                  setPrice(formState.price.standard);
                }}
              >
                {" "}
                More Details
              </button>
            </div>
          </div>
          {/* card three */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col gap-2 py-4 px-4 ${
              plan === "premium" ? "border-[1px] border-[#FFCB00]" : ""
            }`}
          >
            <h1 className="text-lg md:text-2xl">Premium Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm md:text-base">
              Basic brand solar panels and inverter.
            </p>
            <div className="flex justify-between items-center">
              <div className="space-y-1 text-center">
                <Image
                  src={"/assets/brands/panasonic.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <Image
                  src={"/assets/brands/canadian-solar.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <p className="text-xs text-[#868687]">or similar</p>
              </div>
              <div>
                <Image
                  src={"/assets/solar.svg"}
                  alt="waree"
                  width={114}
                  height={140}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Quotation Price</p>
              <h1 className="font-medium text-2xl">
                {formState &&
                  calculateCostWithSolar(
                    formState.solarSize
                  ).premium.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
              </h1>
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap  ${
                  plan === "premium"
                    ? "bg-[#FFCB00] text-black"
                    : "bg-black text-white"
                } `}
                onClick={() => {
                  setPlan("premium");
                  setPrice(formState.price.premium);
                }}
              >
                {" "}
                More Details
              </button>
            </div>
          </div>
        </div>

        <SystemSize />
      </div>
    </>
  );
}
