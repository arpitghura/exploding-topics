"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HamburgerMenuIcon,
  ChevronRightIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="header_right md:hidden">
      <div className="mobile_actions visible_mobile">
        <Button
          type="button"
          variant="outline"
          className="menuToggle border-none shadow-none size-max"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {!isMenuOpen ? (
            <HamburgerMenuIcon width={20} />
          ) : (
            <Cross1Icon width={20} />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="">
          <div className="absolute top-16 w-full left-0">
            <ul className=" flex flex-col p-3 bg-white z-50" id="mobileMenu">
              <li className="list-none my-2">
                <Link
                  className="flex justify-between p-2 font-semibold text-tertiary"
                  href="#about"
                >
                  About <ChevronRightIcon width={20} />
                </Link>
              </li>
              <Separator />
              <li className="list-none my-2">
                <Link
                  className="flex justify-between p-2 font-semibold text-tertiary"
                  href="#newsletter"
                >
                  Newsletter <ChevronRightIcon width={20} />
                </Link>
              </li>
              <Separator />
              <li className="list-none my-2">
                <Link
                  className="flex justify-between p-2 font-semibold text-tertiary"
                  href="#blog/library"
                >
                  Blog <ChevronRightIcon width={20} />
                </Link>
              </li>
            </ul>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default MobileNav;
