import inputOutlined from "./inputOutlined";
import inputStandard from "./inputStandard";
import inputStatic from "./inputStatic";

export const input = {
  styles: {
    base: {
      container: {
        position: "tw-relative",
        width: "tw-w-full",
        minWidth: "tw-min-w-[200px]",
      },
      input: {
        peer: "tw-peer",
        width: "tw-w-full",
        height: "tw-h-full",
        bg: "tw-bg-transparent",
        color: "tw-text-blue-gray-700",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-normal",
        outline: "tw-outline tw-outline-0 focus:tw-outline-0",
        disabled: "disabled:tw-bg-blue-gray-50 disabled:tw-border-0",
        transition: "tw-transition-all",
      },
      label: {
        display: "tw-flex",
        width: "tw-w-full",
        height: "tw-h-full",
        userSelect: "tw-select-none",
        pointerEvents: "tw-pointer-events-none",
        position: "tw-absolute",
        left: "tw-left-0",
        fontWeight: "tw-font-normal",
        overflow: "!otw-verflow-visible",
        textOverflow: "tw-truncate",
        color: "peer-placeholder-shown:tw-text-blue-gray-500",
        lineHeight: "tw-leading-tight peer-focus:tw-leading-tight",
        disabled:
          "peer-disabled:tw-text-transparent peer-disabled:tw-peer-placeholder-shown:tw-text-blue-gray-500",
        transition: "tw-transition-all",
      },
      icon: {
        display: "tw-grid",
        placeItems: "tw-place-items-center",
        position: "tw-absolute",
        color: "tw-text-blue-gray-500",
      },
      asterisk: {
        display: "tw-inline-block",
        color: "tw-text-red-500",
        ml: "tw-ml-0.5",
      },
    },
    variants: {
      outlined: inputOutlined,
      standard: inputStandard,
      static: inputStatic,
    },
  },
};

export default input;
