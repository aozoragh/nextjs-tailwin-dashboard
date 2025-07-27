import sliderColor from "./sliderColor";

export const slider = {
  styles: {
    base: {
      container: {
        position: "tw-relative",
        width: "tw-w-full",
        minWidth: "tw-min-w-[200px]",
      },
      slider: {
        width: "tw-w-full",
        position: "tw-absolute",
        inset: "tw-inset-0",
        backgroundColor: "tw-bg-transparent",
        cursor: "tw-cursor-pointer",
        outline: "focus:tw-outline-none focus:tw-outline-0",
        appearance: "tw-appearance-none [-webkit-appearance:tw-none]",
      },
      track: {
        height:
          "[&::-webkit-slider-runnable-track]:tw-h-full [&::-moz-range-track]:tw-h-full",
        borderRadius:
          "[&::-webkit-slider-runnable-track]:tw-rounded-full [&::-moz-range-track]:tw-rounded-full",
        backgroundColor:
          "[&::-webkit-slider-runnable-track]:tw-bg-blue-gray-100 [&::-moz-range-track]:tw-bg-blue-gray-100",
      },
      thumb: {
        appearance:
          "[&::-moz-range-thumb]:tw-appearance-none [&::-moz-range-thumb]:[-webkit-appearance:tw-none] [&::-webkit-slider-thumb]:tw-appearance-none [&::-webkit-slider-thumb]:[-webkit-appearance:tw-none]",
        borderRadius:
          "tw-[&::-moz-range-thumb]:tw-rounded-full [&::-webkit-slider-thumb]:tw-rounded-full",
        border:
          "tw-[&::-moz-range-thumb]:tw-border-0 [&::-webkit-slider-thumb]:tw-border-0",
        ringWidth:
          "tw-[&::-moz-range-thumb]:tw-ring-2 [&::-webkit-slider-thumb]:tw-ring-2",
        ringColor:
          "tw-[&::-moz-range-thumb]:tw-ring-current [&::-webkit-slider-thumb]:tw-ring-current",
        backgroundColor:
          "tw-[&::-moz-range-thumb]:tw-bg-white [&::-webkit-slider-thumb]:tw-bg-white",
        position:
          "tw-[&::-moz-range-thumb]:tw-relative [&::-webkit-slider-thumb]:tw-relative",
        zIndex:
          "tw-[&::-moz-range-thumb]:tw-z-20 [&::-webkit-slider-thumb]:tw-z-20",
      },
      bar: {
        position: "tw-absolute",
        inset: "tw-inset-0",
        zIndex: "tw-z-10",
        borderRadius: "tw-rounded-l-full",
        height: "tw-h-full",
        pointerEvents: "tw-pointer-events-none",
        backgroundColor: "tw-bg-current",
      },
    },
    sizes: {
      sm: {
        container: {
          height: "tw-h-1",
        },
        thumb: {
          width:
            "[&::-moz-range-thumb]:tw-w-2.5 [&::-webkit-slider-thumb]:tw-w-2.5",
          height:
            "[&::-moz-range-thumb]:tw-h-2.5 [&::-webkit-slider-thumb]:tw-h-2.5",
          marginTop:
            "[&::-moz-range-thumb]:-tw-mt-[3px] [&::-webkit-slider-thumb]:-tw-mt-[3px]",
        },
        slider: {},
        track: {},
        bar: {},
      },
      md: {
        container: {
          height: "tw-h-2",
        },
        thumb: {
          width:
            "[&::-moz-range-thumb]:tw-w-3.5 [&::-webkit-slider-thumb]:tw-w-3.5",
          height:
            "[&::-moz-range-thumb]:tw-h-3.5 [&::-webkit-slider-thumb]:tw-h-3.5",
          marginTop:
            "[&::-moz-range-thumb]:-tw-mt-[3px] [&::-webkit-slider-thumb]:-tw-mt-[3px]",
        },
        slider: {},
        track: {},
        bar: {},
      },
      lg: {
        container: {
          height: "tw-h-3",
        },
        thumb: {
          width:
            "[&::-moz-range-thumb]:tw-w-5 [&::-webkit-slider-thumb]:tw-w-5",
          height:
            "[&::-moz-range-thumb]:tw-h-5 [&::-webkit-slider-thumb]:tw-h-5",
          marginTop:
            "[&::-moz-range-thumb]:-tw-mt-1 [&::-webkit-slider-thumb]:-tw-mt-1",
        },
        slider: {},
        track: {},
        bar: {},
      },
    },
    colors: sliderColor,
  },
};

export default slider;
