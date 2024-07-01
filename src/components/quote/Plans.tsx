"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Drawer from "./Drawer";
import SystemSize from "./SystemSize";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { calculateCostWithSolar, calculateAfterSubsidy } from "@/lib/utils";

export default function Plans({
  setPlan,
  setSelectedPrice,
}: {
  setPlan: any;
  setSelectedPrice: any;
}) {
  const { formState, setFormState, updateFormState } = useContext<any>(
    QuoteGeneratorContext
  );

  const [price, setPrice] = useState({ basic: 0, standard: 0, premium: 0 });

  const [subsidyPrice, setSubsidyPrice] = useState({
    basic: 0,
    standard: 0,
    premium: 0,
  });

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (e: any) => {
    const { id, checked } = e.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  useEffect(() => {
    setPrice({
      basic: calculateCostWithSolar(formState.solarSize).basic,
      standard: calculateCostWithSolar(formState.solarSize).standard,
      premium: calculateCostWithSolar(formState.solarSize).premium,
    });
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="bg-white rounded-3xl px-6 py-8 md:px-5 md:py-6 md:w-3/4 w-full gap-4 flex justify-between overflow-x-scroll hide-scrollbar">
          {/* card one */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col justify-between gap-2 py-4 px-4 animate-in fade-in duration-500 min-w-52 md:w-full`}
          >
            <h1 className="md:text-2xl text-lg">Basic Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm ">
              Focuses on essential equipment for generating solar power
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
                  src={"/assets/panel.svg"}
                  alt="solar"
                  width={114}
                  height={140}
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-3 gap-2">
              <p>Quotation Price</p>
              <div className="flex items-center min-h-8 md:gap-2 xl:gap-6 gap-2 animate-in fade-in duration-1000">
                {checkboxes.checkbox1 ? (
                  <h1 className="font-medium xl:text-2xl text-xl animate-in fade-in duration-1000">
                    {formState &&
                      formState.subsidyPrice.basic.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                ) : (
                  <h1 className="font-medium text-2xl animate-in fade-in duration-1000">
                    {formState &&
                      price.basic.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}

                {checkboxes.checkbox1 && (
                  <h1 className="font line-through text-[#868687] animate-in fade-in duration-1000">
                    {formState &&
                      price.basic.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}
              </div>
              <span className="flex items-center gap-2 text-xs md:text-base">
                <SubsidyCheckbox
                  id="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
              </span>
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap bg-black text-white `}
                onClick={() => {
                  setPlan("basic");
                  setSelectedPrice(formState.price.basic);
                }}
              >
                {" "}
                More Details
              </button>
            </div>
          </div>
          {/* card two */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col justify-between gap-2 py-4 px-4 animate-in fade-in duration-500 min-w-52 md:w-full`}
          >
            <h1 className="md:text-2xl text-lg">Standard Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm ">
              Offers a good balance between affordability and features
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
                  src={"/assets/panel.svg"}
                  alt="solar"
                  width={114}
                  height={140}
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-3 gap-2">
              <p>Quotation Price</p>
              <div className="flex items-center min-h-8 md:gap-2 xl:gap-6 gap-2 animate-in fade-in duration-1000">
                {checkboxes.checkbox2 ? (
                  <h1 className="font-medium xl:text-2xl text-xl animate-in fade-in duration-1000">
                    {formState &&
                      formState.subsidyPrice.standard.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                ) : (
                  <h1 className="font-medium text-2xl animate-in fade-in duration-1000">
                    {formState &&
                      price.standard.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}

                {checkboxes.checkbox2 && (
                  <h1 className="font line-through text-[#868687] animate-in fade-in duration-1000">
                    {formState &&
                      price.standard.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}
              </div>
              <span className="flex items-center gap-2 text-xs md:text-base">
                <SubsidyCheckbox
                  id="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
              </span>
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap bg-black text-white `}
                onClick={() => {
                  setPlan("standard");
                  setSelectedPrice(formState.price.standard);
                }}
              >
                {" "}
                More Details
              </button>
            </div>
          </div>
          {/* card three */}
          <div
            className={`rounded-3xl bg-[#F4F4F4] flex flex-col justify-between gap-2 py-4 px-4 animate-in fade-in duration-1000 min-w-52 md:w-full`}
          >
            <h1 className="text-lg md:text-2xl">Premium Plan</h1>
            <div className="border-b-[1px]"></div>
            <p className="text-[#868687] text-sm">
              Top-of-the-line equipment and features
            </p>
            <div className="flex justify-between items-center">
              <div className="space-y-1 text-center">
                <Image
                  src={"/assets/brands/panasonic.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  loading="eager"
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <Image
                  src={"/assets/brands/canadian-solar.svg"}
                  alt="waree"
                  width={100}
                  height={100}
                  loading="eager"
                  className="rounded-full px-2 py-1 border-[1px]"
                />
                <p className="text-xs text-[#868687]">or similar</p>
              </div>
              <div>
                <Image
                  src={"/assets/panel.svg"}
                  alt="waree"
                  width={114}
                  height={140}
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Quotation Price</p>

              <div className="flex items-center min-h-8 md:gap-2 xl:gap-6 gap-2 animate-in fade-in duration-1000">
                {checkboxes.checkbox3 ? (
                  <h1 className="font-medium xl:text-2xl text-xl animate-in fade-in duration-1000">
                    {formState &&
                      formState.subsidyPrice.premium.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                ) : (
                  <h1 className="font-medium text-2xl animate-in fade-in duration-1000">
                    {formState &&
                      price.premium.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}

                {checkboxes.checkbox3 && (
                  <h1 className="font line-through text-[#868687] animate-in fade-in duration-1000">
                    {formState &&
                      price.premium.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      })}
                  </h1>
                )}
              </div>
              <SubsidyCheckbox
                id="checkbox3"
                checked={checkboxes.checkbox3}
                onChange={handleCheckboxChange}
              />
              <button
                className={`rounded-full py-2 px-10 md:text-base text-sm text-nowrap bg-black text-white `}
                onClick={() => {
                  setPlan("premium");
                  setSelectedPrice(formState.price.premium);
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

const SubsidyCheckbox = ({
  checked,
  onChange,
  id,
}: {
  checked: boolean;
  onChange: any;
  id: string;
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer h-4 w-4 text-yellow-400 rounded-md border-gray-300 focus:ring-0"
        style={{ backgroundColor: checked ? "#FFCB00" : "transparent" }}
      />
      <label
        htmlFor="checkbox"
        className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
      >
        Apply Subsidy
      </label>
    </label>
  );
};
