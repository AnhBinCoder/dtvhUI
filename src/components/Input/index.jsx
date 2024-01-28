import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600_01",
    gray_100_02: "bg-gray-100_02 text-gray-900_75",
    gray_600_03: "bg-gray-600_03 text-white-A700",
    white_A700_90: "bg-white-A700_90 text-purple-300",
    white_A700_7e: "bg-white-A700_7e",
    blue_gray_900_02: "bg-blue_gray-900_02 text-white-A700_99",
    gray_100_05: "bg-gray-100_05 text-black-900",
    gray_100_90: "bg-gray-100_90 text-gray-900_01",
  },
  outline: {
    gray_900_33: "border border-gray-900_33 border-solid text-gray-900_a2",
    black_900_99:
      "outline outline-[0.5px] outline-black-900_99 text-black-900_66",
  },
};
const shapes = { square: "rounded-none", round: "rounded-md" };
const sizes = {
  xs: "p-[5px]",
  sm: "pb-[35px] pt-[7px] px-[7px]",
  md: "pb-[9px] pt-[18px] px-[9px]",
  lg: "pb-[21px] pl-[11px] sm:pr-5 pr-[21px] pt-[26px]",
  xl: "pb-3 pt-[13px] px-3",
  "3xl": "pb-[15px] pr-[15px] pt-[17px]",
  "2xl": "pb-3.5 pl-3 pr-3.5 pt-4",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_100_02",
    "gray_600_03",
    "white_A700_90",
    "white_A700_7e",
    "blue_gray_900_02",
    "gray_100_05",
    "gray_100_90",
    "gray_900_33",
    "black_900_99",
  ]),
};

export { Input };
