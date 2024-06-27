"use client";
import { useState, useCallback, useEffect, useContext, useRef } from "react";

import {
  GoogleMap,
  useLoadScript,
  DrawingManager,
} from "@react-google-maps/api";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

const drawingManagerOptions: any = {
  drawingMode: "polygon",
  drawingControl: true,
  drawingControlOptions: {
    drawingModes: ["polygon"],
  },
  polygonOptions: {
    fillColor: "rgb(242, 219, 157)",
    strokeColor: "rgb(237, 158, 0)",
    fillOpacity: 0.5,
    strokeOpacity: 1,
    strokeWeight: 10,
    clickable: true,
    editable: false,
    zIndex: 1,
  },
};

const mapOptions = {
  disableDefaultUI: true,
  draggable: true,
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  mapTypeId: "satellite",
};

export default function MapDrawing({ currentStep }: { currentStep: number }) {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
    libraries: ["places", "drawing"],
  });

  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );

  const [map, setMap] = useState<any>(null);

  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const onLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  const handleOverlayComplete = useCallback((e: any) => {
    if (e.type === "polygon") {
      const polygon = e.overlay;
      const polygonArray = polygon.getPath().getArray();
      let polygonPoints: any = [];
      polygonArray.map((polygon: any) => {
        polygonPoints.push({ lat: polygon.lat(), lng: polygon.lng() });
      });

      // Returns square meters
      const areaInSquareMeters = google.maps.geometry.spherical.computeArea(
        polygon.getPath()
      );
      const areaInSquareFeet = areaInSquareMeters * 10.7639;

      setFormState((prev: any) => ({
        ...prev,
        roofCoordinates: polygonArray,
        roofArea: areaInSquareFeet,
        center: { lat: polygonPoints[0].lat, lng: polygonPoints[0].lng },
      }));
    }
    noDraw();
  }, []);

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "marker",
      });
    });
  };

  useEffect(() => {
    updateFormData({ roofCoordinates: [] });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full">
        <GoogleMap
          onLoad={onLoad}
          zoom={20}
          center={formState?.center}
          mapContainerClassName="h-dvh w-full md:rounded-tl-3xl md:rounded-bl-3xl"
          options={mapOptions}
        >
          {" "}
          {currentStep === 7 && (
            <DrawingManager
              drawingMode={state.drawingMode as unknown as any}
              options={drawingManagerOptions}
              onOverlayComplete={handleOverlayComplete}
            />
          )}
        </GoogleMap>
      </div>
    </>
  );
}
