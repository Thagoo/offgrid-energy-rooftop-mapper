import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useContext, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import FormStepContext from "@/context/FormStepContext";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function PlacesAutocomplete() {
  const { formState, updateFormData } = useContext<any>(QuoteGeneratorContext);
  const { goNext } = useContext(FormStepContext);

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: ["IN"] },
    },
    debounce: 100,
  });
  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    updateFormData({
      address: address,
      center: { lat: lat, lng: lng },
    });
    goNext();
  };

  const handleCurrentLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const { latitude, longitude } = coords;
          updateFormData({
            center: { lat: latitude, lng: longitude },
          });

          const geocoder = new window.google.maps.Geocoder();
          try {
            const response = await geocoder.geocode({
              location: { lat: latitude, lng: longitude },
            });
            if (response.results[0]) {
              updateFormData({
                address: response.results[0].formatted_address,
              });
            }
            goNext();
          } catch (error) {
            console.error("Error with geocoding: ", error);
            // Handle the error appropriately, maybe with an error message to the user
          }
        },
        (error) => {
          console.error("Error with geolocation: ", error);
          // Handle the error appropriately, maybe with an error message to the user
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle the error appropriately, maybe with an error message to the user
    }
  };
  return (
    <Combobox
      className="animate-in slide-in-from-bottom-4 duration-1000 w-full"
      onSelect={handleSelect}
    >
      <div className="relative">
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          className="p-4 rounded-full w-[100%] bg-[#F6EBBB]border-none outline-none"
          placeholder="Search an address"
        />

        <MapPinIcon
          className="absolute right-6 top-1/2 h-[24px] w-[24px] translate-x-0 -translate-y-1/2 text-gray-500 "
          onClick={handleCurrentLocation}
        />
      </div>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }: any) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
