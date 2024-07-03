import FormStepContext from "@/context/FormStepContext";
import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";

import React, { useContext, useState } from "react";

export default function RoofType() {
  const { formData, updateFormData } = useContext(
    FormDataContext
  ) as FormDataContextValue;

  const { goNext } = useContext(FormStepContext);
  return (
    <div className=" flex flex-col justify-center gap-6 items-center md:pt-0 pt-5">
      <svg
        className="animate-in slide-in-from-top-6 duration-1000"
        width="94"
        height="76"
        viewBox="0 0 94 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78.7734 31.873C78.7734 45.1677 65.8238 56.373 49.2734 56.373C32.7231 56.373 19.7734 45.1677 19.7734 31.873C19.7734 18.5784 32.7231 7.37305 49.2734 7.37305C65.8238 7.37305 78.7734 18.5784 78.7734 31.873Z"
          stroke="#FFCB00"
          stroke-width="3"
        />
        <path
          d="M14.0508 43.4258L18.0508 41.4258"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12 31.5938L16.4508 31.1577"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M13.4785 21.416L17.9293 23.4155"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M22.8086 9.48047L25.0761 13.8009"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M37.0039 1.61523L36.8111 6.49073"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M61 1L59.7572 5.71839"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M73.0508 7.11328L70.7129 11.396"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M80.4844 14.5879L77.1288 18.1302"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M86.9609 33.3203L82.1763 32.3639"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M82.6602 46.8457L78.2471 44.7643"
          stroke="#FFCB00"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M44.6935 8.77501C45.6622 7.09723 48.0839 7.09723 49.0526 8.77501L85.2868 71.5346C86.2555 73.2123 85.0446 75.3096 83.1073 75.3096H10.6388C8.70147 75.3096 7.49063 73.2123 8.4593 71.5346L44.6935 8.77501Z"
          fill="#212121"
        />
        <path
          d="M46.5384 16.4831C47.3859 15.015 49.5049 15.015 50.3525 16.4831L78.686 65.5582C79.5336 67.0263 78.4741 68.8614 76.779 68.8614H20.1119C18.4167 68.8614 17.3572 67.0263 18.2048 65.5582L46.5384 16.4831Z"
          fill="#F4F4F4"
          stroke="#212121"
          stroke-width="0.629168"
        />
      </svg>

      <div className="font-semibold text-2xl animate-in slide-in-from-top-4 duration-1000">
        Roof Type
      </div>
      <div className=" text-[#868687] animate-in slide-in-from-top-2 duration-1000">
        Is your roof flat, pitched or flat with beams?
      </div>
      <div className="flex w-full justify-center gap-2 animate-in slide-in-from-bottom-2 duration-1000">
        <div
          onClick={() => {
            updateFormData({
              siteDetails: {
                roofType: "pitched",
              },
            });
            goNext();
          }}
          className={`${
            formData?.siteDetails?.roofType == "pitched"
              ? "bg-primary"
              : "bg-white"
          } animate-in duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium">Pitched</span>
        </div>
        <div
          onClick={() => {
            updateFormData({
              siteDetails: {
                roofType: "flat",
              },
            });
            goNext();
          }}
          className={`${
            formData?.siteDetails?.roofType == "flat"
              ? "bg-primary"
              : "bg-white"
          } animate-in duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium">Flat</span>
        </div>
      </div>
      <div className="w-full flex justify-center animate-in slide-in-from-bottom-4 duration-1000">
        <div
          onClick={() => {
            updateFormData({
              siteDetails: {
                roofType: "flat_with_beams",
              },
            });
            goNext();
          }}
          className={`${
            formData?.siteDetails?.roofType == "flat_with_beams"
              ? "bg-primary"
              : "bg-white"
          } animate-in duration-1000 border-black border-[1px] hover:bg-primary justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
        >
          <span className="font-medium text-nowrap">Flat with beams</span>
        </div>
      </div>
    </div>
  );
}
