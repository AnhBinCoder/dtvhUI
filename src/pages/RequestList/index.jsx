import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, RatingBar, SelectBox, Text } from "components";
import Footer from "components/Footer";

const languageSevenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RequestListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[589px] h-[659px] mx-auto w-full">
              <Img
                className="absolute h-[468px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_rectangle140_468x1440.png"
                alt="rectangle140"
              />
              <div className="absolute bg-gradient4  bottom-[0] h-[589px] right-[9%] rounded-[553px] w-[77%]"></div>
            </div>
            <div className="bg-gradient1  flex flex-col items-center justify-start mt-[-NaNpx] mx-auto w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700 w-auto"
                  size="txtNicoMojiRegular26"
                >
                  WandarShare
                </Text>
                <div className="flex sm:flex-1 flex-col font-mulish items-center justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-end justify-start w-auto">
                    <Text
                      className="common-pointer text-[15px] text-white-A700 w-auto"
                      size="txtMulishRomanSemiBold15"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Text>
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtMulishRomanSemiBold15"
                    >
                      About Us
                    </Text>
                    <Text
                      className="common-pointer text-[15px] text-white-A700 w-auto"
                      size="txtMulishRomanExtraBold15"
                      onClick={() => navigate("/exchangeone")}
                    >
                      Exchange Timeshare
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[15px] text-white-A700 w-auto"
                    >
                      <Text size="txtMulishSemiBold15">Contact Us</Text>
                    </a>
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtMulishSemiBold15"
                    >
                      Help
                    </Text>
                  </div>
                </div>
                <Img
                  className="common-pointer h-[74px] md:h-auto rounded-[50%] w-[75px]"
                  src="images/img_unsplashc8ta0gwpbqg_74x75.png"
                  alt="unsplashc8ta0gw"
                  onClick={() => navigate("/memberprofile")}
                />
              </div>
            </div>
            <div className="flex flex-col font-volkhov items-center justify-start ml-auto mr-[180px] mt-[-149.5px] w-[71%] z-[1]">
              <div className="flex flex-col md:gap-10 gap-[110px] justify-start w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1014px] w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-auto"
                    size="txtVolkhovBold36"
                  >
                    Request List
                  </Text>
                  <Img
                    className="h-10 w-[283px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                </div>
                <div className="flex flex-col gap-[25px] items-start justify-start max-w-[790px] md:ml-[0] ml-[31px] w-full">
                  <div className="flex flex-col font-sourceserifpro items-start justify-start w-auto">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                      size="txtSourceSerifProSemiBold36"
                    >
                      My Request List{" "}
                    </Text>
                  </div>
                  <Text
                    className="text-gray-600_02 text-xl w-auto"
                    size="txtLatoRegular20"
                  >
                    This is all of request timeshare.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[137px] md:px-10 sm:px-5 px-[185px] w-full">
          <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
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
                <div className="md:h-[68px] h-[92px] md:mt-0 mt-1.5 relative w-[30%] md:w-full">
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
                    onClick={() => navigate("/requestlistdetail")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    View
                  </Button>
                </div>
                <div className="md:h-[76px] h-[90px] md:ml-[0] ml-[47px] md:mt-0 mt-[5px] relative w-[31%] md:w-full">
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
                    onClick={() => navigate("/requestlistdetail")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    View
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
                      Unit Size: 2{" "}
                    </>
                  </Text>
                  <Button
                    className="common-pointer absolute bottom-[0] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                    onClick={() => navigate("/requestlistdetail")}
                    color="yellow_600"
                    size="sm"
                    variant="fill"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-mulish items-center mt-[716px] w-full">
          <Footer className="bg-blue_gray-900_01 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RequestListPage;
