import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

const cardHeader = {
  styles: {
    base: {
      initial: {
        position: "tw-relative",
        backgroundClip: "tw-bg-clip-border",
        mt: "tw-mt-4",
        mx: "tw-mx-4",
        borderRadius: "tw-rounded-xl",
        overflow: "tw-overflow-hidden",
      },
      shadow: {
        boxShadow: "tw-shadow-lg",
      },
      floated: {
        mt: "-tw-mt-6",
      },
    },
    variants: {
      filled: cardFilled,
      gradient: cardGradient,
    },
  },
};

export default cardHeader;
