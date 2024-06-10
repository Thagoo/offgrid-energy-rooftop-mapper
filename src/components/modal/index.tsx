import Image from "next/image";
import React from "react";

const ContentArray = [
  {
    icon: "/assets/form/modal/icon-1.svg",
    title: "Select a corner",
    subTitle:
      "To start, select the lower corner of the roof side where you want to place solar panels.",
  },
  {
    icon: "/assets/form/modal/icon-2.svg",
    title: "Select another corner",
    subTitle:
      "Then, select the next corner of that roof space, so the line sits on the ridge or gutter line.",
  },
  {
    icon: "/assets/form/modal/icon-3.svg",
    title: "Keep going",
    subTitle:
      "Once you’ve selected each corner, you’ll see a green ticket to indicate it’s complete.",
  },
];

export default function Modal({
  handleGoBackClick,
  handleNextClick,
}: {
  handleGoBackClick: () => void;
  handleNextClick: () => void;
}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="animate-in slide-in-from-bottom-2 duration-1000 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 flex items-center justify-center gap-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Next <span>&#8594;</span>
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 outline-none focus:outline-none flex items-center justify-center">
            <div className="relative w-auto animate-in fade-in duration-500">
              <div className="overflow-auto rounded-lg shadow-lg md:mt-0 mt-[20%] h-[90dvh] md:h-[95dvh] w-[95dvw] relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="relative">
                  <div className="flex md:flex-row flex-col w-[95vw] px-5 md:px-20 py-5">
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
                            <div className=" bg-[#D9D8D6] rounded-lg px-2 py-4 flex gap-2 md:gap-4">
                              <img
                                src={item.icon}
                                width={100}
                                height={100}
                                alt={item.title}
                                className="h-auto w-20"
                              />
                              <div className="flex gap-1 justify-center flex-col ">
                                <div className="flex gap-2 items-center">
                                  <div className="md:h-10 md:w-10 h-6 w-6 flex justify-center items-center w- bg-primary rounded-full font-medium text-sm md:text-lg">
                                    {idx + 1}
                                  </div>
                                  <div>
                                    <p className="font-semibold md:text-xl">
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className="font-medium md:text-base text-xs">
                                    {item.subTitle}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className=" font-semibold text-xs md:text-sm text-[#868687] text-center flex md:gap-2 items-center">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM24 40.5C20.7366 40.5 17.5465 39.5323 14.8331 37.7192C12.1197 35.9062 10.0048 33.3293 8.756 30.3143C7.50715 27.2993 7.1804 23.9817 7.81705 20.781C8.45371 17.5803 10.0252 14.6403 12.3327 12.3327C14.6403 10.0252 17.5803 8.4537 20.781 7.81704C23.9817 7.18039 27.2993 7.50714 30.3143 8.75599C33.3293 10.0048 35.9062 12.1197 37.7193 14.8331C39.5323 17.5465 40.5 20.7366 40.5 24C40.495 28.3745 38.7551 32.5685 35.6618 35.6618C32.5685 38.7551 28.3746 40.495 24 40.5ZM27 33C27 33.3978 26.842 33.7794 26.5607 34.0607C26.2794 34.342 25.8978 34.5 25.5 34.5C24.7044 34.5 23.9413 34.1839 23.3787 33.6213C22.8161 33.0587 22.5 32.2956 22.5 31.5V24C22.1022 24 21.7207 23.842 21.4393 23.5607C21.158 23.2794 21 22.8978 21 22.5C21 22.1022 21.158 21.7206 21.4393 21.4393C21.7207 21.158 22.1022 21 22.5 21C23.2957 21 24.0587 21.3161 24.6213 21.8787C25.1839 22.4413 25.5 23.2044 25.5 24V31.5C25.8978 31.5 26.2794 31.658 26.5607 31.9393C26.842 32.2206 27 32.6022 27 33ZM21 15.75C21 15.305 21.132 14.87 21.3792 14.5C21.6264 14.13 21.9778 13.8416 22.389 13.6713C22.8001 13.501 23.2525 13.4564 23.689 13.5432C24.1254 13.63 24.5263 13.8443 24.841 14.159C25.1557 14.4737 25.37 14.8746 25.4568 15.311C25.5436 15.7475 25.499 16.1999 25.3287 16.611C25.1584 17.0222 24.8701 17.3736 24.5 17.6208C24.13 17.868 23.695 18 23.25 18C22.6533 18 22.081 17.7629 21.659 17.341C21.2371 16.919 21 16.3467 21 15.75Z"
                            fill="#868687"
                          />
                        </svg>
                        <span>
                          Draw your roof on the map. So we can estimate whether
                          you have space for solar.
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <div className=" flex flex-col gap-2 md:gap-4 justify-center items-center">
                        <button
                          className="hover:bg-opacity-85 animate-in duration-1000 bg-slate-900 text-white px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center justify-center gap-2 md:text-base text-sm"
                          onClick={() => {
                            handleNextClick();
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
                              handleGoBackClick();
                            }}
                            className=" text-[#868687] cursor-pointer text-center underline"
                          >
                            Go Back
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
      ) : null}
    </>
  );
}
