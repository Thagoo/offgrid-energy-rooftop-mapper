"use client";
import { createContext, useState, useEffect } from "react";

// Create the context
const FormStepContext = createContext<any>(0);

// Create a provider component
export const FormStepProvider = ({ children }: { children: any }) => {
  const [currentStep, setCurrentStep] = useState<any>(-1);

  useEffect(() => {
    const savedStep = localStorage.getItem("formStep");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10) - 1 || 0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formStep", currentStep);
  }, [currentStep]);

  return (
    <FormStepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </FormStepContext.Provider>
  );
};

export default FormStepContext;
