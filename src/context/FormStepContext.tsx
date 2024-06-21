"use client";
import { createContext, useState, useEffect } from "react";

// Create the context
const FormStepContext = createContext<any>(0);

// Create a provider component
export const FormStepProvider = ({ children }: { children: any }) => {
  const [currentStep, setCurrentStep] = useState<any>();

  const goNext = () => setCurrentStep((prevState: number) => prevState + 1);
  const goBack = () => setCurrentStep((prevState: number) => prevState - 1);

  useEffect(() => {
    const savedStep = localStorage.getItem("formStep");
    setCurrentStep(0);
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10) || 0);
    }
  }, []);

  useEffect(() => {
    if (currentStep < -1) {
      setCurrentStep(0);
    } else if (currentStep > 11) {
      setCurrentStep(11);
    }
    localStorage.setItem("formStep", currentStep);
  }, [currentStep]);

  return (
    <FormStepContext.Provider
      value={{ currentStep, setCurrentStep, goNext, goBack }}
    >
      {children}
    </FormStepContext.Provider>
  );
};

export default FormStepContext;
