import { FC } from "react";

const TableRecordCount: FC<{ totalCount: number; title: string }> = ({
  totalCount,
  title,
}) => (
  <span className="tw-flex tw-gap-1 tw-text-sm">
    {title}: <strong>{totalCount}</strong>
  </span>
);

export default TableRecordCount;
