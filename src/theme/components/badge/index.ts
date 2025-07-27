import badgeColors from "./badgeColors";

export const badge = {
  styles: {
    base: {
      container: {
        position: "tw-relative",
        display: "tw-inline-flex",
      },
      badge: {
        initial: {
          position: "tw-absolute",
          minWidth: "tw-min-w-[12px]",
          minHeight: "tw-min-h-[12px]",
          borderRadius: "tw-rounded-full",
          paddingY: "tw-py-1",
          paddingX: "tw-px-1",
          fontSize: "tw-text-xs",
          fontWeight: "tw-font-medium",
          content: "tw-content-['']",
          lineHeight: "tw-leading-none",
          display: "tw-grid",
          placeItems: "tw-place-items-center",
        },
        withBorder: {
          borderWidth: "tw-border-2",
          borderColor: "tw-border-white",
        },
        withContent: {
          minWidth: "tw-min-w-[24px]",
          minHeight: "tw-min-h-[24px]",
        },
      },
    },
    placements: {
      "top-start": {
        square: {
          top: "tw-top-[4%]",
          left: "tw-left-[2%]",
          translateX: "-tw-translate-x-2/4",
          translateY: "-tw-translate-y-2/4",
        },
        circular: {
          top: "tw-top-[14%]",
          left: "tw-left-[14%]",
          translateX: "tw--translate-x-2/4",
          translateY: "-tw-translate-y-2/4",
        },
      },
      "top-end": {
        square: {
          top: "tw-top-[4%]",
          right: "tw-right-[2%]",
          translateX: "tw-translate-x-2/4",
          translateY: "-tw-translate-y-2/4",
        },
        circular: {
          top: "tw-top-[14%]",
          right: "tw-right-[14%]",
          translateX: "tw-translate-x-2/4",
          translateY: "-tw-translate-y-2/4",
        },
      },
      "bottom-start": {
        square: {
          bottom: "tw-bottom-[4%]",
          left: "tw-left-[2%]",
          translateX: "-tw-translate-x-2/4",
          translateY: "tw-translate-y-2/4",
        },
        circular: {
          bottom: "tw-bottom-[14%]",
          left: "tw-left-[14%]",
          translateX: "-tw-translate-x-2/4",
          translateY: "tw-translate-y-2/4",
        },
      },
      "bottom-end": {
        square: {
          bottom: "tw-bottom-[4%]",
          right: "tw-right-[2%]",
          translateX: "tw-translate-x-2/4",
          translateY: "tw-translate-y-2/4",
        },
        circular: {
          bottom: "tw-bottom-[14%]",
          right: "tw-right-[14%]",
          translateX: "tw-translate-x-2/4",
          translateY: "tw-translate-y-2/4",
        },
      },
    },
    colors: badgeColors,
  },
};

export default badge;
