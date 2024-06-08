import LoadingSpinner from "@/app/ui/loading-spinner";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { creatSite } from "@/lib/action";
import React, { useContext, useState } from "react";

export default function RoofArea() {
  const [loading, setLoading] = useState(false);
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );

  const handleNext = async () => {
    setLoading(true);
    const siteId = await creatSite(formState);
    setLoading(false);
    setFormState((prev) => ({ ...prev, siteId: siteId }));
  };

  return (
    <div>
      <div className=" flex flex-col justify-center gap-4 items-center">
        <div className=" font-semibold text-2xl">Awesome</div>
        <div className=" text-gray-400">
          Your roof is suitable for solar installation.
        </div>
        <div className="bg-white rounded-2xl flex px-4 py-4 gap-8">
          <div className="flex-col">
            <p className="text-[#868687] font-semibold">Roof Area</p>
            <h1 className="font-semibold text-2xl">
              {formState && Math.floor(formState.roofArea)} sq. ft
            </h1>
          </div>
          <div className="flex-col">
            <p className="text-[#868687] font-semibold">Suitable for</p>
            <h1 className="font-semibold text-2xl">
              {formState && Math.floor(formState.roofArea / 27.38)} panels
            </h1>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <Submit handleNext={handleNext} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function Submit({ handleNext, loading }) {
  return (
    <button
      className="focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full disabled:bg-gray-600 flex items-center justify-center gap-2"
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
