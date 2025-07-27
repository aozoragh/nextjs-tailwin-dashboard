export const list = {
  styles: {
    base: {
      list: {
        display: "tw-flex",
        flexDirection: "tw-flex-col",
        gap: "tw-gap-1",
        minWidth: "tw-min-w-[240px]",
        p: "tw-p-2",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-base",
        fontWeight: "tw-font-normal",
        color: "tw-text-blue-gray-700",
      },
      item: {
        initial: {
          display: "tw-flex",
          alignItems: "tw-items-center",
          width: "tw-w-full",
          padding: "tw-p-3",
          borderRadius: "tw-rounded-lg",
          textAlign: "tw-text-start",
          lightHeight: "tw-leading-tight",
          transition: "tw-transition-all",
          bg: "hover:tw-bg-blue-gray-50 hover:tw-bg-opacity-80 focus:tw-bg-blue-gray-50 focus:tw-bg-opacity-80 active:tw-bg-blue-gray-50 active:tw-bg-opacity-80",
          color:
            "hover:tw-text-blue-gray-900 focus:tw-text-blue-gray-900 active:tw-text-blue-gray-900",
          outline: "tw-outline-none",
        },
        selected: {
          bg: "tw-bg-blue-gray-50/50",
          color: "tw-text-blue-gray-700",
        },
        disabled: {
          opacity: "tw-opacity-50",
          cursor: "tw-cursor-not-allowed",
          pointerEvents: "tw-pointer-events-none",
          userSelect: "tw-select-none",
          bg: "hover:tw-bg-transparent focus:tw-bg-transparent active:tw-bg-transparent",
          color:
            "hover:tw-text-blue-gray-500 focus:tw-text-blue-gray-500 active:tw-text-blue-gray-500",
        },
      },
      itemPrefix: {
        display: "tw-grid",
        placeItems: "tw-place-items-center",
        marginRight: "tw-mr-4",
      },
      itemSuffix: {
        display: "tw-grid",
        placeItems: "tw-place-items-center",
        marginRight: "tw-ml-auto tw-justify-self-end",
      },
    },
  },
};

export default list;
