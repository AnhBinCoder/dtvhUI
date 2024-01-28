import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    teal_200: "bg-teal-200 text-white-A700",
    teal_A100: "bg-teal-A100 text-blue_gray-900",
    blue_300: "bg-blue-300 text-white-A700",
    red_300: "bg-red-300 text-white-A700",
    red_500_03: "bg-red-500_03 text-white-A700",
    blue_400_19: "bg-blue-400_19",
    purple_400_63: "bg-purple-400_63",
    orange_600_63: "bg-orange-600_63",
    teal_400_63: "bg-teal-400_63",
    indigo_50: "bg-indigo-50",
    indigo_500: "bg-indigo-500 text-white-A700",
    amber_300: "bg-amber-300 text-gray-900_04",
    deep_orange_200: "bg-deep_orange-200 text-black-900",
    green_200: "bg-green-200 text-black-900",
    white_A700: "bg-white-A700 shadow-bs3 text-purple-200",
    gray_100: "bg-gray-100 text-blue_gray-700",
    red_50: "bg-red-50 text-red-500_01",
    pink_50_03: "bg-pink-50_03 text-purple-300",
    light_green_600_01: "bg-light_green-600_01 text-white-A700",
    cyan_50: "bg-cyan-50 text-green-A700_01",
    yellow_600: "bg-yellow-600 shadow-bs1 text-blue_gray-900",
    amber_900: "bg-amber-900 text-white-A700",
    yellow_600_01: "bg-yellow-600_01 text-black-900",
    amber_600: "bg-amber-600 text-white-A700",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    white_A700_cc: "bg-white-A700_cc text-gray-900_02",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900_51",
    indigo_600: "bg-indigo-600 text-white-A700",
    white_A700_a8: "bg-white-A700_a8 shadow-bs text-black-900_b2",
    light_green_600: "bg-light_green-600 text-white-A700",
    red_300_02: "bg-red-300_02 text-white-A700",
    gray_600_03: "bg-gray-600_03 text-white-A700",
    gray_100_90: "bg-gray-100_90 text-blue_gray-900_03",
    white_A700_90: "bg-white-A700_90 text-black-900_cc",
  },
  outline: {
    gray_300_01: "border border-gray-300_01 border-solid text-gray-900_99_01",
    indigo_500: "border border-indigo-500 border-solid text-indigo-500",
    black_900_01:
      "outline outline-[0.5px] outline-black-900_01 text-black-900_01",
    gray_600: "border border-gray-600 border-solid text-gray-600",
    teal_200: "border border-solid border-teal-200 text-blue_gray-700",
  },
  gradient: { pink_200_pink_300: "bg-gradient  shadow-bs2 text-white-A700" },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-1.5",
  md: "p-2.5",
  lg: "p-[13px]",
  xl: "pl-3 pr-4 py-4",
  "2xl": "p-7 sm:px-5",
  "3xl": "p-[35px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "teal_200",
    "teal_A100",
    "blue_300",
    "red_300",
    "red_500_03",
    "blue_400_19",
    "purple_400_63",
    "orange_600_63",
    "teal_400_63",
    "indigo_50",
    "indigo_500",
    "amber_300",
    "deep_orange_200",
    "green_200",
    "white_A700",
    "gray_100",
    "red_50",
    "pink_50_03",
    "light_green_600_01",
    "cyan_50",
    "yellow_600",
    "amber_900",
    "yellow_600_01",
    "amber_600",
    "blue_gray_700",
    "white_A700_cc",
    "blue_gray_100_01",
    "indigo_600",
    "white_A700_a8",
    "light_green_600",
    "red_300_02",
    "gray_600_03",
    "gray_100_90",
    "white_A700_90",
    "gray_300_01",
    "black_900_01",
    "gray_600",
    "pink_200_pink_300",
  ]),
};

export { Button };
