export const breadcrumbs = {
  styles: {
    base: {
      root: {
        initial: {
          width: "tw-w-max",
        },
        fullWidth: { display: "tw-block", width: "tw-w-full" },
      },
      list: {
        display: "tw-flex",
        flexWrap: "tw-flex-wrap",
        alignItems: "tw-items-center",
        width: "tw-w-full",
        bg: "tw-bg-blue-gray-50",
        bgOpacity: "tw-bg-opacity-60",
        py: "tw-py-2",
        px: "tw-px-4",
        borderRadius: "tw-rounded-md",
      },
      item: {
        initial: {
          display: "tw-flex",
          alignItems: "tw-items-center",
          color: "tw-text-blue-gray-900",
          fontSmoothing: "tw-antialiased",
          fontFamily: "tw-font-sans",
          fontSize: "tw-text-sm",
          fontWeight: "tw-font-normal",
          lineHeight: "tw-leading-normal",
          cursor: "tw-cursor-pointer",
          transition: "tw-transition-colors tw-duration-300",
          hover: "hover:tw-text-light-blue-500",
        },
        disabled: {
          pointerEvents: "tw-pointer-events-none",
        },
      },
      separator: {
        color: "tw-text-blue-gray-500",
        fontSize: "tw-text-sm",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-normal",
        lineHeight: "tw-leading-normal",
        px: "tw-mx-2",
        pointerEvents: "tw-pointer-events-none",
        userSelcet: "tw-select-none",
      },
    },
  },
};

export default breadcrumbs;
