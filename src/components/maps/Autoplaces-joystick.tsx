import React, { useState, useEffect } from "react";
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

import { Joystick, IJoystickUpdateEvent } from "react-joystick-component";

import VirtualJoystick from "./VirtualJoystick";

const containerStyle = {
  width: "90vw",
  height: "80vh",
};

const initialCenter = { lat: 17.880339, lng: 77.516856 };

const currentVertexColor = "red";
const placedVertexColor = "blue";
const nextEdgeColor = "green";

const PolygonMap = () => {
  const [map, setMap] = useState(null);
  const [vertices, setVertices] = useState([]);
  const [currentVertex, setCurrentVertex] = useState(initialCenter);
  const [center, setCenter] = useState(initialCenter);
  const [nextEdgeEnd, setNextEdgeEnd] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y",
  });

  useEffect(() => {
    // Calculate polygon area whenever vertices change
    calculatePolygonArea();
  }, [vertices]);

  const onLoad = (map) => {
    setMap(map);
  };

  const calculatePolygonArea = () => {
    if (vertices.length >= 3) {
      const area = google.maps.geometry.spherical.computeArea(
        vertices.map((vertex) => new google.maps.LatLng(vertex.lat, vertex.lng))
      );
      setPolygonArea(area);
    } else {
      setPolygonArea(0);
    }
  };

  const handleJoystickMove = (direction) => {
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

  useEffect(() => {
    calculateNextEdge();
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

  const handleSelect = async (address) => {
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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMove = (stick: IJoystickUpdateEvent) => {
    console.log("Stick Update: ", stick);
    handleJoystickMove(stick.direction);
  };

  const handleStop = () => {};

  return (
    <div style={{ overflowY: "scroll" }}>
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
      <VirtualJoystick
        onMove={handleJoystickMove}
        onPlaceVertex={placeVertex}
      />
      <p style={{ padding: "5px", color: "blue" }}>
        Area: {polygonArea.toFixed(2)} square meters
      </p>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
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
          {vertices.map((vertex, index) => (
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
      <div
        style={{
          width: "100vw",
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "8vh",
            width: "auto",
          }}
          onClick={placeVertex}
        >
          Place Vertex
        </button>
      </div>
    </div>
  );
};

export default PolygonMap;
