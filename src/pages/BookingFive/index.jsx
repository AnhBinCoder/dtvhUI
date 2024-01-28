import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BookingFivePage = () => {
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
          <Header4 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="flex flex-col font-volkhov items-center justify-start pl-[17px] pt-[17px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1417px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-start w-[63%] md:w-full">
              <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-center justify-end md:mt-0 mt-[88px] pt-7 sm:px-5 px-7 shadow-bs13 w-[57%] md:w-full">
                <div className="flex flex-col items-start justify-start mt-1 w-full">
                  <div className="flex sm:flex-col flex-row font-opensans sm:gap-[58px] items-center justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                      size="txtOpenSansRomanSemiBold24"
                    >
                      Aug 2, 2023 - Aug 5, 2023
                    </Text>
                    <Text
                      className="leading-[30.00px] text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                      size="txtOpenSansRomanSemiBold24"
                    >
                      <>
                        4 Days
                        <br />3 Nights
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[47px] text-blue_gray-900 text-shadow-ts text-xl"
                    size="txtVolkhovBold20"
                  >
                    Hoi An Central Boutique
                  </Text>
                  <Line className="bg-black-900_1e h-px mt-8 w-[96%]" />
                  <div className="flex sm:flex-col flex-row font-opensans gap-[31px] items-center justify-start mt-[9px] w-[86%] md:w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-[48%] sm:w-full">
                      <div className="flex flex-row items-center justify-center w-[32%] md:w-full">
                        <Img
                          className="h-2 w-[9px]"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-2 ml-[3px] w-[9px]"
                          src="images/img_signal.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-2 ml-[3px] w-[9px]"
                          src="images/img_signal.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-2 ml-[3px] w-[9px]"
                          src="images/img_signal.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-2 ml-[3px] w-[9px]"
                          src="images/img_signal.svg"
                          alt="signal_Four"
                        />
                      </div>
                      <div className="bg-blue_gray-100_05 flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_image39_140x169.png"
                          alt="imageThirtyNine"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[45%] sm:w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-[18%]"
                          src="images/img_image22.png"
                          alt="imageTwentyTwo"
                        />
                        <Text
                          className="sm:flex-1 leading-[20.00px] text-base text-gray-700_01 w-[74%] sm:w-full"
                          size="txtOpenSansRegular16"
                        >
                          2 Person Accomodation
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-end justify-start mt-[23px] w-[85%] md:w-full">
                        <Img
                          className="h-8 md:h-auto object-cover w-[21%]"
                          src="images/img_image23.png"
                          alt="imageTwentyThree"
                        />
                        <Text
                          className="mb-[3px] mt-1.5 text-base text-gray-700_01"
                          size="txtOpenSansRegular16"
                        >
                          King Size Bed
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-end justify-start mt-[30px] w-[66%] md:w-full">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_wifi22.svg"
                          alt="wifiTwentyTwo"
                        />
                        <div className="flex flex-col items-center justify-start mb-0.5 mt-[5px]">
                          <Text
                            className="text-base text-gray-700_01"
                            size="txtOpenSansRegular16"
                          >
                            Free Wifi
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-black-900_1e h-px mt-[33px] w-[96%]" />
                </div>
              </div>
              <div className="h-[94px] relative w-[33%] md:w-full">
                <Text
                  className="mb-[-3.59px] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center z-[1]"
                  size="txtVolkhovBold36"
                >
                  Booking Detail
                </Text>
                <Img
                  className="h-[50px] mt-auto mx-auto"
                  src="images/img_group.svg"
                  alt="vector"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col font-opensans items-center justify-start p-[3px] shadow-bs13 w-full">
              <div className="flex flex-col items-center justify-start mb-[39px] mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[582px] text-base text-black-900_cc text-center"
                    size="txtOpenSansRomanBold16"
                  >
                    Check your infomation
                  </Text>
                  <div className="flex flex-row sm:gap-10 gap-[640px] items-center justify-start ml-1.5 md:ml-[0] mt-[34px] w-[57%] md:w-full">
                    <Text
                      className="text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      FIrst Name
                    </Text>
                    <Text
                      className="text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Last Name
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-1 w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                      <Input
                        name="frameSixtyNine"
                        placeholder="abcdefghikl"
                        className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-[13.08px] text-left w-full"
                        wrapClassName="pb-[17px] pr-[35px] pt-5 md:w-full"
                        shape="square"
                        color="gray_100_05"
                        variant="fill"
                      ></Input>
                      <Input
                        name="frameSeventyFive"
                        placeholder="abcdefghikl"
                        className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-[13.08px] text-left w-full"
                        wrapClassName="pb-[17px] pr-[35px] pt-5 md:w-full"
                        shape="square"
                        color="gray_100_05"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-[18px] w-[55%] md:w-full">
                      <Text
                        className="text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        Phone
                      </Text>
                      <Text
                        className="text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        Email
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-1 w-[99%] md:w-full">
                      <div className="bg-gray-100_05 flex flex-row items-center justify-start pr-[9px] py-[9px]">
                        <Text
                          className="text-[13.08px] text-black-900"
                          size="txtOpenSansSemiBold1308"
                        >
                          +84
                        </Text>
                        <Line className="bg-gray-400_38 h-[30px] mb-[7px] ml-[39px] w-px" />
                        <Text
                          className="text-[13.08px] text-black-900"
                          size="txtOpenSansSemiBold1308"
                        >
                          0123456789
                        </Text>
                      </div>
                      <Input
                        name="email_One"
                        placeholder="abc@gmail.com"
                        className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-[13.08px] text-left w-full"
                        wrapClassName="pb-[17px] pr-[35px] pt-5 md:w-full"
                        type="email"
                        shape="square"
                        color="gray_100_05"
                        variant="fill"
                      ></Input>
                    </div>
                    <Text
                      className="mt-[18px] text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Addresss
                    </Text>
                    <Text
                      className="bg-gray-100_05 h-14 justify-center max-w-[651px] md:max-w-full mt-1 pb-[17px] sm:pr-5 pr-[35px] pt-5 text-[13.08px] text-black-900 w-full"
                      size="txtOpenSansSemiBold1308"
                    >
                      1/12 Mai Chí Thọ P4 Q2
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[18px] w-[87%] md:w-full">
                      <Text
                        className="text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        CIty
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[366px] text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        State
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[369px] text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        Postal Code
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[281px] text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        Country
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[3px] w-full">
                      <Input
                        name="frameSeventyFour"
                        placeholder="TPHCM"
                        className="font-semibold p-0 placeholder:text-black-900 text-[13.08px] text-left w-full"
                        wrapClassName="md:flex-1 w-[19%] md:w-full"
                        shape="square"
                        color="gray_100_05"
                        size="3xl"
                        variant="fill"
                      ></Input>
                      <Input
                        name="frameSeventySix"
                        placeholder="TPHCM"
                        className="font-semibold p-0 placeholder:text-black-900 text-[13.08px] text-left w-full"
                        wrapClassName="md:flex-1 md:ml-[0] ml-[140px] w-[19%] md:w-full"
                        shape="square"
                        color="gray_100_05"
                        size="3xl"
                        variant="fill"
                      ></Input>
                      <Text
                        className="bg-gray-100_05 h-[51px] justify-center ml-36 md:ml-[0] sm:pr-5 pr-[35px] py-4 text-[13.08px] text-black-900 w-[252px]"
                        size="txtOpenSansSemiBold1308"
                      >
                        007000
                      </Text>
                      <Text
                        className="bg-gray-100_05 h-[51px] justify-center md:ml-[0] ml-[100px] sm:pr-5 pr-[35px] py-4 text-[13.08px] text-black-900 w-[242px]"
                        size="txtOpenSansSemiBold1308"
                      >
                        Viet Nam
                      </Text>
                    </div>
                    <div
                      className="common-pointer bg-yellow-600_01 flex flex-row font-lato gap-[29px] items-center justify-center md:ml-[0] ml-[568px] mt-[83px] pl-[13px] pt-[13px] rounded-[12px] shadow-bs9 w-[18%] md:w-full"
                      onClick={() => navigate("/homepage")}
                    >
                      <Text
                        className="ml-[77px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                        size="txtLatoExtraBold22"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-[34px] mt-[5px]"
                        src="images/img_group15091.svg"
                        alt="group15091"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[164px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingFivePage;
