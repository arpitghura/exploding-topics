import {
  Card,
  CardContent,
  CardDescription,
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

const DataCard = () => {
  return (
    <Link href="/about" className="">
      <Card className="w-[350px] items-center p-4 space-y-0 space-x-0 transition-all ease-in duration-300 border-transparent rounded-sm hover:border-[#2e5ce5]">
        <CardHeader className="flex flex-row justify-between p-0 space-y-0">
          <CardTitle className="hover:text-blue-600 space-y-0">Mlops</CardTitle>
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
          <p className="text-secondary text-sm my-6 line-clamp-2 overflow-hidden text-ellipsis">
            Machine learning operations. A set of best practices in the machine
            learning development cycle.
          </p>
        </CardContent>
        <CardFooter className="p-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-xs py-1 px-2 rounded text-gray-500 bg-gray-100 font-semibold border-2 border-gray-200 uppercase tracking-wide">
                Exploding
              </TooltipTrigger>
              <TooltipContent>
                <p>Steep, hockey stick growth</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DataCard;
