import { useState } from "react";
// import ReactDOM from "react-dom";
import { LoadScript, GoogleMap, DrawingManagerF } from "@react-google-maps/api";

import "./Gmaps.css";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const API_KEY = "AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y";

export default function GoogleMaps() {
  const [state, setState] = useState({
    drawingMode: "polygon",
  });

  const noDraw = () => {
    setState(function set(prevState) {
      return Object.assign({}, prevState, {
        drawingMode: "maker",
      });
    });
  };

  return (
    <div className="App">
      <LoadScript
        id="script-loader"
        googleMapsApiKey={API_KEY as string}
        libraries={["drawing", "places"]}
        language="en"
        region="us"
      >
        <GoogleMap
          mapContainerClassName="map-container"
          center={{
            lat: 38.9065495,
            lng: -77.0518192,
          }}
          zoom={10}
          //   version="weekly"
        >
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
            onPolygonComplete={(poly: any) => {
              const polyArray = poly.getPath().getArray();
              let paths: any = [];
              polyArray.forEach(function (path: any) {
                paths.push({ lat: path.lat(), lng: path.lng() });
              });
              console.log("onPolygonComplet polyArray: ", polyArray);
              console.log("Paths: ", { paths });
              console.log("onPolygonComplete poly:", poly);
              noDraw();
            }}
            // onOverlayComplete={(poly) => {
            //   const polyArray = poly.getPath().getArray();
            //   let paths = [];
            //   polyArray.forEach(function (path) {
            //     paths.push({ latitude: path.lat(), longitude: path.lng() });
            //   });
            //   console.log("onOverlayComplete", polyArray);
            // }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
