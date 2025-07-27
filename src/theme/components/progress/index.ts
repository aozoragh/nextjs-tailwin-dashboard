import progressFilled from "./progressFilled";
import progressGradient from "./progressGradient";

export const progress = {
  styles: {
    base: {
      container: {
        initial: {
          display: "tw-flex",
          justifyContent: "tw-flex-start",
          bg: "tw-bg-blue-gray-50",
          overflow: "tw-overflow-hidden",
          width: "tw-w-full",
          fontFamily: "tw-font-sans",
          borderRadius: "tw-rounded-full",
          fontSize: "tw-text-xs",
          fontWeight: "tw-font-medium",
        },
        withLabel: {},
      },
      bar: {
        display: "tw-flex",
        justifyContent: "tw-justify-center",
        alignItems: "tw-items-center",
        height: "tw-h-full",
        overflow: "tw-overflow-hidden",
        wordBreak: "tw-break-all",
        borderRadius: "tw-rounded-full",
      },
    },
    sizes: {
      sm: {
        container: {
          initial: {
            height: "tw-h-1.5",
          },
          withLabel: {
            height: "tw-h-3.5",
          },
        },
        bar: {},
      },
      md: {
        container: {
          initial: {
            height: "tw-h-2.5",
          },
          withLabel: {
            height: "tw-h-4",
          },
        },
        bar: {},
      },
      lg: {
        container: {
          initial: {
            height: "tw-h-3.5",
          },
          withLabel: {
            height: "tw-h-5",
          },
        },
        bar: {},
      },
    },
    variants: {
      filled: progressFilled,
      gradient: progressGradient,
    },
  },
};

export default progress;
