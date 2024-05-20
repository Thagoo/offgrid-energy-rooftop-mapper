import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className=" max-w-[80%] m-auto">
      <Head>
        <title>Offgrid</title>
      </Head>
      <Navbar />
      <HeroSection />
    </div>
  );
}
