import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";

export const button = {
  styles: {
    base: {
      initial: {
        verticalAlign: "tw-align-middle",
        userSelect: "tw-select-none",
        fontFamily: "tw-font-sans",
        fontWeight: "tw-font-bold",
        textAlign: "tw-text-center",
        textTransform: "tw-uppercase",
        transition: "tw-transition-all",
        disabled:
          "disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none",
      },
      fullWidth: {
        display: "tw-block",
        width: "tw-w-full",
      },
    },
    sizes: {
      sm: {
        fontSize: "tw-text-xs",
        py: "tw-py-2",
        px: "tw-px-4",
        borderRadius: "tw-rounded-lg",
      },
      md: {
        fontSize: "tw-text-xs",
        py: "tw-py-3",
        px: "tw-px-6",
        borderRadius: "tw-rounded-lg",
      },
      lg: {
        fontSize: "tw-text-sm",
        py: "tw-py-3.5",
        px: "tw-px-7",
        borderRadius: "tw-rounded-lg",
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

export default button;
