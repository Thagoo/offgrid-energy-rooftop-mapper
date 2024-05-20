import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y&libraries=places&callback=initMap"
          async
        ></script>
      </body>
    </Html>
  );
}
