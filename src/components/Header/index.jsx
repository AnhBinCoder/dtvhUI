import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
          <div className="header-row mt-[26px] mb-[23px]">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-900"
              size="txtNicoMojiRegular26Gray900"
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
                  className="common-pointer hover:font-extrabold text-[15px] text-gray-900"
                  size="txtMulishRomanSemiBold15Gray900"
                  onClick={() => navigate("/homepage")}
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-gray-900"
                  size="txtMulishRomanSemiBold15Gray900"
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer hover:font-extrabold text-[15px] text-gray-900"
                  size="txtMulishRomanSemiBold15Gray900"
                  onClick={() => navigate("/exchangeone")}
                >
                  Exchange Timeshare
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-gray-900"
                  size="txtMulishSemiBold15Gray900"
                >
                  Contact Us
                </Text>
              </li>
              <li>
                <Text
                  className="hover:font-extrabold text-[15px] text-gray-900"
                  size="txtMulishSemiBold15Gray900"
                >
                  Help
                </Text>
              </li>
            </ul>
          </div>
          <Img
            className="h-[76px] md:h-auto sm:hidden object-cover rounded-[36px] w-[73px]"
            src="images/img_unsplashc8ta0gwpbqg.png"
            alt="unsplashc8ta0gw"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
