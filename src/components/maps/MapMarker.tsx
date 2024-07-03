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
import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";
import { LatLng } from "use-places-autocomplete";

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

  const { formData, updateFormData } = useContext(
    FormDataContext
  ) as FormDataContextValue;

  const [drawerCenter, setDrawerCenter] = useState(
    formData?.siteDetails?.center
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

  const updateAddress = async () => {
    const geocoder = new window.google.maps.Geocoder();
    const response = await geocoder.geocode({
      location: {
        lat: drawerCenter?.lat as number,
        lng: drawerCenter?.lng as number,
      },
    });
    if (response.results[0]) {
      updateFormData({
        siteDetails: {
          address: response.results[0].formatted_address,
        },
      });
    }
  };

  useEffect(() => {
    updateAddress();
    if (map) {
      map.panTo(drawerCenter);
    }

    updateFormData({ siteDetails: { center: drawerCenter } });
  }, [drawerCenter]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full">
        <GoogleMap
          onLoad={onLoad}
          zoom={20}
          center={drawerCenter as unknown as LatLng}
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
