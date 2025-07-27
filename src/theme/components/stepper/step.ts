export const step = {
  styles: {
    base: {
      initial: {
        position: "tw-relative",
        zIndex: "tw-z-10",
        display: "tw-grid",
        placeItems: "tw-place-items-center",
        width: "tw-w-10",
        height: "tw-h-10",
        borderRadius: "tw-rounded-full",
        backgroundColor: "tw-bg-gray-300",
        color: "tw-text-gray-900",
        fontWeight: "tw-font-bold",
        transition: "tw-transition-all tw-duration-300",
      },
      active: {
        backgroundColor: "tw-bg-gray-900",
        color: "tw-text-white",
      },
      completed: {
        backgroundColor: "tw-bg-gray-900",
        color: "tw-text-white",
      },
    },
  },
};

export default step;
