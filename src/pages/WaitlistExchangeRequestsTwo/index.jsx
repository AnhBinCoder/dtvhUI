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

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const popularityOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WaitlistExchangeRequestsTwoPage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-sfprodisplay h-[2187px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100_cc flex flex-col md:gap-10 gap-[119px] h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[30px] md:px-5 w-[23%]">
          <Img
            className="h-[158px] md:h-auto mt-[72px] rounded-[50%] w-[62%]"
            src="images/img_unsplashc8ta0gwpbqg_158x164.png"
            alt="unsplashc8ta0gw"
          />
          <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start mb-[399px] w-[248px]">
            <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
              <div className="bg-white-A700_a8 flex flex-row font-inter gap-3 items-center justify-start px-3 py-4 rounded-lg shadow-bs w-[248px]">
                <Img
                  className="h-5 w-5"
                  src="images/img_grid_blue_gray_900_03.svg"
                  alt="grid"
                />
                <Text
                  className="text-[17px] text-blue_gray-900_03 text-shadow-ts2 w-auto"
                  size="txtInterMedium17Bluegray90003"
                >
                  Dashboard
                </Text>
              </div>
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
                className="!placeholder:text-purple-300 !text-purple-300 font-inter font-medium leading-[normal] p-0 text-[17px] text-left w-full"
                wrapClassName="flex rounded-lg w-full"
                prefix={
                  <Img
                    className="mt-auto mb-0.5 h-5 mr-3"
                    src="images/img_checkmark_purple_300.svg"
                    alt="checkmark"
                  />
                }
                shape="round"
                color="gray_100_90"
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
        <div className="absolute font-nicomoji h-[468px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <Header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
        <div className="absolute flex flex-col font-roboto justify-start md:px-5 right-[5%] top-[24%] w-[71%]">
          <Text
            className="md:ml-[0] ml-[220px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
            size="txtRobotoRomanSemiBold45"
          >
            Waitlist Exchange Requests
          </Text>
          <Img
            className="h-[62px] md:ml-[0] ml-[331px] mt-[17px]"
            src="images/img_group.svg"
            alt="vector"
          />
          <div className="flex sm:flex-col flex-row font-mulish gap-5 items-center justify-start mt-[43px] w-1/2 md:w-full">
            <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-[88%] sm:w-full">
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
            <div className="bg-blue_gray-100_93 flex flex-col items-center justify-end sm:mt-0 my-0.5 p-[13px] rounded-[5px] shadow-bs10 w-[9%] sm:w-full">
              <Img
                className="h-5 mt-0.5"
                src="images/img_vector_gray_700.svg"
                alt="vector_One"
              />
            </div>
          </div>
          <div className="flex flex-col font-mulish items-center justify-start md:ml-[0] ml-[5px] mt-20 w-full">
            <List
              className="flex flex-col gap-[11px] items-center w-full"
              orientation="vertical"
            >
              <div className="hover:cursor-pointer h-[168px] sm:h-[221px] md:h-[228px] mr-5 hover:my-0 my-0 hover:relative relative hover:shadow-bs7 w-[98%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[22px] sm:px-5 rounded shadow-bs7 w-full">
                  <div className="flex flex-col items-start justify-start my-1 w-4/5 md:w-full">
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
                    <div className="flex md:flex-col flex-row font-volkhov md:gap-10 items-start justify-between mt-1 w-full">
                      <Text
                        className="md:mt-0 mt-[13px] text-blue_gray-900 text-shadow-ts text-xl"
                        size="txtVolkhovBold20"
                      >
                        Westminster to Greenwich River Thames
                      </Text>
                      <div className="flex md:flex-1 flex-row font-rubik gap-2.5 items-center justify-between mb-2 w-[29%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[106px] text-base text-center"
                          shape="round"
                          color="gray_600_03"
                          size="sm"
                          variant="fill"
                        >
                          Refuse
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[101px] text-base text-center"
                          shape="round"
                          color="red_300_02"
                          size="sm"
                          variant="fill"
                        >
                          Accept
                        </Button>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 items-center justify-between mt-[11px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
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
                <Img
                  className="absolute h-[165px] inset-y-[0] left-[2%] my-auto object-cover rounded w-[18%]"
                  src="images/img_rectangle129_165x170.png"
                  alt="rectangle129"
                />
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex md:flex-1 flex-col items-start justify-start ml-5 hover:my-0 my-0 rounded hover:shadow-bs7 shadow-bs7 w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[165px] sm:h-auto object-cover rounded w-[18%] md:w-full"
                    src="images/img_rectangle129_14.png"
                    alt="rectangle129"
                  />
                  <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                      <div className="bg-teal-200 flex flex-col items-center justify-center px-5 py-1.5 rounded-[13px] w-[130px]">
                        <Text
                          className="text-[11px] text-center text-white-A700 uppercase w-auto"
                          size="txtMulishExtraBold11"
                        >
                          Water Activities
                        </Text>
                      </div>
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
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-full">
                      <Text
                        className="sm:mt-0 mt-3.5 text-blue_gray-900 text-shadow-ts text-xl"
                        size="txtVolkhovBold20"
                      >
                        Westminster to Greenwich River Thames
                      </Text>
                      <Button
                        className="cursor-pointer font-medium font-rubik mb-[9px] min-w-[106px] sm:ml-[0] ml-[79px] text-base text-center"
                        shape="round"
                        color="gray_600_03"
                        size="sm"
                        variant="fill"
                      >
                        Refuse
                      </Button>
                      <Button
                        className="cursor-pointer font-medium font-rubik mb-[9px] min-w-[101px] sm:ml-[0] ml-[9px] text-base text-center"
                        shape="round"
                        color="red_300_02"
                        size="sm"
                        variant="fill"
                      >
                        Accept
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-2.5 w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start mb-[3px] sm:mt-0 mt-[7px] w-auto">
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
              <div className="bg-white-A700 hover:cursor-pointer flex md:flex-1 flex-col items-start justify-start ml-5 hover:my-0 my-0 rounded hover:shadow-bs7 shadow-bs7 w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[165px] sm:h-auto object-cover rounded w-[18%] md:w-full"
                    src="images/img_rectangle129_11.png"
                    alt="rectangle129"
                  />
                  <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
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
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mt-2 w-full">
                      <Text
                        className="sm:mt-0 mt-[9px] text-blue_gray-900 text-shadow-ts text-xl"
                        size="txtVolkhovBold20"
                      >
                        Westminster to Greenwich River Thames
                      </Text>
                      <Button
                        className="cursor-pointer font-medium font-rubik mb-1 min-w-[106px] sm:ml-[0] ml-[79px] text-base text-center"
                        shape="round"
                        color="gray_600_03"
                        size="sm"
                        variant="fill"
                      >
                        Refuse
                      </Button>
                      <Button
                        className="cursor-pointer font-medium font-rubik mb-1 min-w-[101px] sm:ml-[0] ml-[9px] text-base text-center"
                        shape="round"
                        color="red_300_02"
                        size="sm"
                        variant="fill"
                      >
                        Accept
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[15px] w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
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
              <div className="bg-white-A700 hover:cursor-pointer flex md:flex-1 flex-col font-rubik items-start justify-start ml-5 hover:my-0 my-0 rounded hover:shadow-bs7 shadow-bs7 w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[165px] sm:h-auto object-cover rounded w-[18%] md:w-full"
                    src="images/img_rectangle129_15.png"
                    alt="rectangle129"
                  />
                  <div className="flex flex-col gap-[7px] items-center justify-start md:mt-0 mt-[23px] w-4/5 md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                      <Button
                        className="cursor-pointer font-medium mb-3 min-w-[106px] md:ml-[0] ml-[79px] md:mt-0 mt-[25px] text-base text-center"
                        shape="round"
                        color="gray_600_03"
                        size="sm"
                        variant="fill"
                      >
                        Refuse
                      </Button>
                      <Button
                        className="cursor-pointer font-medium mb-3 min-w-[101px] md:ml-[0] ml-[9px] md:mt-0 mt-[25px] text-base text-center"
                        shape="round"
                        color="red_300_02"
                        size="sm"
                        variant="fill"
                      >
                        Accept
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 items-end justify-between w-full">
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
          </div>
        </div>
        <div className="absolute bg-blue_gray-900_87 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-[462px] md:px-10 sm:px-5 w-full">
          <div className="bg-green-400_01 flex flex-col gap-[21px] items-center justify-center mb-[844px] mt-[313px] p-[34px] md:px-5 rounded-[10px] w-[83%] md:w-full">
            <div className="flex flex-col font-roboto gap-[30px] items-center justify-start mt-[85px] w-auto">
              <Img
                className="h-[123px] w-[123px]"
                src="images/img_successiconco.svg"
                alt="successiconco"
              />
              <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtRobotoRomanSemiBold32"
                >
                  Exchange Successful
                </Text>
                <Text
                  className="max-w-[360px] md:max-w-full text-black-900 text-center text-xl"
                  size="txtRobotoRomanMedium20"
                >
                  Your exchange has successfully been completed. For more
                  details, check your rent/exchange history.
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-nototraditionalnushu leading-[normal] mb-[5px] min-w-[203px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              onClick={() => navigate("/waitlistexchangerequestsone")}
              shape="round"
              color="white_A700_cc"
              size="xl"
              variant="fill"
            >
              BACK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitlistExchangeRequestsTwoPage;
