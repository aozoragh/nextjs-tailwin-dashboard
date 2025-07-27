const textareaStaticLabel: object = {
  position: "-tw-top-2.5",
  fontSize: "tw-text-sm peer-focus:tw-text-sm",
  after: {
    content: "after:tw-content[' ']",
    display: "after:tw-block",
    width: "after:tw-w-full",
    position: "after:tw-absolute",
    bottom: "after:-tw-bottom-1",
    left: "tw-left-0",
    borderWidth: "after:tw-border-b-2",
    scale: "after:tw-scale-x-0",
    floated: {
      scale: "peer-focus:after:tw-scale-x-100",
    },
    transition: "after:tw-transition-transform after:tw-duration-300",
  },
};

export default textareaStaticLabel;
