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

const CancelExchangePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-nicomoji h-[2187px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="h-[468px] md:px-5 relative w-full">
            <Img
              className="h-[468px] m-auto object-cover w-full"
              src="images/img_rectangle140_468x1440.png"
              alt="rectangle140"
            />
            <Header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
          </div>
          <div className="font-sfprodisplay md:h-[1222px] sm:h-[1301px] h-[1718px] md:px-5 relative w-full">
            <div className="absolute bg-blue_gray-100_cc flex flex-col md:gap-10 gap-[119px] items-center justify-start left-[0] p-[30px] sm:px-5 top-[0] w-[23%]">
              <Img
                className="h-[158px] md:h-auto mt-[72px] rounded-[50%] w-[62%]"
                src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                alt="unsplashc8ta0gw_One"
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
                    className="!placeholder:text-purple-300 !text-purple-300 font-inter font-medium leading-[normal] p-0 text-[17px] text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 cursor-pointer h-5 mr-3"
                        src="images/img_search_purple_300.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#d64bc2"
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
            <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full" />
            <div className="absolute flex flex-col font-roboto gap-[18px] items-center justify-start right-[23%] top-[2%] w-[33%]">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtRobotoRomanSemiBold45"
              >
                Rent/Exchange History
              </Text>
              <div className="flex flex-col md:gap-10 gap-[124px] items-start justify-start w-[70%] md:w-full">
                <Img
                  className="h-[62px] md:ml-[0] ml-[3px]"
                  src="images/img_group.svg"
                  alt="vector"
                />
                <div className="flex flex-row gap-[13px] items-start justify-between w-full">
                  <Img
                    className="h-[52px]"
                    src="images/img_firstname.svg"
                    alt="group431"
                  />
                  <div className="bg-blue_gray-100_93 flex flex-col items-center justify-end mb-1 p-[13px] rounded-[5px] shadow-bs10">
                    <Img
                      className="h-5 mt-0.5"
                      src="images/img_vector_gray_700.svg"
                      alt="vector_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[26%] flex flex-col font-mulish gap-10 items-center justify-start md:px-5 right-[5%] w-[71%]">
          <div className="flex flex-col gap-[53px] items-center justify-start w-[76%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="bg-green-200 border border-black-900 border-solid h-[53px] justify-center pb-[5px] pt-[9px] sm:px-5 px-[34px] rounded-[15px] md:text-3xl sm:text-[28px] text-[32px] text-red-600 w-[299px]"
                  size="txtNotoTraditionalNushuRegular32"
                >
                  Rental History{" "}
                </Text>
                <Text
                  className="bg-deep_orange-200 border border-black-900 border-solid h-[53px] justify-center pb-0.5 pt-1.5 px-[17px] rounded-[15px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[299px]"
                  size="txtNotoSansHebrewDroidRegular32"
                >
                  Exchange History
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-3/5 md:w-full">
              <div className="flex flex-col gap-[11px] justify-start w-full">
                <div className="flex flex-row items-start justify-start w-3/4 md:w-full">
                  <Text
                    className="text-[15px] text-blue_gray-900"
                    size="txtMulishBold15Bluegray900"
                  >
                    Sort by:
                  </Text>
                  <Text
                    className="h-[18px] ml-[50px] text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    All{" "}
                  </Text>
                  <Img
                    className="h-3 ml-[190px] mt-[3px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="h-[62px] md:ml-[0] ml-[87px] relative w-[82%] sm:w-full">
                  <div className="absolute bg-white-A700_cc h-[62px] inset-y-[0] left-[0] my-auto rounded-[3px] shadow-bs12 w-[72%]"></div>
                  <Text
                    className="absolute bottom-[0] leading-[18.00px] right-[0] text-blue_gray-700_04 text-sm"
                    size="txtMulishSemiBold14Bluegray70004"
                  >
                    <>
                      Accomplished
                      <br />
                      In progress
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
            <div className="md:h-56 h-[168px] sm:h-[218px] relative w-[98%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[13px] rounded shadow-bs7 w-full">
                <div className="flex flex-col gap-[11px] items-start justify-start my-3 w-4/5 md:w-full">
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
                  <div className="flex md:flex-col flex-row font-volkhov md:gap-10 items-end justify-between w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                      size="txtVolkhovBold20"
                    >
                      Westminster to Greenwich River Thames
                    </Text>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-right text-shadow-ts text-teal-200 text-xl"
                        size="txtVolkhovBold20Teal200"
                      >
                        Accomplished
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                    <Text
                      className="text-right text-shadow-ts text-teal-200 text-xl"
                      size="txtVolkhovBold20Teal200"
                    >
                      Details
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[165px] inset-y-[0] left-[2%] my-auto object-cover rounded w-[18%]"
                src="images/img_rectangle129_165x170.png"
                alt="rectangle129"
              />
            </div>
            <List
              className="flex flex-col gap-[189px] items-center w-[98%]"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded shadow-bs7 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[97%] md:w-full">
                  <Img
                    className="h-[165px] md:h-auto object-cover rounded"
                    src="images/img_rectangle129_14.png"
                    alt="rectangle129"
                  />
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[23px]">
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
                    <div className="flex md:flex-col flex-row font-volkhov md:gap-10 items-end justify-between mt-[11px] w-full">
                      <Text
                        className="md:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                        size="txtVolkhovBold20"
                      >
                        Westminster to Greenwich River Thames
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20Teal200"
                        >
                          Accomplished
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[3px] w-full">
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start sm:mt-0 mt-[13px] w-auto">
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
                      <Text
                        className="mb-0.5 text-right text-shadow-ts text-teal-200 text-xl"
                        size="txtVolkhovBold20Teal200"
                      >
                        Details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-volkhov items-center justify-start rounded shadow-bs7 w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[165px] md:h-auto object-cover rounded"
                    src="images/img_rectangle129_15.png"
                    alt="rectangle129"
                  />
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[23px]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start mb-[15px] w-3/5 md:w-full">
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
                      <div className="flex md:flex-1 flex-col gap-2 items-end justify-start md:mt-0 mt-4 w-[22%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-pink-700 text-right text-shadow-ts text-xl"
                            size="txtVolkhovBold20Pink700"
                          >
                            In progress
                          </Text>
                        </div>
                        <Text
                          className="mr-1 text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20Teal200"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-0.5 w-full">
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
                      <Text
                        className="bg-gray-600_03 h-[31px] justify-center sm:mt-0 mt-3.5 sm:px-5 px-[21px] py-[3px] rounded-lg text-base text-center text-white-A700 w-[106px]"
                        size="txtRubikMedium16WhiteA700"
                      >
                        CancelCancel
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute bg-black-900_87 bottom-[0] font-rubik h-[2368px] sm:h-[324px] md:h-[374px] inset-x-[0] mx-auto p-[70px] md:px-5 w-full">
          <div className="absolute flex flex-col items-center justify-start right-[23%] top-[41%] w-[35%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[253px] h-[308px] sm:h-[324px] pb-0.5 px-0.5 relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[30px] sm:px-5 rounded-[28px] top-[0] w-[97%]">
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start mb-[5px] mt-[135px] w-full">
                      <Button
                        className="common-pointer cursor-pointer font-medium min-w-[199px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        onClick={() => navigate("/rentexchangeone")}
                        shape="round"
                        color="gray_600_03"
                        size="sm"
                        variant="fill"
                      >
                        NO, CANCEL
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[199px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                        shape="round"
                        color="red_300_02"
                        size="sm"
                        variant="fill"
                      >
                        YES
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800 text-center top-[14%] w-[99%] sm:w-full"
                    size="txtRubikMedium27"
                  >
                    This item will be selected for cancellation and refund, are
                    you sure?
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 bottom-[40%] flex flex-col font-mulish items-center justify-start right-[3%] rounded shadow-bs7 w-[69%]">
            <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[98%] md:w-full">
              <Img
                className="h-[165px] md:h-auto object-cover rounded"
                src="images/img_rectangle129_11.png"
                alt="rectangle129_One"
              />
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[23px]">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
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
                  <div className="flex flex-col font-volkhov items-center justify-start sm:mt-0 mt-2.5">
                    <Text
                      className="text-pink-700 text-right text-shadow-ts text-xl"
                      size="txtVolkhovBold20Pink700"
                    >
                      In progress
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-volkhov md:gap-10 items-start justify-between mt-0.5 w-[99%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-shadow-ts text-xl"
                    size="txtVolkhovBold20"
                  >
                    Westminster to Greenwich River Thames
                  </Text>
                  <Text
                    className="md:mt-0 mt-1.5 text-right text-shadow-ts text-teal-200 text-xl"
                    size="txtVolkhovBold20Teal200"
                  >
                    Details
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-1.5 w-full">
                  <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                    <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_clock.svg"
                        alt="clock_One"
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
                        alt="car_One"
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
                        alt="settings_One"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishSemiBold14"
                      >
                        Family Plan
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="bg-gray-600_03 h-[31px] justify-center sm:mt-0 mt-2.5 sm:px-5 px-[21px] py-[3px] rounded-lg text-base text-center text-white-A700 w-[106px]"
                    size="txtRubikMedium16WhiteA700"
                  >
                    CancelCancel
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelExchangePage;