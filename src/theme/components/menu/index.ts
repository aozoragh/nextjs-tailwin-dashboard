export const menu = {
  styles: {
    base: {
      menu: {
        bg: "tw-bg-white",
        minWidth: "tw-min-w-[180px]",
        p: "tw-p-3",
        border: "tw-border tw-border-blue-gray-50",
        borderRadius: "tw-rounded-md",
        boxShadow: "tw-shadow-lg tw-shadow-blue-gray-500/10",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-sm",
        fontWeight: "tw-font-normal",
        color: "tw-text-blue-gray-500",
        overflow: "tw-overflow-auto",
        outline: "focus:tw-outline-none",
        zIndex: "tw-z-[999]",
      },
      item: {
        initial: {
          display: "tw-block",
          width: "tw-w-full",
          pt: "tw-pt-[9px]",
          pb: "tw-pb-2",
          px: "tw-px-3",
          borderRadius: "tw-rounded-md",
          textAlign: "tw-text-start",
          lightHeight: "tw-leading-tight",
          cursor: "tw-cursor-pointer",
          userSelect: "tw-select-none",
          transition: "tw-transition-all",
          bg: "hover:tw-bg-blue-gray-50 hover:tw-bg-opacity-80 focus:tw-bg-blue-gray-50 focus:tw-bg-opacity-80 active:tw-bg-blue-gray-50 active:tw-bg-opacity-80",
          color:
            "hover:tw-text-blue-gray-900 focus:tw-text-blue-gray-900 active:tw-text-blue-gray-900",
          outline: "tw-outline-none",
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
    },
  },
};

export default menu;
