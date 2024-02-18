"use client";
import * as React from "react";
import Link from "next/link";

import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const components: { title: string; href: string }[] = [
  {
    title: "Featured",
    href: "#",
  },
  {
    title: "AI",
    href: "#",
  },
  {
    title: "Beauty",
    href: "#",
  },
  {
    title: "Company",
    href: "#",
  },
  {
    title: "Concept",
    href: "#",
  },
  {
    title: "Design",
    href: "#",
  },
  {
    title: "Eco",
    href: "#",
  },
  {
    title: "Ecommerce",
    href: "#",
  },
  {
    title: "Education",
    href: "#",
  },
  {
    title: "Fashion",
    href: "#",
  },
  {
    title: "Finance",
    href: "#",
  },
  {
    title: "Fitness",
    href: "#",
  },
  {
    title: "Food",
    href: "#",
  },
  {
    title: "Gaming",
    href: "#",
  },
  {
    title: "Health",
    href: "#",
  },
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Lifestyle",
    href: "#",
  },
  {
    title: "Luxury",
    href: "#",
  },
  {
    title: "Marketing",
    href: "#",
  },
  {
    title: "Media",
    href: "#",
  },
  {
    title: "Pets",
    href: "#",
  },
  {
    title: "Product",
    href: "#",
  },
  {
    title: "Sales",
    href: "#",
  },
  {
    title: "Science",
    href: "#",
  },
  {
    title: "Social",
    href: "#",
  },
  {
    title: "Software",
    href: "#",
  },
  {
    title: "Sports",
    href: "#",
  },
  {
    title: "Startup",
    href: "#",
  },
  {
    title: "Technology",
    href: "#",
  },
  {
    title: "Travel",
    href: "#",
  },
];

export function CategorySelection() {
  const [SelectUpIcon, setSelectUpIcon] = React.useState(false);

  return (
    <div className="border hover:border-black">
      <button
        className="flex py-2 px-3 text-sm items-center gap-3"
        onClick={() => {
          document.querySelector("#allCategories")?.classList.toggle("hidden");
          setSelectUpIcon((prev) => !prev);
        }}
      >
        All Categories
        {SelectUpIcon ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div
        className="w-[calc(100vw_/_2)] absolute gap-3 p-4 -left-full top-9 flex flex-wrap justify-center items-center bg-white rounded z-20 hidden"
        id="allCategories"
      >
        {components.map((component) => (
          <Link
            key={component.title}
            href={component.href}
            className={`w-max border border-blue-100 bg-blue-100 hover:border-blue-600 hover:bg-blue-100 hover:text-primary p-2 text-primary rounded font-semibold ${
              component.title === "Featured" && "bg-blue-500 text-white"
            }`}
          >
            {component.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
