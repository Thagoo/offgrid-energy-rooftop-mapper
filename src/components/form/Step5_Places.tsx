"use client";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext } from "react";
import PlacesAutocomplete from "../maps/PlacesAutoComplete";
import { useLoadScript } from "@react-google-maps/api";

export default function Places() {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
    libraries: ["places", "drawing"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col text-center justify-center gap-4 items-center w-full">
      <div className="animate-in slide-in-from-top-4 duration-1000 font-semibold text-2xl">
        Search for and select your address
      </div>

      <PlacesAutocomplete />
    </div>
  );
}
