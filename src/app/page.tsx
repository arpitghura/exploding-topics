import DataCard from "@/comps/DataCard";
import Footer from "@/comps/Footer";
import HeroSec from "@/comps/Hero";
import Navbar from "@/comps/Navbar";
import PaginationSec from "@/comps/PaginationSec";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="container p-8 pb-0 flex min-h-screen flex-col items-center">
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
          <PaginationSec />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
