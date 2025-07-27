import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import alertOutlined from "./alertOutlined";
import alertGhost from "./alertGhost";

export const alert = {
  styles: {
    base: {
      alert: {
        position: "tw-relative",
        display: "tw-block",
        width: "tw-w-full",
        fontFamily: "tw-font-sans",
        fontSize: "tw-text-base",
        fontWeight: "tw-font-regular",
        px: "tw-px-4",
        py: "tw-py-4",
        borderRadius: "tw-rounded-lg",
      },
      action: {
        position: "!tw-absolute",
        top: "tw-top-3",
        right: "tw-right-3",
      },
    },
    variants: {
      filled: alertFilled,
      gradient: alertGradient,
      outlined: alertOutlined,
      ghost: alertGhost,
    },
  },
};

export default alert;
