import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const Header2 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Text
          className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-700 text-center w-auto"
          size="txtNicoMojiRegular26Bluegray700"
        >
          WandarShare
        </Text>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
          <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
            <li>
              <Text
                className="common-pointer hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishSemiBold15Bluegray700"
                onClick={() => navigate("/homepage")}
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
                className="common-pointer hover:font-extrabold text-[15px] text-blue_gray-700"
                size="txtMulishRomanExtraBold15Bluegray700"
                onClick={() => navigate("/exchangeone")}
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
          <Button
            className="cursor-pointer font-extrabold font-mulish rounded-[3px] text-base text-center w-[140px]"
            color="yellow_600"
            size="xl"
            variant="fill"
          >
            Sign In
          </Button>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
