import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipOutlined from "./chipOutlined";
import chipGhost from "./chipGhost";

export const chip = {
  styles: {
    base: {
      chip: {
        position: "tw-relative",
        display: "tw-grid",
        placeItems: "tw-items-center",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-bold",
        textTransform: "tw-uppercase",
        lineHeight: "tw-leading-none",
        whiteSpace: "tw-whitespace-nowrap",
        userSelect: "tw-select-none",
      },
      action: {
        position: "!tw-absolute",
        top: "tw-top-2/4",
        right: "tw-right-1",
        translate: "-tw-translate-y-2/4",
        mx: "tw-mx-px",
        rounded: "tw-rounded-md",
      },
      icon: {
        position: "tw-absolute",
        top: "tw-top-2/4",
        translate: "-tw-translate-y-2/4",
      },
    },
    sizes: {
      sm: {
        chip: {
          py: "tw-py-1",
          px: "tw-px-2",
          fontSize: "tw-text-xs",
          borderRadius: "tw-rounded-md",
        },
        action: {
          width: "tw-w-4",
          height: "tw-h-4",
        },
        icon: {
          width: "tw-w-4",
          height: "tw-h-4",
          left: "tw-left-1",
        },
      },
      md: {
        chip: {
          py: "tw-py-1.5",
          px: "tw-px-3",
          fontSize: "tw-text-xs",
          borderRadius: "tw-rounded-lg",
        },
        action: {
          width: "tw-w-5",
          height: "tw-h-5",
        },
        icon: {
          width: "tw-w-5",
          height: "tw-h-5",
          left: "tw-left-1.5",
        },
      },
      lg: {
        chip: {
          py: "tw-py-2",
          px: "tw-px-4",
          fontSize: "tw-text-xs",
          borderRadius: "tw-rounded-lg",
        },
        action: {
          width: "tw-w-6",
          height: "tw-h-6",
        },
        icon: {
          width: "tw-w-6",
          height: "tw-h-6",
          left: "tw-left-1.5",
        },
      },
    },
    variants: {
      filled: chipFilled,
      gradient: chipGradient,
      outlined: chipOutlined,
      ghost: chipGhost,
    },
  },
};

export default chip;
