import { calculateDiscount } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const inclusions = [
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="40" height="40" rx="4" fill="#D9D8D6" />
        <path
          d="M26.5 31.18L23.91 28.59L22.5 30L26.5 34L34.5 26L33.09 24.59L26.5 31.18ZM13.5 21H20.5V23H13.5V21ZM13.5 16H25.5V18H13.5V16ZM13.5 11H25.5V13H13.5V11Z"
          fill="#212121"
        />
        <path
          d="M20.5 34H10.5C9.397 34 8.5 33.103 8.5 32V8C8.5 6.897 9.397 6 10.5 6H28.5C29.603 6 30.5 6.897 30.5 8V23H28.5V8H10.5V32H20.5V34Z"
          fill="#212121"
        />
      </svg>
    ),
    title: "MNRE 30% Subsidy Paperwork",
    desc: "Govt. subsidy application for rooftop solar.",
  },
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1990_2114)">
          <rect x="0.5" width="40" height="40" rx="4" fill="#D9D8D6" />
          <path
            d="M20.5 3.33398L20.5 36.6673"
            stroke="#212121"
            stroke-width="1.66667"
            stroke-linecap="round"
          />
          <path
            d="M3.83398 8.33398H37.1673"
            stroke="#212121"
            stroke-width="1.66667"
            stroke-linecap="round"
          />
          <path
            d="M7.16602 5V7.5"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
          <path
            d="M11.334 5V7.5"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
          <path
            d="M7.37891 7.93945L20.2889 15.393"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
          <path
            d="M33.5645 8.12305L20.7696 15.5102"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
          <path
            d="M29.666 5V7.5"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
          <path
            d="M33.834 5V7.5"
            stroke="#212121"
            stroke-width="0.833333"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1990_2114">
            <rect x="0.5" width="40" height="40" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Net Metering Support ",
    desc: "Net metering for your rooftop solar.",
  },
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1990_2128)">
          <rect x="0.5" width="40" height="40" rx="4" fill="#D9D8D6" />
          <g clip-path="url(#clip1_1990_2128)">
            <path
              d="M9.5 31.9747L11.628 21.3333H30.7813L32.9093 31.9733L9.5 31.9747ZM10.14 9.35867V8.02533H13.756V9.35867H10.14ZM11.1507 30.6413H20.5507V27.3587H11.812L11.1507 30.6413ZM13.2307 16.3307L12.2787 15.412L14.8307 12.8613L15.7813 13.7787L13.2307 16.3307ZM12.0893 26.0253H20.5507V22.6653H12.7507L12.0893 26.0253ZM21.2173 13.3853C19.7151 13.3853 18.4422 12.8631 17.3987 11.8187C16.3551 10.7751 15.8333 9.50222 15.8333 8H17.1667C17.1667 9.12533 17.5604 10.0818 18.348 10.8693C19.1364 11.6569 20.0938 12.0507 21.22 12.0507C22.3462 12.0507 23.3027 11.6569 24.0893 10.8693C24.8751 10.0818 25.268 9.12533 25.268 8H26.6013C26.6013 9.50222 26.0796 10.7751 25.036 11.8187C23.9924 12.8622 22.7196 13.3844 21.2173 13.3853ZM20.5507 18.9493V15.3333H21.884V18.948L20.5507 18.9493ZM21.884 30.6427H31.2573L30.5973 27.36H21.884V30.6427ZM21.884 26.0267H30.32L29.6587 22.6667H21.884V26.0267ZM29.256 16.3573L26.6867 13.78L27.604 12.8627L30.2067 15.4067L29.256 16.3573ZM28.6787 9.35867V8.02533H32.2947V9.35867H28.6787Z"
              fill="#212121"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1990_2128">
            <rect x="0.5" width="40" height="40" rx="4" fill="white" />
          </clipPath>
          <clipPath id="clip1_1990_2128">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Solar Installation",
    desc: "Includes all cables and fittings.",
  },
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="40" height="40" rx="4" fill="#D9D8D6" />
        <path
          d="M13.2992 8.80078C13.1609 8.80075 13.025 8.83655 12.9047 8.90469C12.7844 8.97283 12.6839 9.07099 12.6128 9.18958L7.81279 17.1896C7.72758 17.3319 7.68874 17.4973 7.70164 17.6627C7.71454 17.8281 7.77854 17.9854 7.88479 18.1128L19.8848 32.5128C19.9599 32.6028 20.0538 32.6752 20.16 32.7249C20.2662 32.7747 20.382 32.8004 20.4992 32.8004C20.6164 32.8004 20.7322 32.7747 20.8384 32.7249C20.9446 32.6752 21.0385 32.6028 21.1136 32.5128L33.1136 18.1128C33.2198 17.9854 33.2838 17.8281 33.2967 17.6627C33.3096 17.4973 33.2708 17.3319 33.1856 17.1896L28.3856 9.18958C28.3145 9.07099 28.2139 8.97283 28.0936 8.90469C27.9734 8.83655 27.8374 8.80075 27.6992 8.80078H13.2992ZM9.91199 16.8008L13.752 10.4008H16.9184L14.3584 16.8008H9.91199ZM14.352 18.4008L17.9792 27.7272L10.208 18.4008H14.352ZM20.4992 29.7928L16.0688 18.4008H24.9296L20.4992 29.7928ZM16.0816 16.8008L18.6416 10.4008H22.3568L24.9168 16.8008H16.0816ZM26.6416 16.8008L24.0816 10.4008H27.2464L31.0864 16.8008H26.6416ZM26.6464 18.4008H30.7904L23.0192 27.7272L26.6464 18.4008Z"
          fill="#212121"
        />
      </svg>
    ),
    title: "Premium On-roof Work",
    desc: "We monitor and report at every step.",
  },
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="40" height="40" rx="4" fill="#D9D8D6" />
        <path
          d="M20.5 6L8.5 10V22C8.5 28.6281 13.8719 34 20.5 34C27.1281 34 32.5 28.6281 32.5 22V10L20.5 6ZM30.25 22C30.25 27.3844 25.8844 31.75 20.5 31.75C15.1156 31.75 10.75 27.3844 10.75 22V11.6875L20.5 8.25L30.25 11.6875V22Z"
          fill="#212121"
        />
        <path
          d="M16.3254 18.8469C16.2211 18.7421 16.0972 18.659 15.9607 18.6023C15.8242 18.5456 15.6779 18.5164 15.5301 18.5164C15.3823 18.5164 15.236 18.5456 15.0995 18.6023C14.963 18.659 14.8391 18.7421 14.7348 18.8469C14.63 18.9511 14.5469 19.0751 14.4902 19.2116C14.4335 19.348 14.4043 19.4944 14.4043 19.6422C14.4043 19.79 14.4335 19.9363 14.4902 20.0728C14.5469 20.2093 14.63 20.3332 14.7348 20.4375L18.7785 24.4813L18.8442 24.5469C18.9428 24.6457 19.0599 24.7241 19.1889 24.7776C19.3179 24.8311 19.4561 24.8586 19.5957 24.8586C19.7353 24.8586 19.8736 24.8311 20.0025 24.7776C20.1315 24.7241 20.2487 24.6457 20.3473 24.5469L27.3317 17.5625C27.4305 17.4639 27.5089 17.3467 27.5624 17.2178C27.6159 17.0888 27.6434 16.9506 27.6434 16.8109C27.6434 16.6713 27.6159 16.5331 27.5624 16.4041C27.5089 16.2752 27.4305 16.158 27.3317 16.0594L27.2442 15.9719C27.1455 15.8731 27.0284 15.7947 26.8994 15.7412C26.7705 15.6877 26.6322 15.6602 26.4926 15.6602C26.353 15.6602 26.2147 15.6877 26.0858 15.7412C25.9568 15.7947 25.8397 15.8731 25.741 15.9719L19.5942 22.1156L16.3254 18.8469Z"
          fill="#212121"
        />
      </svg>
    ),
    title: "Solar Maintenance",
    desc: "X years of maintenance free of cost.",
  },
];

