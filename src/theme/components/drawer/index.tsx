export const drawer = {
  styles: {
    base: {
      drawer: {
        position: "tw-fixed",
        zIndex: "tw-z-[9999]",
        pointerEvents: "tw-pointer-events-auto",
        backgroundColor: "tw-bg-white",
        boxSizing: "tw-box-border",
        width: "tw-w-full",
        boxShadow: "tw-shadow-2xl tw-shadow-blue-gray-900/10",
      },
      overlay: {
        position: "tw-absolute",
        inset: "tw-inset-0",
        width: "tw-w-full",
        height: "tw-h-full",
        pointerEvents: "tw-pointer-events-auto",
        zIndex: "tw-z-[9995]",
        backgroundColor: "tw-bg-black",
        backgroundOpacity: "tw-bg-opacity-60",
        backdropBlur: "tw-backdrop-blur-sm",
      },
    },
  },
};

export default drawer;
