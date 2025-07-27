import textareaOutlined from "./textareaOutlined";
import textareaStandard from "./textareaStandard";
import textareaStatic from "./textareaStatic";

export const textarea = {
  styles: {
    base: {
      container: {
        position: "tw-relative",
        width: "tw-w-full",
        minWidth: "tw-min-w-[200px]",
      },
      textarea: {
        peer: "tw-peer",
        width: "tw-w-full",
        height: "tw-h-full",
        minHeight: "tw-min-h-[100px]",
        bg: "tw-bg-transparent",
        color: "tw-text-blue-gray-700",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-normal",
        outline: "tw-outline tw-outline-0 focus:tw-outline-0",
        resize: "tw-resize-y",
        disabled:
          "disabled:tw-bg-blue-gray-50 disabled:tw-border-0 disabled:tw-resize-none",
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
        color: "peer-placeholder-shown:tw-text-blue-gray-500",
        lineHeight: "tw-leading-tight peer-focus:tw-leading-tight",
        disabled:
          "peer-disabled:tw-text-transparent peer-disabled:tw-peer-placeholder-shown:tw-text-blue-gray-500",
        transition: "tw-transition-all",
      },
    },
    variants: {
      outlined: textareaOutlined,
      standard: textareaStandard,
      static: textareaStatic,
    },
  },
};

export default textarea;
