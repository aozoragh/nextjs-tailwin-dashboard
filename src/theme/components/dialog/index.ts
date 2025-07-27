export const dialog = {
  styles: {
    base: {
      backdrop: {
        display: "tw-grid",
        placeItems: "tw-place-items-center",
        position: "tw-fixed",
        top: 0,
        left: 0,
        width: "tw-w-screen",
        height: "tw-h-screen",
        backgroundColor: "tw-bg-black",
        backgroundOpacity: "tw-bg-opacity-60",
        backdropFilter: "tw-backdrop-blur-sm",
      },
      container: {
        position: "tw-relative",
        bg: "tw-bg-white",
        m: "tw-m-4",
        borderRadius: "tw-rounded-lg",
        boxShadow: "tw-shadow-2xl",
        color: "tw-text-blue-gray-500",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-base",
        fontWeight: "tw-font-light",
        lineHeight: "tw-leading-relaxed",
      },
    },
    sizes: {
      xs: {
        width: "tw-w-full md:tw-w-3/5 lg:tw-w-2/5 2xl:tw-w-1/4",
        minWidth:
          "tw-min-w-[80%] md:tw-min-w-[60%] lg:tw-min-w-[40%] 2xl:tw-min-w-[25%]",
        maxWidth:
          "tw-max-w-[80%] md:tw-max-w-[60%] lg:tw-max-w-[40%] 2xl:tw-max-w-[25%]",
      },
      sm: {
        width: "tw-w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
        minWidth:
          "tw-min-w-[80%] md:tw-min-w-[66.666667%] lg:tw-min-w-[50%] 2xl:tw-min-w-[33.333333%]",
        maxWidth:
          "tw-max-w-[80%] md:tw-max-w-[66.666667%] lg:tw-max-w-[50%] 2xl:tw-max-w-[33.333333%]",
      },
      md: {
        width: "tw-w-full md:w-3/4 lg:w-3/5 2xl:w-2/5",
        minWidth:
          "tw-min-w-[90%] md:tw-min-w-[75%] lg:tw-min-w-[60%] 2xl:tw-min-w-[40%]",
        maxWidth:
          "tw-max-w-[90%] md:tw-max-w-[75%] lg:tw-max-w-[60%] 2xl:tw-max-w-[40%]",
      },
      lg: {
        width: "tw-w-full md:w-5/6 lg:w-3/4 2xl:w-3/5",
        minWidth:
          "tw-min-w-[90%] md:tw-min-w-[83.333333%] lg:tw-min-w-[75%] 2xl:tw-min-w-[60%]",
        maxWidth:
          "tw-max-w-[90%] md:tw-max-w-[83.333333%] lg:tw-max-w-[75%] 2xl:tw-max-w-[60%]",
      },
      xl: {
        width: "tw-w-full md:w-5/6 2xl:w-3/4",
        minWidth: "tw-min-w-[95%] md:tw-min-w-[83.333333%] 2xl:tw-min-w-[75%]",
        maxWidth: "tw-max-w-[95%] md:tw-max-w-[83.333333%] 2xl:tw-max-w-[75%]",
      },
      xxl: {
        display: "tw-flex",
        flexDirection: "tw-flex-col",
        width: "tw-w-screen",
        minWidth: "tw-min-w-[100vw]",
        maxWidth: "tw-max-w-[100vw]",
        height: "tw-h-screen",
        minHeight: "tw-min-h-[100vh]",
        maxHeight: "tw-max-h-[100vh]",
        m: "tw-m-0",
        borderRadius: "tw-rounded-none",
      },
    },
  },
};

export default dialog;
