import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
          <div className="header-row mt-[13px] mb-2.5">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
              size="txtNicoMojiRegular26"
            >
              WandarShare
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            className="common-pointer flex md:flex-col flex-row gap-10 sm:hidden items-center justify-start w-auto"
            onClick={() => navigate("/homepage")}
          >
            <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishRomanSemiBold15"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishRomanSemiBold15"
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishRomanExtraBold15"
                >
                  Exchange Timeshare
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishSemiBold15"
                >
                  Contact Us
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishSemiBold15"
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
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
