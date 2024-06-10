"use client";
import { useState, useMemo, useCallback, useEffect, useContext } from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  DrawingManagerF,
} from "@react-google-maps/api";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

export default function MapSelector({ currentStep }) {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
    libraries: ["places", "drawing"],
  });

  const { formState, setFormState, updateFormState } = useContext(
    QuoteGeneratorContext
  );

  const [drawerCenter, setDrawerCenter] = useState();

  const [map, setMap] = useState(null);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onUnmount = () => {
    setMap(null);
  };

  useEffect(() => {
    if (formState?.center) {
      setDrawerCenter(formState.center);
    }

    if (map) {
      map.panTo(drawerCenter);
    }
  }, [drawerCenter]);

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
      const polygonArray = polygon.getPath().getArray();
      let polygonPoints = [];
      polygonArray.map((polygon) => {
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
  const onDragEnd = (map) => {
    setDrawerCenter({ lat: map.latLng.lat(), lng: map.latLng.lng() });
  };

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "maker",
      });
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full">
        <GoogleMap
          onLoad={onLoad}
          onUnmount={onUnmount}
          zoom={20}
          center={drawerCenter}
          mapContainerClassName="h-screen w-full rounded-3xl"
          options={myoptions}

          //onClick
        >
          {currentStep >= 7 ? (
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
              position={drawerCenter}
              draggable={true}
              onDragEnd={(map) => onDragEnd(map)}
            />
          )}
        </GoogleMap>
      </div>
    </>
  );
}
