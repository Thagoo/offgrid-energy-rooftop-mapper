"use client";
import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { FormData } from "@/lib/types"; // Make sure FormData type is correctly imported

export interface FormDataContextValue {
  formData: FormData | null;
  setFormData: Dispatch<SetStateAction<FormData | null>>;
  updateFormData: (newState: Partial<FormData>) => void;
}

// Create the context
export const FormDataContext = createContext<FormDataContextValue | null>(null);

// Create a provider component
export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const updateFormData = (update: Partial<FormData>) => {
    setFormData((prevFormData) => ({
      ...prevFormData!,
      ...update,
      contactDetails: {
        ...prevFormData!?.contactDetails!,
        ...update.contactDetails,
      },
      siteDetails: {
        ...prevFormData!?.siteDetails!,
        ...update.siteDetails,
      },
      quoteDetails: {
        ...prevFormData!?.quoteDetails!,
        ...update.quoteDetails,
      },
    }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); // Run only once on mount

  useEffect(() => {
    if (formData) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]); // Update localStorage when formData changes

  return (
    <FormDataContext.Provider value={{ formData, setFormData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
