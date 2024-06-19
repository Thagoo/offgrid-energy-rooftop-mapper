import SavingsEstimation from "@/components/quote/SavingsEstimation";
import { inclusions } from "@/components/quote/SelectedPlan";
import SystemSize from "@/components/quote/SystemSize";
import { ContactDetailsContext } from "@/context/ContactDetailsContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";
import {
  calculateCostWithSolar,
  calculateAfterSubsidy,
  calculateSolarSize,
} from "@/lib/utils";
import React, { useContext } from "react";

const Quotation = () => {
  const { formState } = useContext<any>(QuoteGeneratorContext);
  const { contactDetails } = useContext<any>(ContactDetailsContext);
  var today = new Date();
  return (
    <main>
      <div className="page bg-[#F4F4F4] flex flex-col justify-between h-[297mm]">
        <div className="p-4 ">
          <header className="flex justify-between items-center border-b pb-2 mb-2 flex-grow">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/offgrid-logo.svg"
                alt="Offgrid Logo"
                className="h-8"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Quotation</h2>
            </div>
          </header>

          <section className="flex justify-between">
            <div>
              <h3 className="text-xl font-medium">
                Here&apos;s 3 solar installation quotes
              </h3>
              <p className="text-gray-600">
                For your house in Bangalore, Karnataka
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[#868687] text-sm">
                  Date: {today.toLocaleDateString("en-US")}
                </p>
                <p className="text-[#868687] text-sm">
                  Customer Name: {contactDetails?.personalDetails.name}
                </p>
                <p className="text-[#868687] text-sm">
                  Quote ID: {formState?.quoteId}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-2">
            <div className="flex justify-between bg-white p-4 rounded-2xl mb-2 border-2">
              <div className="flex flex-col">
                <h4 className="text-2xl">Basic Plan</h4>
                <p className="text-[#868687]">
                  Focuses on essential equipment for generating solar power
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src="/assets/brands/waaree.svg"
                    alt="Waaree"
                    className="h-6 px-4 py-1 rounded-3xl border mr-2 "
                  />
                  <img
                    src="/assets/brands/luminous.svg"
                    alt="Luminous"
                    className="h-6 px-4 py-1 rounded-3xl border mr-2"
                  />
                  <span className="text-[#868687]">or similar</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="text-[#868687] text-sm">
                  Quote:{" "}
                  {formState?.price.basic.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
                <p className="text-[#868687] text-sm">
                  Govt. Subsidy:{" "}
                  {(
                    formState?.price.premium - formState?.subsidyPrice.premium
                  ).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                  *
                </p>
                <p className="font-medium text-2xl">
                  {" "}
                  {(formState?.subsidyPrice.basic).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>

            <div className="flex justify-between bg-white p-4 rounded-2xl mb-4 border-2 border-primary">
              <div className="flex flex-col ">
                <h4 className="text-2xl">
                  Standard Plan{" "}
                  <span className="px-4 py-1 rounded-3xl border border-[#FFCB00] bg-[#FBF4D8] text-base ">
                    Recommended
                  </span>
                </h4>
                <p className="text-[#868687]">
                  Offers a good balance between affordability and features
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src="/assets/brands/tata.svg"
                    alt="Tata Power"
                    className="h-6 mr-2 px-4 py-1 rounded-3xl border border-[#FFCB00] bg-[#FBF4D8]"
                  />
                  <img
                    src="/assets/brands/bluebird.svg"
                    alt="Bluebird"
                    className="h-6 px-4 py-1 rounded-3xl border border-[#FFCB00] bg-[#FBF4D8] mr-2"
                  />
                  <span className="text-[#868687]">or similar</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="text-[#868687] text-sm">
                  Quote:{" "}
                  {formState?.price.standard.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
                <p className="text-[#868687] text-sm">
                  Govt. Subsidy:{" "}
                  {(
                    formState?.price.standard - formState?.subsidyPrice.standard
                  ).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                  *
                </p>
                <p className="font-medium text-2xl">
                  {" "}
                  {formState?.subsidyPrice.standard.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>

            <div className="flex justify-between bg-white p-4 rounded-2xl mb-2 border-2">
              <div className="flex flex-col">
                <h4 className="text-2xl">Premium Plan</h4>
                <p className="text-[#868687]">
                  Top-of-the-line equipment and features
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src="/assets/brands/panasonic.svg"
                    alt="Panasonic"
                    className="h-6 px-4 py-1 rounded-3xl border mr-2"
                  />
                  <img
                    src="/assets/brands/canadian-solar.svg"
                    alt="Canadian-solar"
                    className="h-6 px-4 py-1 rounded-3xl border mr-2"
                  />
                  <span className="text-[#868687]">or similar</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="text-[#868687] text-sm">
                  Quote:{" "}
                  {formState?.price.premium.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
                <p className="text-[#868687] text-sm">
                  Govt. Subsidy:{" "}
                  {(
                    formState?.price.premium - formState?.subsidyPrice.premium
                  ).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                  *
                </p>
                <p className="font-medium text-2xl">
                  {" "}
                  {formState?.subsidyPrice.premium.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>
          </section>

          <section className="w-full mt-2 flex justify-between gap-4 max-h-[50vh] overflow-hidden">
            <div className="w-2/5  border rounded-3xl">
              <SystemSize />
            </div>
            <div className="w-3/5 border rounded-3xl">
              <SavingsEstimation />
            </div>
          </section>
        </div>
        <footer className="border-t p-2 py-2 bg-[#929DDB] text-white flex justify-between">
          <p className="text-center text-sm">+91 91482 48898</p>
          <p className="text-center text-sm">www.getoffgrid.energy</p>
          <div></div>
        </footer>
      </div>
      {/* Page two */}
      <div className=" bg-[#F4F4F4] flex flex-col justify-between h-[297mm]">
        <div className=" p-4">
          <header className="flex justify-between items-center border-b pb-2 mb-2 flex-grow">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/offgrid-logo.svg"
                alt="Offgrid Logo"
                className="h-8"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Quotation</h2>
            </div>
          </header>
          <div className="flex justify-between gap-4">
            <div className="w-1/2 rounded-3xl p-5 flex flex-col border">
              <h1 className="font-medium text-lg mb-2">
                What’s included in your quote
              </h1>
              <ul className="space-y-10">
                {inclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm font-light px-2 py-2 rounded-xl"
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
            <div className="w-1/2 flex flex-col md:px-20 px-5 py-16 md:gap-16 gap-4 border rounded-2xl ">
              <h1 className="text-2xl md:text-[3rem] font-medium text-center leading-none">
                Why choose Offgrid for your <br /> solar installation
              </h1>
              <div className="flex flex-col gap-10 md:gap-16 py-6 border-t border-t-[#d9d8d6]">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="md:self-center">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99609 10.2852H24.9961"
                          stroke="#212121"
                          stroke-width="2.48078"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99609 5.28516H24.9961"
                          stroke="#212121"
                          stroke-width="2.48078"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.4961 5.28516C15.22 5.28516 16.8733 5.96998 18.0923 7.18896C19.3113 8.40795 19.9961 10.0612 19.9961 11.7852C19.9961 13.5091 19.3113 15.1624 18.0923 16.3813C16.8733 17.6003 15.22 18.2852 13.4961 18.2852H8.99609L19.9961 28.2852"
                          stroke="#212121"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                      Fixed price guarantee
                    </h1>
                    <p className="font-normal md:text-base text-sm md:text-center">
                      Get a assured price quote for your solar. All included and
                      nothing extra.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="md:self-center">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 28.2852H7C6.73478 28.2852 6.48043 28.1798 6.29289 27.9923C6.10536 27.8047 6 27.5504 6 27.2852V5.28516C6 5.01994 6.10536 4.76559 6.29289 4.57805C6.48043 4.39051 6.73478 4.28516 7 4.28516H19L26 11.2852V27.2852C26 27.5504 25.8946 27.8047 25.7071 27.9923C25.5196 28.1798 25.2652 28.2852 25 28.2852Z"
                          stroke="#343330"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19 4.28516V11.2852H26"
                          stroke="#343330"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 17.2852H20"
                          stroke="#343330"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 21.2852H20"
                          stroke="#343330"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                      No cost EMI
                    </h1>
                    <p className="font-normal md:text-base text-sm md:text-center">
                      Get solar loans and interest free financing from Offgrid
                      partner banks and NBFC&apos;s
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="md:self-center">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0039 28.2891C22.6313 28.2891 28.0039 22.9165 28.0039 16.2891C28.0039 9.66165 22.6313 4.28906 16.0039 4.28906C9.37649 4.28906 4.00391 9.66165 4.00391 16.2891C4.00391 22.9165 9.37649 28.2891 16.0039 28.2891Z"
                          stroke="#212121"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 9.28516V16.2852H23"
                          stroke="#212121"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 className="text-lg md:text-[1.44rem] font-medium md:text-center">
                      24 Hours Installation
                    </h1>
                    <p className="font-normal md:text-base text-sm md:text-center">
                      We spend only a day in your house. We set up your panels
                      and switch you up fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-cover bg-center h-[40dvh] bg-[url('/assets/quote/last-bg.jpg')] flex justify-center items-center flex-col gap-4 md:gap-2 md:px-20 px-5 mt-auto">
          <p className="text-sm md:text-xl text-center ">
            Assured Prices | 30% Government Subsidy | Trusted Quality
          </p>
          <h1 className="text-2xl md:text-5xl"></h1>

          <button className="rounded-full bg-primary px-4 py-2 md:px-10 md:py-4 md:text-lg text-sm flex gap-2 items-center font-medium">
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.49968 1.73828H5.66264C5.54298 1.73828 5.48316 1.73828 5.43034 1.7565C5.38363 1.77261 5.34109 1.7989 5.30579 1.83348C5.26587 1.87257 5.23912 1.92608 5.18561 2.0331L2.38561 7.6331C2.25782 7.88867 2.19393 8.01646 2.20927 8.12033C2.22268 8.21104 2.27285 8.29222 2.34798 8.34477C2.43403 8.40495 2.5769 8.40495 2.86264 8.40495H6.99968L4.99968 15.0716L13.1284 6.64182C13.4027 6.35742 13.5398 6.21521 13.5478 6.09354C13.5548 5.98792 13.5112 5.88527 13.4303 5.81697C13.3371 5.73828 13.1396 5.73828 12.7445 5.73828H7.99968L9.49968 1.73828Z"
                stroke="#212121"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Book Now
          </button>
          <h1 className="flex items-center gap-2  text-[10px] md:text-base">
            <svg
              className="w-3 h-3 md:w-5 md:h-5"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8472 15.1445L16.4306 13.1654L16.4184 13.1598C16.1892 13.0617 15.939 13.0224 15.6907 13.0453C15.4424 13.0682 15.2037 13.1527 14.9963 13.2911C14.9718 13.3072 14.9484 13.3247 14.9259 13.3436L12.6441 15.2889C11.1984 14.5867 9.70595 13.1054 9.00376 11.6786L10.9519 9.362C10.9706 9.33856 10.9884 9.31512 11.0053 9.28981C11.1407 9.08291 11.2229 8.84574 11.2445 8.59941C11.2661 8.35308 11.2264 8.10524 11.1291 7.87793V7.86668L9.14438 3.44262C9.0157 3.14568 8.79444 2.89832 8.51362 2.73747C8.2328 2.57662 7.9075 2.5109 7.58626 2.55012C6.31592 2.71729 5.14986 3.34116 4.30588 4.30521C3.4619 5.26927 2.99771 6.50758 3.00001 7.78887C3.00001 15.2326 9.05626 21.2889 16.5 21.2889C17.7813 21.2912 19.0196 20.827 19.9837 19.983C20.9477 19.139 21.5716 17.973 21.7388 16.7026C21.7781 16.3815 21.7125 16.0563 21.5518 15.7755C21.3911 15.4947 21.144 15.2733 20.8472 15.1445ZM16.5 19.7889C13.3185 19.7854 10.2682 18.52 8.01856 16.2703C5.76888 14.0206 4.50348 10.9704 4.50001 7.78887C4.49648 6.87339 4.82631 5.98793 5.42789 5.29785C6.02947 4.60776 6.86167 4.16025 7.76907 4.03887C7.7687 4.04261 7.7687 4.04638 7.76907 4.05012L9.73782 8.45637L7.80001 10.7757C7.78034 10.7984 7.76247 10.8225 7.74657 10.8479C7.60549 11.0644 7.52273 11.3137 7.5063 11.5716C7.48988 11.8294 7.54035 12.0872 7.65282 12.3198C8.5022 14.057 10.2525 15.7942 12.0084 16.6426C12.2428 16.754 12.502 16.8028 12.7608 16.784C13.0196 16.7653 13.2692 16.6798 13.485 16.5357C13.5091 16.5195 13.5322 16.502 13.5544 16.4832L15.8334 14.5389L20.2397 16.5123C20.2397 16.5123 20.2472 16.5123 20.25 16.5123C20.1301 17.421 19.6833 18.2549 18.9931 18.8579C18.3028 19.461 17.4166 19.792 16.5 19.7889Z"
                fill="#212121"
              />
            </svg>
            (+91) 9148248898
          </h1>
          <h1 className="flex items-center gap-2  text-[10px] md:text-base">
            support@getoffgrid.energy
          </h1>
          <h1 className="flex items-center gap-2  text-[10px] md:text-base">
            Bangalore, Karnataka
          </h1>
          <h1 className="flex items-center gap-2  text-[10px] md:text-base text-white mt-6">
            www.getoffgrid.energy
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Quotation;
