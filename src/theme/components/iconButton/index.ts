import buttonFilled from "../button/buttonFilled";
import buttonGradient from "../button/buttonGradient";
import buttonOutlined from "../button/buttonOutlined";
import buttonText from "../button/buttonText";

export const iconButton = {
  styles: {
    base: {
      position: "tw-relative",
      verticalAlign: "tw-align-middle",
      userSelect: "tw-select-none",
      fontFamily: "tw-font-sans",
      fontWeight: "tw-font-medium",
      textAlign: "tw-text-center",
      textTransform: "tw-uppercase",
      transition: "tw-transition-all",
      disabled:
        "disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none",
    },
    sizes: {
      sm: {
        width: "tw-w-8",
        maxWidth: "tw-max-w-[32px]",
        height: "tw-h-8",
        maxHeight: "tw-max-h-[32px]",
        borderRadius: "tw-rounded-lg",
        fontSize: "tw-text-xs",
      },
      md: {
        width: "tw-w-10",
        maxWidth: "tw-max-w-[40px]",
        height: "tw-h-10",
        maxHeight: "tw-max-h-[40px]",
        borderRadius: "tw-rounded-lg",
        fontSize: "tw-text-xs",
      },
      lg: {
        width: "tw-w-12",
        maxWidth: "tw-max-w-[48px]",
        height: "tw-h-12",
        maxHeight: "tw-max-h-[48px]",
        borderRadius: "tw-rounded-lg",
        fontSize: "tw-text-sm",
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};

export default iconButton;
