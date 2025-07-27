import React, { useRef, useEffect } from "react";
import { Checkbox } from "@material-tailwind/react";

export function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return <Checkbox checked={checked} inputRef={ref} onChange={onChange} />;
}
