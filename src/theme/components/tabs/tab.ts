export const tab = {
  styles: {
    base: {
      tab: {
        initial: {
          display: "tw-flex",
          alignItems: "tw-items-center",
          justifyContent: "tw-justify-center",
          textAlign: "tw-text-center",
          width: "tw-w-full",
          height: "tw-h-full",
          position: "tw-relative",
          bg: "tw-bg-transparent",
          py: "tw-py-1",
          px: "tw-px-2",
          color: "tw-text-blue-gray-900",
          fontSmoothing: "tw-antialiased",
          fontFamily: "tw-font-sans",
          fontSize: "tw-text-base",
          fontWeight: "tw-font-normal",
          lineHeight: "tw-leading-relaxed",
          userSelect: "tw-select-none",
          cursor: "tw-cursor-pointer",
        },
        disabled: {
          opacity: "tw-opacity-50",
          cursor: "tw-cursor-not-allowed",
          pointerEvents: "tw-pointer-events-none",
          userSelect: "tw-select-none",
        },
      },
      indicator: {
        position: "tw-absolute",
        inset: "tw-inset-0",
        zIndex: "tw-z-10",
        height: "tw-h-full",
        bg: "tw-bg-white",
        borderRadius: "tw-rounded-md",
        boxShadow: "tw-shadow",
      },
    },
  },
};

export default tab;
