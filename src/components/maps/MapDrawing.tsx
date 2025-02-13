"use client";
import { useState, useCallback, useEffect, useContext, useRef } from "react";

import {
  GoogleMap,
  useLoadScript,
  DrawingManager,
  Marker,
} from "@react-google-maps/api";
import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";
import Image from "next/image";
import FormStepContext from "@/context/FormStepContext";
import { LatLng } from "use-places-autocomplete";

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
    strokeWeight: 2,
    clickable: true,
    editable: true,
    zIndex: 1,
  },
};

const mapOptions = {
  disableDefaultUI: true,
  draggable: false,
  zoomControl: false,
  keyboardShortcuts: false,
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

  const { formData, updateFormData } = useContext(
    FormDataContext
  ) as FormDataContextValue;

  const { goNext, goBack } = useContext(FormStepContext);
  const [map, setMap] = useState<any>(null);
  const mapRef = useRef(null);
  const [state, setState] = useState({
    drawingMode: "polygon",
  });
  const [clicked, setClicked] = useState(false);
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

      updateFormData({
        siteDetails: {
          roofCoordinates: polygonArray,
          roofArea: areaInSquareFeet,
        },
      });
    }
    noDraw();
  }, []);

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "",
      });
    });
  };

  useEffect(() => {
    // Empty the roofCoordinates array on mount
    //updateFormData({ roofCoordinates: [] });

    setTimeout(() => {
      setClicked(true);
    }, 2000);
  }, [1]);
  if (!formData?.siteDetails) {
    return;
  }
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <div className="w-full h-dvh relative">
        <GoogleMap
          ref={mapRef}
          onLoad={onLoad}
          zoom={20}
          center={formData.siteDetails.center as unknown as LatLng}
          mapContainerClassName="h-[90dvh] md:h-dvh md:w-full w-screen md:rounded-tl-3xl md:rounded-bl-3xl relative"
          options={mapOptions}
        >
          {/* {!clicked && (
            <div className="absolute top-1/2 left-1/2">
              <FingerTap setClicked={setClicked} />
            </div>
          )} */}
          {currentStep === 7 && (
            <DrawingManager
              drawingMode={state.drawingMode as unknown as any}
              options={drawingManagerOptions}
              onOverlayComplete={handleOverlayComplete}
            />
          )}
          <div className="md:hidden z-10 absolute md:left-20 md:bottom-10 bottom-4 left-5 py-2 px-4 bg-white bg-opacity-10 rounded-3xl backdrop-blur-sm blur-safari font-medium animate-in slide-in-from-top-2 duration-700 hover:border">
            <button onClick={() => goBack()}>{"<-"} Back</button>
          </div>

          <button
            className="md:hidden absolute right-10 bottom-4 flex animate-in fade-in duration-1000 focus:outline-none bg-slate-900 text-white z-0  py-2 px-4 rounded-full hover:bg-opacity-85 items-center justify-center gap-2"
            onClick={() => goNext()}
          >
            Next <span>{"->"}</span>
          </button>
        </GoogleMap>
      </div>
    </>
  );
}

const FingerTap = ({ setClicked }: { setClicked: any }) => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 overflow-hidden h-dvh w-screen"
        onClick={() => setClicked(true)}
      />
      <Image
        src={"/assets/form/finger-tap.png"}
        width={66}
        height={66}
        alt="finger-tap"
        className="finger"
      />
    </div>
  );
};
