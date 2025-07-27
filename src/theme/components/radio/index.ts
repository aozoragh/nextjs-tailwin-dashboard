import radioColors from "./radioColors";

export const radio = {
  styles: {
    base: {
      root: {
        display: "tw-inline-flex",
        alignItems: "tw-items-center",
      },
      container: {
        position: "tw-relative",
        display: "tw-flex",
        alignItems: "tw-items-center",
        cursor: "tw-cursor-pointer",
        p: "tw-p-3",
        borderRadius: "tw-rounded-full",
      },
      input: {
        peer: "tw-peer",
        position: "tw-relative",
        appearance: "tw-appearance-none",
        width: "tw-w-5",
        height: "tw-h-5",
        borderWidth: "tw-border",
        borderRadius: "tw-rounded-full",
        borderColor: "tw-border-blue-gray-200",
        cursor: "tw-cursor-pointer",
        transition: "tw-transition-all",
        before: {
          content: "before:tw-content['']",
          display: "before:tw-block",
          bg: "before:tw-bg-blue-gray-500",
          width: "before:tw-w-12",
          height: "before:tw-h-12",
          borderRadius: "before:tw-rounded-full",
          position: "before:tw-absolute",
          top: "before:tw-top-2/4",
          left: "before:tw-left-2/4",
          transform: "before:-tw-translate-y-2/4 before:-tw-translate-x-2/4",
          opacity: "before:tw-opacity-0 hover:tw-before:opacity-10",
          transition: "before:tw-transition-opacity",
        },
      },
      label: {
        color: "tw-text-gray-700",
        fontWeight: "tw-font-light",
        userSelect: "tw-select-none",
        cursor: "tw-cursor-pointer",
        mt: "tw-mt-px",
      },
      icon: {
        position: "tw-absolute",
        top: "tw-top-2/4",
        left: "tw-left-2/4",
        translate: "-tw-translate-y-2/4 -tw-translate-x-2/4",
        pointerEvents: "tw-pointer-events-none",
        opacity: "tw-opacity-0 peer-checked:tw-opacity-100",
        transition: "tw-transition-opacity",
      },
      disabled: {
        opacity: "tw-opacity-50",
        pointerEvents: "tw-pointer-events-none",
      },
    },
    colors: radioColors,
  },
};

export default radio;
