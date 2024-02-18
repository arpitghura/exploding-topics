"use client";
import Footer from "@/components/customUi/Footer";
import Navbar from "@/components/customUi/Navbar";
import { Fragment } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import RelatedTopics from "@/components/customUi/RelatedTopics";
import GridLineBg from "@/components/customUi/GridLineBg";
import LineChart from "@/components/customUi/LineChart";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SelectCard from "@/components/customUi/SelectCard";
import { Switch } from "@/components/ui/switch";
import ProModal from "@/components/customUi/ProModal";

const ForeCastProEle = (
  <div className="bg-blue-50 flex flex-row items-center justify center py-1 px-2 border text-blue-500 gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-trending-up"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
    <p>Forecast</p>
    <Switch checked={false} />
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="text-xs rounded-full text-blue-500">
          <svg
            className="scoreQuestionIcon"
            id="volTooltipundefined"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
              fill="rgb(59,130, 246)"
            ></path>
          </svg>
        </TooltipTrigger>
        <TooltipContent className="p-4 bg-black w-52">
          <p className="text-xs">
            Forecast predicts the growth of this trend over the next 12 months.
            Our forecasting uses a deep machine learning model trained on
            millions of data points.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

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

        <div className="category w-full bg-white px-5 py-10 shadow-sm mb-3">
          <div className="chart-operations flex justify-between items-center mb-5">
            <div className="left flex gap-2">
              <SelectCard />
              <ProModal TriggerEle={ForeCastProEle} />
            </div>
            <div className="right">
              <div className="flex flex-row gap-10 items-start">
                <div>
                  <h4 className="text-2xl font-bold text-[#2e5ce5]">49.5K</h4>
                  <p className="text-secondary text-sm">
                    Volume
                    <span className="ml-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-xs rounded-full text-gray-500">
                            <svg
                              className="scoreQuestionIcon"
                              id="volTooltipundefined"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
                                fill="#828282"
                              ></path>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent className="p-4 bg-black w-52">
                            <p className=" text-xs">
                              Global Google search volume for the previous full
                              month. For example, a topic with 6.6K volume means
                              there were 6,600 searches on Google for that
                              keyword last month.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#24c176]">+99+</h4>
                  <p className="text-secondary text-sm">
                    Growth
                    <span className="ml-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-xs rounded-full text-gray-500">
                            <svg
                              className="scoreQuestionIcon"
                              id="volTooltipundefined"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.27241 7.43881V7.72441H6.46581V7.44901C6.46581 7.23141 6.50661 7.03421 6.58821 6.85741C6.67661 6.68061 6.78201 6.53781 6.90441 6.42901C7.03361 6.31341 7.16961 6.18761 7.31241 6.05161C7.46201 5.91561 7.59801 5.78641 7.72041 5.66401C7.84961 5.53481 7.95501 5.36481 8.03661 5.15401C8.12501 4.94321 8.16921 4.70521 8.16921 4.44001C8.16921 3.84161 7.97541 3.35201 7.58781 2.97121C7.20701 2.59041 6.66981 2.40001 5.97621 2.40001C5.26221 2.40001 4.68761 2.61761 4.25241 3.05281C3.81721 3.48121 3.59961 4.07281 3.59961 4.82761H4.79301C4.79301 4.41961 4.89501 4.10341 5.09901 3.87901C5.30981 3.64781 5.60221 3.53221 5.97621 3.53221C6.28901 3.53221 6.53381 3.61721 6.71061 3.78721C6.88741 3.95721 6.97581 4.17481 6.97581 4.44001C6.97581 4.61681 6.93161 4.78341 6.84321 4.93981C6.76161 5.08941 6.65621 5.21521 6.52701 5.31721C6.40461 5.41241 6.26861 5.52801 6.11901 5.66401C5.97621 5.79321 5.84021 5.92921 5.71101 6.07201C5.58861 6.20801 5.48321 6.39501 5.39481 6.63301C5.31321 6.87101 5.27241 7.13961 5.27241 7.43881ZM5.87421 9.78481C6.10541 9.78481 6.29921 9.71001 6.45561 9.56041C6.61201 9.40401 6.69021 9.21361 6.69021 8.98921C6.69021 8.77161 6.61201 8.58461 6.45561 8.42821C6.29921 8.27181 6.10541 8.19361 5.87421 8.19361C5.64301 8.19361 5.44921 8.27181 5.29281 8.42821C5.13641 8.57781 5.05821 8.76481 5.05821 8.98921C5.05821 9.21361 5.13641 9.40401 5.29281 9.56041C5.44921 9.71001 5.64301 9.78481 5.87421 9.78481Z"
                                fill="#828282"
                              ></path>
                            </svg>
                          </TooltipTrigger>
                          <TooltipContent className="p-4 bg-black w-52">
                            <p className="text-xs">
                              We use our proprietary trend finding technology to
                              identify trends early on. This data is updated
                              daily. % growth represents growth over the time
                              period selected.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
