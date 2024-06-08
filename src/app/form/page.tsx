"use client";

import ContactDetails from "@/components/form/ContactDetails";
import Analysis from "@/components/form/Step10_Analysis";
import SiteType from "@/components/form/Step1_SiteType";
import Floors from "@/components/form/Step2_Floors";
import PeekUsage from "@/components/form/Step3_ PeekUsage";
import Bill from "@/components/form/Step4_Bill";
import Places from "@/components/form/Step5_Places";
import RoofType from "@/components/form/Step8_RoofType";
import MapSelector from "@/components/maps/Autoplaces";
import Modal from "@/components/modal";
import Navbar from "@/components/navbar";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { solarTips } from "@/lib/utils";

import { useContext, useEffect } from "react";

import RoofArea from "@/components/form/Step9_RoofArea";
import FormStepContext from "@/context/FormStepContext";

export default function Form() {
  const { currentStep, setCurrentStep } = useContext(FormStepContext);
  const { formState, setFormState, updateFormState } = useContext<any>(
    QuoteGeneratorContext
  );

  useEffect(() => {
    setCurrentStep(currentStep + 1);
  }, [formState]);

  return (
    <>
      <main className="flex md:flex-row flex-col justify-between w-full h-dvh relative">
        <div className="md:w-1/2 flex flex-col flex-1">
          <Navbar />
          <div className="flex-1 w-full flex justify-center md:items-center md:pt-0 pt-5 bg-[#F4F4F4] px-5 md:px-20">
            {currentStep === 0 && (
              <ContactDetails
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            )}
            {currentStep === 1 && <SiteType />}
            {currentStep === 2 && <Floors />}
            {currentStep === 3 && <PeekUsage />}
            {currentStep === 4 && <Bill />}
            {currentStep === 5 && <Places />}
            {currentStep === 6 && (
              <div
                className={`hidden md:block transition-opacity duration-500`}
              >
                <div className="flex flex-col justify-center w-[400px] gap-4 items-center">
                  <>
                    {" "}
                    <div className=" font-semibold text-2xl">Pin your roof</div>
                    <div className=" text-gray-400 text-center font-medium">
                      Drag the map to the center of your house,
                      <br /> then click next
                    </div>
                    <Modal
                      handleNextClick={() => setCurrentStep(currentStep + 1)}
                      handleGoBackClick={() => setCurrentStep(currentStep - 1)}
                    />
                  </>
                </div>
              </div>
            )}
            {currentStep === 7 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Roof Marked</div>
                <div className="text-gray-400">
                  Keep clicking to outline your roof on the map
                </div>
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className=" bg-black px-6 py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Done {"->"}
                </button>
              </div>
            )}
            {currentStep === 8 && <RoofType />}
            {currentStep === 9 && <RoofArea />}
            {currentStep === 10 && (
              <Analysis
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            )}
          </div>
        </div>

        <div className="md:w-1/2 bg-[#F4F4F4] h-auto">
          {currentStep < 6 ? (
            <div className="hidden md:flex w-full md:items-center justify-center bg-primary shadow-xl md:rounded-tl-3xl md:rounded-bl-3xl rounded-t-3xl md:rounded-t-none md:h-[100vh] py-8 px-5 md:pb-0 pb-28">
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
                <div className={`transition-opacity duration-500`}>
                  {solarTips[currentStep]}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="hidden md:block">
                <MapSelector currentStep={currentStep} />
              </div>
              <div className="md:hidden relative">
                {currentStep === 6 && (
                  <div
                    className={`fixed inset-0 bg-black opacity-80 md:hidden transition-opacity duration-500 `}
                  >
                    <div className="md:hidden h-screen items-center">
                      <MapSelector currentStep={currentStep} />
                    </div>
                    <div className="fixed inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full bg-white backdrop-blur-md flex flex-col justify-center gap-4 items-center">
                      <div className=" font-semibold text-2xl">
                        Pin your roof
                      </div>
                      <div className=" text-gray-400 text-center font-medium">
                        Drag the map to the center of your house,
                        <br /> then click next
                      </div>
                      <Modal
                        handleNextClick={() => setCurrentStep(currentStep + 1)}
                        handleGoBackClick={() =>
                          setCurrentStep(currentStep - 1)
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {currentStep < 10 && currentStep > 0 && (
          <div className="absolute md:left-20 md:bottom-20 bottom-20 left-10 py-2 px-4 bg-white border border-black bg-opacity-50 rounded-3xl">
            <button onClick={() => setCurrentStep(currentStep - 1)}>
              {"<-"} Back
            </button>
          </div>
        )}
      </main>
    </>
  );
}
