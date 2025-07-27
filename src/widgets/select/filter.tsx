"use client";

import { Select, Option } from "@material-tailwind/react";
import { FC, ReactNode } from "react";

interface FilterProps {
  list?: {
    value: string;
    label: ReactNode | string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
}

const defaultList = [
  { value: "loremipsum", label: "Lorem Ipsum" },
  { value: "loremipsum", label: "Lorem Ipsum" },
  { value: "loremipsum", label: "Lorem Ipsum" },
  { value: "loremipsum", label: "Lorem Ipsum" },
  { value: "loremipsum", label: "Lorem Ipsum" },
];

const Filter: FC<FilterProps> = ({ list = defaultList, value, onChange }) => {
  return (
    <div className="tw-w-full">
      <Select
        label="Filter by"
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

export default Filter;
