"use client";

import { cn } from "@/lib/utils";
import { exportToCSV } from "@/utils/export-csv";
import { InboxArrowDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { FC } from "react";

interface ExportButtonProps {
  className?: string;
  tableData: any[][];
  columns: string[];
  fileName?: string;
}

const ExportButton: FC<ExportButtonProps> = ({
  className,
  tableData,
  columns,
  fileName = "New Csv",
}) => {
  const handleExport = () => {
    exportToCSV(fileName, tableData, columns);
  };

  return (
    <Button
      variant="outlined"
      size="sm"
      className={cn(
        "tw-w-full xs:tw-w-auto tw-flex tw-justify-center tw-items-center tw-gap-3 tw-capitalize",
        className
      )}
      onClick={handleExport}
    >
      <InboxArrowDownIcon className="tw-h-5 tw-w-5" />
      Export
    </Button>
  );
};

export default ExportButton;