const brands = {
  basic: [
    {
      image: "/assets/solar.svg",
      brand: "Luminous",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
    {
      image: "/assets/solar.svg",
      brand: "Luminous",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
  ],
  standard: [
    {
      image: "/assets/solar.svg",
      brand: "Tata",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
    {
      image: "/assets/solar.svg",
      brand: "Luminous",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
  ],
  premium: [
    {
      image: "/assets/solar.svg",
      brand: "Panasonic",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
    {
      image: "/assets/solar.svg",
      brand: "Luminous",
      panels: "15",
      power: "350",
      units: "w",
      url: "#",
    },
  ],
};

export default function SelectedPlan({ plan, price, solarSize }) {
  if (!plan) {
    return;
  }

  const specifications = [
    "500 W Bifacial Solar Panels",
    `${solarSize} KVA Solar Inverter`,
    "Cyclone Proof Mounting Structure",
    "BIS Certified Peripherals",
    "Solar App Monitoring",
  ];

  return (
    <div className="flex md:flex-row flex-col justify-between py-5 px-5 gap-5">
      <div className="flex flex-col gap-2 w-full">
        {brands[plan].map((item) => (
          <>
            {" "}
            <BrandCard
              image={item.image}
              brand={item.brand}
              panels={item.panels}
              power={item.power}
              units={item.units}
              url={item.url}
            />
          </>
        ))}
      </div>
      <div className="w-full flex flex-col gap-3 items-start ">
        <h1 className="capitalize text-xl font-medium">{plan} Plan</h1>
        <div className="w-full">
          <p className="text-xs text-[#868687] font-light">Quotation Price</p>
          <span className="flex items-center font-semibold md:text-2xl text-lg md:justify-between gap-3 md:gap-0">
            <h1>₹ {price.toLocaleString()}</h1>
            <h1 className="line-through text-[#868687]">
              ₹ {calculateDiscount(price).toLocaleString()}
            </h1>
            <h1 className="text-[#FFCB00]">30% Off</h1>
          </span>
        </div>
        <p className="text-[#868687] font-light text-sm">
          *Get Additional 30% off with Govt. Subsidy.
        </p>
        <button className="bg-[#FFCB00] rounded-3xl px-10 md:py-3 py-2 text-sm hover:bg-yellow-500 flex items-center gap-2 font-medium">
          Get in touch
        </button>
        <p className="text-[#868687]">
          Basic brand solar panels and inverter. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <div className="my-1 border-[1px] w-full"></div>
        <div>
          <h1 className="font-medium text-lg mb-2">Specifications</h1>
          <ul className="space-y-2">
            {specifications.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm font-light text-[#868687]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#D9D8D6" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-1 border-[1px] w-full"></div>
        <div className="w-full">
          <h1 className="font-medium text-lg mb-2">
            What’s included in this plan
          </h1>
          <ul className="space-y-2">
            {inclusions.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm font-light px-2 py-2 bg-[#F4F4F4] rounded-xl"
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
      </div>
    </div>
  );
}

function BrandCard({ image, brand, panels, power, units, url }) {
  return (
    <div className="rounded-xl px-6 py-5 md:px-8 md:py-5 flex justify-between bg-[#F4F4F4] w-full">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="leading-none">
          <h1 className="font-medium text-[20px]">{brand}</h1>
          <span className="font-extralight text-[10px]">or similar</span>
        </div>
        <div>
          <h1>{panels} Solar Panels</h1>
          <h1>
            {power} {units.toUpperCase()}
          </h1>
        </div>
        <button className="bg-black text-white rounded-3xl px-4 py-2 text-nowrap md:text-sm text-[10px] hover:bg-gray-800 flex items-center gap-2 mt-auto">
          See Technical Details
        </button>
      </div>
      <Image src={image} width={120} height={115} alt={brand} />
    </div>
  );
}
