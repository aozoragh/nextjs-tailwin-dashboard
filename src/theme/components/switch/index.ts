import switchColors from "./switchColors";

export const switchButton = {
  styles: {
    base: {
      root: {
        display: "tw-inline-flex",
        alignItems: "tw-items-center",
      },
      container: {
        position: "tw-relative",
        display: "tw-inline-block",
        width: "tw-w-8",
        height: "tw-h-4",
        cursor: "tw-cursor-pointer",
        borderRadius: "tw-rounded-full",
      },
      input: {
        peer: "tw-peer",
        appearance: "tw-appearance-none",
        width: "tw-w-8",
        height: "tw-h-4",
        position: "tw-absolute",
        background: "tw-bg-blue-gray-100",
        borderRadius: "tw-rounded-full",
        cursor: "tw-cursor-pointer",
        transition: "tw-transition-colors tw-duration-300",
      },
      circle: {
        bg: "tw-bg-white",
        width: "tw-w-5",
        height: "tw-h-5",
        borderWidth: "tw-border",
        borderColor: "tw-border-blue-gray-100",
        borderRadius: "tw-rounded-full",
        boxShadow: "tw-shadow-md",
        position: "tw-absolute",
        top: "tw-top-2/4",
        left: "-tw-left-1",
        transform: "-tw-translate-y-2/4 peer-checked:tw-translate-x-full",
        transition: "tw-transition-all tw-duration-300",
        cursor: "tw-cursor-pointer",
        before: {
          content: "before:tw-content['']",
          display: "before:tw-block",
          bg: "before:tw-bg-blue-gray-500",
          width: "before:tw-w-10",
          height: "before:tw-h-10",
          borderRadius: "before:tw-rounded-full",
          position: "before:tw-absolute",
          top: "before:tw-top-2/4",
          left: "before:tw-left-2/4",
          transform: "before:-tw-translate-y-2/4 before:-tw-translate-x-2/4",
          transition: "before:tw-transition-opacity",
          opacity: "before:tw-opacity-0 hover:before:tw-opacity-10",
        },
      },
      ripple: {
        display: "tw-inline-block",
        top: "tw-top-2/4",
        left: "tw-left-2/4",
        transform: "tw--translate-x-2/4 -translate-y-2/4",
        p: "tw-p-5",
        borderRadius: "tw-rounded-full",
      },
      label: {
        color: "tw-text-gray-700",
        fontWeight: "tw-font-light",
        userSelect: "tw-select-none",
        cursor: "tw-cursor-pointer",
        mt: "tw-mt-px",
        ml: "tw-ml-3",
        mb: "tw-mb-0",
      },
      disabled: {
        opacity: "tw-opacity-50",
        pointerEvents: "tw-pointer-events-none",
      },
    },
    colors: switchColors,
  },
};

export default switchButton;
