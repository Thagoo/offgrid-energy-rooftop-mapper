"use client";

import ContactDetails from "@/components/form/ContactDetails";
import Analysis from "@/components/form/Step10_Analysis";
import SiteType from "@/components/form/Step1_SiteType";
import Floors from "@/components/form/Step2_Floors";
import PeekUsage from "@/components/form/Step3_ PeekUsage";
import Bill from "@/components/form/Step4_Bill";
import Places from "@/components/form/Step5_Places";
import RoofType from "@/components/form/Step8_RoofType";
import MapSelector from "@/components/maps/MapSelector";
import Navbar from "@/components/navbar/navbarForm";

import { solarTips } from "@/lib/utils";

import { useContext } from "react";

import RoofArea from "@/components/form/Step9_RoofArea";
import FormStepContext from "@/context/FormStepContext";
import {
  MobilePopupOne,
  MobilePopupThree,
  MobilePopupTwo,
} from "@/components/form/Step6_MapSelectorMobile";
import InstructionModal from "@/components/modal";
import MapSelectorMobile from "@/components/maps/MapSelectorMobile";
import { useRouter } from "next/navigation";

export default function Form() {
  const { currentStep, setCurrentStep, goNext, goBack } =
    useContext(FormStepContext);
  const router = useRouter();
  const handleReDraw = () => {
    setCurrentStep(6);
  };
  return (
    <>
      <main className="flex md:flex-row flex-col w-full h-dvh relative overflow-y-hidden">
        <div className="md:w-1/2 flex flex-col flex-1">
          <Navbar />
          <ol className="flex items-center w-full ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((step) => (
              <li
                key={step}
                className={`flex-1 ${
                  currentStep >= step
                    ? "bg-primary"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                style={{
                  position: "relative",
                }}
              >
                <div
                  className={`absolute top-0 transition-all duration-500 transform -translate-y-0 w-full h-1 ${
                    currentStep >= step
                      ? "bg-primary"
                      : "text-gray-400 dark:text-gray-600"
                  }`}
                  style={{
                    zIndex: 50,
                    width: `100%`,
                  }}
                />
              </li>
            ))}
          </ol>
          <div className="flex-1 w-full flex justify-center items-start md:items-center md:pt-0 pt-5 bg-[#F4F4F4] px-5 md:px-20">
            {currentStep === 0 && <ContactDetails goNext={goNext} />}
            {currentStep === 1 && <SiteType />}
            {currentStep === 2 && <Floors />}
            {currentStep === 3 && <PeekUsage />}
            {currentStep === 4 && <Bill />}
            {currentStep === 5 && <Places />}
            {currentStep === 6 && (
              <>
                <div className="hidden md:flex flex-col gap-2 items-center">
                  <svg
                    width="74"
                    height="78"
                    className="animate-in slide-in-from-top-6 duration-1000"
                    viewBox="0 0 74 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9648 77L66.8878 43.8787"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-dasharray="10 10"
                    />
                    <path
                      d="M10.4043 49.0547L69.4484 71.8254"
                      stroke="#212121"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-dasharray="10 10"
                    />
                    <ellipse
                      cx="39.9648"
                      cy="62"
                      rx="16"
                      ry="6"
                      fill="#FFCB00"
                    />
                    <path
                      d="M35.7423 23.777C40.2553 23.3146 43.5389 19.2813 43.0765 14.7684C42.6141 10.2555 38.5808 6.97186 34.0679 7.43425C29.5549 7.89664 26.2713 11.9299 26.7337 16.4429C27.1961 20.9558 31.2294 24.2394 35.7423 23.777Z"
                      stroke="#212121"
                      stroke-width="4.10708"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M37.8264 23.9841C37.7978 23.7048 37.6493 23.4493 37.4135 23.2739C37.1778 23.0985 36.8742 23.0175 36.5694 23.0487L34.7819 23.2319C34.4772 23.2631 34.1962 23.404 34.001 23.6236C33.8057 23.8431 33.7121 24.1234 33.7407 24.4027L37.2602 58.7525C37.3114 59.2499 37.4699 59.7312 37.7265 60.1686L39.2999 62.8451C39.3504 62.9129 39.4201 62.9667 39.5017 63.0008C39.5833 63.0349 39.6738 63.0481 39.7636 63.0389C39.8535 63.0296 39.9394 62.9984 40.0124 62.9485C40.0854 62.8986 40.1427 62.8318 40.1784 62.7551L41.1764 59.8151C41.339 59.3348 41.3966 58.8313 41.3459 58.3339L37.8264 23.9841Z"
                      fill="#212121"
                    />
                  </svg>

                  <h1 className=" font-semibold text-2xl animate-in slide-in-from-top-4 duration-1000">
                    Drag the pin
                  </h1>
                  <p className=" text-[#868687] text-center animate-in slide-in-from-bottom-4 duration-1000">
                    Drag the pin to the center of your house, then click next
                  </p>

                  <button
                    className="hidden md:flex animate-in slide-in-from-bottom-2 duration-1000 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
                    type="button"
                    onClick={() => goNext()}
                  >
                    Next <span>&#8594;</span>
                  </button>

                  <button
                    className="mt-2 text-[#868687] underline animate-in slide-in-from-bottom-6 duration-1000"
                    onClick={() => setCurrentStep(11)}
                  >
                    Skip
                  </button>
                </div>
              </>
            )}
            {currentStep === 7 && (
              <>
                <InstructionModal />
                <div className="hidden md:flex flex-col gap-2 items-center">
                  <svg
                    width="80"
                    className="text-gray-400 animate-in slide-in-from-top-6 duration-1000"
                    height="77"
                    viewBox="0 0 80 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3691 18.3359H77.636"
                      stroke="#868687"
                      stroke-width="3.66693"
                      stroke-linecap="round"
                      stroke-dasharray="3.67 3.67"
                    />
                    <path
                      d="M18.7031 3.66797L18.7031 69.9349"
                      stroke="#868687"
                      stroke-width="3.66693"
                      stroke-linecap="round"
                      stroke-dasharray="3.67 3.67"
                    />
                    <circle
                      cx="18.7018"
                      cy="18.3366"
                      r="16.5012"
                      fill="#F4F4F4"
                      stroke="#FFCB00"
                      stroke-width="3.66693"
                    />
                    <mask
                      id="mask0_1018_1529"
                      maskUnits="userSpaceOnUse"
                      x="13"
                      y="12"
                      width="65"
                      height="66"
                    >
                      <path
                        d="M13.2051 32.3398L57.8724 12.8428L77.3695 57.5101L32.7022 77.0071L13.2051 32.3398Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1018_1529)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M46.4051 62.7146L32.4313 59.1556C31.0928 58.8141 29.9122 58.0229 29.0875 56.9146C28.2627 55.8063 27.8439 54.4482 27.9012 53.0679C27.9584 51.6876 28.4882 50.3689 29.4019 49.3327C30.3156 48.2966 31.5576 47.6058 32.9199 47.3763L36.1497 46.8339L29.5292 31.6666C28.9455 30.3309 28.8755 28.8268 29.3326 27.4427C29.7898 26.0586 30.7418 24.892 32.0062 24.1667C33.2705 23.4414 34.7582 23.2084 36.1837 23.5125C37.6093 23.8166 38.8724 24.6363 39.7307 25.8144L45.209 33.3242L53.4263 31.2563C54.6615 30.9457 55.948 30.8968 57.2032 31.1126C58.4584 31.3285 59.6547 31.8043 60.7152 32.5096C61.7757 33.215 62.6771 34.1342 63.3614 35.2083C64.0458 36.2825 64.4981 37.4878 64.6893 38.7471L66.7336 52.1794L46.4051 62.7146ZM60.1725 39.4324L61.7253 49.6294L45.8467 57.8566L33.5597 54.728C33.2373 54.6443 32.9533 54.4526 32.7551 54.1849C32.557 53.9171 32.4566 53.5895 32.4707 53.2567C32.4849 52.9239 32.6127 52.6061 32.8329 52.3561C33.0531 52.1062 33.3524 51.9393 33.6807 51.8833L36.9065 51.3394L42.6781 50.3689L33.7168 29.8387C33.5818 29.5343 33.5644 29.1907 33.668 28.8743C33.7715 28.5578 33.9887 28.291 34.2775 28.1253C34.5662 27.9596 34.9062 27.9067 35.2317 27.977C35.5571 28.0472 35.845 28.2356 36.0397 28.5057L41.5192 36.0183L43.3361 38.5056L46.3229 37.7569L54.5402 35.689C55.1577 35.5336 55.8009 35.5089 56.4285 35.6167C57.0561 35.7244 57.6542 35.9621 58.1845 36.3146C58.7149 36.6671 59.1656 37.1265 59.508 37.6634C59.8503 38.2003 60.0767 38.8029 60.1725 39.4324ZM69.2276 59.3932C69.7529 59.1059 70.1444 58.6239 70.3178 58.0509C70.4913 57.4779 70.4329 56.8597 70.1552 56.3293C69.8775 55.7989 69.4028 55.3987 68.833 55.2148C68.2633 55.0309 67.6441 55.078 67.1087 55.346L48.1761 65.2718C47.9047 65.4076 47.663 65.5962 47.4653 65.8265C47.2676 66.0568 47.1177 66.3242 47.0245 66.613C46.9313 66.9018 46.8965 67.2064 46.9223 67.5088C46.9481 67.8112 47.0339 68.1055 47.1747 68.3743C47.3154 68.6432 47.5084 68.8814 47.7422 69.0749C47.9761 69.2684 48.2462 69.4133 48.5366 69.5013C48.8271 69.5892 49.1323 69.6184 49.4342 69.5871C49.7361 69.5558 50.0287 69.4647 50.295 69.319L69.2276 59.3932Z"
                        fill="#212121"
                      />
                    </g>
                  </svg>

                  <div className="animate-in slide-in-from-top-4 duration-1000 font-semibold text-2xl">
                    Click a corner
                  </div>
                  <div className="text-gray-400 animate-in slide-in-from-top-4 duration-1000">
                    Keep clicking to outline your roof on the map
                  </div>

                  <button
                    className="animate-in slide-in-from-bottom-6 duration-1000 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 flex items-center justify-center gap-2"
                    onClick={() => setCurrentStep(currentStep + 1)}
                  >
                    Next <span>&#8594;</span>
                  </button>
                  <button
                    className="mt-2 text-[#868687] underline animate-in slide-in-from-bottom-6 duration-1000"
                    onClick={() => setCurrentStep(10)}
                  >
                    Skip
                  </button>
                </div>
              </>
            )}
            {currentStep === 8 && (
              <div className="hidden md:flex flex-col gap-2 items-center">
                <svg
                  width="90"
                  height="79"
                  className=" animate-in slide-in-from-top-6 duration-1000"
                  viewBox="0 0 90 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.44141 67.9375L14.848 56.5309"
                    stroke="#868687"
                    stroke-width="3.80221"
                    stroke-linecap="round"
                    stroke-dasharray="3.8 3.8"
                  />
                  <path
                    d="M71.832 76.4629L48.9222 15.2116"
                    stroke="#868687"
                    stroke-width="3.80221"
                    stroke-linecap="round"
                    stroke-dasharray="3.8 3.8"
                  />
                  <path
                    d="M2.44922 69.3965L72.7902 77.0009"
                    stroke="#868687"
                    stroke-width="3.80221"
                    stroke-linecap="round"
                    stroke-dasharray="3.8 3.8"
                  />
                  <circle
                    cx="57.4779"
                    cy="32.3216"
                    r="17.11"
                    fill="#FFCB00"
                    stroke="#212121"
                    stroke-width="3.80221"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M76.9031 9.80515C77.5082 10.1579 77.9485 10.7366 78.127 11.4139C78.3055 12.0913 78.2078 12.8118 77.8552 13.417L63.7562 37.6095C63.5699 37.9293 63.3224 38.2092 63.0279 38.4334C62.7334 38.6575 62.3976 38.8214 62.0398 38.9157C61.6819 39.01 61.309 39.0329 60.9423 38.9831C60.5756 38.9333 60.2222 38.8117 59.9025 38.6254L47.8831 31.6221C47.577 31.4508 47.3081 31.2202 47.0921 30.9439C46.8761 30.6675 46.7173 30.3509 46.6249 30.0125C46.5326 29.6741 46.5085 29.3207 46.5542 28.9729C46.5999 28.6252 46.7144 28.29 46.891 27.9869C47.0676 27.6839 47.3028 27.419 47.5829 27.2078C47.863 26.9967 48.1823 26.8434 48.5222 26.7569C48.8622 26.6704 49.2159 26.6526 49.5628 26.7043C49.9098 26.756 50.2429 26.8763 50.5429 27.0582L60.4325 32.8216L73.2895 10.7577C73.4642 10.4578 73.6962 10.1952 73.9723 9.98505C74.2485 9.77486 74.5634 9.62114 74.8989 9.53268C75.2345 9.44422 75.5842 9.42276 75.9281 9.46951C76.272 9.51626 76.6033 9.63031 76.9031 9.80515Z"
                    fill="#868687"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.8554 42.3005L21.6366 25.5294C22.4043 24.2034 23.6204 23.1953 25.0658 22.6867C26.5111 22.1781 28.0906 22.2026 29.5195 22.7557C30.9484 23.3088 32.1327 24.3541 32.859 25.7033C33.5853 27.0524 33.8057 28.6166 33.4805 30.114L32.6488 33.9832L31.5842 38.9736H41.3653C42.391 38.9736 43.4027 39.2108 44.3216 39.6666C45.2404 40.1223 46.0414 40.7843 46.6621 41.6008C47.2828 42.4173 47.7063 43.3663 47.8996 44.3735C48.0929 45.3808 48.0507 46.4191 47.7764 47.4074L44.852 57.9271C44.0025 60.9883 42.086 63.6445 39.4489 65.4159C36.8118 67.1872 33.628 67.9567 30.473 67.5852L13.5189 65.5891L11.8554 42.3005ZM31.0552 62.6281L18.2032 61.1144L16.9423 43.4816L25.9516 28.0446C26.1234 27.7483 26.3952 27.523 26.7183 27.4094C27.0414 27.2957 27.3944 27.3012 27.7138 27.4248C28.0332 27.5484 28.298 27.782 28.4605 28.0835C28.6229 28.385 28.6724 28.7346 28.5999 29.0693L26.7002 37.9289L25.406 43.964H41.362C41.6186 43.9638 41.8717 44.0231 42.1016 44.137C42.3315 44.2509 42.5319 44.4165 42.6872 44.6207C42.8425 44.825 42.9484 45.0624 42.9967 45.3144C43.045 45.5663 43.0344 45.8261 42.9656 46.0733L40.0412 56.593C39.5102 58.5052 38.3129 60.1645 36.6656 61.2713C35.0183 62.378 33.0296 62.8592 31.0585 62.6281H31.0552ZM7.69009 43.7877C7.67269 43.4566 7.58951 43.1324 7.44539 42.8338C7.30126 42.5353 7.0991 42.2685 6.8507 42.0489C6.6023 41.8294 6.31265 41.6616 5.99866 41.5552C5.68467 41.4489 5.35265 41.4062 5.02197 41.4297C4.6913 41.4531 4.36861 41.5422 4.07275 41.6917C3.77689 41.8412 3.51379 42.0482 3.29883 42.3006C3.08387 42.553 2.92135 42.8456 2.82076 43.1615C2.72017 43.4774 2.68354 43.8101 2.71299 44.1403L4.37646 67.4289C4.43456 68.0802 4.74601 68.6827 5.24379 69.1067C5.74157 69.5307 6.3859 69.7423 7.03815 69.6961C7.69041 69.6499 8.29846 69.3495 8.73147 68.8595C9.16449 68.3696 9.38788 67.7292 9.35356 67.0762L7.69009 43.7877Z"
                    fill="#212121"
                  />
                </svg>

                <div className=" font-semibold text-2xl animate-in slide-in-from-top-4 duration-1000">
                  Roof Marked
                </div>
                <div className="text-gray-400 animate-in slide-in-from-top-4 duration-1000 text-center">
                  Click done to proceed to next step.
                </div>
                <button
                  className="animate-in slide-in-from-bottom-6 duration-1000 focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full hover:bg-opacity-85 flex items-center justify-center gap-2"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Done <span>&#8594;</span>
                </button>
              </div>
            )}
            {currentStep === 9 && <RoofType />}
            {currentStep === 10 && <RoofArea />}
            {currentStep === 11 && (
              <Analysis
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            )}
            {/* Mobile Map start */}
            {currentStep < 11 && currentStep > 0 && (
              <div>
                <div className="md:hidden absolute md:left-20 md:bottom-10 bottom-4 left-5 py-2 px-4 bg-white bg-opacity-10 rounded-3xl z-0 backdrop-blur-sm blur-safari font-medium animate-in slide-in-from-top-2 duration-700 hover:border">
                  <button onClick={() => goBack()}>{"<-"} Back</button>
                </div>
              </div>
            )}
            <div className="md:hidden relative">
              {currentStep === 6 && (
                <div className={`fixed inset-0 `}>
                  <div className="md:hidden h-dvh">
                    <MapSelector currentStep={currentStep} />
                  </div>
                  {currentStep < 11 && currentStep > 0 && (
                    <div>
                      {currentStep === 6 && (
                        <>
                          <div className="md:hidden absolute md:left-20 md:bottom-10 bottom-4 left-5 py-2 px-4 bg-white bg-opacity-10 rounded-3xl z-0 backdrop-blur-sm blur-safari font-medium animate-in slide-in-from-top-2 duration-700 hover:border">
                            <button onClick={() => goBack()}>
                              {"<-"} Back
                            </button>
                          </div>
                          <button
                            className="md:hidden absolute right-10 bottom-4 flex animate-in fade-in duration-1000 focus:outline-none bg-slate-900 text-white z-0 tracking-wider py-2 px-4 rounded-full hover:bg-slate-800 items-center justify-center gap-2"
                            onClick={() => goNext()}
                          >
                            Next <span>{"->"}</span>
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  {currentStep === 6 && <MobilePopupOne />}
                </div>
              )}

              {/* Joystick map */}
              {currentStep >= 7 && currentStep < 9 && (
                <div className="md:hidden">
                  <MapSelectorMobile />
                  {currentStep < 11 && currentStep > 0 && (
                    <div>
                      <div className="absolute md:left-20 md:bottom-10 bottom-4 left-5 py-2 px-4 bg-white bg-opacity-10 rounded-3xl z-0 backdrop-blur-sm blur-safari font-medium animate-in slide-in-from-top-2 duration-700 hover:border">
                        <button onClick={() => goBack()}>{"<-"} Back</button>
                      </div>
                      {currentStep === 6 && (
                        <button
                          className="md:hidden absolute right-10 bottom-4 flex animate-in fade-in duration-1000 focus:outline-none bg-slate-900 text-white z-0 tracking-wider py-2 px-4 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
                          onClick={() => goNext()}
                        >
                          Next <span>{"->"}</span>
                        </button>
                      )}
                    </div>
                  )}
                  {currentStep === 7 && <MobilePopupTwo />}
                  {currentStep === 8 && <MobilePopupThree />}
                </div>
              )}
            </div>{" "}
          </div>
          {currentStep < 11 && currentStep > 0 && (
            <div>
              <div className="hidden md:block absolute md:left-20 md:bottom-10 bottom-4 left-5 py-2 px-4 bg-white bg-opacity-10 rounded-3xl z-0 backdrop-blur-sm blur-safari font-medium animate-in slide-in-from-top-2 duration-700 hover:border">
                <button onClick={() => goBack()}>{"<-"} Back</button>
              </div>
            </div>
          )}
        </div>

        <div className="md:w-1/2 bg-[#F4F4F4] h-auto">
          {currentStep < 6 ? (
            <div className="animate-in slide-in-from-bottom-4 hidden md:flex w-full md:items-center justify-center bg-primary shadow-xl md:rounded-tl-3xl md:rounded-bl-3xl rounded-t-3xl md:rounded-t-none md:h-[100vh] py-8 px-5 md:pb-0 pb-28">
              <div className="hidden md:block w-[400px] p-6 border rounded-3xl border-black bg-white text-black drop-shadow-xl border-l-8 border-t-2">
                <div className=" text-xl mb-2 font-semibold flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 16.875C13.125 17.0975 13.059 17.315 12.9354 17.5C12.8118 17.685 12.6361 17.8292 12.4305 17.9144C12.225 17.9995 11.9988 18.0218 11.7805 17.9784C11.5623 17.935 11.3618 17.8278 11.2045 17.6705C11.0472 17.5132 10.94 17.3127 10.8966 17.0945C10.8532 16.8762 10.8755 16.65 10.9606 16.4445C11.0458 16.2389 11.19 16.0632 11.375 15.9396C11.56 15.816 11.7775 15.75 12 15.75C12.2984 15.75 12.5845 15.8685 12.7955 16.0795C13.0065 16.2905 13.125 16.5766 13.125 16.875ZM12 6.75C9.93188 6.75 8.25 8.26406 8.25 10.125V10.5C8.25 10.6989 8.32902 10.8897 8.46967 11.0303C8.61033 11.171 8.80109 11.25 9 11.25C9.19892 11.25 9.38968 11.171 9.53033 11.0303C9.67099 10.8897 9.75 10.6989 9.75 10.5V10.125C9.75 9.09375 10.7597 8.25 12 8.25C13.2403 8.25 14.25 9.09375 14.25 10.125C14.25 11.1562 13.2403 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75V13.5C11.25 13.6989 11.329 13.8897 11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303C12.671 13.8897 12.75 13.6989 12.75 13.5V13.4325C14.46 13.1184 15.75 11.7544 15.75 10.125C15.75 8.26406 14.0681 6.75 12 6.75ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                      fill="black"
                    />
                  </svg>
                  Solar Tip
                </div>
                <div className={`animate-in slide-in-from-bottom-4`}>
                  {solarTips[currentStep]}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="hidden md:block ">
                <MapSelector currentStep={currentStep} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
