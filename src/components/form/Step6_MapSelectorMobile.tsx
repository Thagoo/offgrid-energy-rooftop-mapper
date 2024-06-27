import React, { useContext, useState } from "react";

import FormStepContext from "@/context/FormStepContext";
import Image from "next/image";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

export function MobilePopupOne() {
  const { currentStep, setCurrentStep, goNext } = useContext(FormStepContext);
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen md:pt-0 pt-5" />
          <div className="fixed transform top-1/2 left-1/2 py-4 px-2 -translate-y-1/2 -translate-x-1/2 w-[90%] bg-white flex flex-col justify-center gap-2 items-center rounded-3xl backdrop-blur-md blur-safari bg-opacity-30 border border-white">
            <svg
              className="animate-in fade-in duration-1000"
              width="73"
              height="79"
              viewBox="0 0 73 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4648 77.5L66.3878 44.3787"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="10 10"
              />
              <path
                d="M9.9043 49.5547L68.9484 72.3254"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="10 10"
              />
              <ellipse cx="39.4648" cy="62.5" rx="16" ry="6" fill="#FFCB00" />
              <path
                d="M35.2423 24.277C39.7553 23.8146 43.0389 19.7813 42.5765 15.2684C42.1141 10.7555 38.0808 7.47186 33.5679 7.93425C29.0549 8.39664 25.7713 12.4299 26.2337 16.9429C26.6961 21.4558 30.7294 24.7394 35.2423 24.277Z"
                stroke="#212121"
                stroke-width="4.10708"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.3264 24.4841C37.2978 24.2048 37.1493 23.9493 36.9135 23.7739C36.6778 23.5985 36.3742 23.5175 36.0694 23.5487L34.2819 23.7319C33.9772 23.7631 33.6962 23.904 33.501 24.1236C33.3057 24.3431 33.2121 24.6234 33.2407 24.9027L36.7602 59.2525C36.8114 59.7499 36.9699 60.2312 37.2265 60.6686L38.7999 63.3451C38.8504 63.4129 38.9201 63.4667 39.0017 63.5008C39.0833 63.5349 39.1738 63.5481 39.2636 63.5389C39.3535 63.5296 39.4394 63.4984 39.5124 63.4485C39.5854 63.3986 39.6427 63.3318 39.6784 63.2551L40.6764 60.3151C40.839 59.8348 40.8966 59.3313 40.8459 58.8339L37.3264 24.4841Z"
                fill="#212121"
              />
            </svg>

            <div className="font-semibold text-2xl animate-in fade-in duration-1000">
              Drag the pin
            </div>
            <div className=" text-center font-medium animate-in fade-in duration-1000">
              Drag the pin to the center of your house,
              <br /> then click next
            </div>
            <button
              className="flex animate-in fade-in duration-700 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              Next
            </button>
            <button
              className="text-white mt-2 underline animate-in fade-in duration-1000"
              onClick={() => setCurrentStep(10)}
            >
              Skip
            </button>
          </div>
        </>
      )}
    </>
  );
}

export function MobilePopupTwo() {
  const { currentStep, setCurrentStep, goNext } = useContext(FormStepContext);
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen" />
          <div className="fixed transform top-1/2 left-1/2 py-4 px-2 -translate-y-1/2 -translate-x-1/2 w-[90%] bg-white flex flex-col justify-center gap-2 items-center rounded-3xl backdrop-blur-md blur-safari bg-opacity-50 border border-white">
            <Image
              src={"/assets/form/modal/draw-icon.svg"}
              width={78}
              height={78}
              alt="pin"
            />

            <div className="font-semibold text-2xl animate-in fade-in duration-1000">
              Mark your corner
            </div>
            <div className="text-center font-medium animate-in fade-in duration-1000">
              Keep clicking to outline your roof on the map
            </div>
            <button
              className="flex animate-in fade-in duration-700 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              Next
            </button>
            <button
              className="text-white mt-2 hover:underline animate-in fade-in duration-1000"
              onClick={() => setCurrentStep(10)}
            >
              Skip
            </button>
          </div>
        </>
      )}
    </>
  );
}

export function MobilePopupThree() {
  const { currentStep, setCurrentStep, goNext } = useContext(FormStepContext);
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen" />
          <div className="fixed transform top-1/2 left-1/2 py-4 px-2 -translate-y-1/2 -translate-x-1/2 w-[90%] bg-white flex flex-col justify-center gap-2 items-center rounded-3xl backdrop-blur-md blur-safari bg-opacity-50 border border-white">
            <Image
              src={"/assets/form/modal/done-icon.svg"}
              width={86}
              height={77}
              alt="icon 3"
            />

            <div className="font-semibold text-2xl animate-in fade-in duration-1000">
              Roof marked!
            </div>
            <div className="text-center font-medium animate-in fade-in duration-1000">
              Click done to proceed to next step.
            </div>
            <button
              className="flex animate-in fade-in duration-700 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
              onClick={() => goNext()}
            >
              Done{" "}
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1948_2077)">
                  <path
                    d="M8.5 0C4.08175 0 0.5 3.58175 0.5 8C0.5 12.4185 4.08175 16 8.5 16C12.9185 16 16.5 12.4185 16.5 8C16.5 3.58175 12.9185 0 8.5 0ZM8.5 15.0157C4.64025 15.0157 1.5 11.8597 1.5 7.99997C1.5 4.14022 4.64025 0.999969 8.5 0.999969C12.3597 0.999969 15.5 4.14023 15.5 7.99997C15.5 11.8597 12.3597 15.0157 8.5 15.0157ZM11.6927 5.07275L6.99898 9.796L4.88523 7.68225C4.68998 7.487 4.37348 7.487 4.17798 7.68225C3.98273 7.8775 3.98273 8.194 4.17798 8.38925L6.65273 10.8643C6.84798 11.0592 7.16448 11.0592 7.35998 10.8643C7.38248 10.8418 7.40175 10.8172 7.41925 10.7917L12.4003 5.77998C12.5953 5.58473 12.5953 5.26823 12.4003 5.07275C12.2048 4.8775 11.8883 4.8775 11.6927 5.07275Z"
                    fill="#F4F4F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1948_2077">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              className="text-white mt-2 hover:underline animate-in fade-in duration-1000"
              onClick={() => setCurrentStep(10)}
            >
              Skip
            </button>
          </div>
        </>
      )}
    </>
  );
}
