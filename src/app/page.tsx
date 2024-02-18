import DataCard from "@/components/customUi/DataCard";
import Footer from "@/components/customUi/Footer";
import HeroSec from "@/components/customUi/Hero";
import Navbar from "@/components/customUi/Navbar";
import PaginationSec from "@/components/customUi/PaginationSec";
import GridLineBg from "@/components/customUi/GridLineBg";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <GridLineBg />
      <Navbar />
      <main className=" container">
        <HeroSec />
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
