import FormStepContext from "@/context/FormStepContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const ContentArray = [
  {
    icon: "/assets/form/modal/icon-1.png",
    title: "Select a corner",
    subTitle:
      "To start, select the lower corner of the roof side where you want to place solar panels.",
  },
  {
    icon: "/assets/form/modal/icon-2.png",
    title: "Select another corner",
    subTitle:
      "Then, select the next corner of that roof space, so the line sits on the ridge or gutter line.",
  },
  {
    icon: "/assets/form/modal/icon-2.png",
    title: "Keep going",
    subTitle:
      "Once you’ve selected each corner, you’ll see a green ticket to indicate it’s complete.",
  },
];

export default function InstructionModal() {
  const { goNext, goBack, currentStep } = useContext(FormStepContext);
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {" "}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 outline-none focus:outline-none flex items-center justify-center">
            <div className="relative w-auto animate-in fade-in duration-500">
              <div className="overflow-auto rounded-lg shadow-lg md:mt-0 h-[95dvh] md:h-[95dvh] w-[95dvw] relative flex flex-col bg-white outline-none focus:outline-none justify-center">
                <div className="relative">
                  <div className="flex md:flex-row flex-col w-[95vw] px-5 md:px-20 py-5 gap-4">
                    <div className="w-full flex flex-col gap-2 md:gap-4">
                      <div className="flex gap-2 justify-center items-center">
                        <svg
                          width="61"
                          height="63"
                          viewBox="0 0 61 63"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0762 50.7344L32 22"
                            stroke="#868687"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-dasharray="2 2"
                          />
                          <path
                            d="M47.0508 54.2188L35 22"
                            stroke="#868687"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-dasharray="2 2"
                          />
                          <path
                            d="M10.5547 50.502L47.5547 54.502"
                            stroke="#868687"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-dasharray="2 2"
                          />
                          <circle
                            cx="33.5"
                            cy="17"
                            r="9"
                            fill="#FFCB00"
                            stroke="#212121"
                            stroke-width="2"
                          />
                          <circle
                            cx="10.5"
                            cy="51"
                            r="9"
                            fill="#FFCB00"
                            stroke="#212121"
                            stroke-width="2"
                          />
                          <circle
                            cx="50.5"
                            cy="53"
                            r="9"
                            fill="#FFCB00"
                            stroke="#212121"
                            stroke-width="2"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M43.7151 5.15669C44.0335 5.34226 44.265 5.64665 44.3589 6.00293C44.4529 6.35921 44.4014 6.7382 44.2159 7.05656L36.7998 19.7821C36.7018 19.9503 36.5716 20.0975 36.4167 20.2154C36.2618 20.3333 36.0851 20.4195 35.8969 20.4691C35.7087 20.5187 35.5125 20.5308 35.3196 20.5046C35.1267 20.4784 34.9409 20.4144 34.7727 20.3164L28.4504 16.6326C28.2894 16.5425 28.1479 16.4212 28.0343 16.2758C27.9207 16.1305 27.8371 15.9639 27.7885 15.7859C27.74 15.608 27.7273 15.4221 27.7514 15.2391C27.7754 15.0562 27.8356 14.8799 27.9285 14.7205C28.0214 14.5611 28.1451 14.4218 28.2925 14.3107C28.4398 14.1996 28.6077 14.1189 28.7865 14.0735C28.9654 14.028 29.1514 14.0186 29.3339 14.0458C29.5164 14.073 29.6917 14.1363 29.8494 14.2319L35.0515 17.2636L41.8144 5.65773C41.9062 5.49998 42.0283 5.36188 42.1736 5.25132C42.3188 5.14076 42.4844 5.0599 42.661 5.01337C42.8375 4.96684 43.0214 4.95555 43.2023 4.98014C43.3832 5.00473 43.5575 5.06473 43.7151 5.15669Z"
                            fill="#868687"
                          />
                        </svg>
                        <h1 className="text-2xl font-medium">Make your roof</h1>
                      </div>
                      <div className="text-sm text-[#868687] text-center">
                        Draw your roof on the map. So we can estimate whether
                        you have space for solar.
                      </div>
                      <div className="flex flex-col gap-2 md:gap-4">
                        {ContentArray.map((item, idx) => (
                          <div key={idx}>
                            <div className=" bg-[#D9D8D6] rounded-lg px-4 py-4 flex gap-2 md:gap-4">
                              <Image
                                loading="eager"
                                src={item.icon}
                                width={100}
                                height={100}
                                alt={item.title}
                                className="h-auto w-20"
                              />
                              <div className="flex gap-1 justify-center flex-col ">
                                <div className="flex gap-2 items-center">
                                  <div className="md:h-10 md:w-10 h-6 w-6 flex justify-center items-center bg-primary rounded-full font-medium text-sm md:text-lg">
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <p className="font-medium md:text-xl">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className=" md:text-base text-xs">
                                    {item.subTitle}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div className=" flex flex-col gap-2 md:gap-4 justify-center items-center">
                        <button
                          className="hover:bg-opacity-85 animate-in duration-1000 bg-slate-900 text-white px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center justify-center gap-2 md:text-base text-sm"
                          onClick={() => {
                            setShowModal(false);
                          }}
                        >
                          Start Drawing <span>&#8594;</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <div className=" h-[1px] w-[100px] bg-gray-300 my-2"></div>
                          <div className=" text-[#868687]">or</div>
                          <div className=" h-[1px] w-[100px] bg-gray-300 my-2"></div>
                        </div>
                        <div>
                          <div
                            onClick={() => {
                              setShowModal(false);
                              goBack();
                            }}
                            className=" text-[#868687] cursor-pointer text-center underline"
                          >
                            Go back
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
