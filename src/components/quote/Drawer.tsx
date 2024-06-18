import React from "react";
import SelectedPlan from "./SelectedPlan";
import Link from "next/link";

const Drawer = ({
  plan,
  setPlan,
  solarSize,
  price,
}: {
  plan: string;
  setPlan: any;
  solarSize: number;
  price?: number;
}) => {
  return (
    <div>
      <div
        className={`${
          plan.length > 0
            ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen z-50"
            : ""
        }`}
        onClick={() => setPlan("")}
      ></div>

      <div
        className={`md:w-3/5 fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 md:rounded-l-2xl overflow-auto z-50 ${
          plan.length > 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5 items-center">
          <Link
            href={"tel:+919731893735"}
            className="bg-black text-white rounded-3xl px-4 py-2 text-sm hover:bg-gray-800 flex items-center gap-2"
          >
            Help{" "}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00852 19.5059L3.07852 19.1359C3.01207 19.3031 2.99196 19.4851 3.0203 19.6628C3.04865 19.8404 3.12441 20.0072 3.23959 20.1454C3.35477 20.2836 3.50511 20.3882 3.67476 20.4481C3.84441 20.508 4.02708 20.5211 4.20352 20.4859L4.00852 19.5059ZM8.71452 18.5699L9.18852 17.6889L8.87152 17.5189L8.51952 17.5889L8.71452 18.5699ZM5.63252 15.4229L6.56252 15.7929L6.72552 15.3789L6.52952 14.9799L5.63252 15.4229ZM19.0085 12.5059C19.0085 15.7519 16.1555 18.5059 12.4785 18.5059V20.5059C17.1195 20.5059 21.0085 16.9919 21.0085 12.5059H19.0085ZM5.94952 12.5059C5.94952 9.25986 8.80352 6.50586 12.4795 6.50586V4.50586C7.83852 4.50586 3.94852 8.01986 3.94852 12.5059H5.94952ZM12.4795 6.50586C16.1555 6.50586 19.0085 9.25986 19.0085 12.5059H21.0085C21.0085 8.01986 17.1205 4.50586 12.4795 4.50586V6.50586ZM12.4785 18.5059C11.2735 18.5059 10.1515 18.2059 9.18852 17.6889L8.24052 19.4499C9.54436 20.1472 10.9999 20.5101 12.4785 20.5059V18.5059ZM4.20352 20.4859L8.90952 19.5499L8.51952 17.5889L3.81352 18.5249L4.20352 20.4869V20.4859ZM6.52952 14.9799C6.14759 14.2111 5.94974 13.3643 5.94952 12.5059H3.94852C3.94852 13.7059 4.23052 14.8439 4.73452 15.8659L6.52952 14.9799ZM4.70352 15.0529L3.07852 19.1369L4.93652 19.8749L6.56052 15.7919L4.70252 15.0529H4.70352Z"
                fill="#F4F4F4"
              />
              <path
                d="M10.0078 12.5059C10.5601 12.5059 11.0078 12.0581 11.0078 11.5059C11.0078 10.9536 10.5601 10.5059 10.0078 10.5059C9.45553 10.5059 9.00781 10.9536 9.00781 11.5059C9.00781 12.0581 9.45553 12.5059 10.0078 12.5059Z"
                fill="#F4F4F4"
              />
              <path
                d="M13.5117 12.5059C14.064 12.5059 14.5117 12.0581 14.5117 11.5059C14.5117 10.9536 14.064 10.5059 13.5117 10.5059C12.9594 10.5059 12.5117 10.9536 12.5117 11.5059C12.5117 12.0581 12.9594 12.5059 13.5117 12.5059Z"
                fill="#F4F4F4"
              />
              <path
                d="M9 14.5039C11.1536 15.9701 12.6941 16.1743 15 14.5039"
                stroke="#F4F4F4"
                stroke-width="0.75"
                stroke-linecap="round"
              />
            </svg>
          </Link>
          <button onClick={() => setPlan("")} className="text-4xl font-thin">
            &times;
          </button>
        </div>
        <div className="border-b-[1px] text-lg md:text-2xl font-medium flex items-center justify-between px-5">
          <h1>Your solar system</h1>
          <h1>{solarSize} KW</h1>
        </div>
        <SelectedPlan plan={plan} price={price} solarSize={solarSize} />
      </div>
    </div>
  );
};

export default Drawer;
