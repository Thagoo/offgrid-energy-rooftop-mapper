import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext } from "react";

export default function SiteType() {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const { goNext } = useContext(FormStepContext);

  return (
    <div className="flex flex-col justify-center md:w-[400px] md:items-center gap-6">
      <div className="font-semibold text-2xl text-center animate-in slide-in-from-top-4 duration-1000">
        Where do you want to install solar?
      </div>
      <div className="flex w-full gap-4">
        <div
          onClick={() => {
            updateFormData({ siteType: "home" });
            goNext();
          }}
          className={`${
            formState && formState.siteType == "home"
              ? "bg-primary"
              : "bg-white"
          } animate-in slide-in-from-bottom-4 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center h-[50px] flex py-2 px-6 gap-2 items-center rounded-full cursor-pointer`}
        >
          <span className="font-medium">Home</span>
        </div>

        <div
          onClick={() => {
            updateFormData({ siteType: "office" });
            goNext();
          }}
          className={`${
            formState && formState.siteType == "office"
              ? "bg-primary"
              : "bg-white"
          } animate-in slide-in-from-bottom-4 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center h-[50px] flex py-2 px-6 gap-2 items-center rounded-full cursor-pointer`}
        >
          <span className="font-medium">Office</span>
        </div>
      </div>
    </div>
  );
}
