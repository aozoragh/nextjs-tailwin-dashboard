import { FC } from "react";
import { SalesType } from "@/app/dashboard/events/_components/create-event-modal";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Card, IconButton } from "@material-tailwind/react";
import { formatDate } from "@/utils/dateFormat";

interface SalesCardPropsType extends SalesType {
  id: number;
  onRemove?: () => void;
}

const SalesCard: FC<SalesCardPropsType> = ({
  id,
  name,
  time,
  link,
  onRemove,
}) => {
  return (
    <Card className="tw-flex !tw-flex-row tw-justify-start tw-items-center tw-gap-4 tw-overflow-hidden">
      <div className="tw-flex tw-gap-4 tw-items-center tw-w-full tw-h-full">
        <div className="tw-w-[74px] tw-h-full tw-bg-[#333537] tw-flex tw-justify-center tw-items-center tw-text-7xl tw-font-bold text-[#86C5F9] tw-text-opacity-35">
          {id}
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-2 tw-text-base tw-py-4">
          <span className="tw-font-semibold">{name}</span>
          <span>{formatDate(time)}</span>
          <span>{link}</span>
        </div>
      </div>
      <div className="tw-absolute fh:tw-static tw-top-1 tw-right-1 tw-flex tw-justify-end tw-items-center tw-gap-1 lg:tw-gap-2 tw-mr-2">
        <IconButton variant="text" size="sm">
          <Bars3BottomRightIcon className="tw-h-6 tw-w-6" />
        </IconButton>
        <IconButton variant="text" size="sm" onClick={onRemove}>
          <XCircleIcon className="tw-h-6 tw-w-6 tw-text-[#D02B68]" />
        </IconButton>
      </div>
    </Card>
  );
};

export default SalesCard;
