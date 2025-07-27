import React from "react";

export const carousel = {
  defaultProps: {
    prevArrow: ({ loop, handlePrev, firstIndex }: any) => {
      return (
        <button
          onClick={handlePrev}
          disabled={!loop && firstIndex}
          className="!tw-absolute tw-top-2/4 tw-left-4 -tw-translate-y-2/4 tw-rounded-full tw-select-none tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-w-12 tw-max-w-[48px] tw-h-12 tw-max-h-[48px] tw-text-white hover:tw-bg-white/10 active:tw-bg-white/30 tw-grid tw-place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            className="-tw-ml-1 tw-h-7 tw-w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      );
    },
    nextArrow: ({ loop, handleNext, lastIndex }: any) => (
      <button
        onClick={handleNext}
        disabled={!loop && lastIndex}
        className="!tw-absolute tw-top-2/4 tw-right-4 -tw-translate-y-2/4 tw-rounded-full tw-select-none tw-transition-all disabled:tw-opacity-50 disabled:tw-shadow-none disabled:tw-pointer-events-none tw-w-12 tw-max-w-[48px] tw-h-12 tw-max-h-[48px] tw-text-white hover:tw-bg-white/10 active:tw-bg-white/30 tw-grid tw-place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="tw-ml-1 tw-h-7 tw-w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    ),
    navigation: ({ setActiveIndex, activeIndex, length }: any) => (
      <div className="tw-absolute tw-bottom-4 tw-left-2/4 tw-z-50 tw-flex -tw-translate-x-2/4 tw-gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`tw-block tw-h-3 tw-w-3 tw-cursor-pointer tw-rounded-full tw-transition-colors tw-content-[''] ${
              activeIndex === i ? "tw-bg-white" : "tw-bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    ),
  },
  styles: {
    base: {
      carousel: {
        position: "tw-relative",
        width: "tw-w-full",
        height: "tw-h-full",
        overflowX: "tw-overflow-x-hidden",
        display: "tw-flex",
      },

      slide: {
        width: "tw-w-full",
        height: "tw-h-full",
        display: "tw-inline-block",
        flex: "tw-flex-none",
      },
    },
  },
};

export default carousel;
