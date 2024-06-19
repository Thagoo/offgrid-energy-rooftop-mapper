"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Create the context
export const ContactDetailsContext = createContext<any | null>(null);

// Create a provider component
export const ContactDetailsProvider = ({ children }: { children: any }) => {
  const [contactDetails, setContactDetails] = useState<any | null>(null);

  const updateContactDetails = (newState: any) => {
    setContactDetails((prevState) => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("contactDetails");
    if (savedData) {
      setContactDetails(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
  }, [contactDetails]);

  return (
    <ContactDetailsContext.Provider
      value={{ contactDetails, setContactDetails, updateContactDetails }}
    >
      {children}
    </ContactDetailsContext.Provider>
  );
};

export function useContactDetailsContext() {
  return useContext(ContactDetailsContext);
}
