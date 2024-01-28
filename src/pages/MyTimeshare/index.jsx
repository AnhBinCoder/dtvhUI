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
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyTimesharePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-sfprodisplay md:gap-5 items-start justify-start md:px-5 w-[94%] md:w-full">
            <div className="md:h-[1324px] h-[1331px] py-[3px] relative w-1/4 md:w-full">
              <div className="bg-blue_gray-100_cc h-[1324px] m-auto w-full"></div>
              <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[13%] w-3/4">
                <Img
                  className="h-[158px] md:h-auto ml-9 md:ml-[0] rounded-[50%] w-[67%]"
                  src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                  alt="unsplashc8ta0gw_One"
                />
                <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start w-[248px]">
                  <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                      onClick={() => navigate("/dashboard")}
                      leftIcon={
                        <Img
                          className="h-5 mr-3 my-px"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                      }
                      shape="round"
                      color="white_A700_a8"
                      size="xl"
                      variant="fill"
                    >
                      <div className="font-inter font-medium leading-[normal] text-[17px] text-left">
                        Dashboard
                      </div>
                    </Button>
                    <div className="bg-white-A700_90 flex flex-row font-inter gap-3 items-center justify-start px-3 py-4 rounded-md w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_thumbsup_purple_300.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-[17px] text-purple-300 w-auto"
                        size="txtInterMedium17Purple300"
                      >
                        My timeshare
                      </Text>
                    </div>
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
                      <div className="!text-gray-900_01 font-medium font-sfprodisplay leading-[normal] text-[17px] text-left">
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
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                      onClick={() => navigate("/waitlistexchangerequestsone")}
                      leftIcon={
                        <Img
                          className="h-5 mb-0.5 mr-3"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      shape="round"
                      color="gray_100_90"
                      size="lg"
                      variant="fill"
                    >
                      <div className="font-inter font-medium leading-[normal] text-[17px] text-left">
                        Waitlist Requests
                      </div>
                    </Button>
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
            </div>
            <div className="font-roboto md:h-[1496px] sm:h-[915px] h-[968px] md:mt-0 mt-[92px] relative w-[76%] md:w-full">
              <Text
                className="absolute left-[33%] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center top-[0]"
                size="txtRobotoRomanSemiBold45"
              >
                My Timeshare
              </Text>
              <div className="absolute flex flex-col font-mulish h-max inset-[0] items-center justify-center m-auto sm:pl-5 pl-[30px] py-[30px] w-full">
                <div className="flex flex-col gap-[49px] items-start justify-start mb-[17px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-0.5 md:ml-[0] w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-2.5 w-[52%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between sm:mt-0 my-[18px] w-[86%] sm:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-900"
                          size="txtMulishBold15Bluegray900"
                        >
                          Sort by:
                        </Text>
                        <SelectBox
                          className="!text-blue_gray-700 font-semibold h-[46px] text-left text-sm w-[81%] sm:w-full"
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
                          size="md"
                          variant="fill"
                        />
                      </div>
                      <div className="bg-blue_gray-100_93 flex flex-col items-center justify-end sm:mt-0 my-[18px] p-3 rounded-[5px] shadow-bs10 w-[9%] sm:w-full">
                        <Img
                          className="h-5 mt-0.5"
                          src="images/img_vector_gray_700.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                    <div
                      className="common-pointer font-inter md:h-[49px] h-[85px] mb-1 md:mt-0 mt-[13px] pr-[13px] py-[13px] relative w-[26%] md:w-full"
                      onClick={() => navigate("/createtimesharethree")}
                    >
                      <div className="absolute bg-green-400 h-11 inset-y-[0] left-[0] my-auto rounded-[5px] w-[82%]"></div>
                      <div className="absolute flex flex-row gap-[11px] items-start justify-start left-[2%] p-1 top-[15%] w-[85%]">
                        <Img
                          className="h-[25px] mb-0.5 mt-2.5 w-6"
                          src="images/img_addcircleline.svg"
                          alt="addcircleline"
                        />
                        <Text
                          className="mt-[11px] text-blue_gray-900_07 text-xl"
                          size="txtInterMedium20"
                        >
                          New Timeshare
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[17px] w-[96%]"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded shadow-bs7 w-full">
                      <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
                        <Img
                          className="h-[159px] md:h-auto object-cover rounded"
                          src="images/img_rectangle129_159x162.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[22px]">
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
                          <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-4 w-full">
                            <Text
                              className="text-blue_gray-900 text-shadow-ts text-xl"
                              size="txtVolkhovBold20"
                            >
                              Westminster to Greenwich River Thames
                            </Text>
                            <Button
                              className="common-pointer !text-teal-200 cursor-pointer font-bold min-w-[75px] sm:mt-0 mt-[5px] text-center text-xl"
                              onClick={() => navigate("/exchange3detail")}
                              shape="square"
                            >
                              Details
                            </Button>
                          </div>
                          <div className="flex flex-row font-mulish gap-[15px] items-center justify-start mt-1.5 w-auto">
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
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded shadow-bs7 w-full">
                      <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
                        <Img
                          className="h-[159px] md:h-auto object-cover rounded"
                          src="images/img_rectangle129_11.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[22px]">
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
                          <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-4 w-full">
                            <Text
                              className="text-blue_gray-900 text-shadow-ts text-xl"
                              size="txtVolkhovBold20"
                            >
                              Westminster to Greenwich River Thames
                            </Text>
                            <Text
                              className="sm:mt-0 mt-0.5 text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20Teal200"
                            >
                              Under review
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-[15px] items-center justify-start mt-2.5 w-auto">
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
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded shadow-bs7 w-full">
                      <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
                        <Img
                          className="h-[159px] md:h-auto object-cover rounded"
                          src="images/img_rectangle129_12.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[22px]">
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
                          <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-4 w-full">
                            <Text
                              className="text-blue_gray-900 text-shadow-ts text-xl"
                              size="txtVolkhovBold20"
                            >
                              Westminster to Greenwich River Thames
                            </Text>
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20Teal200"
                            >
                              Details
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-[15px] items-center justify-start mt-3 w-auto">
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
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded shadow-bs7 w-full">
                      <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between w-[97%] md:w-full">
                        <Img
                          className="h-[159px] md:h-auto object-cover rounded"
                          src="images/img_rectangle129_13.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[22px]">
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
                          <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-4 w-full">
                            <Text
                              className="text-blue_gray-900 text-shadow-ts text-xl"
                              size="txtVolkhovBold20"
                            >
                              Westminster to Greenwich River Thames
                            </Text>
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20Teal200"
                            >
                              Under review
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-[15px] items-center justify-start mt-3 w-auto">
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
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MyTimesharePage;
