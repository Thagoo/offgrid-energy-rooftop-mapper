"use client";

import { ContactDetails } from "@/lib/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface ContactDetailsContextValue {
  contactDetails: ContactDetails | null;
  setContactDetails: React.Dispatch<
    React.SetStateAction<ContactDetails | null>
  >;
  updateContactDetails: (newState: ContactDetails) => void;
}

// Create the context
export const ContactDetailsContext =
  createContext<ContactDetailsContextValue | null>(null);

// Create a provider component
export const ContactDetailsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(
    null
  );

  const updateContactDetails = (newState: ContactDetails) => {
    setContactDetails((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("contactDetails");
    if (savedData) {
      setContactDetails(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (contactDetails !== null) {
      localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
    }
  }, [contactDetails]);

  return (
    <ContactDetailsContext.Provider
      value={{ contactDetails, setContactDetails, updateContactDetails }}
    >
      {children}
    </ContactDetailsContext.Provider>
  );
};
