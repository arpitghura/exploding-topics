import DataCard from "@/comps/DataCard";
import Footer from "@/comps/Footer";
import HeroSec from "@/comps/Hero";
import Navbar from "@/comps/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="container p-8 flex min-h-screen flex-col items-center">
        <HeroSec />
        <div className="container p-8 flex flex-row items-center justify-between gap-8 flex-wrap">
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={false} />
          <DataCard isProOnly={true} />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
