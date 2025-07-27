const selectOutlinedLabel: object = {
  position: "-tw-top-1.5",
  before: {
    content: "before:tw-content[' ']",
    display: "before:tw-block",
    boxSizing: "before:tw-box-border",
    width: "before:tw-w-2.5",
    height: "before:tw-h-1.5",
    mt: "before:tw-mt-[6.5px]",
    mr: "before:tw-mr-1",
    borderRadius: "before:tw-rounded-tl-md",
    pointerEvents: "before:tw-pointer-events-none",
    transition: "before:tw-transition-all",
    disabled: "peer-disabled:before:tw-border-transparent",
  },
  after: {
    content: "after:tw-content[' ']",
    display: "after:tw-block",
    flexGrow: "after:tw-flex-grow",
    boxSizing: "after:tw-box-border",
    width: "after:tw-w-2.5",
    height: "after:tw-h-1.5",
    mt: "after:tw-mt-[6.5px]",
    ml: "after:tw-ml-1",
    borderRadius: "after:tw-rounded-tr-md",
    pointerEvents: "after:tw-pointer-events-none",
    transition: "after:tw-transition-all",
    disabled: "peer-disabled:after:tw-border-transparent",
  },
};

export default selectOutlinedLabel;
