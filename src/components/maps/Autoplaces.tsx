"use client";
import { useState, useMemo } from "react";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DrawingManagerF,
} from "@react-google-maps/api";

export default function Places({ selected, zoom, mapcenter, question }: any) {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
    libraries: ["places", "drawing"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      selected={selected}
      zoom={zoom}
      mapcenter={mapcenter}
      question={question}
    />
  );
}

function Map({ selected, zoom, mapcenter, question }: any) {
  const center = useMemo(
    () => ({ lat: 22.879440307617188, lng: 78.96288299560547 }),
    []
  );
  console.log(question);

  const myoptions = useMemo(
    () => ({
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      mapTypeId: "satellite",
      tilt: 0,
      rotateControl: false,
    }),
    []
  );
  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "maker",
      });
    });
  };

  return (
    <>
      <div
        style={{ height: "100vh", width: "50vw", border: "solid 1px black" }}
      >
        {console.log("Map is placed ")}
        <GoogleMap
          zoom={zoom}
          center={mapcenter}
          mapContainerClassName="map-container"
          options={myoptions}

          //onClick
        >
          {console.log("Selected: ", selected, "Question: ", question)}

          {question >= 5 ? (
            <DrawingManagerF
              drawingMode={state.drawingMode as unknown as any}
              options={{
                drawingControl: true,
                drawingControlOptions: {
                  drawingModes: ["polygon"] as unknown as any,
                },
                polygonOptions: {
                  fillColor: `#2196F3`,
                  strokeColor: `#2196F3`,
                  fillOpacity: 0.5,
                  strokeWeight: 2,
                  clickable: true,
                  editable: true,
                  draggable: false,
                  zIndex: 1,
                },
              }}
              onPolygonComplete={(poly: any) => {
                const polyArray = poly.getPath().getArray();
                let paths: any = [];
                polyArray.forEach(function (path: any) {
                  paths.push({ lat: path.lat(), lng: path.lng() });
                });
                console.log("onPolygonComplet polyArray: ", polyArray);
                console.log("Paths: ", paths);
                console.log("onPolygonComplete poly:", poly);
                noDraw();
              }}
            />
          ) : (
            <Marker
              position={selected}
              draggable={true}
              //onDragEnd={onDragEnd}
            />
          )}
        </GoogleMap>
      </div>
    </>
  );
}

function onDragEnd(coord, index) {
  console.log("onDragEnd: ", event);
}

export const PlacesAutocomplete = ({
  setSelected,
  setZoom,
  setMapCenter,
  setFormState,
  setQuestion,
}: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setMapCenter({ lat, lng });
    setZoom(20);
    setQuestion((prev: any) => prev + 1);
    setFormState((prev: any) => ({ ...prev, 4: value }));
  };

  return (
    <Combobox className=" w-full" onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        className=" p-4 rounded-full w-[100%] bg-yellow-200 border-none outline-none"
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
};
