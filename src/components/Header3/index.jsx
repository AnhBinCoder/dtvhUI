import React from "react";

import { Img, Text } from "components";

const Header3 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-700 text-center w-auto"
          size="txtNicoMojiRegular26Bluegray700"
        >
          WandarShare
        </Text>
        <div className="flex flex-col items-center justify-start w-auto sm:w-full">
          <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
            <li>
              <Text
                className="hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishSemiBold15Bluegray700"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishSemiBold15Bluegray700"
              >
                About Us
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishRomanExtraBold15Bluegray700"
              >
                Exchange Timeshare
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishSemiBold15Bluegray700"
              >
                Contact Us
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishSemiBold15Bluegray700"
              >
                Help
              </Text>
            </li>
          </ul>
        </div>
        <Img
          className="h-[74px] md:h-auto rounded-[50%] w-[75px]"
          src="images/img_unsplashc8ta0gwpbqg_74x75.png"
          alt="unsplashc8ta0gw"
        />
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
