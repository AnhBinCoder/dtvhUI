import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Exchange2ExchangeListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji gap-[37px] items-center justify-start mx-auto w-full">
        <div className="h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <Header1 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="font-volkhov sm:h-[1626px] h-[1822px] md:h-[2119px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-3/4">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1078px] w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center w-auto"
                  size="txtVolkhovBold36"
                >
                  NEW LOOK. NEW DESTINATIONS. SAME GREAT BENEFITS.
                </Text>
                <Img
                  className="h-10 w-[283px]"
                  src="images/img_frame.svg"
                  alt="frame"
                />
              </div>
            </div>
            <div className="font-mulish h-[1582px] relative w-[93%] md:w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start max-w-[790px] mb-[-20px] ml-[41px] w-full z-[1]">
                <div className="flex flex-col font-sourceserifpro items-start justify-start w-auto">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                    size="txtSourceSerifProSemiBold36"
                  >
                    Exchange Available
                  </Text>
                </div>
                <Text
                  className="max-w-[762px] md:max-w-full text-gray-600_02 text-xl w-full"
                  size="txtLatoRegular20"
                >
                  To view exchange timeshare availability, please select the
                  unit you would like to redeem
                </Text>
              </div>
              <div className="flex h-[1460px] sm:h-[1524px] md:h-[2017px] justify-end mt-auto mx-auto w-full">
                <div className="flex flex-col h-full items-center justify-start mb-[541px] mt-auto mx-auto w-[88%]">
                  <Button
                    className="!text-teal-200 border border-solid border-teal-200 capitalize cursor-pointer font-bold min-w-[870px] md:min-w-full rounded-[25px] text-base text-center"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Load More
                  </Button>
                </div>
                <div className="absolute flex flex-col font-volkhov md:gap-10 gap-[586px] h-full inset-[0] items-center justify-center m-auto w-full">
                  <List
                    className="flex flex-col gap-[22px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 flex flex-col items-start justify-start rounded shadow-bs7 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[76%] md:w-full">
                            <Img
                              className="h-[140px] sm:h-auto object-cover rounded w-[23%] md:w-full"
                              src="images/img_image39_140x169.png"
                              alt="imageThirtyNine"
                            />
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] w-[46%] md:w-full">
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
                                Hoi An Central Boutique
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
                                    123 abc{" "}
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
                            <Text
                              className="md:ml-[0] ml-[43px] text-black-900 text-xl"
                              size="txtVolkhovBold20Black900"
                            >
                              3 weeks available
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                          <div className="h-28 md:mt-0 mt-1.5 relative w-[30%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[96%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 21 - Jan 23 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:400.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[18%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
                              color="yellow_600"
                              size="sm"
                              variant="fill"
                            >
                              Exchange
                            </Button>
                          </div>
                          <div className="h-28 md:ml-[0] ml-[47px] md:mt-0 mt-[5px] relative w-[31%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 25 - Jan 29 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:600.000VND
                              </>
                            </Text>
                            <div className="absolute bottom-[19%] font-mulish h-[29px] right-[0] w-[39%]">
                              <div
                                className="common-pointer absolute bg-yellow-600 h-[29px] inset-[0] justify-center m-auto rounded-[14px] shadow-bs1 w-full"
                                onClick={() => navigate("/exchange3detail")}
                              ></div>
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-blue_gray-900 text-center w-max"
                                size="txtMulishExtraBold16"
                              >
                                Exchange
                              </Text>
                            </div>
                          </div>
                          <div className="h-28 md:h-[118px] mb-1.5 md:ml-[0] ml-[26px] relative w-[33%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[88%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Feb 1 - Feb 10 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:1.000.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[13%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
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
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 flex flex-col items-start justify-start rounded shadow-bs7 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[76%] md:w-full">
                            <Img
                              className="h-[140px] sm:h-auto object-cover rounded w-[23%] md:w-full"
                              src="images/img_image40_140x170.png"
                              alt="imageForty"
                            />
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] w-[46%] md:w-full">
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
                                King Koi Hoi An
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
                            <Text
                              className="md:ml-[0] ml-[43px] text-black-900 text-xl"
                              size="txtVolkhovBold20Black900"
                            >
                              3 weeks available
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                          <div className="h-28 md:mt-0 mt-1.5 relative w-[30%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[96%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 21 - Jan 23 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:400.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[18%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
                              color="yellow_600"
                              size="sm"
                              variant="fill"
                            >
                              Exchange
                            </Button>
                          </div>
                          <div className="h-28 md:ml-[0] ml-[47px] md:mt-0 mt-[5px] relative w-[31%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 25 - Jan 29 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2<br />
                                <br />
                                Price:600.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[20%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
                              color="yellow_600"
                              size="sm"
                              variant="fill"
                            >
                              Exchange
                            </Button>
                          </div>
                          <div className="h-28 md:h-[118px] mb-1.5 md:ml-[0] ml-[26px] relative w-[33%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[87%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Feb 1 - Feb 10 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:1.000.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[13%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
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
                    <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="md:h-[140px] h-[141px] sm:h-[207px] relative w-full">
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-5 rounded shadow-bs7 w-full">
                            <div className="flex sm:flex-col flex-row gap-[43px] items-start justify-start mb-[7px] md:ml-[0] ml-[172px] w-[59%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-[62%] sm:w-full">
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
                                  Hoi An Central Boutique
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
                                      123 abc{" "}
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
                              <Text
                                className="sm:mt-0 mt-[17px] text-black-900 text-xl"
                                size="txtVolkhovBold20Black900"
                              >
                                3 weeks available
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[140px] inset-y-[0] left-[0] my-auto object-cover rounded w-[18%]"
                            src="images/img_image41_140x170.png"
                            alt="imageFortyOne"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="h-28 md:mt-0 mt-1.5 relative w-[30%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[96%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 21 - Jan 23 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:400.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[18%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
                              color="yellow_600"
                              size="sm"
                              variant="fill"
                            >
                              Exchange
                            </Button>
                          </div>
                          <div className="h-28 md:ml-[0] ml-[47px] md:mt-0 mt-[5px] relative w-[31%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[93%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Jan 25 - Jan 29 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:600.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[20%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
                              color="yellow_600"
                              size="sm"
                              variant="fill"
                            >
                              Exchange
                            </Button>
                          </div>
                          <div className="h-28 md:h-[118px] mb-1.5 md:ml-[0] ml-[26px] relative w-[33%] md:w-full">
                            <Text
                              className="absolute h-full inset-y-[0] leading-[22.00px] left-[0] my-auto text-black-900 text-xl w-[88%] sm:w-full"
                              size="txtVolkhovBold20Black900"
                            >
                              <>
                                Dates : Feb 1 - Feb 10 2024
                                <br />
                                ----------------------------------------
                                <br />
                                Unit Size: 2 <br />
                                <br />
                                Price:1.000.000VND
                              </>
                            </Text>
                            <Button
                              className="common-pointer absolute bottom-[13%] cursor-pointer font-extrabold font-mulish min-w-[115px] right-[0] rounded-[14px] text-base text-center"
                              onClick={() => navigate("/exchange3detail")}
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
                  </List>
                  <div className="bg-white-A700 border border-solid border-teal-200 flex flex-col font-mulish items-center justify-end p-3.5 rounded-[25px] w-full">
                    <Text
                      className="capitalize text-base text-center text-teal-200"
                      size="txtMulishBold16"
                    >
                      Load More
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default Exchange2ExchangeListPage;
