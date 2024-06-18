"use server";
import z, { number } from "zod";
import {
  calculateBreakEven,
  calculateCostWithSolar,
  calculateCostWithoutSolar,
  calculateSolarSize,
  calculateYearlyEnergy,
  energyCovered,
} from "./utils";

let userSchema = z.object({
  name: z
    .string("Please fill this field")
    .min(3, "Name is too short")
    .max(32, "Name is too long"),
  phone_number: z
    .string("Please fill this field")
    .min(10, "Please enter a valid number")
    .max(10, "Please enter a valid number")
    .regex(/^[0-9]+$/, "Please enter a valid number"),
  email: z
    .string("Please fill this field")
    .email("Please provide a valid email"),
});
const API_URL = process.env.API_URL;

export const contactDetails = async (prevState, formData) => {
  const credentials = Object.fromEntries(formData);
  console.log("credentials", credentials);

  const validateData = userSchema.safeParse(credentials);
  console.log("validated", validateData.data);

  if (!validateData.success) {
    return {
      errors: validateData.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create employee.",
    };
  }
  const userData = {
    name: validateData.data.name.trim(),
    phone_number: validateData.data.phone_number.trim(),
    email: validateData.data.email.trim(),
  };

  try {
    const response = await fetch(`${API_URL}/leads/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.statusText != "Created") {
      // Matching zod's practice
      return {
        errors: { phone_number: [data.detail] },
        message: "",
      };
    }
    return {
      success: true,
      userData: userData,
      leadId: data.lead_id,
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
    };
  }
};

export const creatSite = async (formData) => {
  console.log("createSite", formData);

  const siteData = {
    address: formData.address,
    average_bill: formData.bill,
    consumption: calculateYearlyEnergy(formData.bill),
    lat: formData.center.lat,
    lng: formData.center.lng,
    max_panels: Math.floor(formData.roofArea / 27.38),
    number_of_floors: formData.floors,
    peak_usage_period: formData.peekUsage,
    roof_area: formData.roofArea,
    roof_type: formData.roofType,
    site_type: formData.siteType,
    roof_coordinates: formData.roofCoordinates,
    lead_id: formData.leadId,
  };

  const response = await fetch(`${API_URL}/site/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(siteData),
  });
  console.log("create site", response);

  const data = await response.json();

  return data.site_id;
};

export const quoteDetails = async (formData) => {
  const quoteData = {
    annual_energy_gen: calculateYearlyEnergy(formData.bill),
    annual_sunshine: 3650,
    break_even_period: calculateBreakEven(formData.bill),
    cost_with_solar: calculateCostWithSolar(calculateSolarSize(formData.bill))
      .basic,
    cost_without_solar: calculateCostWithoutSolar(formData.bill),
    energy_covered: energyCovered(formData.bill),
    installation_size: calculateSolarSize(formData.bill),
    savings:
      calculateCostWithoutSolar(formData.bill) -
      calculateCostWithSolar(calculateSolarSize(formData.bill)).basic,
    site_id: formData.siteId,
  };
  console.log(JSON.stringify(quoteData));

  const response = await fetch(
    `${API_URL}/solar_potential/record_solar_potential`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quoteData),
    }
  );
  console.log(response);

  const data = await response.json();

  console.log(data);
};

export const quoteCreate = async (formData: any) => {
  const quoteCreate = {
    installation_size: calculateSolarSize(formData.bill),
    quoted_prices: {
      basic: formData.price.basic,
      premium: formData.price.basic,
      standard: formData.price.basic,
    },
    site_id: formData.siteId,
  };
  console.log(JSON.stringify(quoteCreate));

  const response = await fetch(`${API_URL}/quote/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quoteCreate),
  });
  console.log(response);

  const data = await response.json();

  console.log(data);
};
