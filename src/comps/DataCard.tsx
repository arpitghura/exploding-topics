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
      <Card className="p-4 bg-white group items-center  space-y-0 space-x-0 transition-all ease-in duration-300 border-transparent rounded hover:border-[#2e5ce5]">
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
              <Image src={"/freeToPro.svg"} width="42" height="25" alt="pro" />
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
