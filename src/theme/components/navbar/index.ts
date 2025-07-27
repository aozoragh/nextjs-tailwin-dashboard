import navbarFilled from "./navbarFilled";
import navbarGradient from "./navbarGradient";

export const navbar = {
  styles: {
    base: {
      navbar: {
        initial: {
          display: "tw-block",
          width: "tw-w-full",
          maxWidth: "tw-max-w-screen-2xl",
          borderRadius: "tw-rounded-xl",
          py: "tw-py-4",
          px: "tw-px-8",
        },
        shadow: {
          boxShadow: "tw-shadow-md",
        },
        blurred: {
          backdropFilter: "tw-backdrop-saturate-200 tw-backdrop-blur-2xl",
          bgOpacity: "tw-bg-opacity-80",
          borderWidth: "tw-border",
          borderColor: "tw-border-white/80",
        },
        fullWidth: {
          width: "tw-w-full",
          maxWidth: "tw-max-w-full",
          rounded: "tw-rounded-none",
          px: "tw-px-4",
        },
      },
      mobileNav: {
        display: "tw-block",
        width: "tw-w-full",
        basis: "tw-basis-full",
        overflow: "tw-overflow-hidden",
      },
    },
    variants: {
      filled: navbarFilled,
      gradient: navbarGradient,
    },
  },
};

export default navbar;
