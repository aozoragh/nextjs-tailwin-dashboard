const inputStandardLabel: object = {
  position: "-tw-top-1.5",
  fontSize: "peer-placeholder-shown:tw-text-sm",
  floated: {
    fontSize: "tw-text-[11px] peer-focus:tw-text-[11px]",
  },
  after: {
    content: "after:tw-content['']",
    display: "after:tw-block",
    width: "after:tw-w-full",
    position: "after:tw-absolute",
    bottom: "after:-tw-bottom-1.5",
    left: "tw-left-0",
    borderWidth: "after:tw-border-b-2",
    scale: "after:tw-scale-x-0",
    floated: {
      scale: "peer-focus:after:tw-scale-x-100",
    },
    transition: "after:tw-transition-transform after:tw-duration-300",
  },
};

export default inputStandardLabel;
