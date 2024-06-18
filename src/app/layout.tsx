import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteGeneratorProvider } from "@/context/QuoteGeneratorContext";
import { FormStepProvider } from "@/context/FormStepContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Offgird Energy",
  description: "Offgrid installs solar in an all new way.",
  metadataBase: new URL("https://offgrid-website.vercel.app/"),
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
      {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y&libraries=places,drawing&callback=initMap"
        async
      ></script> */}

      <body className={inter.className}>
        <QuoteGeneratorProvider>
          <FormStepProvider>{children}</FormStepProvider>
        </QuoteGeneratorProvider>
      </body>
    </html>
  );
}
