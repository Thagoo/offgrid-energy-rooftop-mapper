"use client";
import PopupAlert from "@/components/common/popup";
import Navbar from "@/components/navbar/navbarForm";
import Drawer from "@/components/quote/Drawer";
import Quotation from "@/components/quote/PdfComponent";
import Plans from "@/components/quote/Plans";
import SavingsEstimation from "@/components/quote/SavingsEstimation";
import { inclusions } from "@/components/quote/SelectedPlan";
import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { quoteCreate } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const images = [
  {
    src: "/assets/similar-projects/installation-1.jpeg",
  },
  {
    src: "/assets/similar-projects/installation-2.png",
  },
  {
    src: "/assets/similar-projects/installation-3.jpeg",
  },
  {
    src: "/assets/similar-projects/installation-4.png",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
];

export default function Quote() {
  const router = useRouter();
  const { formState, setFormState, updateFormState } = useContext<any>(
    QuoteGeneratorContext
  );
  const { setCurrentStep } = useContext(FormStepContext);
  const [plan, setPlan] = useState("");
  const [selectedPrice, setSelectedPrice] = useState();
  const [showAlertRestart, setShowAlertRestart] = useState(false);
  const [showAlertVisit, setShowAlertVisit] = useState(false);
  const printContentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current,
  });

  const handleRestartQuote = () => {
    setFormState(null);
    localStorage.removeItem("formState");
    localStorage.removeItem("formStep");
    setCurrentStep(0);
    router.replace("/form");
  };
  if (!formState) {
    // router.push("/form");
    return;
  }

  return (
    <>
      <Navbar />
      <Drawer
        solarSize={formState.solarSize}
        plan={plan}
        setPlan={setPlan}
        price={selectedPrice}
      />
      {showAlertVisit && (
        <PopupAlert onClick={() => setShowAlertVisit(false)}>
          <div className="fixed transform top-1/2 left-1/2 px-6 py-3 md:py-10 md:px-10 -translate-y-1/2 -translate-x-1/2 md:w-[30%] w-[90%] bg-white flex flex-col justify-center gap-4 md:gap-6 items-center rounded-3xl border border-white z-50">
            <div className="text-lg text-center animate-in fade-in duration-1000 z-50">
              We have received your details. Our team will get in touch with you
              soon.
            </div>
            <div className="flex justify-between gap-6 items-center self-end">
              <Link
                className="flex animate-in fade-in duration-700 focus:outline-none bg-primary tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
                onClick={() => setShowAlertVisit(false)}
                href={"https://getoffgrid.energy"}
              >
                Visit Website
              </Link>
            </div>
          </div>
        </PopupAlert>
      )}
      {showAlertRestart && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen z-50" />
          <div className="fixed transform top-1/2 left-1/2 px-6 py-3 md:py-10 md:px-10 -translate-y-1/2 -translate-x-1/2 md:w-[40%] w-[90%] bg-white flex flex-col justify-center gap-4 md:gap-6 items-center rounded-3xl border border-white z-50">
            <div className="font-medium text-lg text-center md:text-2xl animate-in fade-in duration-1000 flex md:gap-2 md:items-center">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8014 5.5275L28.7339 24.5112C29.5001 25.8487 28.5101 27.5 26.9326 27.5H5.06763C3.49013 27.5 2.50013 25.8487 3.26638 24.5112L14.1989 5.5275C14.9864 4.1575 17.0139 4.1575 17.8014 5.5275Z"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 18.5V13.5"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 24.5C16.8284 24.5 17.5 23.8284 17.5 23C17.5 22.1716 16.8284 21.5 16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5Z"
                  fill="#212121"
                />
              </svg>
              Are you sure you want to restart?
            </div>
            <div className="text-sm md:text-lg text-center animate-in fade-in duration-1000">
              This will erase all the selections which you made.
            </div>
            <div className="flex justify-between gap-6 items-center self-end">
              <button
                className="animate-in fade-in duration-1000"
                onClick={() => setShowAlertRestart(false)}
              >
                Cancel
              </button>
              <button
                className="flex animate-in fade-in duration-700 focus:outline-none bg-primary tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
                onClick={() => handleRestartQuote()}
              >
                Continue
              </button>
            </div>
          </div>
        </>
      )}
      <div ref={printContentRef} className="print-only">
        <Quotation />
      </div>
      <div className="py-5 md:px-20 flex flex-col gap-5 bg-[#F4F4F4]">
        <div className="flex flex-col items-center gap-5 px-5 md:px-0">
          <h1 className="font-medium text-2xl text-center animate-in fade-in duration-1000">
            Here’s 3 quotes
          </h1>
          <p className="md:text-base text-sm font-light text-[#868687] animate-in fade-in duration-700 text-center">
            For your house in {formState.address}
          </p>
          <div className="flex md:gap-7 gap-3 animate-in fade-in duration-500">
            <button
              onClick={() => {
                setShowAlertRestart(true);
              }}
              className="transition ease-in-out delay-150 hover:-translate-y-[2px] hover:scale-10 border border-black px-3 py-2 rounded-full flex gap-2 items-center text-sm text-nowrap"
            >
              <svg
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3861 7.9681C17.5052 6.82384 16.31 5.96113 14.9465 5.48552C13.583 5.00991 12.1105 4.94203 10.7091 5.29018C9.30764 5.63833 8.03807 6.38741 7.05569 7.44578C6.0733 8.50414 5.4207 9.82591 5.17773 11.2493M18.7506 4.16602V8.33268H14.584M6.61315 17.0306C7.49375 18.1753 8.689 19.0384 10.0526 19.5143C11.4161 19.9902 12.8889 20.0582 14.2905 19.71C15.6921 19.3618 16.9619 18.6125 17.9442 17.5539C18.9266 16.4952 19.5789 15.1731 19.8215 13.7493M6.24961 20.8327V16.666H10.4163"
                  stroke="#212121"
                  stroke-width="2.08333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Restart quote
            </button>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-[2px] hover:scale-10 bg-black rounded-full px-6 py-2 text-white flex gap-2 items-center text-sm text-nowrap"
              onClick={handlePrint}
            >
              <svg
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16602 16.6708V17.7083C4.16602 18.5371 4.49526 19.332 5.08131 19.918C5.66736 20.5041 6.46221 20.8333 7.29102 20.8333H17.7077C18.5365 20.8333 19.3313 20.5041 19.9174 19.918C20.5034 19.332 20.8327 18.5371 20.8327 17.7083V16.6667M12.4993 4.6875V16.1458M12.4993 16.1458L16.1452 12.5M12.4993 16.1458L8.85352 12.5"
                  stroke="#F4F4F4"
                  stroke-width="1.5625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Save quote
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Plans setPlan={setPlan} setSelectedPrice={setSelectedPrice} />
          {/* Savings estimations */}
          <div className="flex md:flex-row flex-col w-full gap-4">
            <SavingsEstimation />
            <div className="md:w-1/3 bg-white rounded-3xl p-5 flex flex-col justify-center">
              <h1 className="font-medium text-lg mb-2">
                What’s included in your quote
              </h1>
              <ul className="space-y-5">
                {inclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-light px-2 py-2 bg-[#F4F4F4] rounded-xl"
                  >
                    {item.icon}

                    <div className="flex flex-col">
                      <h1 className="font-medium">{item.title}</h1>
                      <h1 className="text-[#868687] text-xs">{item.desc}</h1>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* horizonatal scrollable images */}

        <div className="bg-white rounded-2xl p-5 text-center flex flex-col w-full">
          <h1 className="font-medium text-xl">Project similar to yours</h1>
          <p className="font-normal text-sm text-[#868687]">
            Checkout a few of our installations
          </p>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4 p-4 gap-4 drop-shadow-md">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 ">
                  <img
                    src={image.src}
                    alt="offgrid"
                    className="rounded-2xl w-auto h-40"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* steps of installation component */}
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
          <div className="text-center">
            <h1 className="font-medium text-xl">Next Steps</h1>
            <p className="font-normal text-sm text-[#868687]">
              Here&apos;s Easy four steps procedure
            </p>
          </div>
          <div className="flex gap-4 md:gap-5 overflow-auto w-full">
            {/* card one */}
            <div className="rounded-2xl p-5 flex flex-col gap-2 bg-[#F4F4F4] md:min-w-[20vw] min-w-[70vw]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 33.975L24.2625 30.7375L22.5 32.5L27.5 37.5L37.5 27.5L35.7375 25.7375L27.5 33.975ZM11.25 21.25H20V23.75H11.25V21.25ZM11.25 15H26.25V17.5H11.25V15ZM11.25 8.75H26.25V11.25H11.25V8.75Z"
                  fill="#212121"
                />
                <path
                  d="M20 37.5H7.5C6.12125 37.5 5 36.3787 5 35V5C5 3.62125 6.12125 2.5 7.5 2.5H30C31.3787 2.5 32.5 3.62125 32.5 5V23.75H30V5H7.5V35H20V37.5Z"
                  fill="#212121"
                />
              </svg>
              <h1>Proposal</h1>
              <p className="text-[#868687]">
                We begin by understanding your energy needs and roof. Our
                experts design a solar system tailored to your goals.
                You&apos;ll receive a clear proposal outlining the system&apos;s
                benefits and the potential cost savings.
              </p>
              <h1 className="mt-auto">Done</h1>
            </div>
            {/* card two */}
            <div className="rounded-2xl p-5 flex flex-col gap-2 bg-[#F4F4F4] border-[1px] border-[#FFCB00] items-start md:min-w-[20vw] min-w-[70vw]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0039 11.25V20H28.7539"
                  stroke="#212121"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h1>Site Visit & Validation</h1>
              <p className="text-[#868687]">
                Our solar specialist visits your home to assess your roof, sun
                exposure, and electrical system. We confirm project details and
                answer your questions. This visit ensures your solar system
                design perfectly matches your needs.
              </p>
              <button
                onClick={() => setShowAlertVisit(true)}
                className="mt-auto rounded-3xl px-4 py-2 bg-[#FFCB00] text-sm"
              >
                Schedule a Visit
              </button>
            </div>
            {/* card three*/}
            <div className="rounded-2xl p-5 flex flex-col gap-2 bg-[#F4F4F4] md:min-w-[20vw] min-w-[70vw]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.35352 34.9371L8.01352 21.6354H31.9552L34.6152 34.9354L5.35352 34.9371ZM6.15352 6.66708V5.00042H10.6735V6.66708H6.15352ZM7.41685 33.2704H19.1668V29.1671H8.24352L7.41685 33.2704ZM10.0168 15.3821L8.82685 14.2337L12.0168 11.0454L13.2052 12.1921L10.0168 15.3821ZM8.59018 27.5004H19.1668V23.3004H9.41685L8.59018 27.5004ZM20.0002 11.7004C18.1224 11.7004 16.5313 11.0476 15.2268 9.74208C13.9224 8.43764 13.2702 6.84653 13.2702 4.96875H14.9368C14.9368 6.37542 15.4291 7.57097 16.4135 8.55542C17.3991 9.53986 18.5957 10.0321 20.0035 10.0321C21.4113 10.0321 22.6068 9.53986 23.5902 8.55542C24.5724 7.57097 25.0635 6.37542 25.0635 4.96875H26.7302C26.7302 6.84653 26.078 8.43764 24.7735 9.74208C23.4691 11.0465 21.878 11.6993 20.0002 11.7004ZM19.1668 18.6554V14.1354H20.8335V18.6537L19.1668 18.6554ZM20.8335 33.2721H32.5502L31.7252 29.1687H20.8335V33.2721ZM20.8335 27.5021H31.3785L30.5518 23.3021H20.8335V27.5021ZM30.0485 15.4154L26.8368 12.1937L27.9835 11.0471L31.2368 14.2271L30.0485 15.4154ZM29.3268 6.66708V5.00042H33.8468V6.66708H29.3268Z"
                  fill="#212121"
                />
              </svg>

              <h1>Installation & Payment</h1>
              <p className="text-[#868687]">
                Once you approve the proposal, we handle load sanction
                application for hassle-free installation. We offer flexible
                financing options to make solar power accessible to everyone.
              </p>
              <h1 className="mt-auto">1 day</h1>
            </div>
            {/* card four*/}
            <div className="rounded-2xl p-5 flex flex-col gap-2 bg-[#F4F4F4] md:min-w-[20vw] min-w-[70vw]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 33.975L24.2625 30.7375L22.5 32.5L27.5 37.5L37.5 27.5L35.7375 25.7375L27.5 33.975ZM11.25 21.25H20V23.75H11.25V21.25ZM11.25 15H26.25V17.5H11.25V15ZM11.25 8.75H26.25V11.25H11.25V8.75Z"
                  fill="#212121"
                />
                <path
                  d="M20 37.5H7.5C6.12125 37.5 5 36.3787 5 35V5C5 3.62125 6.12125 2.5 7.5 2.5H30C31.3787 2.5 32.5 3.62125 32.5 5V23.75H30V5H7.5V35H20V37.5Z"
                  fill="#212121"
                />
              </svg>

              <h1>Paperwork</h1>
              <p className="text-[#868687]">
                We handle all necessary paperwork for permits and
                interconnection with the grid. Our team will guide you through
                system activation and monitoring. Enjoy clean energy and watch
                your savings grow!
              </p>
              <h1 className="mt-auto">4 days</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
