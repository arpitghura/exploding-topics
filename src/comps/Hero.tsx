import { CategorySelection } from "./CategorySelection";
import SelectCard from "./SelectCard";

const HeroSec = () => {
  return (
    <div className="flex flex-col text-center items-center gap-7 hero mx-auto my-0 pt-8 pb-10">
      <h2 className="font-bold text-3xl text-secondary-foreground">
        Discover Exploding Topics
      </h2>
      <p className="">
        We surface rapidly growing topics before they take off.
      </p>
      <div>
        <div className="search-options flex items-center justify-center gap-3 w-full">
          <span className=" text-sm uppercase font-bold text-nowrap">
            Filter By:
          </span>
          <SelectCard />
          <div className="w-full relative">
            <CategorySelection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
