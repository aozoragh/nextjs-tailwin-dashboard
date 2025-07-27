"use client";

import React, {
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Input } from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "lucide-react";

// Hook to detect click outside a ref element
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

interface DatePicketPropsType {
  label?: string;
  onChange: (date: Date | null) => void;
  disabled?: boolean;
}

export default function DatePicker({
  label,
  onChange,
  disabled,
}: DatePicketPropsType) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close picker when clicking outside
  useClickOutside(ref, () => setOpen(false));

  return (
    <div
      className={`tw-relative tw-flex tw-flex-col tw-gap-1 ${
        disabled && "tw-opacity-50"
      }`}
    >
      <label className="tw-text-sm tw-font-medium tw-text-gray-700">
        {label}
      </label>
      <Input
        icon={<CalendarIcon className="tw-h-5 tw-w-5 tw-text-gray-500" />}
        className={`!tw-border !tw-border-gray-300 tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 tw-ring-4 tw-ring-transparent placeholder:tw-text-gray-500 placeholder:tw-opacity-100 focus:!tw-border-gray-900 focus:!tw-border-t-gray-900 focus:tw-ring-gray-900/10`}
        labelProps={{ className: "tw-hidden" }}
        onFocus={() => setOpen(true)}
        label="Select a Date"
        value={date ? format(date, "PPP") : ""}
        onChange={() => null}
        containerProps={{ className: "tw-relative" }}
        disabled={disabled}
      />

      {open && (
        <div
          ref={ref}
          className="tw-absolute tw-z-[9999] tw-top-20 tw-bg-white tw-shadow-lg tw-rounded-md tw-p-2"
        >
          <DayPicker
            mode="single"
            selected={date}
            onSelect={(selected) => {
              setDate(selected!);
              onChange(selected!);
              setOpen(false);
            }}
            showOutsideDays
            className="tw-border-0"
            classNames={{
              caption:
                "tw-flex tw-justify-center tw-py-2 tw-mb-4 tw-relative tw-items-center",
              caption_label: "tw-text-sm tw-font-medium tw-text-gray-900",
              nav: "tw-flex tw-items-center",
              nav_button:
                "tw-h-6 tw-w-6 tw-bg-transparent hover:tw-bg-blue-gray-50 tw-p-1 tw-rounded-md tw-transition-colors tw-duration-300",
              nav_button_previous: "tw-absolute tw-left-1.5",
              nav_button_next: "tw-absolute tw-right-1.5",
              table: "tw-w-full tw-border-collapse",
              head_row: "tw-flex tw-font-medium tw-text-gray-900",
              head_cell: "tw-m-0.5 tw-w-9 tw-font-normal tw-text-sm",
              row: "tw-flex tw-w-full tw-mt-2",
              cell: "tw-text-gray-600 tw-rounded-md tw-h-9 tw-w-9 tw-text-center tw-text-sm tw-p-0 tw-m-0.5 tw-relative",
              day: "tw-h-9 tw-w-9 tw-p-0 tw-font-normal",
              day_selected:
                "tw-rounded-md tw-bg-gray-900 tw-text-white hover:tw-bg-gray-900 hover:tw-text-white focus:tw-bg-gray-900 focus:tw-text-white",
              day_today: "tw-rounded-md tw-bg-gray-200 tw-text-gray-900",
              day_outside: "tw-text-gray-500 tw-opacity-50",
              day_disabled: "tw-text-gray-500 tw-opacity-50",
              day_hidden: "tw-invisible",
            }}
            components={{
              IconLeft: (props) => (
                <ChevronLeftIcon
                  {...props}
                  className="tw-h-4 tw-w-4 tw-stroke-2"
                />
              ),
              IconRight: (props) => (
                <ChevronRightIcon
                  {...props}
                  className="tw-h-4 tw-w-4 tw-stroke-2"
                />
              ),
            }}
          />
        </div>
      )}
    </div>
  );
}
