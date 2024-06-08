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

export default function PlacesAutocomplete() {
  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );

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
    setFormState((prev: any) => ({
      ...prev,
      address: address,
      center: { lat: lat, lng: lng },
    }));
  };

  return (
    <Combobox
      className="animate-in slide-in-from-bottom-4 duration-1000 w-full"
      onSelect={handleSelect}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        className="p-4 rounded-full w-[100%] bg-[#F6EBBB]border-none outline-none"
        placeholder="Search an address"
      />
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
