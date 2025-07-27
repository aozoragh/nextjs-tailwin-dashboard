import React from "react";
import ratingColors from "./ratingColors";

export const rating = {
  styles: {
    base: {
      rating: {
        display: "tw-inline-flex",
        alignItems: "tw-items-center",
      },
      icon: {
        width: "tw-w-5",
        height: "tw-h-5",
        color: "tw-text-inherit",
        cursor: "tw-cursor-pointer",
      },
    },
    colors: ratingColors,
  },
};

export default rating;
