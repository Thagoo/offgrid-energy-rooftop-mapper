"use client";
import { useState, useEffect, useContext, useRef } from "react";

import { GoogleMap, useLoadScript, Polygon } from "@react-google-maps/api";
import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";

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
    strokeWeight: 4,
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
  keyboardShortcuts: false,
  disableDoubleClickZoom: false,
  mapTypeId: "satellite",
};

export default function MapSelected() {
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
  const polygonsRef = useRef([]);

  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const onLoad = (mapInstance: any) => {
    setMap(mapInstance);
    const newPolygon = new window.google.maps.Polygon({
      paths: formData?.siteDetails?.roofCoordinates,
      ...drawingManagerOptions.polygonOptions,
    });
    newPolygon.setMap(mapInstance);
    polygonsRef.current.push(newPolygon as never);
  };

  useEffect(() => {
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
          center={drawerCenter as never}
          mapContainerClassName="h-[90dvh] md:h-dvh md:w-full w-screen md:rounded-tl-3xl md:rounded-bl-3xl relative"
          options={mapOptions}
        >
          {" "}
          {formData?.siteDetails?.roofCoordinates?.map((path, i) => (
            <Polygon
              key={i}
              paths={path as any}
              options={drawingManagerOptions.polygonOptions}
            />
          ))}
        </GoogleMap>
      </div>
    </>
  );
}
