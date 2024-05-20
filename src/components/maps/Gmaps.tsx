"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

function Gmaps({ position }: { position: string }) {
  //   const google = window.google;
  //   const service = google.maps.places.Autocomplete;
  const mapcenter = { lat: 22.879440307617188, lng: 78.96288299560547 };
  return (
    <APIProvider apiKey={"AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y" as string}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Map
          center={position}
          defaultCenter={mapcenter}
          zoom={10}
          mapTypeId={"satellite"}
          //   mapTypeControl={true}
          //   mapTypeId={"Satellite"}
        />
      </div>
    </APIProvider>
  );
}

export default Gmaps;

// "use client";

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// export default function Intro() {
//   const position = { lat: 53.54, lng: 10 };
//   const [open, setOpen] = useState(false);

//   return (
//     <APIProvider apiKey={"AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y"}>
//       <div style={{ height: "100vh", width: "100%" }}>
//         <Map zoom={9} center={position}>
//           {/* <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//             <Pin
//               background={"grey"}
//               borderColor={"green"}
//               glyphColor={"purple"}
//             />
//           </AdvancedMarker> */}

//           {open && (
//             <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//               <p>I'm in Hamburg</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }
