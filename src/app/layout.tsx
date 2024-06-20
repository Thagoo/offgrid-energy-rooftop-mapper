import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteGeneratorProvider } from "@/context/QuoteGeneratorContext";
import { FormStepProvider } from "@/context/FormStepContext";
import { ContactDetailsProvider } from "@/context/ContactDetailsContext";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote | Offgrid",
  description: "Find the right price for your solar in few clicks",
  metadataBase: new URL("https://quote.getoffgrid.vercel.app/"),
  openGraph: {
    images: "/assets/offgrid-favicon.png",
  },
  icons: {
    icon: "/assets/offgrid-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="AW-16617404215" />

      {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y&libraries=places,drawing&callback=initMap"
        async
      ></script> */}

      <body className={inter.className}>
        <QuoteGeneratorProvider>
          <ContactDetailsProvider>
            <FormStepProvider>{children}</FormStepProvider>
          </ContactDetailsProvider>
        </QuoteGeneratorProvider>
      </body>
    </html>
  );
}
