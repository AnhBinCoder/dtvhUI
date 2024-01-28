import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, RatingBar, SelectBox, Text } from "components";
import Footer from "components/Footer";

const languageFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Exchange4MyUnitPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
              <div className="header-row mt-[25px] mb-[22px]">
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
              <div className="flex flex-col font-mulish sm:hidden items-center justify-start w-auto">
                <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
                  <li>
                    <a className="hover:font-extrabold text-[15px] text-white-A700">
                      <Text
                        className="common-pointer"
                        size="txtMulishRomanSemiBold15"
                        onClick={() => navigate("/homepage")}
                      >
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishRomanSemiBold15">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-extrabold text-[15px] text-white-A700">
                      <Text
                        className="common-pointer"
                        size="txtMulishRomanExtraBold15"
                        onClick={() => navigate("/exchangeone")}
                      >
                        Exchange Timeshare
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishSemiBold15">Contact Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishSemiBold15">Help</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <Img
                className="common-pointer h-[74px] md:h-auto sm:hidden rounded-[50%] w-[75px]"
                src="images/img_unsplashc8ta0gwpbqg_74x75.png"
                alt="unsplashc8ta0gw"
                onClick={() => navigate("/memberprofile")}
              />
            </div>
          </header>
        </div>
        <div className="flex flex-col font-sourceserifpro md:gap-10 gap-[77px] items-center justify-start max-w-[1079px] mt-[53px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1079px] w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                size="txtSourceSerifProSemiBold36"
              >
                My Units Availability
              </Text>
              <Img
                className="h-10 w-[283px]"
                src="images/img_frame.svg"
                alt="frame"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start rounded shadow-bs7 w-full">
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-start w-[63%] md:w-full">
                  <Img
                    className="h-[140px] sm:h-auto object-cover rounded w-[28%] md:w-full"
                    src="images/img_image40_140x170.png"
                    alt="imageForty"
                  />
                  <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
                    <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                      <Button
                        className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                        color="teal_200"
                        size="sm"
                        variant="fill"
                      >
                        Water Activities
                      </Button>
                      <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                      <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
                        <RatingBar
                          className="flex justify-between w-[70px]"
                          value={4}
                          starCount={5}
                          color="#cfd9de"
                          activeColor="#ffa331"
                          size={14}
                        ></RatingBar>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          (584 reviews)
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="mt-[11px] text-blue_gray-900 text-shadow-ts text-xl"
                      size="txtVolkhovBold20"
                    >
                      Westminster To Greenwich River Themes{" "}
                    </Text>
                    <div className="flex flex-row font-mulish gap-[15px] items-center justify-start mt-3.5 w-[337px]">
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[22%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtMulishSemiBold14"
                        >
                          2 hours
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                      <Img
                        className="h-[18px] w-3"
                        src="images/img_linkedin_cyan_600.svg"
                        alt="linkedin"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtMulishSemiBold14"
                        >
                          456 abc{" "}
                        </Text>
                      </div>
                      <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                      <Img
                        className="h-[18px] w-3"
                        src="images/img_linkedin_cyan_600.svg"
                        alt="linkedin_One"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtMulishSemiBold14"
                      >
                        Hoi An
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                <div className="md:h-[67px] h-[92px] md:mt-0 mt-1.5 relative w-[30%] md:w-full">
                  <Text
                    className="absolute leading-[22.00px] left-[0] text-black-900 text-xl top-[0] w-[96%] sm:w-full"
                    size="txtVolkhovBold20Black900"
                  >
                    <>
                      Dates : Jan 21 - Jan 23 2024
                      <br />
                      ----------------------------------------
                      <br />
                      Unit Size: 2{" "}
                    </>
                  </Text>
                  <Button
                    className="common-pointer absolute bottom-[0] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                    onClick={() => navigate("/exchange5exchanging")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    Exchange
                  </Button>
                </div>
                <div className="md:h-[66px] h-[90px] md:ml-[0] ml-[47px] md:mt-0 mt-[5px] relative w-[31%] md:w-full">
                  <Text
                    className="absolute leading-[22.00px] left-[0] text-black-900 text-xl top-[0] w-[93%] sm:w-full"
                    size="txtVolkhovBold20Black900"
                  >
                    <>
                      Dates : Jan 25 - Jan 29 2024
                      <br />
                      ----------------------------------------
                      <br />
                      Unit Size: 3{" "}
                    </>
                  </Text>
                  <Button
                    className="common-pointer absolute bottom-[0] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                    onClick={() => navigate("/exchange5exchanging")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    Exchange
                  </Button>
                </div>
                <div className="md:h-[70px] h-[98px] md:ml-[0] ml-[26px] relative w-[33%] md:w-full">
                  <Text
                    className="absolute leading-[22.00px] left-[0] text-black-900 text-xl top-[0] w-[87%] sm:w-full"
                    size="txtVolkhovBold20Black900"
                  >
                    <>
                      Dates : Feb 1 - Feb 10 2024
                      <br />
                      ----------------------------------------
                      <br />
                      Unit Size: 2
                    </>
                  </Text>
                  <Button
                    className="common-pointer absolute bottom-[0] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                    onClick={() => navigate("/exchange5exchanging")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    Exchange
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-64 md:px-5 w-full" />
      </div>
    </>
  );
};

export default Exchange4MyUnitPage;
