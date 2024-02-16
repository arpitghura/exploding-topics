import DataCard from "@/comps/DataCard";
import Footer from "@/comps/Footer";
import HeroSec from "@/comps/Hero";
import Navbar from "@/comps/Navbar";
import PaginationSec from "@/comps/PaginationSec";
import GridLineBg from "@/comps/gridLineBg";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <GridLineBg />
      <Navbar />
      <main className="widePageContainer">
        <HeroSec />
        {/* <div className="p-8 flex flex-row items-center justify-between gap-8 flex-wrap"> */}
        <div className="flex flex-row flex-wrap flex-start my-0 -mx-2.5 pb-10">
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
        <PaginationSec />
      </main>
      <Footer />
    </Fragment>
  );
}
