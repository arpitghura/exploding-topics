import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const RelatedTopics = () => {
  return (
    <div className="category w-full bg-white p-3">
      <h2 className="font-bold text-lg text-secondary-foreground">
        Related Topics
      </h2>
      <Separator className="mt-6" />
      <Table>
        <TableBody>
          <Link href="#" className="separator-table">
            <TableRow className="flex justify-between items-center mt-3 hover:bg-transparent">
              <TableCell className="font-medium">Dremio</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col">
                  <p className="text-primary text-xs font-bold">12.1K</p>
                  <p className=" text-green-500 text-lg font-extrabold">
                    +122%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          <Link href="#" className="separator-table">
            <TableRow className="flex justify-between items-center mt-3 hover:bg-transparent">
              <TableCell className="font-medium">Dremio</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col">
                  <p className="text-primary text-xs font-bold">12.1K</p>
                  <p className=" text-green-500 text-lg font-extrabold">
                    +122%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          <Link href="#" className="separator-table">
            <TableRow className="flex justify-between items-center mt-3 hover:bg-transparent">
              <TableCell className="font-medium">Dremio</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col">
                  <p className="text-primary text-xs font-bold">12.1K</p>
                  <p className=" text-green-500 text-lg font-extrabold">
                    +122%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          <Link href="#" className="separator-table">
            <TableRow className="flex justify-between items-center mt-3 hover:bg-transparent">
              <TableCell className="font-medium">Dremio</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col">
                  <p className="text-primary text-xs font-bold">12.1K</p>
                  <p className=" text-green-500 text-lg font-extrabold">
                    +122%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </Link>
          <Link href="#" className="separator-table">
            <TableRow className="flex justify-between items-center mt-3 hover:bg-transparent">
              <TableCell className="font-medium">Dremio</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col">
                  <p className="text-primary text-xs font-bold">12.1K</p>
                  <p className=" text-green-500 text-lg font-extrabold">
                    +122%
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </Link>
        </TableBody>
      </Table>
    </div>
  );
};

export default RelatedTopics;
