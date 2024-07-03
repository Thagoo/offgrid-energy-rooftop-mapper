import { LatLng } from "use-places-autocomplete";

export type ContactDetails = {
  name: string;
  phone: string;
  email: string;
  leadId: string | null;
};

export type SiteDetails = {
  siteId?: string;
  siteType?: "office" | "home";
  floors?: number;
  peekUsage?: "half" | "full";
  bill?: number;
  center?: {
    lat?: number;
    lng?: number;
  };
  address?: string;
  roofArea?: number;
  roofType?: string;
  roofCoordinates?: LatLng[];
  solarSize?: number;
};

export type QuoteDetails = {
  quoteId?: string;
  price?: {
    basic?: number;
    standard?: number;
    premium?: number;
  };
  subsidyPrice?: {
    basic?: number;
    standard?: number;
    premium?: number;
  };
  lifeTimeSavings?: number;
  yearlyEnergy?: number;
  breakEven?: number;
  costWithoutSolar?: number;
};
export interface FormData {
  contactDetails: ContactDetails | null;
  siteDetails?: SiteDetails | null;
  quoteDetails?: QuoteDetails | null;
}

export interface NewQuoteDetails {
  yearlyEnergy?: number;
  bill?: number;
  price?: {
    basic?: number;
    standard?: number;
    premium?: number;
  };
  breakEven?: number;
  costWithSolar?: number;
  costWithoutSolar?: number;
  energyCovered?: number;
  installationSize?: number;
  savings?: number;
  siteId?: string;
}
