"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const PaginationSec = () => {
  const [currPage, setCurrentPage] = useState(1);
  return (
    <div className="pagination flex flex-start">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currPage !== 1 && (
              <PaginationPrevious
                href="/"
                className="p-1 border border-whitesmoke py-0 h-7 w-7 hover:border-black"
              />
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="/"
              isActive={true}
              className="border border-whitesmoke opacity-100 border-black  mx-1 p-1 h-7 w-7"
            >
              1
            </PaginationLink>
            <PaginationLink
              href="/"
              className="border border-whitesmoke opacity-60 hover:opacity-100 hover:border-black mx-1 p-1 h-7 w-7"
            >
              2
            </PaginationLink>
            <PaginationLink
              href="/"
              className="border border-whitesmoke opacity-60 hover:opacity-100 hover:border-black mx-1 p-1 h-7 w-7"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="/"
              className="p-1 border border-whitesmoke py-0 h-7 w-7 hover:border-black"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationSec;
