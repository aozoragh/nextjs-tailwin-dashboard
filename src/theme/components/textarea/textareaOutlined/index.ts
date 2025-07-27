import textareaOutlinedLabel from "./textareaOutlinedLabel";
import textareaOutlinedColors from "./textareaOutlinedColors";
import textareaOutlinedLabelColors from "./textareaOutlinedLabelColors";

const textareaOutlined = {
  base: {
    textarea: {
      borderWidth: "placeholder-shown:tw-border",
      borderColor:
        "placeholder-shown:tw-border-blue-gray-200 placeholder-shown:tw-border-t-blue-gray-200",
      floated: {
        borderWidth: "tw-border focus:tw-border-2",
        borderColor: "tw-border-t-transparent focus:tw-border-t-transparent",
      },
    },
    label: textareaOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "tw-h-10",
      },
      textarea: {
        fontSize: "tw-text-sm",
        px: "tw-px-3",
        py: "tw-py-2.5",
        borderRadius: "tw-rounded-[7px]",
      },
      label: {
        lineHeight: "peer-placeholder-shown:tw-leading-[3.75]",
      },
    },
    lg: {
      container: {
        height: "tw-h-11",
      },
      textarea: {
        fontSize: "tw-text-sm",
        px: "tw-px-3",
        py: "tw-py-3",
        borderRadius: "tw-rounded-md",
      },
      label: {
        lineHeight: "peer-placeholder-shown:tw-leading-[4.1]",
      },
    },
  },
  colors: {
    textarea: textareaOutlinedColors,
    label: textareaOutlinedLabelColors,
  },
  error: {
    textarea: {
      borderColor:
        "tw-border-red-500 placeholder-shown:tw-border-t-red-500 placeholder-shown:tw-border-red-500",
      borderColorFocused: "focus:tw-border-red-500",
    },
    label: {
      color:
        "tw-text-red-500 peer-focus:tw-text-red-500 peer-placeholder-shown:tw-text-red-500",
      before: "before:tw-border-red-500 peer-focus:before:tw-border-red-500",
      after: "after:tw-border-red-500 peer-focus:after:tw-border-red-500",
    },
  },
  success: {
    textarea: {
      borderColor:
        "tw-border-green-500 placeholder-shown:tw-border-t-green-500 placeholder-shown:tw-border-green-500",
      borderColorFocused: "focus:tw-border-green-500",
    },
    label: {
      color:
        "tw-text-green-500 peer-focus:tw-text-green-500 peer-placeholder-shown:tw-text-green-500",
      before:
        "before:tw-border-green-500 peer-focus:before:tw-border-green-500",
      after: "after:tw-border-green-500 peer-focus:after:tw-border-green-500",
    },
  },
  shrink: {
    textarea: {
      borderTop: "!tw-border-t-transparent",
    },
    label: {
      fontSize: "!tw-text-[11px]",
      lineHeight: "!tw-leading-tight",
      borderColor:
        "before:!tw-border-blue-gray-200 after:!tw-border-blue-gray-200",
    },
  },
};

export default textareaOutlined;
