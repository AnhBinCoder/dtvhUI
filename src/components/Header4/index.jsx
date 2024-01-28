import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header4 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
          <div className="header-row mt-7 mb-6">
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
          <div className="flex flex-col sm:hidden items-center justify-start w-auto">
            <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
              <li>
                <Text
                  className="common-pointer hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishRomanSemiBold15"
                  onClick={() => navigate("/homepage")}
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
                  className="common-pointer hover:font-extrabold text-[15px] text-white-A700"
                  size="txtMulishRomanExtraBold15"
                  onClick={() => navigate("/exchangeone")}
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
          </div>
          <Img
            className="common-pointer h-[79px] md:h-auto sm:hidden rounded-[50%]"
            src="images/img_unsplashc8ta0gwpbqg_79x84.png"
            alt="unsplashc8ta0gw"
            onClick={() => navigate("/memberprofile")}
          />
        </div>
      </header>
    </>
  );
};

Header4.defaultProps = {};

export default Header4;
