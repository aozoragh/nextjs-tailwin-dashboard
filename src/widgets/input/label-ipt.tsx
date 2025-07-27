import { Input } from "@material-tailwind/react";
import { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";

interface LabelWrapperProps {
  label: string;
  icon?: React.ReactNode; // End icon
  frontIcon?: React.ReactNode; // Start icon'
  value?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const LabelInput: FC<LabelWrapperProps> = ({
  label,
  icon,
  frontIcon,
  value,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-1">
      <label className="tw-text-sm tw-font-medium tw-text-gray-700">
        {label}
      </label>

      <div className="tw-relative">
        {/* Front Icon (start) */}
        {frontIcon && (
          <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center tw-pointer-events-none tw-z-10">
            {frontIcon}
          </div>
        )}

        <Input
          type="text"
          value={value}
          disabled={disabled}
          icon={icon} // End icon (optional)
          placeholder="Enter text"
          className={`${
            frontIcon ? "!tw-pl-8" : "!tw-pl-3"
          } !tw-border !tw-border-gray-300 tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 tw-ring-4 tw-ring-transparent placeholder:tw-text-gray-500 placeholder:tw-opacity-100 focus:!tw-border-gray-900 focus:!tw-border-t-gray-900 focus:tw-ring-gray-900/10`}
          labelProps={{ className: "tw-hidden" }}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LabelInput;
