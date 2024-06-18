"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import FormStepContext from "./FormStepContext";

interface QuoteGeneratorForm {
  siteType: "office" | "home";
  floors: number | string;
  peekUsage: "half" | "full";
  bill: number;
  center: {
    lat: string;
    lng: string;
  };
  roofArea: string;
  roofType: string;
  personalDetails: {
    email: string;
    name: string;
    phone_number: string;
  };
  solarSize: number;
}

// Create the context
export const QuoteGeneratorContext = createContext<QuoteGeneratorForm | null>(
  null
);

// Create a provider component
export const QuoteGeneratorProvider = ({ children }: { children: any }) => {
  const [formState, setFormState] = useState<QuoteGeneratorForm | null>(null);

  const updateFormData = (newState: QuoteGeneratorForm) => {
    setFormState((prevState) => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formState");
    if (savedData) {
      setFormState(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(formState));
  }, [formState]);

  return (
    <QuoteGeneratorContext.Provider
      value={{ formState, setFormState, updateFormData }}
    >
      {children}
    </QuoteGeneratorContext.Provider>
  );
};

export function useQuoteGeneratorContext() {
  return useContext(QuoteGeneratorContext);
}
