import avatarBorderColor from "./avatarBorderColor";

export const avatar = {
  styles: {
    base: {
      initial: {
        display: "tw-inline-block",
        position: "tw-relative",
        objectFit: "tw-object-cover",
        objectPosition: "tw-object-center",
      },
      withBorder: {
        border: "tw-border-2",
      },
    },
    sizes: {
      xs: {
        width: "tw-w-6",
        height: "tw-h-6",
        borderRadius: "tw-rounded-md",
      },
      sm: {
        width: "tw-w-9",
        height: "tw-h-9",
        borderRadius: "tw-rounded-md",
      },
      md: {
        width: "tw-w-12",
        height: "tw-h-12",
        borderRadius: "tw-rounded-lg",
      },
      lg: {
        width: "tw-w-[58px]",
        height: "tw-h-[58px]",
        borderRadius: "tw-rounded-lg",
      },
      xl: {
        width: "tw-w-[74px]",
        height: "tw-h-[74px]",
        borderRadius: "tw-rounded-xl",
      },
      xxl: {
        width: "tw-w-[110px]",
        height: "tw-h-[110px]",
        borderRadius: "tw-rounded-2xl",
      },
    },
    variants: {
      rounded: {},
      square: {
        borderRadius: "!tw-rounded-none",
      },
      circular: {
        borderRadius: "!tw-rounded-full",
      },
    },
    borderColor: avatarBorderColor,
  },
};

export default avatar;
