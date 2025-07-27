"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Input, IconButton } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchInputProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [_value, setValue] = useState<string>(value);

  // Call onChange with the current value when Enter is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      onChange(inputRef.current.value);
    }
  };

  // Call onChange with the current value when the icon is clicked
  const handleIconClick = () => {
    if (inputRef.current) {
      onChange(inputRef.current.value);
    }
  };

  return (
    <div className="tw-relative tw-flex tw-w-full tw-max-w-full sm:tw-max-w-[20rem]">
      <Input
        label="Search"
        value={_value}
        onChange={(e) => setValue(e.target.value)}
        inputRef={inputRef}
        onKeyDown={handleKeyDown}
        className="tw-pr-20"
        containerProps={{
          className: "tw-min-w-0",
        }}
      />
      <IconButton
        size="sm"
        color={_value ? "gray" : "blue-gray"}
        disabled={!_value}
        className="!tw-absolute tw-right-1 tw-top-1"
        onClick={handleIconClick}
      >
        <MagnifyingGlassIcon
          strokeWidth={3}
          className="tw-h-6 tw-w-6 tw-text-white"
        />
      </IconButton>
    </div>
  );
}
