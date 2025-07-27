export const stepper = {
  styles: {
    base: {
      stepper: {
        width: "tw-w-full",
        position: "tw-relative",
        display: "tw-flex",
        alignItems: "tw-items-center",
        justifyContent: "tw-justify-between",
      },
      line: {
        initial: {
          position: "tw-absolute",
          left: "tw-left-0",
          top: "tw-top-2/4",
          height: "tw-h-0.5",
          width: "tw-w-full",
          transform: "tw--translate-y-2/4",
          backgroundColor: "tw-bg-gray-300",
        },
        active: {
          backgroundColor: "tw-bg-gray-900",
          transition: "tw-transition-all",
          duration: "tw-duration-500",
        },
      },
    },
  },
};

export default stepper;
