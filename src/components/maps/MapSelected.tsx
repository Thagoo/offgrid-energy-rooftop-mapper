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
  Polygon,
} from "@react-google-maps/api";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

const drawingManagerOptions: any = {
  drawingMode: "",
  drawingControl: false,
  drawingControlOptions: {
    drawingModes: ["polygon"],
  },
  polygonOptions: {
    fillColor: "rgb(242, 219, 157)",
    strokeColor: "rgb(252, 192, 28)",
    fillOpacity: 0.5,
    strokeWeight: 10,
    clickable: true,
    editable: false,
    zIndex: 1,
  },
};

const mapOptions = {
  disableDefaultUI: true,
  draggable: false,
  zoomControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  mapTypeId: "satellite",
};

export default function MapSelected({ currentStep }: { currentStep: number }) {
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
  const polygonsRef = useRef([]);

  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const onLoad = (mapInstance: any) => {
    setMap(mapInstance);
    const newPolygon = new window.google.maps.Polygon({
      paths: formState?.roofCoordinates,
      ...drawingManagerOptions.polygonOptions,
    });
    newPolygon.setMap(mapInstance);
    polygonsRef.current.push(newPolygon);
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
        >
          {" "}
          {formState?.roofCoordinates &&
            formState?.roofCoordinates.map((path, i) => (
              <Polygon
                key={i}
                paths={path}
                options={drawingManagerOptions.polygonOptions}
              />
            ))}
        </GoogleMap>
      </div>
    </>
  );
}
