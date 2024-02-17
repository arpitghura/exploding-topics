"use client";
import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import { Fragment } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import RelatedTopics from "@/comps/RelatedTopics";
import GridLineBg from "@/comps/GridLineBg";
import LineChart from "@/comps/LineChart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DataLakeHouseTopic = () => {
  return (
    <Fragment>
      <GridLineBg />
      <Navbar />
      <main className="narrowPageContainer">
        <div className="breadcrumb flex mt-12">
          <Link
            href="/"
            className="border-b border-black border-opacity-0 transition-opacity ease-out text-sm text-secondary hover:border-opacity-100"
          >
            Trends Database
          </Link>
          <span className="mx-2 text-sm ">/</span>
          <p className="text-sm">Data Lakehouse</p>
        </div>

        <div className="flex flex-col gap-7 my-0 pt-8 pb-10">
          <h2 className="font-bold text-3xl text-secondary-foreground">
            Data Lakehouse
          </h2>
          <p className="">
            Data solution concept combining "data warehouse" and "data lake".
          </p>
        </div>

        <div className="category w-full bg-white px-5 py-10 shadow-sm my-3">
          <div className="h-1/2">
            <LineChart />
          </div>

          <div className="tooltip mt-16">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-xs py-1 px-2 rounded text-gray-500 bg-gray-100 font-semibold border-2 border-gray-200 uppercase tracking-wide">
                  Exploding
                </TooltipTrigger>
                <TooltipContent className="p-3">
                  <p>Steep, hockey stick growth</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="category w-full bg-white px-5 py-10 shadow-sm my-3">
          <h2 className="font-bold text-lg text-secondary-foreground">
            Categories
          </h2>
          <Separator className="mt-6" />
          <div className="tags-cloud mt-8 rounded">
            <Link
              href="#"
              className="tag text-xs font-bold rounded text-primary bg-blue-50 px-3 py-2 mr-4"
            >
              Artificial Intelligence
            </Link>
            <Link
              href="#"
              className="tag text-xs font-bold rounded text-primary bg-blue-50 px-3 py-2 mr-4"
            >
              Finance
            </Link>
            <Link
              href="#"
              className="tag text-xs font-bold rounded text-primary bg-blue-50 px-3 py-2 mr-4"
            >
              Technology
            </Link>
            <Link
              href="#"
              className="tag text-xs font-bold rounded text-primary bg-blue-50 px-3 py-2 mr-4"
            >
              Concept
            </Link>
          </div>
        </div>
        <div className="category w-full bg-white px-5 py-5 shadow-sm my-3">
          <RelatedTopics />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DataLakeHouseTopic;
