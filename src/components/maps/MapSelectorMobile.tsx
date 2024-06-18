import React, { useState, useEffect, useContext } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { Joystick } from "react-joystick-component";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";
import FormStepContext from "@/context/FormStepContext";

//import VirtualJoystick from "./VirtualJoystick";

const containerStyle = {
  width: "90vw",
  height: "80vh",
};

const initialCenter = { lat: 17.880339, lng: 77.516856 };

const currentVertexColor = "red";
const placedVertexColor = "blue";
const nextEdgeColor = "green";

export default function MapSelectorMobile() {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const { goNext } = useContext(FormStepContext);
  const [map, setMap] = useState<any>(null);
  const [vertices, setVertices] = useState<any>([]);
  const [currentVertex, setCurrentVertex] = useState(
    formState && formState?.center
  );
  const [center, setCenter] = useState(formState && formState?.center);
  const [nextEdgeEnd, setNextEdgeEnd] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const { setCurrentStep } = useContext(FormStepContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
  });

  const onLoad = (map: any) => {
    setMap(map);
  };

  const calculatePolygonArea = () => {
    if (vertices.length >= 3) {
      const area = google.maps.geometry.spherical.computeArea(
        vertices.map(
          (vertex: any) => new google.maps.LatLng(vertex.lat, vertex.lng)
        )
      );
      updateFormData({ roofArea: area });
      goNext();
    } else {
      setPolygonArea(0);
    }
  };

  const handleJoystickMove = (direction: any) => {
    const movementDistance = 0.00001;
    let newVertex = { ...currentVertex };
    switch (direction) {
      case "FORWARD":
        newVertex.lat += movementDistance;
        break;
      case "BACKWARD":
        newVertex.lat -= movementDistance;
        break;
      case "LEFT":
        console.log("Joystick hit left");
        newVertex.lng -= movementDistance;
        break;
      case "RIGHT":
        newVertex.lng += movementDistance;
        break;
      default:
        break;
    }
    setCurrentVertex(newVertex);
    setCenter(newVertex); // Move map center along with current vertex
  };

  const placeVertex = () => {
    if (currentVertex !== initialCenter) {
      setVertices([...vertices, currentVertex]);
      setNextEdgeEnd(null); // Reset next edge when vertex is placed
    }
  };
  const resetVertex = () => {
    setVertices([currentVertex]);
    setNextEdgeEnd(null); // Reset next edge when vertex is placed
  };
  useEffect(() => {
    calculateNextEdge();
    console.log(currentVertex);
  }, [currentVertex]);

  const calculateNextEdge = () => {
    if (vertices.length > 0) {
      const lastVertex = vertices[vertices.length - 1];
      setNextEdgeEnd(lastVertex);
    }
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: any) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setCurrentVertex({ lat, lng });
      setCenter({ lat, lng });
    } catch (error) {
      console.error("Error selecting place:", error);
    }
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleMove = (stick: any) => {
    console.log("Stick Update: ", stick);
    handleJoystickMove(stick.direction);
  };

  const handleStop = () => {};

  return (
    <div className="relative h-[90dvh]">
      {/* <div>
        <input
          value={searchValue}
          onChange={handleChange}
          placeholder="Search for a place"
        />
        <button onClick={() => handleSelect(searchValue)}>Search</button>
      </div>
      <div style={{ width: "100vw", height: "20vh" }}>
        {console.log("suggestions, data: ", data)}

        {status === "OK" && (
          <ul>
            {data.map(({ place_id, description }) => (
              <li key={place_id} onClick={() => handleSelect(description)}>
                {description}
              </li>
            ))}
          </ul>
        )}
      </div> */}
      {/* <VirtualJoystick
        onMove={handleJoystickMove}
        onPlaceVertex={placeVertex}
      /> */}
      {/* <p style={{ padding: "5px", color: "blue" }}>
        Area: {polygonArea.toFixed(2)} square meters
      </p> */}
      {isLoaded && (
        <GoogleMap
          mapContainerClassName="w-screen h-full -mt-5"
          center={formState && formState?.center}
          zoom={20}
          onLoad={onLoad}
          options={{
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeId: "satellite",
            version: "weekly",
            draggable: false,
          }}
        >
          {nextEdgeEnd && (
            <Polygon
              paths={[currentVertex, nextEdgeEnd]}
              strokeColor={nextEdgeColor}
              strokeOpacity={0.8}
              strokeWeight={2}
            />
          )}
          <Marker
            position={currentVertex}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: currentVertexColor,
              fillOpacity: 1,
              strokeColor: "white",
              strokeWeight: 2,
              scale: 6,
            }}
          />
          {vertices.length > 0 &&
            vertices.map((vertex: any, index: number) => (
              <Marker
                key={index}
                position={vertex}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: placedVertexColor,
                  fillOpacity: 1,
                  strokeColor: "white",
                  strokeWeight: 2,
                  scale: 6,
                }}
              />
            ))}
          {vertices.length > 1 && (
            <Polygon
              paths={vertices}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#0000FF"
              fillOpacity={0.35}
              editable={true}
            />
          )}
        </GoogleMap>
      )}
      <div className="absolute bottom-0 w-screen h-52 bg-white flex flex-col rounded-t-3xl items-center py-2">
        <div className="flex  justify-between items-center w-screen px-5">
          <button
            className="rounded-full px-4 py-2 border border-black flex items-center gap-2"
            onClick={resetVertex}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7.99911C14.0001 9.57654 13.3791 11.0906 12.2712 12.2135C11.1634 13.3364 9.65791 13.9779 8.08062 13.9991H8C6.46765 14.0029 4.99268 13.4165 3.88125 12.3616C3.83352 12.3165 3.79515 12.2624 3.76833 12.2024C3.74152 12.1424 3.72677 12.0778 3.72494 12.0121C3.72311 11.9464 3.73424 11.881 3.75768 11.8197C3.78112 11.7583 3.81642 11.7022 3.86156 11.6544C3.9067 11.6067 3.9608 11.5683 4.02077 11.5415C4.08074 11.5147 4.14541 11.4999 4.21108 11.4981C4.27675 11.4963 4.34213 11.5074 4.4035 11.5309C4.46487 11.5543 4.52102 11.5896 4.56875 11.6347C5.28362 12.3089 6.1813 12.7575 7.14964 12.9245C8.11799 13.0914 9.11406 12.9694 10.0134 12.5735C10.9128 12.1777 11.6756 11.5256 12.2065 10.6988C12.7375 9.87194 13.013 8.90698 12.9987 7.92445C12.9844 6.94192 12.6809 5.98539 12.1262 5.17434C11.5714 4.36329 10.79 3.73368 9.87944 3.36418C8.96893 2.99467 7.96973 2.90164 7.00665 3.0967C6.04358 3.29177 5.15933 3.76629 4.46438 4.46099C4.45927 4.46651 4.45384 4.47173 4.44812 4.47661L2.78688 5.99911H4.5C4.63261 5.99911 4.75979 6.05179 4.85355 6.14556C4.94732 6.23933 5 6.3665 5 6.49911C5 6.63172 4.94732 6.7589 4.85355 6.85267C4.75979 6.94643 4.63261 6.99911 4.5 6.99911H1.5C1.36739 6.99911 1.24021 6.94643 1.14645 6.85267C1.05268 6.7589 1 6.63172 1 6.49911V3.49911C1 3.3665 1.05268 3.23933 1.14645 3.14556C1.24021 3.05179 1.36739 2.99911 1.5 2.99911C1.63261 2.99911 1.75979 3.05179 1.85355 3.14556C1.94732 3.23933 2 3.3665 2 3.49911V5.36161L3.76562 3.74911C4.60561 2.91239 5.67467 2.34328 6.83783 2.11363C8.001 1.88398 9.20612 2.00409 10.3011 2.45879C11.396 2.91349 12.3317 3.6824 12.9901 4.66845C13.6484 5.65451 13.9998 6.8135 14 7.99911Z"
                fill="#212121"
              />
            </svg>
            Reset
          </button>
          <Joystick
            size={100}
            sticky={false}
            baseColor="#FFEB9B"
            stickColor="#FFCB00"
            move={handleMove}
            stop={handleStop}
            throttle={90}
          ></Joystick>
          <button
            className="rounded-full px-4 py-2 border border-black flex items-center gap-2"
            onClick={placeVertex}
          >
            Mark{" "}
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="9" r="8" fill="#DAE5DF" stroke="#212121" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            className="py-2 text-[#1D7739] "
            onClick={calculatePolygonArea}
          >
            Mark as Complete
          </button>
          <button
            className=" mt-2 hover:underline animate-in fade-in duration-1000"
            onClick={() => setCurrentStep(11)}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
