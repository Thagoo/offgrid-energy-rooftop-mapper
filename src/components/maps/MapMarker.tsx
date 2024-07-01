"use client";
import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  DrawingManager,
} from "@react-google-maps/api";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

const mapOptions = {
  disableDefaultUI: true,
  draggable: true,
  zoomControl: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  mapTypeId: "satellite",
};

export default function MapMarker({ currentStep }: { currentStep: number }) {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
    libraries: ["places", "drawing"],
  });

  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );

  const [drawerCenter, setDrawerCenter] = useState<any>(
    formState && formState?.center
  );

  const [map, setMap] = useState<any>(null);

  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const onLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  const onDragEnd = (map: any) => {
    setDrawerCenter({ lat: map.latLng.lat(), lng: map.latLng.lng() });
  };

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "maker",
      });
    });
  };

  const handleCenterChanged = () => {
    if (map) {
      setDrawerCenter(map.getCenter().toJSON());
    }
  };

  useEffect(() => {
    if (map) {
      map.panTo(drawerCenter);
    }
    updateFormData({ center: drawerCenter });
  }, [drawerCenter]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full">
        <GoogleMap
          onLoad={onLoad}
          zoom={20}
          center={drawerCenter}
          mapContainerClassName="h-dvh w-full rounded-tl-3xl rounded-bl-3xl"
          options={mapOptions}
          onDragEnd={handleCenterChanged}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "0",
              pointerEvents: "none",
            }}
          >
            <img
              src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
              alt="center marker"
            />
          </div>
        </GoogleMap>
      </div>
    </>
  );
}
