"use client";
import { useState, FC } from "react";

// @tanstack/react-table
import {
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

// @material-tailwind/react
import { Typography } from "@material-tailwind/react";

// @heroicons/react
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import no_data_img from "@public/img/no-data.png";

interface CommonTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

const CommonTable = <T extends object>({
  data,
  columns,
}: CommonTableProps<T>) => {
  // const [sorting, setSorting] = useState([]);
  // const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    // state: {
    //   globalFilter: filtering,
    //   sorting: sorting,
    // },
    // @ts-ignore
    // onSortingChange: setSorting,
    // onGlobalFilterChange: setFiltering,
    // getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="tw-w-full tw-overflow-x-auto">
      <table className="tw-table-auto tw-text-left tw-w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const renderedHeader = flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                );

                const isSimple =
                  typeof renderedHeader === "string" ||
                  typeof renderedHeader === "number";

                return (
                  <th
                    key={header.id}
                    // onClick={header.column.getToggleSortingHandler()}
                    className="tw-px-4 tw-py-2 tw-uppercase"
                  >
                    <div className="tw-flex tw-cursor-pointer tw-items-center tw-justify-between tw-gap-2 tw-text-xs tw-font-bold tw-leading-none tw-opacity-80 tw-whitespace-nowrap">
                      {isSimple ? (
                        <Typography color="blue-gray">
                          {renderedHeader}
                        </Typography>
                      ) : (
                        renderedHeader
                      )}

                      {header.id !== "select" && (
                        <ChevronUpDownIcon className="tw-h-4 tw-w-4" />
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="tw-text-center tw-py-10">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-opacity-20 tw-text-3xl">
                  <Image
                    alt="no data img"
                    src={no_data_img.src}
                    width={no_data_img.width}
                    height={no_data_img.height}
                    className="tw-w-32 tw-h-32"
                  />
                  No data
                </div>
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:tw-cursor-pointer hover:tw-bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => {
                  const renderedCell = flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  );
                  const isSimple =
                    typeof renderedCell === "string" ||
                    typeof renderedCell === "number";

                  return (
                    <td key={cell.id} className="!tw-border-y !tw-border-x-0">
                      {isSimple ? (
                        <Typography
                          variant="small"
                          className="!tw-font-medium !tw-text-blue-gray-500 tw-py-2 tw-px-4 tw-whitespace-nowrap"
                        >
                          {renderedCell}
                        </Typography>
                      ) : (
                        <div className="tw-py-2 tw-px-4">{renderedCell}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
