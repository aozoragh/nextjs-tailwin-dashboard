import typographyColors from "./typographyColors";

export const typography = {
  styles: {
    variants: {
      h1: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-5xl",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-tight",
      },
      h2: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-4xl",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-[1.3]",
      },
      h3: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-3xl",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-snug",
      },
      h4: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-2xl",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-snug",
      },
      h5: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-xl",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-snug",
      },
      h6: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        letterSpacing: "tw-tracking-normal",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-base",
        fontWeight: "tw-font-semibold",
        lineHeight: "tw-leading-relaxed",
      },
      lead: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-xl",
        fontWeight: "tw-font-normal",
        lineHeight: "tw-leading-relaxed",
      },
      paragraph: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-base",
        fontWeight: "tw-font-light",
        lineHeight: "tw-leading-relaxed",
      },
      small: {
        display: "tw-block",
        fontSmoothing: "tw-antialiased",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-sm",
        fontWeight: "tw-font-light",
        lineHeight: "tw-leading-normal",
      },
    },
    textGradient: {
      bgClip: "tw-bg-clip-text",
      color: "tw-text-transparent",
    },
    colors: typographyColors,
  },
};

export default typography;
