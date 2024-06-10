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
        <div className=" font-semibold text-2xl animate-in slide-in-from-top-4 duration-1000 flex items-center gap-2">
          <svg
            width="94"
            className="animate-in fade-in duration-1000"
            height="75"
            viewBox="0 0 94 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5762 56.7344L48.5 28"
              stroke="#868687"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 2"
            />
            <path
              d="M63.5508 60.2188L51.5 28"
              stroke="#868687"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 2"
            />
            <path
              d="M27.0547 56.502L64.0547 60.502"
              stroke="#868687"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="2 2"
            />
            <circle
              cx="50"
              cy="23"
              r="9"
              fill="#FFCB00"
              stroke="#212121"
              stroke-width="2"
            />
            <circle
              cx="27"
              cy="57"
              r="9"
              fill="#FFCB00"
              stroke="#212121"
              stroke-width="2"
            />
            <circle
              cx="67"
              cy="59"
              r="9"
              fill="#FFCB00"
              stroke="#212121"
              stroke-width="2"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.2151 11.1567C60.5335 11.3423 60.765 11.6467 60.8589 12.0029C60.9529 12.3592 60.9014 12.7382 60.7159 13.0566L53.2998 25.7821C53.2018 25.9503 53.0716 26.0975 52.9167 26.2154C52.7618 26.3333 52.5851 26.4195 52.3969 26.4691C52.2087 26.5187 52.0125 26.5308 51.8196 26.5046C51.6267 26.4784 51.4409 26.4144 51.2727 26.3164L44.9504 22.6326C44.7894 22.5425 44.6479 22.4212 44.5343 22.2758C44.4207 22.1305 44.3371 21.9639 44.2885 21.7859C44.24 21.608 44.2273 21.4221 44.2514 21.2391C44.2754 21.0562 44.3356 20.8799 44.4285 20.7205C44.5214 20.5611 44.6451 20.4218 44.7925 20.3107C44.9398 20.1996 45.1077 20.1189 45.2865 20.0735C45.4654 20.028 45.6514 20.0186 45.8339 20.0458C46.0164 20.073 46.1917 20.1363 46.3494 20.2319L51.5515 23.2636L58.3144 11.6577C58.4062 11.5 58.5283 11.3619 58.6736 11.2513C58.8188 11.1408 58.9844 11.0599 59.161 11.0134C59.3375 10.9668 59.5214 10.9555 59.7023 10.9801C59.8832 11.0047 60.0575 11.0647 60.2151 11.1567Z"
              fill="#868687"
            />
          </svg>
          <span className="text-2xl">Awesome</span>
        </div>
        <div className=" text-[#868687] animate-in slide-in-from-top-2 duration-1000">
          Your roof is suitable for solar installation.
        </div>
        <div className="bg-white rounded-2xl flex items-center px-4 py-4 gap-8  animate-in fade-in duration-1000">
          <svg
            width="52"
            height="45"
            viewBox="0 0 52 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.8454 1.43945H21.7977L11.7305 21.3075H24.8444L34.8454 1.43945Z"
              stroke="black"
              stroke-width="2.00013"
              stroke-linejoin="round"
            />
            <path
              d="M50.9997 1.43945H37.952L27.8848 21.3075H40.9987L50.9997 1.43945Z"
              fill="#D9D9D9"
              stroke="black"
              stroke-width="2.00013"
              stroke-linejoin="round"
            />
            <path
              d="M24.1149 23.6914H11.0672L1 43.5595H14.1139L24.1149 23.6914Z"
              fill="#D9D9D9"
              stroke="black"
              stroke-width="2.00013"
              stroke-linejoin="round"
            />
            <path
              d="M40.0075 23.6914H26.9598L16.8926 43.5595H30.0065L40.0075 23.6914Z"
              stroke="black"
              stroke-width="2.00013"
              stroke-linejoin="round"
            />
          </svg>

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
        <div className="flex justify-start items-center animate-in slide-in-from-bottom-4 duration-1000">
          <Submit handleNext={handleNext} loading={loading} />
        </div>
      </div>
    </div>
  );
}

function Submit({ handleNext, loading }) {
  return (
    <button
      className="focus:outline-none hover:opacity-80 animate-in duration-1000 bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full disabled:bg-gray-600 flex items-center justify-center gap-2"
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
