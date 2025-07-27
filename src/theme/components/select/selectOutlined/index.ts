import selectOutlinedLabel from "./selectOutlinedLabel";
import selectOutlinedColors from "./selectOutlinedColors";
import selectOutlinedLabelColors from "./selectOutlinedLabelColors";

const selectOutlined = {
  base: {
    select: {},
    label: selectOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "tw-h-10",
      },
      select: {
        fontSize: "tw-text-sm",
        px: "tw-px-3",
        py: "tw-py-2.5",
        borderRadius: "tw-rounded-[7px]",
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: "tw-leading-[3.75]",
          },
          open: {
            lineHeight: "tw-leading-tight",
          },
          withValue: {
            lineHeight: "tw-leading-tight",
          },
        },
      },
    },
    lg: {
      container: {
        height: "tw-h-11",
      },
      select: {
        fontSize: "tw-text-sm",
        px: "tw-px-3",
        py: "tw-py-3",
        borderRadius: "tw-rounded-[7px]",
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: "tw-leading-[4.1]",
          },
          open: {
            lineHeight: "tw-leading-tight",
          },
          withValue: {
            lineHeight: "tw-leading-tight",
          },
        },
      },
    },
  },
  colors: {
    select: selectOutlinedColors,
    label: selectOutlinedLabelColors,
  },
  states: {
    close: {
      select: {
        borderWidth: "tw-border",
      },
      label: {
        fontSize: "tw-text-sm",
        disabled: "peer-disabled:tw-text-blue-gray-400",
        before: {
          bt: "before:tw-border-t-transparent",
          bl: "before:tw-border-l-transparent",
        },
        after: {
          bt: "after:tw-border-t-transparent",
          br: "after:tw-border-r-transparent",
        },
      },
    },
    open: {
      select: {
        borderWidth: "tw-border-2",
        borderColor: "tw-border-t-transparent",
      },
      label: {
        fontSize: "tw-text-[11px]",
        disabled: "peer-disabled:tw-text-transparent",
        before: {
          bt: "before:tw-border-t-2",
          bl: "before:tw-border-l-2",
        },
        after: {
          bt: "after:tw-border-t-2",
          br: "after:tw-border-r-2",
        },
      },
    },
    withValue: {
      select: {
        borderWidth: "tw-border",
        borderColor: "tw-border-t-transparent",
      },
      label: {
        fontSize: "tw-text-[11px]",
        disabled: "peer-disabled:tw-text-transparent",
        before: {
          bt: "before:tw-border-t",
          bl: "before:tw-border-l",
        },
        after: {
          bt: "after:tw-border-t",
          br: "after:tw-border-r",
        },
      },
    },
  },
  error: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: "tw-border-red-500",
        },
        open: {
          borderColor: "tw-border-red-500",
          borderTopColor: "tw-border-t-transparent",
        },
        withValue: {
          borderColor: "tw-border-red-500",
          borderTopColor: "tw-border-t-transparent",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "tw-text-red-500",
          before: "before:tw-border-red-500",
          after: "after:tw-border-red-500",
        },
        open: {
          color: "tw-text-red-500",
          before: "before:tw-border-red-500",
          after: "after:tw-border-red-500",
        },
        withValue: {
          color: "tw-text-red-500",
          before: "before:tw-border-red-500",
          after: "after:tw-border-red-500",
        },
      },
    },
  },
  success: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: "tw-border-green-500",
        },
        open: {
          borderColor: "tw-border-green-500",
          borderTopColor: "tw-border-t-transparent",
        },
        withValue: {
          borderColor: "tw-border-green-500",
          borderTopColor: "tw-border-t-transparent",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "tw-text-green-500",
          before: "before:tw-border-green-500",
          after: "after:tw-border-green-500",
        },
        open: {
          color: "tw-text-green-500",
          before: "before:tw-border-green-500",
          after: "after:tw-border-green-500",
        },
        withValue: {
          color: "tw-text-green-500",
          before: "before:tw-border-green-500",
          after: "after:tw-border-green-500",
        },
      },
    },
  },
};

export default selectOutlined;
