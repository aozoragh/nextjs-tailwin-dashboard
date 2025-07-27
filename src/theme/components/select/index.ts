import selectOutlined from "./selectOutlined";
import selectStandard from "./selectStandard";
import selectStatic from "./selectStatic";

export const select = {
  styles: {
    base: {
      container: {
        position: "tw-relative",
        width: "tw-w-full",
        minWidth: "tw-min-w-[200px]",
      },
      select: {
        peer: "tw-peer",
        width: "tw-w-full",
        height: "tw-h-full",
        bg: "tw-bg-transparent",
        color: "tw-text-blue-gray-700",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-normal",
        textAlign: "tw-text-left",
        outline: "tw-outline tw-outline-0 focus:tw-outline-0",
        disabled: "disabled:tw-bg-blue-gray-50 disabled:tw-border-0",
        transition: "tw-transition-all",
      },
      arrow: {
        initial: {
          display: "tw-grid",
          placeItems: "tw-place-items-center",
          position: "tw-absolute",
          top: "tw-top-2/4",
          right: "tw-right-2",
          pt: "tw-pt-px",
          width: "tw-w-5",
          height: "tw-h-5",
          color: "tw-text-blue-gray-400",
          transform: "tw-rotate-0 -tw-translate-y-2/4",
          transition: "tw-transition-all",
        },
        active: {
          transform: "tw-rotate-180",
          mt: "tw-mt-px",
        },
      },
      label: {
        display: "tw-flex",
        width: "tw-w-full",
        height: "tw-h-full",
        userSelect: "tw-select-none",
        pointerEvents: "tw-pointer-events-none",
        position: "tw-absolute",
        left: "tw-left-0",
        fontWeight: "tw-font-normal",
        transition: "tw-transition-all",
      },
      menu: {
        width: "tw-w-full",
        maxHeight: "tw-max-h-96",
        bg: "tw-bg-white",
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
      },
      option: {
        initial: {
          pt: "tw-pt-[9px]",
          pb: "tw-pb-2",
          px: "tw-px-3",
          borderRadius: "tw-rounded-md",
          lightHeight: "tw-leading-tight",
          cursor: "tw-cursor-pointer",
          userSelect: "tw-select-none",
          background: "hover:tw-bg-blue-gray-50 focus:tw-bg-blue-gray-50",
          opacity: "hover:tw-bg-opacity-80 focus:tw-bg-opacity-80",
          color: "hover:tw-text-blue-gray-900 focus:tw-text-blue-gray-900",
          outline: "tw-outline tw-outline-0",
          transition: "tw-transition-all",
        },
        active: {
          bg: "tw-bg-blue-gray-50 tw-bg-opacity-80",
          color: "tw-text-blue-gray-900",
        },
        disabled: {
          opacity: "tw-opacity-50",
          cursor: "tw-cursor-not-allowed",
          userSelect: "tw-select-none",
          pointerEvents: "tw-pointer-events-none",
        },
      },
    },
    variants: {
      outlined: selectOutlined,
      standard: selectStandard,
      static: selectStatic,
    },
  },
};

export default select;
