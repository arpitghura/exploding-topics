import Image from "next/image";

const HeroSec = () => {
  return (
    <div className="flex flex-col text-center items-center gap-7 hero mx-auto my-0 pt-8 pb-10">
      <h2 className="font-bold text-3xl text-secondary-foreground">
        Discover Exploding Topics
      </h2>
      <p className="">
        We surface rapidly growing topics before they take off.
      </p>
      <div className="sortBar hidden">
        <div className="mobileSelectorDarkBg"></div>
        <div className="dropdownOnlySelectorsPlusProToggleContainer topicsPagedropdownOnlySelectorsPlusProToggleContainer">
          <div className="dropdownOnlySelectors dropdownOnlySelectorsFilters flex">
            <div className="sortBarPretext">Filter By:</div>
            <div className="filterDropdownsAddRow freeFilters">
              <div className="filterDropdownsAddInnerRow ">
                <div className="filterContainer periodFilterContainer freeToProPeriodSelector">
                  <div className="trendDbPageButtonDropdown btn-group">
                    <div className="dropdownFilterButton noselect">
                      <span className="filterButtonText dropdownFilterButtonText no_space_wrap">
                        5 years
                      </span>
                      <svg
                        style={{ marginLeft: "14px" }}
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#A0A2AF"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="filterContainer periodFilterContainer">
                  <div className="trendDbPageButtonDropdown btn-group">
                    <div className="dropdownFilterButton noselect">
                      <span className="filterButtonText dropdownFilterButtonText">
                        All Categories
                      </span>
                      <svg
                        style={{ marginLeft: "14px" }}
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#A0A2AF"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterDropdownsAddInnerRow"></div>
            </div>
            <div className="freeToProInput flex items-center gap-2 border border-[#121737] bg-white p-2 rounded-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9.86401 9.86401C11.864 7.864 11.864 4.62135 9.86401 2.62134C7.864 0.621327 4.62135 0.621327 2.62134 2.62134C0.621328 4.62135 0.621328 7.864 2.62134 9.86401C4.62135 11.864 7.864 11.864 9.86401 9.86401ZM9.86401 9.86401L12.58 12.58"
                  stroke="#A0A2AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <input placeholder="Search Trends" />
              <div className="freeToProSVG">
                <Image
                  src={"/freeToPro.svg"}
                  width="42"
                  height="25"
                  alt="pro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
