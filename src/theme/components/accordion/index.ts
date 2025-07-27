export const accordion = {
  styles: {
    base: {
      container: {
        display: "tw-block",
        position: "tw-relative",
        width: "tw-w-full",
      },
      header: {
        initial: {
          display: "tw-flex",
          justifyContent: "tw-justify-between",
          alignItems: "tw-items-center",
          width: "tw-w-full",
          py: "tw-py-4",
          borderWidth: "tw-border-b tw-border-b-blue-gray-100",
          color: "tw-text-blue-gray-700",
          fontSmoothing: "tw-antialiased",
          fontFamily: "tw-font-sans",
          fontSize: "tw-text-xl",
          textAlign: "tw-text-left",
          fontWeight: "tw-font-semibold",
          lineHeight: "tw-leading-snug",
          userSelect: "tw-select-none",
          hover: "hover:tw-text-blue-gray-900",
          transition: "tw-transition-colors",
        },
        active: { color: "tw-text-blue-gray-900" },
        icon: {
          ml: "tw-ml-4",
        },
      },
      body: {
        display: "tw-block",
        width: "tw-w-full",
        py: "tw-py-4",
        color: "tw-text-gray-700",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-sm",
        fontWeight: "tw-font-light",
        lineHeight: "tw-leading-normal",
      },
      disabled: {
        pointerEvents: "tw-pointer-events-none",
        opacity: "tw-opacity-50",
      },
    },
  },
};

export default accordion;
