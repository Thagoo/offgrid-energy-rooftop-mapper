"use client";
import Navbar from "@/components/navbar";
import Plans from "@/components/quote/Plans";
import SavingsEstimation from "@/components/quote/SavingsEstimation";
import { inclusions } from "@/components/quote/SelectedPlan";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { quoteCreate } from "@/lib/action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const images = [
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
  {
    src: "/assets/similar-projects/image-1.svg",
  },
];

export default function Quote() {
  const router = useRouter();
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );
  if (!formState) {
    router.replace("/form");
    return;
  }

  useEffect(() => {
    quoteCreate(formState);
  }, [1]);

  return (
    <>
      <Navbar />
      <div className="py-5 md:px-20 flex flex-col gap-5 bg-[#F4F4F4] ">
        <div className="flex flex-col items-center gap-5 px-5 md:px-0">
          <h1 className="font-medium text-2xl text-center">
            Here’s 3 solar installation quotes
          </h1>
          <p className="text-sm font-light text-[#868687]">
            For your house in Bangalore, Karnataka
          </p>
          <div className="flex gap-7">
            <button
              onClick={() => {
                setFormState(null);
                localStorage.clear();
                router.replace("/form");
              }}
              className="transition ease-in-out delay-150 hover:-translate-y-[2px] hover:scale-10 border border-black px-3 py-2 rounded-full flex gap-2 items-center md:text-sm text-nowrap"
            >
              <svg
                width="25"
                height="25"
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
            <button className="transition ease-in-out delay-150 hover:-translate-y-[2px] hover:scale-10 bg-black rounded-full px-6 py-2 text-white flex gap-2 items-center md:text-sm text-nowrap">
              <svg
                width="25"
                height="25"
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
        <Plans />
        {/* Savings estimations */}
        <div className="flex md:flex-row flex-col w-full gap-4">
          <SavingsEstimation />
          <div className="md:w-1/3 bg-white rounded-2xl p-5 flex flex-col justify-center">
            <h1 className="font-medium text-lg mb-2">
              What’s included in this plan
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
        {/* horizonatal scrollable images */}

        <div className="bg-white rounded-2xl p-5 text-center flex flex-col w-full">
          <h1 className="font-medium text-xl">Project similar to yours</h1>
          <p className="font-normal text-sm text-[#868687]">
            Checkout a few of our installations
          </p>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4 p-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 ">
                  <Image
                    src={image.src}
                    alt="offgrid"
                    width={232}
                    height={196}
                    className="rounded-2xl"
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
              Checkout a few of our installations
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h1>Done</h1>
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
                  d="M31.875 7.5H8.125C5.70875 7.5 3.75 9.45875 3.75 11.875V28.125C3.75 30.5412 5.70875 32.5 8.125 32.5H31.875C34.2912 32.5 36.25 30.5412 36.25 28.125V11.875C36.25 9.45875 34.2912 7.5 31.875 7.5Z"
                  stroke="#212121"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 15H36.25M10 23.4375H13.75V25H10V23.4375Z"
                  stroke="#212121"
                  stroke-width="4.6875"
                  stroke-linejoin="round"
                />
              </svg>

              <h1>Validation & Payment</h1>
              <p className="text-[#868687]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h1 className="rounded-3xl px-4 py-2 bg-[#FFCB00] text-sm">
                Next 5 days
              </h1>
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

              <h1>Installation </h1>
              <p className="text-[#868687]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h1>1 day</h1>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h1>4 days</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
