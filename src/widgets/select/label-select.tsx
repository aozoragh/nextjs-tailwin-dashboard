import { Input, Option, Select } from "@material-tailwind/react";
import { FC } from "react";

interface LabelWrapperProps {
  label: string;
  list: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
}

const LabelSelect: FC<LabelWrapperProps> = ({
  label,
  list,
  value,
  onChange,
}) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-1">
      <label className="tw-text-sm tw-font-medium tw-text-gray-700">
        {label}
      </label>
      <Select
        className={`!tw-border !tw-border-gray-300 tw-bg-white tw-text-gray-900 tw-shadow-lg tw-shadow-gray-900/5 tw-ring-4 tw-ring-transparent placeholder:tw-text-gray-500 placeholder:tw-opacity-100 focus:!tw-border-gray-900 focus:!tw-border-t-gray-900 focus:tw-ring-gray-900/10`}
        labelProps={{ className: "tw-hidden" }}
        variant="outlined"
        value={value}
        onChange={(value) => {
          if (value !== undefined && onChange) {
            onChange(value);
          }
        }}
      >
        {list.map((item, index) => (
          <Option key={`${item.value}_${index}`} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LabelSelect;
