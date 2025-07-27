import ghost from "./timelineIconColors/ghost";
import filled from "./timelineIconColors/filled";
import outlined from "./timelineIconColors/outlined";
import gradient from "./timelineIconColors/gradient";

export const timelineIcon = {
  styles: {
    base: {
      width: "tw-w-max",
      height: "tw-w-max",
      padding: "tw-p-1.5",
      position: "tw-relative",
      zIndex: "tw-z-[2]",
      flexShrink: "tw-flex-shrink-0",
      borderRadius: "tw-rounded-full",
      overflow: "tw-overflow-hidden",
    },
    variants: {
      ghost,
      filled,
      outlined,
      gradient,
    },
  },
};

export default timelineIcon;
