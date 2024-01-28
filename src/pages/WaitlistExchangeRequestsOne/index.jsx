import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Switch,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const popularityOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const popularityOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WaitlistExchangeRequestsOnePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <Header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="font-roboto sm:h-[1482px] h-[1718px] md:h-[1844px] md:px-5 relative w-full">
          <div className="h-[1062px] sm:h-[1482px] md:h-[1844px] ml-auto mr-[55px] mt-52 w-[73%] md:w-full">
            <List
              className="flex flex-col gap-[23px] items-center m-auto w-full"
              orientation="vertical"
            >
              <div className="md:h-[517px] h-[520px] sm:h-[624px] ml-0.5 my-0 relative w-full">
                <div className="bg-blue_gray-100_01 h-[471px] mx-auto w-full"></div>
                <div className="absolute bg-blue_gray-100_02 flex flex-col gap-[19px] h-full inset-[0] justify-center m-auto p-[13px] w-full">
                  <div className="flex flex-col gap-6 justify-start md:ml-[0] ml-[7px] mr-[405px] mt-3 w-3/5 md:w-full">
                    <Text
                      className="md:ml-[0] ml-[391px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtRobotoRomanSemiBold32"
                    >
                      List requested
                    </Text>
                    <div className="flex sm:flex-col flex-row font-mulish gap-[7px] items-center justify-start mr-[105px] w-[83%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-[90%] sm:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-900"
                          size="txtMulishBold15Bluegray900"
                        >
                          Sort by:
                        </Text>
                        <SelectBox
                          className="!text-blue_gray-700 font-semibold h-[52px] text-left text-sm w-[81%] sm:w-full"
                          placeholderClassName="!text-blue_gray-700"
                          indicator={
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                              alt="ant-design:caret-down-outlined"
                            />
                          }
                          isMulti={false}
                          name="frameTwentyTwo"
                          options={popularityOptionsList}
                          isSearchable={false}
                          placeholder="Popularity"
                          shape="round"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        />
                      </div>
                      <div className="bg-blue_gray-100_93 flex flex-col items-center justify-end sm:mt-0 my-0.5 p-[13px] rounded-[5px] shadow-bs10 w-[10%] sm:w-full">
                        <Img
                          className="h-5 mt-0.5"
                          src="images/img_vector_gray_700.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start mb-2 md:ml-[0] ml-[995px] py-2.5 rounded-[7px] w-[2%] md:w-full">
                    <div className="bg-blue_gray-900_c4 h-[81px] mb-[237px] rounded-[7px] w-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100_02 flex flex-1 flex-col gap-3.5 justify-center mr-0.5 my-0 p-[11px] w-full">
                <div className="flex flex-col gap-[9px] justify-start md:ml-[0] ml-[5px] mr-[400px] mt-[19px] w-3/5 md:w-full">
                  <Text
                    className="md:ml-[0] ml-[383px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtRobotoRomanSemiBold32"
                  >
                    List of requests
                  </Text>
                  <div className="flex sm:flex-col flex-row font-mulish gap-[9px] items-center justify-start mr-[114px] w-[82%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-[90%] sm:w-full">
                      <Text
                        className="text-[15px] text-blue_gray-900"
                        size="txtMulishBold15Bluegray900"
                      >
                        Sort by:
                      </Text>
                      <SelectBox
                        className="!text-blue_gray-700 font-semibold h-[52px] text-left text-sm w-[81%] sm:w-full"
                        placeholderClassName="!text-blue_gray-700"
                        indicator={
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                            alt="ant-design:caret-down-outlined"
                          />
                        }
                        isMulti={false}
                        name="frameTwentyTwo"
                        options={popularityOptionsList1}
                        isSearchable={false}
                        placeholder="Popularity"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      />
                    </div>
                    <div className="bg-blue_gray-100_93 flex flex-col items-end justify-start sm:mt-0 my-0.5 p-3 rounded-[5px] shadow-bs10 w-[10%] sm:w-full">
                      <Img
                        className="h-5 my-0.5"
                        src="images/img_vector_gray_700.svg"
                        alt="vector"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start mb-4 md:ml-[0] ml-[999px] py-2.5 rounded-[7px] w-[2%] md:w-full">
                  <div className="bg-blue_gray-900_c6 h-[84px] mb-[244px] rounded-[7px] w-full"></div>
                </div>
              </div>
            </List>
            <div className="absolute bottom-[2%] flex flex-col font-rubik md:gap-10 gap-[191px] inset-x-[0] items-center justify-start mx-auto w-[96%]">
              <List
                className="flex flex-col gap-[9px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs7 w-full">
                  <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[165px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_165x170.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start w-[61%] md:w-full">
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
                            className="text-blue_gray-900 text-shadow-ts text-xl"
                            size="txtVolkhovBold20"
                          >
                            Westminster to Greenwich River Thames
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-between w-[29%] md:w-full">
                          <Button
                            className="common-pointer cursor-pointer font-medium min-w-[106px] text-base text-center"
                            onClick={() =>
                              navigate("/waitlistexchangerequests")
                            }
                            shape="round"
                            color="gray_600_03"
                            size="sm"
                            variant="fill"
                          >
                            Refuse
                          </Button>
                          <Button
                            className="common-pointer cursor-pointer font-medium min-w-[101px] text-base text-center"
                            onClick={() =>
                              navigate("/waitlistexchangerequeststwo")
                            }
                            shape="round"
                            color="red_300_02"
                            size="sm"
                            variant="fill"
                          >
                            Accept
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start sm:mt-0 mt-[17px] w-auto">
                          <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
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
                          <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Transport{" "}
                            </Text>
                          </div>
                          <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                          <div className="flex flex-row items-start justify-evenly w-[32%]">
                            <Img
                              className="h-3.5"
                              src="images/img_settings_blue_gray_700.svg"
                              alt="settings"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Family Plan
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-volkhov items-center justify-start mb-1.5">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20Teal200"
                          >
                            Details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs7 w-full">
                  <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-[98%] md:w-full">
                    <Img
                      className="h-[165px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_14.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-6">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[62%] md:w-full">
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
                            className="md:ml-[0] ml-[3px] text-blue_gray-900 text-shadow-ts text-xl"
                            size="txtVolkhovBold20"
                          >
                            Westminster to Greenwich River Thames
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-2.5 items-center justify-between w-[29%] md:w-full">
                          <Button
                            className="common-pointer cursor-pointer font-medium min-w-[106px] text-base text-center"
                            onClick={() =>
                              navigate("/waitlistexchangerequests")
                            }
                            shape="round"
                            color="gray_600_03"
                            size="sm"
                            variant="fill"
                          >
                            Refuse
                          </Button>
                          <Button
                            className="common-pointer cursor-pointer font-medium min-w-[101px] text-base text-center"
                            onClick={() =>
                              navigate("/waitlistexchangerequeststwo")
                            }
                            shape="round"
                            color="red_300_02"
                            size="sm"
                            variant="fill"
                          >
                            Accept
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 items-end justify-between mt-1 w-[99%] md:w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start sm:mt-0 mt-2.5 w-auto">
                          <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
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
                          <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Transport{" "}
                            </Text>
                          </div>
                          <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                          <div className="flex flex-row items-start justify-evenly w-[32%]">
                            <Img
                              className="h-3.5"
                              src="images/img_settings_blue_gray_700.svg"
                              alt="settings"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Family Plan
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-volkhov items-center justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20Teal200"
                          >
                            Details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <List
                className="flex flex-col font-mulish gap-[23px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded shadow-bs7 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <Img
                      className="h-[165px] sm:h-auto object-cover rounded w-[18%] md:w-full"
                      src="images/img_rectangle129_11.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[22px] md:mt-0 mt-[23px] w-[48%] md:w-full">
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
                        className="text-blue_gray-900 text-shadow-ts text-xl"
                        size="txtVolkhovBold20"
                      >
                        Westminster to Greenwich River Thames
                      </Text>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
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
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[155px] md:mt-0 mt-[50px] w-[17%] md:w-full">
                      <div className="flex flex-col font-volkhov items-center justify-start">
                        <Text
                          className="text-red-600 text-right text-shadow-ts text-xl"
                          size="txtVolkhovBold20Red600"
                        >
                          Under review
                        </Text>
                      </div>
                      <div className="flex flex-col font-volkhov items-center justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20Teal200"
                        >
                          Details
                        </Text>
                      </div>
                      <Text
                        className="bg-gray-600_03 h-[31px] justify-center md:ml-[0] ml-[58px] mt-2 sm:px-5 px-[21px] py-[3px] rounded-lg text-base text-center text-white-A700 w-[106px]"
                        size="txtRubikMedium16WhiteA700"
                      >
                        CancelCancel
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded shadow-bs7 w-full">
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[165px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_15.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[23px]">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
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
                      <div className="flex md:flex-col flex-row font-volkhov md:gap-[45px] items-start justify-between w-full">
                        <Text
                          className="text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-red-600 text-right text-shadow-ts text-xl"
                            size="txtVolkhovBold20Red600"
                          >
                            Approved successfully
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 items-end justify-between w-full">
                        <div className="flex flex-row gap-[15px] items-center justify-start sm:mt-0 mt-[13px] w-auto">
                          <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
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
                          <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Transport{" "}
                            </Text>
                          </div>
                          <div className="bg-blue_gray-100_02 h-3.5 w-[1%]"></div>
                          <div className="flex flex-row items-start justify-evenly w-[32%]">
                            <Img
                              className="h-3.5"
                              src="images/img_settings_blue_gray_700.svg"
                              alt="settings"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Family Plan
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-volkhov items-center justify-start mb-0.5">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20Teal200"
                          >
                            Details
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute font-sfprodisplay md:h-[1222px] sm:h-[1301px] h-[1718px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bg-blue_gray-100_cc flex flex-col md:gap-10 gap-[119px] items-center justify-start left-[0] p-[30px] sm:px-5 top-[0] w-[23%]">
              <Img
                className="h-[158px] md:h-auto mt-[72px] rounded-[50%] w-[62%]"
                src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                alt="unsplashc8ta0gw_One"
              />
              <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start mb-[399px] w-[248px]">
                <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                    onClick={() => navigate("/dashboard")}
                    leftIcon={
                      <Img
                        className="h-5 mr-3 my-px"
                        src="images/img_grid_blue_gray_900_03.svg"
                        alt="grid"
                      />
                    }
                    shape="round"
                    color="white_A700_a8"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-blue_gray-900_03 font-inter font-medium leading-[normal] text-[17px] text-left">
                      Dashboard
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px] rounded-md"
                    onClick={() => navigate("/mytimeshare")}
                    leftIcon={
                      <Img
                        className="h-5 mb-0.5 mr-3"
                        src="images/img_thumbsup.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="white_A700_90"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-inter font-medium leading-[normal] text-[17px] text-left">
                      My timeshare
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px] rounded-md"
                    onClick={() => navigate("/walletone")}
                    leftIcon={
                      <Img
                        className="h-5 mb-0.5 mr-3"
                        src="images/img_thumbsup_gray_900_01.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="gray_100_90"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-gray-900_01 font-medium font-sfprodisplay leading-[normal] text-[17px] text-left">
                      My Wallet
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                    onClick={() => navigate("/memberprofile")}
                    leftIcon={
                      <Img
                        className="h-5 mr-3 my-px"
                        src="images/img_lock_gray_900_01.svg"
                        alt="lock"
                      />
                    }
                    shape="round"
                    color="white_A700_90"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-blue_gray-900_03 font-medium font-sfprodisplay leading-[normal] text-[17px] text-left">
                      Account
                    </div>
                  </Button>
                  <Input
                    name="frameTwo"
                    placeholder="Rent/Exchange"
                    value={frametwovalue}
                    onChange={(e) => setFrametwovalue(e)}
                    className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-inter font-medium leading-[normal] p-0 text-[17px] text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 cursor-pointer h-5 mr-3"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#292d32"
                        className="cursor-pointer h-5 my-auto"
                        onClick={() => setFrametwovalue("")}
                        style={{
                          visibility:
                            frametwovalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    }
                    shape="round"
                    color="gray_100_90"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <Input
                    name="frameFive"
                    placeholder="Waitlist Requests"
                    className="font-inter font-medium leading-[normal] p-0 placeholder:text-purple-300 text-[17px] text-left w-full"
                    wrapClassName="flex rounded-lg w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 h-5 mr-3"
                        src="images/img_checkmark_purple_300.svg"
                        alt="checkmark"
                      />
                    }
                    color="white_A700_90"
                    size="2xl"
                    variant="fill"
                  ></Input>
                </div>
                <Line className="bg-gray-900_4c h-px w-full" />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Input
                    name="frameTwo_One"
                    placeholder="Help Center"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-900_01 text-[17px] text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-5 mr-3"
                        src="images/img_videocamera.svg"
                        alt="video_camera"
                      />
                    }
                    shape="round"
                    color="gray_100_90"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <div className="bg-gray-100_90 flex flex-row gap-3 items-center justify-start px-3 py-4 rounded-md w-[248px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_mobile.svg"
                      alt="mobile"
                    />
                    <Text
                      className="flex-1 text-[17px] text-gray-900_01 w-auto"
                      size="txtSFProDisplayMedium17"
                    >
                      Dark Mode
                    </Text>
                    <Switch
                      onColor="#d9d9d9"
                      offColor="#d9d9d9"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={false}
                      className="w-[17%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full" />
            <div className="absolute flex flex-col font-roboto gap-[17px] justify-start right-[22%] top-[4%] w-[39%]">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtRobotoRomanSemiBold45"
              >
                Waitlist Exchange Requests
              </Text>
              <Img
                className="h-[62px] md:ml-[0] ml-[111px]"
                src="images/img_group.svg"
                alt="vector"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitlistExchangeRequestsOnePage;
