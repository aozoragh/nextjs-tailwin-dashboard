import selectStandardLabel from "./selectStandardLabel";
import selectStandardColors from "./selectStandardColors";
import selectStandardLabelColors from "./selectStandardLabelColors";

const selectStandard = {
  base: {
    select: {},
    label: selectStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "tw-h-11",
      },
      select: {
        fontSize: "tw-text-sm",
        pt: "tw-pt-4",
        pb: "tw-pb-1.5",
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: "tw-leading-[4.25]",
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
        height: "tw-h-12",
      },
      select: {
        fontSize: "tw-text-sm",
        px: "tw-px-px",
        pt: "tw-pt-5",
        pb: "tw-pb-2",
      },
      label: {
        initial: {},
        states: {
          close: {
            lineHeight: "tw-leading-[4.875]",
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
    select: selectStandardColors,
    label: selectStandardLabelColors,
  },
  states: {
    close: {
      select: {
        borderWidth: "tw-border-b",
      },
      label: {
        fontSize: "tw-text-sm",
        disabled: "peer-disabled:tw-text-blue-gray-400",
        after: {
          transform: "after:tw-scale-x-0",
        },
      },
    },
    open: {
      select: {
        borderWidth: "tw-border-b",
      },
      label: {
        fontSize: "tw-text-[11px]",
        disabled: "peer-disabled:tw-text-transparent",
        after: {
          transform: "after:tw-scale-x-100",
        },
      },
    },
    withValue: {
      select: {
        borderWidth: "tw-border-b",
      },
      label: {
        fontSize: "tw-text-[11px]",
        disabled: "peer-disabled:tw-text-transparent",
        after: {
          transform: "after:tw-scale-x-0",
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
        },
        withValue: {
          borderColor: "tw-border-red-500",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "tw-text-red-500",
          after: "after:tw-border-red-500",
        },
        open: {
          color: "tw-text-red-500",
          after: "after:tw-border-red-500",
        },
        withValue: {
          color: "tw-text-red-500",
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
        },
        withValue: {
          borderColor: "tw-border-green-500",
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: "tw-text-green-500",
          after: "after:tw-border-green-500",
        },
        open: {
          color: "tw-text-green-500",
          after: "after:tw-border-green-500",
        },
        withValue: {
          color: "tw-text-green-500",
          after: "after:tw-border-green-500",
        },
      },
    },
  },
};

export default selectStandard;
