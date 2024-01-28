import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const bozorgiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dateOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateTimeshareThreePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-sfprodisplay md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mx-auto w-full">
            <div className="h-[1331px] md:h-[1336px] mb-[9px] pt-1 relative w-[24%] md:w-full">
              <div className="bg-blue_gray-100_cc h-[1327px] m-auto w-full"></div>
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
            <div className="font-roboto sm:h-[1222px] h-[1326px] md:h-[1392px] relative w-[77%] md:w-full">
              <Text
                className="mt-1.5 mx-auto sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtRobotoRomanSemiBold45"
              >
                Create Timeshare
              </Text>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto sm:pl-5 pl-[30px] pt-[30px] w-full">
                <div className="flex flex-col items-start justify-end mt-2.5 p-[27px] sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[7px] mt-[35px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Name
                        </Text>
                        <Text
                          className="bg-white-A700 h-[57px] justify-center max-w-[946px] md:max-w-full outline outline-[2px] outline-gray-600_01 pb-2.5 pt-[18px] sm:px-5 px-[35px] rounded-[5px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl w-full"
                          size="txtRobotoRomanMedium24"
                        >
                          Nha Trang Hotel{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-4 w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Address
                        </Text>
                        <Text
                          className="bg-white-A700 h-[58px] justify-center max-w-[946px] md:max-w-full outline outline-[2px] outline-gray-600_01 pb-2.5 pt-[18px] sm:px-5 px-[35px] rounded-[5px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl w-full"
                          size="txtRobotoRomanMedium24"
                        >
                          33062 Zboncak isle
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-3 w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                            size="txtRobotoRomanSemiBold26"
                          >
                            City
                          </Text>
                          <div className="bg-white-A700 flex flex-row items-center justify-between outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full">
                            <Text
                              className="ml-5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                              size="txtRobotoRomanMedium24"
                            >
                              Mehrab
                            </Text>
                            <Img
                              className="h-[39px] mr-[5px]"
                              src="images/img_keyboardarrowdown.svg"
                              alt="keyboardarrowdo"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                            size="txtRobotoRomanSemiBold26"
                          >
                            State
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] outline outline-[2px] outline-gray-600_01 rounded-[5px] text-2xl md:text-[22px] text-left sm:text-xl w-full"
                            placeholderClassName="text-gray-600_01"
                            indicator={
                              <Img
                                className="h-3 mr-[0] w-[25px]"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group271"
                            options={bozorgiOptionsList}
                            isSearchable={false}
                            placeholder="Bozorgi"
                            shape="round"
                            color="white_A700"
                            size="2xl"
                            variant="fill"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[11px]">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Timeshare
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="bg-blue_gray-100_66 flex flex-col font-roboto items-center justify-end p-2 w-full">
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[98%] md:w-full">
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] w-[46%] md:w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-900 text-xl"
                                size="txtRobotoRomanSemiBold20"
                              >
                                Start Date
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-gray-900 text-xl"
                                size="txtRobotoRomanSemiBold20"
                              >
                                End Date
                              </Text>
                            </div>
                          </div>
                          <div className="sm:h-[262px] h-[319px] md:h-[364px] mt-[5px] relative w-full">
                            <div className="sm:h-[257px] h-[319px] md:h-[359px] m-auto w-full">
                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                  <SelectBox
                                    className="md:flex-1 font-medium leading-[normal] mb-[39px] outline outline-[2px] outline-gray-600_01 rounded-[5px] text-2xl md:text-[22px] text-left sm:text-xl w-[26%] md:w-full"
                                    placeholderClassName="text-gray-600_01"
                                    indicator={
                                      <Img
                                        className="h-3 mr-[0] w-[25px]"
                                        src="images/img_arrowdown.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                    isMulti={false}
                                    name="date"
                                    options={dateOptionsList}
                                    isSearchable={false}
                                    placeholder="08/02/2024"
                                    shape="round"
                                    color="white_A700"
                                    size="lg"
                                    variant="fill"
                                  />
                                  <SelectBox
                                    className="md:flex-1 font-medium leading-[normal] mb-[39px] outline outline-[2px] outline-gray-600_01 rounded-[5px] text-2xl md:text-[22px] text-left sm:text-xl w-[26%] md:w-full"
                                    placeholderClassName="text-gray-600_01"
                                    indicator={
                                      <Img
                                        className="h-3 mr-[0] w-[25px]"
                                        src="images/img_arrowdown.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                    isMulti={false}
                                    name="date_One"
                                    options={dateOneOptionsList}
                                    isSearchable={false}
                                    placeholder="15/02/2024"
                                    shape="round"
                                    color="white_A700"
                                    size="lg"
                                    variant="fill"
                                  />
                                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[11px]">
                                    <div className="flex flex-row items-end justify-between ml-0.5 md:ml-[0] w-[90%] md:w-full">
                                      <div className="flex flex-col items-center justify-start">
                                        <Text
                                          className="text-gray-900 text-xl"
                                          size="txtRobotoRomanSemiBold20"
                                        >
                                          Type
                                        </Text>
                                      </div>
                                      <Img
                                        className="h-3 mt-3"
                                        src="images/img_arrowdown.svg"
                                        alt="arrowdown"
                                      />
                                    </div>
                                    <Input
                                      name="group265"
                                      placeholder="Booking"
                                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                                      wrapClassName="mt-0.5 outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                                      color="white_A700"
                                      size="3xl"
                                      variant="fill"
                                    ></Input>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-[12%] flex flex-col items-start justify-start right-[0] w-[27%]">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700_cc border border-black-900_3d border-solid flex flex-col items-center justify-start p-0.5 rounded-[5px] w-full">
                                    <Text
                                      className="mb-3.5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                                      size="txtRobotoRomanMedium24"
                                    >
                                      <>
                                        Booking
                                        <br />
                                        Exchange
                                        <br />
                                        Booking & Exchange
                                      </>
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="ml-0.5 md:ml-[0] mt-1.5 text-gray-900 text-xl"
                                  size="txtRobotoRomanSemiBold20"
                                >
                                  Price for booking
                                </Text>
                                <Input
                                  name="price"
                                  placeholder="1.000.000 VND"
                                  className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                                  wrapClassName="ml-0.5 md:ml-[0] mt-0.5 outline outline-[2px] outline-gray-600_01 rounded-[5px] w-[82%]"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                ></Input>
                              </div>
                              <div className="absolute bottom-[0] flex flex-row font-inter items-start justify-between left-[0] w-[56%]">
                                <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col items-center justify-start shadow-bs11">
                                  <div className="bg-blue_gray-100_01 flex flex-row items-center justify-between p-1.5 w-full">
                                    <Text
                                      className="ml-2 mt-[5px] text-blue_gray-900_08 text-center text-sm"
                                      size="txtInterBold14"
                                    >
                                      February 2024
                                    </Text>
                                    <Img
                                      className="h-[11px] mr-1.5 w-[38px]"
                                      src="images/img_arrows.svg"
                                      alt="arrows"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start mb-[11px] mt-1 w-[91%] md:w-full">
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <Text
                                        className="text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Mo
                                      </Text>
                                      <Text
                                        className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Tu
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        We
                                      </Text>
                                      <Text
                                        className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Th
                                      </Text>
                                      <Text
                                        className="text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Fr
                                      </Text>
                                      <Text
                                        className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Sa
                                      </Text>
                                      <Text
                                        className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                        size="txtInterBold12"
                                      >
                                        Su
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-center justify-end md:ml-[0] ml-[135px] mt-[22px] w-[48%] md:w-full">
                                      <Text
                                        className="text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="ml-[33px] text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="ml-[31px] text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="ml-8 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        4
                                      </Text>
                                    </div>
                                    <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-3 w-[98%] md:w-full">
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        7
                                      </Text>
                                      <Button
                                        className="cursor-pointer font-medium leading-[normal] min-w-[36px] rounded-[18px] text-center text-xs"
                                        color="red_500_03"
                                        size="md"
                                        variant="fill"
                                      >
                                        8
                                      </Button>
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        9
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        10
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        11
                                      </Text>
                                    </div>
                                    <List
                                      className="flex flex-col gap-[22px] items-center mt-3.5 w-full"
                                      orientation="vertical"
                                    >
                                      <div className="flex flex-1 flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          12
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          13
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          14
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          15
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          16
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          17
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          18
                                        </Text>
                                      </div>
                                      <div className="flex flex-1 flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          19
                                        </Text>
                                        <Text
                                          className="h-[15px] text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          20
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          21
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          22
                                        </Text>
                                        <Text
                                          className="h-[15px] text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          23
                                        </Text>
                                        <Text
                                          className="h-[15px] text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          24
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          25
                                        </Text>
                                      </div>
                                    </List>
                                    <div className="flex flex-row items-center justify-start mt-[23px] w-[55%] md:w-full">
                                      <Text
                                        className="h-[15px] text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        26
                                      </Text>
                                      <Text
                                        className="ml-7 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        27
                                      </Text>
                                      <Text
                                        className="ml-7 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        28
                                      </Text>
                                      <Text
                                        className="h-[15px] ml-7 text-center text-gray-700 text-xs"
                                        size="txtInterMedium12"
                                      >
                                        29
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-1 mt-[30px] w-[41px]"
                                  src="images/img_arrows_blue_gray_900_08.svg"
                                  alt="arrows_One"
                                />
                              </div>
                            </div>
                            <div className="absolute bg-white-A700 border border-gray-400 border-solid bottom-[0] flex flex-col font-inter items-center justify-start right-[31%] shadow-bs11 w-[32%]">
                              <div className="bg-blue_gray-100_01 flex flex-row items-center justify-between p-1.5 w-full">
                                <Text
                                  className="ml-2 mt-[5px] text-blue_gray-900_08 text-center text-sm"
                                  size="txtInterBold14"
                                >
                                  February 2024
                                </Text>
                                <Img
                                  className="h-[11px] mr-1.5 w-[38px]"
                                  src="images/img_arrows.svg"
                                  alt="arrows_Two"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start mb-[11px] mt-1 w-[91%] md:w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Mo
                                  </Text>
                                  <Text
                                    className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Tu
                                  </Text>
                                  <Text
                                    className="text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    We
                                  </Text>
                                  <Text
                                    className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Th
                                  </Text>
                                  <Text
                                    className="text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Fr
                                  </Text>
                                  <Text
                                    className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Sa
                                  </Text>
                                  <Text
                                    className="h-[15px] text-blue_gray-900_08 text-center text-xs"
                                    size="txtInterBold12"
                                  >
                                    Su
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[135px] mt-[22px] w-[48%] md:w-full">
                                  <Text
                                    className="text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    1
                                  </Text>
                                  <Text
                                    className="ml-[33px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    2
                                  </Text>
                                  <Text
                                    className="ml-[31px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    3
                                  </Text>
                                  <Text
                                    className="ml-8 text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    4
                                  </Text>
                                </div>
                                <div className="h-[63px] md:h-[85px] mt-[23px] relative w-full">
                                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                                    <div className="flex flex-col gap-[13px] justify-start w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          5
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          6
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          7
                                        </Text>
                                        <Text
                                          className="text-center text-gray-600_01 text-xs"
                                          size="txtInterMedium12Gray60001"
                                        >
                                          8
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          9
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          10
                                        </Text>
                                        <Text
                                          className="text-center text-gray-700 text-xs"
                                          size="txtInterMedium12"
                                        >
                                          11
                                        </Text>
                                      </div>
                                      <div className="bg-red-500_03 h-[34px] md:ml-[0] ml-[117px] mr-[104px] rounded-[18px] w-[15%]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[14%] flex flex-row inset-x-[0] items-center justify-between mx-auto w-full">
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      12
                                    </Text>
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      13
                                    </Text>
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      14
                                    </Text>
                                    <Text
                                      className="text-center text-white-A700_cc text-xs"
                                      size="txtInterMedium12WhiteA700cc"
                                    >
                                      15
                                    </Text>
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      16
                                    </Text>
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      17
                                    </Text>
                                    <Text
                                      className="text-center text-gray-700 text-xs"
                                      size="txtInterMedium12"
                                    >
                                      18
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[13px] w-full">
                                  <Text
                                    className="text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    19
                                  </Text>
                                  <Text
                                    className="h-[15px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    21
                                  </Text>
                                  <Text
                                    className="text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    22
                                  </Text>
                                  <Text
                                    className="h-[15px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="h-[15px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    24
                                  </Text>
                                  <Text
                                    className="text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    25
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start mt-[23px] w-[55%] md:w-full">
                                  <Text
                                    className="h-[15px] text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    26
                                  </Text>
                                  <Text
                                    className="ml-7 text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    27
                                  </Text>
                                  <Text
                                    className="ml-7 text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    28
                                  </Text>
                                  <Text
                                    className="h-[15px] ml-7 text-center text-gray-700 text-xs"
                                    size="txtInterMedium12"
                                  >
                                    29
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="font-rubik h-[19px] md:h-[22px] ml-2 md:ml-[0] mt-[3px] relative w-[71%] md:w-full">
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-base text-red-A700 w-max"
                              size="txtRubikMedium16"
                            >
                              {" "}
                              ! Please ensure that the total number of start and
                              end days does not exceed 7 days
                            </Text>
                            <div className="absolute border border-red-800_01 border-solid h-[17px] left-[0] rounded-[10px] shadow-bs12 top-[0] w-[4%]"></div>
                          </div>
                        </div>
                      </div>
                      <Input
                        name="group1000004343"
                        placeholder="Add New Time"
                        className="font-medium font-rubik p-0 placeholder:text-white-A700 text-base text-center w-full"
                        wrapClassName="flex md:ml-[0] ml-[5px] rounded-lg w-[19%]"
                        prefix={
                          <div className="mr-[7px] w-5 bg-white-A700">
                            <Img
                              className="my-auto"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </div>
                        }
                        color="gray_600_03"
                        size="xs"
                        variant="fill"
                      ></Input>
                      <div className="font-roboto h-[85px] ml-3 md:ml-[0] mt-3.5 relative w-[21%]">
                        <Text
                          className="mb-[-3.09px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 z-[1]"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Unit size
                        </Text>
                        <div className="bg-white-A700 flex flex-col items-start justify-start mt-auto mx-auto outline outline-[2px] outline-gray-600_01 p-[11px] rounded-[5px] w-full">
                          <Text
                            className="mb-[5px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                            size="txtRobotoRomanMedium24"
                          >
                            3 bedroom
                          </Text>
                        </div>
                      </div>
                      <div className="font-roboto md:h-[251px] h-[310px] sm:h-[311px] ml-2.5 md:ml-[0] mt-0.5 relative w-[99%] md:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
                            <div className="flex flex-col font-roboto items-start justify-start w-full">
                              <Text
                                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                                size="txtRobotoRomanSemiBold26"
                              >
                                Description
                              </Text>
                              <Input
                                name="group273"
                                placeholder="sbdfbnd65sfdvb s"
                                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                                wrapClassName="outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                                color="white_A700"
                                size="sm"
                                variant="fill"
                              ></Input>
                            </div>
                            <Button
                              className="common-pointer cursor-pointer font-bold font-sourcesanspro leading-[70.00px] min-w-[941px] md:min-w-full outline outline-[0.5px] outline-black-900_1e rounded text-2xl md:text-[22px] text-center sm:text-xl"
                              onClick={() => navigate("/createtimesharetwo")}
                              color="amber_600"
                              variant="fill"
                            >
                              NEXT PAGE
                            </Button>
                          </div>
                        </div>
                        <div className="absolute bottom-[14%] h-[139px] md:h-[73px] left-[0] p-0.5 w-1/5">
                          <Img
                            className="absolute bottom-[18%] h-[57px] inset-x-[0] mx-auto"
                            src="images/img_firstname.svg"
                            alt="firstname"
                          />
                          <div className="absolute flex flex-col gap-[11px] justify-start left-[1%] top-[17%]">
                            <Text
                              className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                              size="txtRobotoRomanSemiBold26"
                            >
                              Picture
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[21px] md:text-2xl sm:text-[22px] text-[26px] text-red-A200"
                              size="txtRobotoRomanSemiBold26RedA200"
                            >
                              Chose file
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[-9px] mx-auto w-full z-[1]" />
        </div>
      </div>
    </>
  );
};

export default CreateTimeshareThreePage;
