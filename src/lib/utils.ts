export const solarTips = [
  "Your contact details will help us stay in touch with you.",
  "This helps us understand whether you are on commercial or residential tarifs to help calculate savings data.",
  "Offgrid gives you a fixed price. Mounting, Structure and all peripherals included.",
  "Based on your requirement we also suggest batteries and inverters to make sure you always have electricity",
  "This helps us estimate how many units of electricity you consume and what your system size should be.",
  "Your location helps us understand data in terms of sunlight and temperature",
];

export const plans = {
  basic: [
    { size: 1, price: 100000 },
    { size: 2, price: 150000 },
    { size: 3, price: 170000 },
    { size: 4, price: 240000 },
    { size: 5, price: 290000 },
    { size: 6, price: 340000 },
    { size: 7, price: 390000 },
    { size: 8, price: 425000 },
    { size: 9, price: 480000 },
    { size: 10, price: 525000 },
  ],
  standard: [
    { size: 1, price: 115000 },
    { size: 2, price: 185000 },
    { size: 3, price: 210000 },
    { size: 4, price: 270000 },
    { size: 5, price: 325000 },
    { size: 6, price: 380000 },
    { size: 7, price: 430000 },
    { size: 8, price: 485000 },
    { size: 9, price: 535000 },
    { size: 10, price: 580000 },
  ],
  premium: [
    { size: 1, price: 135000 },
    { size: 2, price: 215000 },
    { size: 3, price: 295000 },
    { size: 4, price: 375000 },
    { size: 5, price: 477000 },
    { size: 6, price: 550000 },
    { size: 7, price: 600000 },
    { size: 8, price: 680000 },
    { size: 9, price: 740000 },
    { size: 10, price: 850000 },
  ],
};

export const calculateSolarSize = (bill: number) => {
  const perUnit = 6;
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
  const [basic] = plans.basic.filter((plan) => plan.size == size);
  const [standard] = plans.standard.filter((plan) => plan.size == size);
  const [premium] = plans.premium.filter((plan) => plan.size == size);

  return {
    basic: basic.price,
    standard: standard.price,
    premium: premium.price,
  };
};

export const calculateBreakEven = (bill: number) => {
  const breakEven =
    calculateGovtSubsidy(
      calculateCostWithSolar(calculateSolarSize(bill)).basic
    ) /
    bill /
    12;
  return Math.round(breakEven);
};

export const calculateGovtSubsidy = (price: number) => {
  return price - (price * 30) / 100;
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
    calculateGovtSubsidy(calculateCostWithSolar(calculateSolarSize(bill)).basic)
  );
  return (
    calculateCostWithoutSolar(bill) -
    calculateGovtSubsidy(calculateCostWithSolar(calculateSolarSize(bill)).basic)
  );
};
export const calculateSolarPanels = (roofArea: number) => {
  return Math.floor(roofArea / 27.38);
};

export const calculateSystemSize = (size: number) => {
  return (size * 1000) / 500;
};
