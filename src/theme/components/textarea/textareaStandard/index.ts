import textareaStandardLabel from "./textareaStandardLabel";
import textareaStandardColors from "./textareaStandardColors";
import textareaStandardLabelColors from "./textareaStandardLabelColors";

const textareaStandard = {
  base: {
    textarea: {
      borderWidth: "tw-border-b",
      borderColor: "placeholder-shown:tw-border-blue-gray-200",
    },
    label: textareaStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "tw-h-11",
      },
      textarea: {
        fontSize: "tw-text-sm",
        pt: "tw-pt-4",
        pb: "tw-pb-1.5",
      },
      label: {
        lineHeight: "peer-placeholder-shown:tw-leading-[4.25]",
      },
    },
    lg: {
      container: {
        height: "tw-h-12",
      },
      textarea: {
        fontSize: "tw-text-sm",
        px: "tw-px-px",
        pt: "tw-pt-5",
        pb: "tw-pb-2",
      },
      label: {
        lineHeight: "peer-placeholder-shown:tw-leading-[4.875]",
      },
    },
  },
  colors: {
    textarea: textareaStandardColors,
    label: textareaStandardLabelColors,
  },
  error: {
    textarea: {
      borderColor: "tw-border-red-500 placeholder-shown:tw-border-red-500",
      borderColorFocused: "focus:tw-border-red-500",
    },
    label: {
      color:
        "tw-text-red-500 peer-focus:tw-text-red-500 peer-placeholder-shown:tw-text-red-500",
      after: "after:tw-border-red-500 peer-focus:after:tw-border-red-500",
    },
  },
  success: {
    textarea: {
      borderColor: "tw-border-green-500 placeholder-shown:tw-border-green-500",
      borderColorFocused: "focus:tw-border-green-500",
    },
    label: {
      color:
        "tw-text-green-500 peer-focus:tw-text-green-500 peer-placeholder-shown:tw-text-green-500",
      after: "after:tw-border-green-500 peer-focus:after:tw-border-green-500",
    },
  },
  shrink: {
    textarea: {},
    label: {
      fontSize: "!tw-text-[11px]",
      lineHeight: "!tw-leading-tight",
    },
  },
};

export default textareaStandard;
