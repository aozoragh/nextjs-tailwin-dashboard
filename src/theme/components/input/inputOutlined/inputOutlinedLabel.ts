const inputOutlinedLabel: object = {
  position: "-tw-top-1.5",
  fontSize: "peer-placeholder-shown:tw-text-sm",
  floated: {
    fontSize: "tw-text-[11px] peer-focus:tw-text-[11px]",
  },
  before: {
    content: "before:tw-content[' ']",
    display: "before:tw-block",
    boxSizing: "before:tw-box-border",
    width: "before:tw-w-2.5",
    height: "before:tw-h-1.5",
    mt: "before:tw-mt-[6.5px]",
    mr: "before:tw-mr-1",
    borderColor: "peer-placeholder-shown:before:tw-border-transparent",
    borderRadius: "before:tw-rounded-tl-md",
    floated: {
      bt: "before:tw-border-t peer-focus:before:tw-border-t-2",
      bl: "before:tw-border-l peer-focus:before:tw-border-l-2",
    },
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
    borderColor: "peer-placeholder-shown:after:tw-border-transparent",
    borderRadius: "after:tw-rounded-tr-md",
    floated: {
      bt: "after:tw-border-t peer-focus:after:tw-border-t-2",
      br: "after:tw-border-r peer-focus:after:tw-border-r-2",
    },
    pointerEvents: "after:tw-pointer-events-none",
    transition: "after:tw-transition-all",
    disabled: "peer-disabled:after:tw-border-transparent",
  },
};

export default inputOutlinedLabel;
