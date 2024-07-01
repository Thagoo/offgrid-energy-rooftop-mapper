import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const solarTips = [
  "Your contact details will help us stay in touch with you.",
  "This helps us understand whether you are on commercial or residential tarifs to help calculate savings data.",
  "Offgrid gives you a fixed price. Mounting, Structure and all peripherals included.",
  "Based on your requirement we also suggest batteries and inverters to make sure you always have electricity",
  "This helps us estimate how many units of electricity you consume and what your system size should be.",
  "Your location helps us understand data in terms of sunlight and temperature",
];

export const plans: any = {
  basic: {
    1: 100000,
    2: 150000,
    3: 215000,
    4: 270000,
    5: 375000,
    6: 460000,
    7: 540000,
    8: 590000,
    9: 640000,
    10: 700000,
  },
  standard: {
    1: 115000,
    2: 185000,
    3: 240000,
    4: 295000,
    5: 400000,
    6: 495000,
    7: 590000,
    8: 665000,
    9: 695000,
    10: 750000,
  },
  premium: {
    1: 135000,
    2: 215000,
    3: 265000,
    4: 340000,
    5: 500000,
    6: 545000,
    7: 640000,
    8: 740000,
    9: 755000,
    10: 800000,
  },
};

export const calculateSolarSize = (bill: number) => {
  const perUnit = 8.4;
  const monthlyConsumtion = bill / perUnit;
  const dailyConsumption = monthlyConsumtion / 30;
  const effectiveDailySunshineHrs = 4;
  const solarSize = dailyConsumption / effectiveDailySunshineHrs;
  return Math.ceil(solarSize);
};

export const calculateYearlyEnergy = (bill: number) => {
  const yearlySunshineHrs = 2461;
  const solarSize = calculateSolarSize(bill);
  const yearlyEnergyGenerated = yearlySunshineHrs * solarSize;
  return Math.ceil(yearlyEnergyGenerated);
};

export const energyCovered = (bill: number) => {
  const flooredSolarSize = calculateSolarSize(bill);
  const perUnit = 6;
  const monthlyConsumtion = bill / perUnit;
  const dailyConsumption = monthlyConsumtion / 30;
  const effectiveDailySunshineHrs = 4;
  const unflooredSolarSize = dailyConsumption / effectiveDailySunshineHrs;
  return Math.ceil((flooredSolarSize * 100) / unflooredSolarSize);
};

export const calculateCostWithoutSolar = (bill: number) => {
  const years = 25;
  const inflation = 1.05;
  let currentBill = bill;
  let total = 0;
  for (let i = 0; i < years; i++) {
    total += currentBill * 12;
    currentBill *= inflation;
  }
  return Math.ceil(total);
};

export const calculateCostWithSolar = (size: number) => {
  return {
    basic: plans.basic[size],
    standard: plans.standard[size],
    premium: plans.premium[size],
  };
};

// export const calculateBreakEven = (bill: number) => {
//   const breakEven =
//     calculateAfterSubsidy(
//       calculateCostWithSolar(calculateSolarSize(bill)).basic
//     ) /
//     bill /
//     12;
//   return Math.round(breakEven);
// };

export const calculateAfterSubsidy = (solarSize: number, price: number) => {
  return price - calculateGovtSubsidy(solarSize);
};

export const calculateGovtSubsidy = (solarSize: number) => {
  if (solarSize === 1) {
    return 30000;
  }
  if (solarSize === 2) {
    return 60000;
  }
  return 78000;
};

export const calculateCo2 = (yearylyEnergy: number) => {
  const carbonIntensity = 0.713;
  return yearylyEnergy * 25 * carbonIntensity;
};
export const calculateTressPlanted = (yearlyEnergy: number) => {
  const treeCo2Consumption = 22;
  const co2saved = calculateCo2(yearlyEnergy);
  return co2saved / treeCo2Consumption;
};

export const calculateLifetimeSavings = (bill: number) => {
  console.log("without solar", calculateCostWithoutSolar(bill));
  console.log(
    "with solar",
    calculateAfterSubsidy(
      calculateCostWithSolar(calculateSolarSize(bill)).basic
    )
  );
  return (
    calculateCostWithoutSolar(bill) -
    calculateAfterSubsidy(
      calculateCostWithSolar(calculateSolarSize(bill)).basic
    )
  );
};
export const calculateSolarPanels = (roofArea: number) => {
  return Math.floor(roofArea / 27.38);
};

export const calculateSystemSize = (size: number) => {
  return (size * 1000) / 500;
};
