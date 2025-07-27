import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

const card = {
  styles: {
    base: {
      initial: {
        position: "tw-relative",
        display: "tw-flex",
        flexDirection: "tw-flex-col",
        backgroundClip: "tw-bg-clip-border",
        borderRadius: "tw-rounded-xl",
      },
      shadow: {
        boxShadow: "tw-shadow-md",
      },
    },
    variants: {
      filled: cardFilled,
      gradient: cardGradient,
    },
  },
};

export default card;
