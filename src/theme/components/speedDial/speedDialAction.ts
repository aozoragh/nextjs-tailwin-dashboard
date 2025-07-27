export interface SpeedDialActionStyleTypes {
  styles?: object;
}

export const speedDialAction: SpeedDialActionStyleTypes = {
  styles: {
    display: "tw-flex",
    flexDirection: "tw-flex-col",
    alignItems: "tw-items-center",
    justifyContent: "tw-justify-center",
    gap: "tw-gap-1",
    padding: "tw-p-1",
    margin: "tw-m-0.5",
    borderWidth: "tw-border",
    minWidth: "tw-min-w-[48px]",
    fontFamily: "tw-font-normal",
    minHeight: "tw-min-h-[48px]",
    backgroundColor: "tw-bg-white",
    borderRadius: "tw-rounded-full",
    borderColor: "tw-border-blue-gray-50",
    scale: "hover:tw-scale-110 focus:tw-scale-110 active:tw-scale-100",
    transition: "tw-transition-transform tw-duration-300 tw-ease-in-out",
  },
};

export default speedDialAction;
