import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/ui/command";

import { useContext, useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import FormStepContext from "@/context/FormStepContext";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LoadingPage from "@/app/ui/loading-page";

export default function PlacesAutocomplete() {
  const { formData, updateFormData } = useContext(
    FormDataContext
  ) as FormDataContextValue;
  const { goNext } = useContext(FormStepContext);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

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

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    updateFormData({
      siteDetails: {
        address: address,
        center: { lat: lat, lng: lng },
      },
    });
    goNext();
  };

  const handleCurrentLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          const { latitude, longitude } = coords;
          updateFormData({
            siteDetails: {
              center: { lat: latitude, lng: longitude },
            },
          });

          const geocoder = new window.google.maps.Geocoder();
          try {
            setLoading(true);
            const response = await geocoder.geocode({
              location: { lat: latitude, lng: longitude },
            });
            if (response.results[0]) {
              updateFormData({
                siteDetails: {
                  address: response.results[0].formatted_address,
                },
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
    <div className="w-full md:h-52 h-full ">
      <div>{loading && <LoadingPage />}</div>

      <Command>
        <div className="relative">
          <CommandInput
            placeholder="Search your location..."
            value={value}
            onValueChange={setValue}
            disabled={false}
          />
          {value.length >= 1 && (
            <button
              className="animate-in fade-in duration-700 absolute right-4 text-xl md:text-2xl translate-x-0 top-1 font-extralight"
              onClick={() => setValue("")}
            >
              &times;
            </button>
          )}
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandSeparator />

          {data.length === 0 && (
            <CommandItem
              onSelect={() => handleCurrentLocation()}
              className="bg-[#F4F4F4] hover:bg-[#F4F4F4] cursor-pointer"
            >
              <MapPinIcon className="w-4 h-4" />
              <span className="ml-2">Use Current location</span>
            </CommandItem>
          )}

          {data.map(({ place_id, description }: any) => (
            <CommandItem
              key={place_id}
              disabled={false}
              onSelect={() => handleSelect(description)}
            >
              {description}
            </CommandItem>
          ))}
        </CommandList>
      </Command>

      {/* <Combobox
        className="animate-in slide-in-from-bottom-4 duration-1000 w-full text-ellipsis"
        onSelect={handleSelect}
      >
        <div className="relative">
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            className="p-4 rounded-full w-full border-none outline-none text-ellipsis text-wrap pr-10"
            placeholder="Search an address"
          />

          <MapPinIcon
            className="absolute right-6 top-1/2 h-[24px] w-[24px] translate-x-0 -translate-y-1/2 text-gray-500 bg-white rounded-full cursor-pointer"
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
      </Combobox> */}
    </div>
  );
}
