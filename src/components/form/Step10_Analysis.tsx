import LoadingSpinner from "@/app/ui/loading-spinner";
import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { quoteCreate, quoteDetails } from "@/lib/action";
import {
  calculateAfterSubsidy,
  calculateCostWithSolar,
  calculateCostWithoutSolar,
  calculateSolarSize,
  calculateYearlyEnergy,
} from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import BarGraph from "../bar-graph";

export default function Analysis({
  setCurrentStep,
  currentStep,
}: {
  setCurrentStep: any;
  currentStep: number;
}) {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const { goNext } = useContext(FormStepContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNext = async () => {
    setLoading(true);
    await quoteDetails(formState);

    const quoteId = await quoteCreate(formState);
    updateFormData({
      quoteId: quoteId,
    });
    setLoading(false);
    router.push("/quote");
  };

  useEffect(() => {
    updateFormData({
      price: {
        basic: calculateCostWithSolar(calculateSolarSize(formState.bill)).basic,
        standard: calculateCostWithSolar(calculateSolarSize(formState.bill))
          .standard,
        premium: calculateCostWithSolar(calculateSolarSize(formState.bill))
          .premium,
      },
      subsidyPrice: {
        basic: calculateAfterSubsidy(
          calculateSolarSize(formState.bill),
          calculateCostWithSolar(calculateSolarSize(formState.bill)).basic
        ),
        standard: calculateAfterSubsidy(
          calculateSolarSize(formState.bill),
          calculateCostWithSolar(calculateSolarSize(formState.bill)).standard
        ),
        premium: calculateAfterSubsidy(
          calculateSolarSize(formState.bill),
          calculateCostWithSolar(calculateSolarSize(formState.bill)).premium
        ),
      },
      lifetimeSavings:
        calculateCostWithoutSolar(formState?.bill) -
        calculateAfterSubsidy(
          calculateSolarSize(formState.bill),
          calculateCostWithSolar(formState.solarSize).basic
        ),
      yearlyEnergy: calculateYearlyEnergy(formState.bill),
      breakEven: (
        calculateAfterSubsidy(
          calculateSolarSize(formState?.bill),
          calculateCostWithSolar(formState?.solarSize).basic
        ) /
        formState.bill /
        12
      ).toFixed(2),
    });
  }, []);

  if (!formState?.lifetimeSavings) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col gap-6 h-dvh pb-20 hide-scrollbar overflow-y-auto md:pb-20 w-full md:pt-0 pt-5">
      <div className="rounded-2xl bg-white py-5 px-4 md:px-6 flex flex-col gap-2 md:gap-3 drop-shadow-3xl animate-in fade-in duration-700">
        <h1 className="font-medium animate-in slide-in-from-top-2 duration-1000">
          Solar Potential Analysis
        </h1>
        <div className="grid grid-cols-2 py-4 md:gap-10 gap-5 relative ">
          <div className="text-center flex flex-col md:gap-2 gap-1  animate-in slide-in-from-top-2 duration-700">
            <div>
              <h1 className="text-lg md:text-2xl font-medium">
                90%<sup>*</sup>
              </h1>
              <p className="text-sm md:text-base text-[#868687]">
                Bill Reduction
              </p>
            </div>
          </div>
          <div className="text-center flex flex-col md:gap-2 gap-1  animate-in slide-in-from-top-2 duration-700">
            <div>
              <h1 className="text-lg md:text-2xl font-medium">
                {formState &&
                  (formState.bill * 12).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
              </h1>
              <p className="text-sm md:text-base text-[#868687]">
                1st year saving
              </p>
            </div>
          </div>
          <div className="absolute border top-[10%] left-1/2 h-3/4"></div>
          <div className="text-center flex flex-col md:gap-2 gap-1  animate-in slide-in-from-top-2 duration-700">
            <div>
              <h1 className="text-lg md:text-2xl font-medium">
                {formState &&
                  formState?.lifetimeSavings.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
              </h1>
              <p className="text-sm md:text-base text-[#868687]">
                Lifetime savings
              </p>
            </div>
          </div>
          <div className="text-center flex flex-col md:gap-2 gap-1  animate-in slide-in-from-top-2 duration-700">
            <div>
              <h1 className="text-lg md:text-2xl font-medium">
                {formState?.breakEven} years
              </h1>
              <p className="text-sm md:text-base text-[#868687]">
                Solar Breakeven
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="font-semibold animate-in slide-in-from-top-8 duration-1000">
          Solar Potential Analysis
        </h1>
        <span className="flex w-full justify-between animate-in slide-in-from-top-6 duration-1000 items-center">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 24.75H18.75"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 21.75V16.5"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13.5L15 16.5L18 13.5"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.3782 18.6565C9.48665 17.96 8.76449 17.0705 8.266 16.0549C7.76751 15.0392 7.50566 13.9238 7.50012 12.7924C7.47762 8.72743 10.7551 5.344 14.8192 5.25025C16.3942 5.2121 17.9412 5.6709 19.2408 6.56156C20.5403 7.45223 21.5264 8.72951 22.0591 10.2122C22.5918 11.6949 22.644 13.3077 22.2084 14.8217C21.7728 16.3358 20.8715 17.6742 19.6323 18.6471C19.359 18.859 19.1375 19.1304 18.9846 19.4407C18.8318 19.7509 18.7516 20.0919 18.7501 20.4377V21.0002C18.7501 21.1992 18.6711 21.3899 18.5304 21.5306C18.3898 21.6712 18.199 21.7502 18.0001 21.7502H12.0001C11.8012 21.7502 11.6104 21.6712 11.4698 21.5306C11.3291 21.3899 11.2501 21.1992 11.2501 21.0002V20.4377C11.2498 20.0941 11.171 19.7551 11.02 19.4464C10.8689 19.1377 10.6494 18.8676 10.3782 18.6565Z"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Yearly Energy Generated
          </p>
          <p className="md:text-base text-sm text-nowrap">
            {calculateYearlyEnergy(formState.bill)} kWh
          </p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-5 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.75V4.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 20.25C17.8995 20.25 20.25 17.8995 20.25 15C20.25 12.1005 17.8995 9.75 15 9.75C12.1005 9.75 9.75 12.1005 9.75 15C9.75 17.8995 12.1005 20.25 15 20.25Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9L7.5 7.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21L7.5 22.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 9L22.5 7.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 21L22.5 22.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 15H4.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 23.25V25.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.25 15H25.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Yearly Sunshine Hours
          </p>
          <p className="md:text-base text-sm text-nowrap">3,500 hrs</p>
        </span>{" "}
        <span className="flex w-full justify-between animate-in slide-in-from-top-4 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 15H12L8.25 7.5"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 15L12.75 7.5"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.25 7.5L21 15"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15V21"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 15V20.25C25.5 20.4489 25.421 20.6397 25.2803 20.7803C25.1397 20.921 24.9489 21 24.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V15L8.25 7.5H21.75L25.5 15Z"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.125 11.25H23.625"
                stroke="#343330"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Your Installation Size
          </p>
          <p className="md:text-base text-sm text-nowrap">
          
          
          </p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4.5L16.5 12L22.5 14.25L12 25.5L13.5 18L7.5 15.75L18 4.5Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Energy Covered
          </p>
          <p className="md:text-base text-sm text-nowrap">
            {energyCovered(formState.bill)}%
          </p>
        </span> */}

      <div className="rounded-2xl bg-white py-5 px-5 flex flex-col gap-4 drop-shadow-3xl animate-in fade-in duration-1000">
        <h1 className="font-semibold animate-in slide-in-from-top-2 duration-1000">
          Cost Analysis for 25 Years
        </h1>
        <div className="grid grid-cols-2 py-5 md:gap-10 gap-5">
          <div className="flex flex-col justify-between items-center w-full">
            <div></div>
            <BarGraph
              costWithoutSolar={calculateCostWithoutSolar(formState.bill)}
              costWithSolar={
                calculateCostWithSolar(calculateSolarSize(formState.bill)).basic
              }
            />
            <h1 className="font-medium md:text-lg flex items-center text-nowrap animate-in slide-in-from-bottom-2 duration-700">
              {" "}
              <img
                className="w-8 h-auto md:w-12 "
                src="/assets/form/verified.gif"
                alt=""
              />
              Solar Eligible
            </h1>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 text-end">
            <div className=" animate-in slide-in-from-bottom-2 duration-700">
              <h1 className="text-lg md:text-2xl font-medium">
                {" "}
                {calculateSolarSize(formState.bill)} KW
              </h1>
              <p className="text-sm md:text-base text-[#868687] text-nowrap">
                Installation Size
              </p>
            </div>
            <div className=" animate-in slide-in-from-bottom-2 duration-700">
              <h1 className="text-lg md:text-2xl font-medium">
                {calculateAfterSubsidy(
                  calculateSolarSize(formState.bill),
                  calculateCostWithSolar(calculateSolarSize(formState.bill))
                    .basic
                ).toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </h1>
              <p className="text-sm md:text-base text-[#868687] text-nowrap">
                Installation cost
              </p>
            </div>
            <div className=" animate-in slide-in-from-bottom-2 duration-700">
              <h1 className="text-lg md:text-2xl font-medium">
                {(
                  calculateCostWithSolar(calculateSolarSize(formState.bill))
                    .basic -
                  calculateAfterSubsidy(
                    calculateSolarSize(formState.bill),
                    calculateCostWithSolar(calculateSolarSize(formState.bill))
                      .basic
                  )
                ).toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                })}
              </h1>
              <p className="text-sm md:text-base text-[#868687]">Subsidy</p>
            </div>
            <div className=" animate-in slide-in-from-bottom-2 duration-700">
              <h1 className="text-lg md:text-2xl font-medium">
                {formState &&
                  Math.round(
                    ((calculateSolarSize(formState.bill) * 1000) / 500) * 27.38
                  )}{" "}
                <span className="md:text-sm text-xs"> sq.ft</span>
              </h1>
              <p className="text-sm md:text-base text-[#868687]">System Size</p>
            </div>
          </div>
        </div>
        {/* <Image src={"/assets/graph.svg"} width={390} height={183} alt="graph" />
        <span className="flex w-full justify-between animate-in slide-in-from-top-6 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 6.75L22.5 23.25"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6992 9.10875L18.0005 4.5L16.5005 12L22.5005 14.25L20.4098 16.4906"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.3553 18.6905L12 25.4995L13.5 17.9995L7.5 15.7495L11.6447 11.3086"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Cost without Solar
          </p>
          <p>₹ {calculateCostWithoutSolar(formState.bill).toLocaleString()}</p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-4  duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1333_254)">
                <path
                  d="M3.75 9.75H5.25"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.16602 3.91602L7.22727 4.97727"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 1.5V3"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.8347 3.91602L16.7734 4.97727"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.25 9.75H18.75"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 9.75C8.25 8.75544 8.64509 7.80161 9.34835 7.09835C10.0516 6.39509 11.0054 6 12 6C12.9946 6 13.9484 6.39509 14.6517 7.09835C15.3549 7.80161 15.75 8.75544 15.75 9.75"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.25 20.25L6.06562 13.5H17.9344L21.75 20.25H2.25Z"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.36914 16.5H19.6298"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2832 13.5L15.7504 20.25"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 20.25L9.71719 13.5"
                  stroke="#212121"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1333_254">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Cost with Solar
          </p>
          <p>
            ₹{" "}
            {calculateCostWithSolar(
              calculateSolarSize(formState.bill)
            ).basic.toLocaleString()}
          </p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1333_259)">
                <path
                  d="M18 10.875C18 11.0975 17.934 11.315 17.8104 11.5C17.6868 11.685 17.5111 11.8292 17.3055 11.9144C17.1 11.9995 16.8738 12.0218 16.6555 11.9784C16.4373 11.935 16.2368 11.8278 16.0795 11.6705C15.9222 11.5132 15.815 11.3127 15.7716 11.0945C15.7282 10.8762 15.7505 10.65 15.8356 10.4445C15.9208 10.2389 16.065 10.0632 16.25 9.9396C16.435 9.81598 16.6525 9.75 16.875 9.75C17.1734 9.75 17.4595 9.86853 17.6705 10.0795C17.8815 10.2905 18 10.5766 18 10.875ZM14.25 6H10.5C10.3011 6 10.1103 6.07902 9.96967 6.21967C9.82902 6.36032 9.75 6.55109 9.75 6.75C9.75 6.94891 9.82902 7.13968 9.96967 7.28033C10.1103 7.42098 10.3011 7.5 10.5 7.5H14.25C14.4489 7.5 14.6397 7.42098 14.7803 7.28033C14.921 7.13968 15 6.94891 15 6.75C15 6.55109 14.921 6.36032 14.7803 6.21967C14.6397 6.07902 14.4489 6 14.25 6ZM23.25 10.5V13.5C23.25 14.0967 23.0129 14.669 22.591 15.091C22.169 15.5129 21.5967 15.75 21 15.75H20.7788L19.2591 20.0044C19.155 20.2958 18.9634 20.5479 18.7105 20.7261C18.4575 20.9044 18.1557 21 17.8463 21H16.6538C16.3443 21 16.0425 20.9044 15.7895 20.7261C15.5366 20.5479 15.345 20.2958 15.2409 20.0044L15.0609 19.5H9.68906L9.50906 20.0044C9.40502 20.2958 9.2134 20.5479 8.96047 20.7261C8.70754 20.9044 8.40568 21 8.09625 21H6.90375C6.59432 21 6.29246 20.9044 6.03953 20.7261C5.7866 20.5479 5.59498 20.2958 5.49094 20.0044L4.3125 16.7081C3.19142 15.4393 2.48945 13.8553 2.3025 12.1725C2.06046 12.2996 1.85777 12.4905 1.71633 12.7245C1.57489 12.9584 1.50009 13.2266 1.5 13.5C1.5 13.6989 1.42098 13.8897 1.28033 14.0303C1.13968 14.171 0.948912 14.25 0.75 14.25C0.551088 14.25 0.360322 14.171 0.21967 14.0303C0.0790176 13.8897 0 13.6989 0 13.5C0.00114598 12.8312 0.225771 12.1819 0.638188 11.6553C1.05061 11.1287 1.62716 10.7551 2.27625 10.5938C2.4438 8.52687 3.38252 6.59859 4.90601 5.1918C6.42951 3.78502 8.42634 3.00263 10.5 3H20.25C20.4489 3 20.6397 3.07902 20.7803 3.21967C20.921 3.36032 21 3.55109 21 3.75C21 3.94891 20.921 4.13968 20.7803 4.28033C20.6397 4.42098 20.4489 4.5 20.25 4.5H18.2447C19.4894 5.37328 20.4683 6.57378 21.0731 7.96875C21.1134 8.0625 21.1528 8.15625 21.1903 8.25C21.7535 8.2978 22.278 8.5558 22.6596 8.97269C23.0413 9.38957 23.252 9.93482 23.25 10.5ZM21.75 10.5C21.75 10.3011 21.671 10.1103 21.5303 9.96967C21.3897 9.82902 21.1989 9.75 21 9.75H20.6569C20.4971 9.75017 20.3415 9.69934 20.2127 9.6049C20.0839 9.51047 19.9885 9.37738 19.9406 9.225C19.5109 7.85375 18.6543 6.65571 17.4956 5.8057C16.337 4.95569 14.937 4.49821 13.5 4.5H10.5C9.19005 4.49993 7.90838 4.88103 6.81128 5.59682C5.71419 6.31261 4.84907 7.33217 4.32143 8.53115C3.79379 9.73014 3.62643 11.0568 3.83975 12.3492C4.05308 13.6417 4.63787 14.8442 5.52281 15.81C5.59048 15.8836 5.64276 15.97 5.67656 16.0641L6.90375 19.5H8.09625L8.45438 18.4978C8.50637 18.3522 8.60211 18.2262 8.72848 18.1371C8.85485 18.048 9.00568 18.0001 9.16031 18H15.5897C15.7443 18.0001 15.8951 18.048 16.0215 18.1371C16.1479 18.2262 16.2436 18.3522 16.2956 18.4978L16.6538 19.5H17.8463L19.5441 14.7478C19.5961 14.6022 19.6918 14.4762 19.8182 14.3871C19.9445 14.298 20.0954 14.2501 20.25 14.25H21C21.1989 14.25 21.3897 14.171 21.5303 14.0303C21.671 13.8897 21.75 13.6989 21.75 13.5V10.5Z"
                  fill="#212121"
                />
              </g>
              <defs>
                <clipPath id="clip0_1333_259">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Savings
          </p>
          <p>
            ₹{" "}
            {(
              calculateCostWithoutSolar(formState.bill) -
              calculateCostWithSolar(calculateSolarSize(formState.bill)).basic
            ).toLocaleString()}
          </p>
        </span>
        <span className="flex w-full justify-between animate-in slide-in-from-top-3 duration-1000">
          <p className="flex gap-1 md:gap-2 items-center md:text-base text-sm text-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1333_264)">
                <path
                  d="M21.6458 11.668L18.6458 4.16797C18.5797 4.00277 18.4571 3.86643 18.2998 3.78331C18.1425 3.70019 17.9607 3.6757 17.787 3.71422L11.9492 5.01172V2.94922C11.9492 2.75031 11.8702 2.55954 11.7296 2.41889C11.5889 2.27824 11.3981 2.19922 11.1992 2.19922C11.0003 2.19922 10.8096 2.27824 10.6689 2.41889C10.5283 2.55954 10.4492 2.75031 10.4492 2.94922V5.34734L4.28611 6.71703C4.16728 6.74328 4.05662 6.79805 3.96369 6.87661C3.87075 6.95517 3.79833 7.05517 3.75267 7.16797V7.17359L0.752671 14.668C0.716782 14.7574 0.698633 14.8529 0.699233 14.9492C0.699233 17.1345 2.99986 17.9492 4.44923 17.9492C5.89861 17.9492 8.19923 17.1345 8.19923 14.9492C8.19983 14.8529 8.18168 14.7574 8.1458 14.668L5.47298 7.99016L10.4492 6.88672V18.6992H8.94923C8.75032 18.6992 8.55956 18.7782 8.4189 18.9189C8.27825 19.0595 8.19923 19.2503 8.19923 19.4492C8.19923 19.6481 8.27825 19.8389 8.4189 19.9795C8.55956 20.1202 8.75032 20.1992 8.94923 20.1992H13.4492C13.6481 20.1992 13.8389 20.1202 13.9796 19.9795C14.1202 19.8389 14.1992 19.6481 14.1992 19.4492C14.1992 19.2503 14.1202 19.0595 13.9796 18.9189C13.8389 18.7782 13.6481 18.6992 13.4492 18.6992H11.9492V6.55109L16.7305 5.48984L14.2527 11.668C14.2168 11.7574 14.1986 11.8529 14.1992 11.9492C14.1992 14.1345 16.4999 14.9492 17.9492 14.9492C19.3986 14.9492 21.6992 14.1345 21.6992 11.9492C21.6998 11.8529 21.6817 11.7574 21.6458 11.668ZM4.44923 16.4492C3.7433 16.4492 2.31548 16.1108 2.2058 15.0767L4.44923 9.46859L6.69267 15.0767C6.58298 16.1108 5.15517 16.4492 4.44923 16.4492ZM17.9492 13.4492C17.2433 13.4492 15.8155 13.1108 15.7058 12.0767L17.9492 6.46859L20.1927 12.0767C20.083 13.1108 18.6552 13.4492 17.9492 13.4492Z"
                  fill="#343330"
                />
              </g>
              <defs>
                <clipPath id="clip0_1333_264">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Break even
          </p>
          <p>{calculateBreakEven(formState.bill)} years</p>
        </span> */}
      </div>
      <div className="flex justify-between pb-10">
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

function Submit({
  handleNext,
  loading,
}: {
  handleNext: any;
  loading: boolean;
}) {
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
