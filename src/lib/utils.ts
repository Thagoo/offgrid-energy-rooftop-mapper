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
    3: 170000,
    4: 240000,
    5: 290000,
    6: 340000,
    7: 390000,
    8: 425000,
    9: 480000,
    10: 525000,
  },
  standard: {
    1: 115000,
    2: 185000,
    3: 210000,
    4: 270000,
    5: 325000,
    6: 380000,
    7: 430000,
    8: 485000,
    9: 535000,
    10: 580000,
  },
  premium: {
    1: 135000,
    2: 215000,
    3: 295000,
    4: 375000,
    5: 477000,
    6: 550000,
    7: 600000,
    8: 680000,
    9: 740000,
    10: 850000,
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
  const yearlySunshineHrs = 3650;
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
