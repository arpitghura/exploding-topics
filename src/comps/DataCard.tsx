import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DataCardProps {
  isProOnly: boolean;
}

const DataCard: React.FC<DataCardProps> = ({ isProOnly = false }) => (
  <div className="relative w-full md:w-[calc(100%_-_20px)] lg:w-[calc((100%_-_40px)_/_2)] xl:w-[calc((100%_-60px)_/_3)] mx-1 my-3 md:m-2">
    <Link href={`${isProOnly ? "/pro" : "/topic/data-lakehouse"}`}>
      <Card className="p-4 bg-white group items-center space-y-0 space-x-0 transition-all ease-in duration-300 border-transparent rounded hover:border-[#2e5ce5]">
        <div className={`${isProOnly && "blur"}`}>
          <CardHeader className="flex flex-row justify-between p-0 space-y-0">
            <CardTitle className="group-hover:text-blue-600 space-y-0">
              Mlops
            </CardTitle>
            <div className="flex flex-row gap-5 items-start">
              <div className="">
                <h4 className="text-xl font-bold text-[#2e5ce5]">49.5K</h4>
                <p className="text-secondary text-xs">Volume</p>
              </div>
              <div className="">
                <h4 className="text-xl font-bold text-[#24c176]">+99+</h4>
                <p className="text-secondary text-xs">Growth</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Image
              src="/download.png"
              alt=""
              width="500"
              height="100"
              className="w-full h-full py-3"
            />
            <p className="text-secondary text-sm mb-6 line-clamp-2 overflow-hidden text-ellipsis">
              Machine learning operations. A set of best practices in the
              machine learning development cycle.
            </p>
          </CardContent>
          <CardFooter className="p-0">
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
          </CardFooter>
        </div>

        {isProOnly && (
          <div className="absolute top-0 left-0 flex flex-col h-full w-full items-center justify-center">
            <p className="text-lg font-bold flex gap-3">
              <svg
                width="42"
                height="25"
                viewBox="0 0 42 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="linearColor"
                    x1="1.75532e-08"
                    y1="0.411184"
                    x2="21.9757"
                    y2="37.3304"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2E5CE5"></stop>
                    <stop offset="1" stopColor="#348FEB"></stop>
                  </linearGradient>
                </defs>

                <rect
                  width="42"
                  height="25"
                  rx="2"
                  fill="url(#linearColor)"
                ></rect>

                <path
                  d="M10.1768 17V9.08H13.4493C13.5263 9.08 13.6253 9.08367 13.7463 9.091C13.8673 9.09467 13.9791 9.10567 14.0818 9.124C14.5401 9.19367 14.9178 9.34583 15.2148 9.5805C15.5155 9.81517 15.7373 10.1122 15.8803 10.4715C16.027 10.8272 16.1003 11.2232 16.1003 11.6595C16.1003 12.0922 16.027 12.4882 15.8803 12.8475C15.7337 13.2032 15.51 13.4983 15.2093 13.733C14.9123 13.9677 14.5365 14.1198 14.0818 14.1895C13.9791 14.2042 13.8655 14.2152 13.7408 14.2225C13.6198 14.2298 13.5227 14.2335 13.4493 14.2335H11.5023V17H10.1768ZM11.5023 12.996H13.3943C13.4677 12.996 13.5502 12.9923 13.6418 12.985C13.7335 12.9777 13.8178 12.963 13.8948 12.941C14.1148 12.886 14.2872 12.7888 14.4118 12.6495C14.5402 12.5102 14.63 12.3525 14.6813 12.1765C14.7363 12.0005 14.7638 11.8282 14.7638 11.6595C14.7638 11.4908 14.7363 11.3185 14.6813 11.1425C14.63 10.9628 14.5402 10.8033 14.4118 10.664C14.2872 10.5247 14.1148 10.4275 13.8948 10.3725C13.8178 10.3505 13.7335 10.3377 13.6418 10.334C13.5502 10.3267 13.4677 10.323 13.3943 10.323H11.5023V12.996ZM17.5322 17V9.08H20.8047C20.8817 9.08 20.9807 9.08367 21.1017 9.091C21.2227 9.09467 21.3345 9.10567 21.4372 9.124C21.8955 9.19367 22.2732 9.34583 22.5702 9.5805C22.8709 9.81517 23.0927 10.1122 23.2357 10.4715C23.3824 10.8272 23.4557 11.2232 23.4557 11.6595C23.4557 12.3048 23.2925 12.8603 22.9662 13.326C22.6399 13.788 22.1394 14.074 21.4647 14.184L20.8982 14.2335H18.8577V17H17.5322ZM22.0807 17L20.5187 13.777L21.8662 13.48L23.5822 17H22.0807ZM18.8577 12.996H20.7497C20.823 12.996 20.9055 12.9923 20.9972 12.985C21.0889 12.9777 21.1732 12.963 21.2502 12.941C21.4702 12.886 21.6425 12.7888 21.7672 12.6495C21.8955 12.5102 21.9854 12.3525 22.0367 12.1765C22.0917 12.0005 22.1192 11.8282 22.1192 11.6595C22.1192 11.4908 22.0917 11.3185 22.0367 11.1425C21.9854 10.9628 21.8955 10.8033 21.7672 10.664C21.6425 10.5247 21.4702 10.4275 21.2502 10.3725C21.1732 10.3505 21.0889 10.3377 20.9972 10.334C20.9055 10.3267 20.823 10.323 20.7497 10.323H18.8577V12.996ZM28.4734 17.165C27.6814 17.165 27.0031 16.9927 26.4384 16.648C25.8738 16.2997 25.4393 15.8157 25.1349 15.196C24.8343 14.5763 24.6839 13.8577 24.6839 13.04C24.6839 12.2223 24.8343 11.5037 25.1349 10.884C25.4393 10.2643 25.8738 9.78217 26.4384 9.4375C27.0031 9.08917 27.6814 8.915 28.4734 8.915C29.2654 8.915 29.9438 9.08917 30.5084 9.4375C31.0768 9.78217 31.5113 10.2643 31.8119 10.884C32.1163 11.5037 32.2684 12.2223 32.2684 13.04C32.2684 13.8577 32.1163 14.5763 31.8119 15.196C31.5113 15.8157 31.0768 16.2997 30.5084 16.648C29.9438 16.9927 29.2654 17.165 28.4734 17.165ZM28.4734 15.9165C29.0051 15.9202 29.4469 15.8028 29.7989 15.5645C30.1546 15.3262 30.4204 14.9907 30.5964 14.558C30.7761 14.1253 30.8659 13.6193 30.8659 13.04C30.8659 12.4607 30.7761 11.9583 30.5964 11.533C30.4204 11.104 30.1546 10.7703 29.7989 10.532C29.4469 10.2937 29.0051 10.1708 28.4734 10.1635C27.9418 10.1598 27.4999 10.2772 27.1479 10.5155C26.7959 10.7538 26.5301 11.0893 26.3504 11.522C26.1744 11.9547 26.0864 12.4607 26.0864 13.04C26.0864 13.6193 26.1744 14.1235 26.3504 14.5525C26.5264 14.9778 26.7904 15.3097 27.1424 15.548C27.4981 15.7863 27.9418 15.9092 28.4734 15.9165Z"
                  fill="white"
                ></path>
              </svg>
              Members Only
            </p>
            <Button className="mt-5 p-6 text-base" variant="default">
              Try Exploding Topics Pro
            </Button>
          </div>
        )}
      </Card>
    </Link>
  </div>
);

export default DataCard;
