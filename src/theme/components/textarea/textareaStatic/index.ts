import textareaStaticLabel from "./textareaStaticLabel";
import textareaStaticColors from "./textareaStaticColors";
import textareaStaticLabelColors from "./textareaStaticLabelColors";

const textareaStatic = {
  base: {
    textarea: {
      borderWidth: "tw-border-b",
      borderColor: "placeholder-shown:tw-border-blue-gray-200",
    },
    label: textareaStaticLabel,
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
        lineHeight: "peer-placeholder-shown:tw-leading-tight",
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
        lineHeight: "peer-placeholder-shown:tw-leading-tight",
      },
    },
  },
  colors: {
    textarea: textareaStaticColors,
    label: textareaStaticLabelColors,
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
    label: {},
  },
};

export default textareaStatic;
