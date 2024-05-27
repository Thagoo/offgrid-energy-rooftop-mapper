"use client";
import { useState, useMemo, useCallback, useEffect, useContext } from "react";

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
import { SolarContext } from "@/app/form/page";

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
  const [center, setCenter] = useState(mapcenter);
  const { setRoofArea } = useContext(SolarContext);

  const [map, setMap] = useState(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onUnmount = () => {
    setMap(null);
  };

  useEffect(() => {
    if (map) {
      map.panTo(center);
    }
  }, [center]);

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

  const handleOverlayComplete = useCallback((e) => {
    if (e.type === "polygon") {
      const polygon = e.overlay;

      // Returns square meters
      const areaInSquareMeters = google.maps.geometry.spherical.computeArea(
        polygon.getPath()
      );
      const areaInSquareFeet = areaInSquareMeters * 10.7639;
      //setArea(areaInSquareFeet.toFixed(2));
      console.log("Area in square feet:", areaInSquareFeet);
      setRoofArea(areaInSquareFeet);
    }
    noDraw();
  }, []);
  const onDragEnd = (map, coord) => {
    setCenter({ lat: map.latLng.lat(), lng: map.latLng.lng() });
  };
  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "maker",
      });
    });
  };

  return (
    <>
      <div className="w-full">
        {console.log("Map is placed ")}
        <GoogleMap
          onLoad={onLoad}
          onUnmount={onUnmount}
          zoom={zoom}
          center={center}
          mapContainerClassName="map-container"
          options={myoptions}

          //onClick
        >
          {console.log("Selected: ", selected, "Question: ", question)}

          {question > 5 ? (
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
              onOverlayComplete={handleOverlayComplete}
            />
          ) : (
            <Marker
              position={selected}
              draggable={true}
              onDragEnd={(map, coord) => onDragEnd(map, coord)}
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
