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

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bozorgiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateTimeshareOnePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1839px] mx-auto relative w-full">
        <div className="absolute md:h-[1226px] h-[1839px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="sm:h-[1221px] h-[1839px] md:h-[921px] m-auto w-full">
            <div className="font-mulish sm:h-[1221px] h-[1839px] md:h-[921px] m-auto w-full">
              <div className="sm:h-[1221px] h-[1839px] md:h-[622px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col relative w-full">
                    <Header className="bg-gradient1  flex flex-col font-nicomoji items-center justify-center mx-auto w-full" />
                    <div className="font-inter h-[1331px] md:h-[NaNpx] mt-[-NaNpx] w-[24%] z-[1]">
                      <div className="bg-blue_gray-100_cc h-[1330px] m-auto w-full"></div>
                      <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[13%] w-3/4">
                        <Img
                          className="h-[158px] md:h-auto ml-9 md:ml-[0] rounded-[50%] w-[67%]"
                          src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                          alt="unsplashc8ta0gw_One"
                        />
                        <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start w-[248px]">
                          <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                            <div className="bg-white-A700_a8 flex flex-row gap-3 items-center justify-start px-3 py-4 rounded-lg shadow-bs w-[248px]">
                              <Img
                                className="h-5 w-5"
                                src="images/img_grid.svg"
                                alt="grid"
                              />
                              <Text
                                className="text-[17px] text-black-900_b2 text-shadow-ts2 w-auto"
                                size="txtInterMedium17"
                              >
                                Dashboard
                              </Text>
                            </div>
                            <div className="bg-white-A700_90 flex flex-row gap-3 items-center justify-start px-3 py-4 rounded-md w-full">
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
                            <div className="bg-gray-100_90 flex flex-row font-sfprodisplay gap-3 items-center justify-start px-3 py-4 rounded-md w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_thumbsup_gray_900_01.svg"
                                alt="thumbsup_One"
                              />
                              <Text
                                className="flex-1 text-[17px] text-gray-900_01 w-auto"
                                size="txtSFProDisplayMedium17"
                              >
                                My Wallet
                              </Text>
                            </div>
                            <div className="bg-white-A700_90 flex flex-row font-sfprodisplay gap-3 items-center justify-start px-3 py-4 rounded-lg w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_lock_gray_900_01.svg"
                                alt="lock"
                              />
                              <Text
                                className="flex-1 text-[17px] text-gray-900_01 w-auto"
                                size="txtSFProDisplayMedium17"
                              >
                                Account
                              </Text>
                            </div>
                            <Input
                              name="frameTwo"
                              placeholder="Rent/Exchange"
                              value={frametwovalue}
                              onChange={(e) => setFrametwovalue(e)}
                              className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-medium leading-[normal] p-0 text-[17px] text-left w-full"
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
                                      frametwovalue?.length <= 0
                                        ? "hidden"
                                        : "visible",
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
                              className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-medium leading-[normal] p-0 text-[17px] text-left w-full"
                              wrapClassName="flex rounded-lg w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-0.5 h-5 mr-3"
                                  src="images/img_checkmark.svg"
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
                          <div className="flex flex-col font-sfprodisplay gap-1 items-start justify-start w-auto">
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
                    <Text
                      className="ml-auto mr-[436px] mt-[-1.16px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center z-[1]"
                      size="txtRobotoRomanSemiBold45"
                    >
                      Edit Details
                    </Text>
                  </div>
                  <Footer className="bg-blue_gray-900_01 flex items-center justify-center w-full" />
                </div>
                <div className="absolute flex flex-col font-roboto md:gap-10 gap-[107px] items-center justify-start right-[7%] top-[7%] w-[66%]">
                  <div className="flex flex-col md:gap-10 gap-[737px] items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Name
                      </Text>
                      <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[2px] outline-gray-600_01 p-2.5 rounded-[5px] w-full">
                        <Text
                          className="md:ml-[0] ml-[52px] mt-[7px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Nha Trang Hotel{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Directions
                      </Text>
                      <div className="h-[226px] md:ml-[0] ml-[25px] relative w-[98%] md:w-full">
                        <Text
                          className="mb-[-1.06px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl z-[1]"
                          size="txtRobotoRomanMedium24"
                        >
                          Nearest Airport: Myrtle Beach/MYR
                        </Text>
                        <Img
                          className="h-[199px] mt-auto mx-auto object-cover w-full"
                          src="images/img_rectangle7.png"
                          alt="rectangleSeven"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-600 flex flex-col font-sourcesanspro items-center justify-start outline outline-[0.5px] outline-black-900_1e md:px-10 sm:px-5 px-[60px] rounded">
                    <Text
                      className="leading-[70.00px] text-2xl md:text-[22px] text-center text-shadow-ts2 text-white-A700 sm:text-xl w-[99%] sm:w-full"
                      size="txtSourceSansProBold24"
                    >
                      CREATE NEW TIMESHARE
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-roboto items-start justify-start right-[7%] top-[13%] w-[66%]">
                <div className="md:h-[89px] h-[91px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto outline outline-[2px] outline-gray-600_01 p-2.5 rounded-[5px] w-full">
                    <Text
                      className="md:ml-[0] ml-[51px] mt-2 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                      size="txtRobotoRomanMedium24"
                    >
                      33062 Zboncak isle
                    </Text>
                  </div>
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtRobotoRomanSemiBold26"
                  >
                    Address
                  </Text>
                  <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
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
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-3 w-full">
                  <div className="h-[87px] relative w-[47%] md:w-full">
                    <Text
                      className="mb-[-2.74px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 z-[1]"
                      size="txtRobotoRomanSemiBold26"
                    >
                      City
                    </Text>
                    <div className="flex flex-col items-start justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
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
                          alt="keyboardarrowdo_One"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row items-center justify-between mb-[undefinedpx] mt-auto mx-auto outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full z-[1]">
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
                  <div className="md:h-[88px] h-[89px] relative w-[47%] md:w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-auto outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full">
                      <Text
                        className="ml-[19px] mt-2 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                        size="txtRobotoRomanMedium24"
                      >
                        Bozorgi
                      </Text>
                      <Img
                        className="h-3 mr-[22px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      State
                    </Text>
                    <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
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
                        name="groupNinetyEight"
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
                </div>
                <List
                  className="flex flex-col gap-[15px] items-center mt-[17px] w-full"
                  orientation="vertical"
                >
                  <div className="md:h-[88px] h-[90px] relative w-full">
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full">
                      <Text
                        className="md:ml-[0] ml-[53px] mt-2 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                        size="txtRobotoRomanMedium24"
                      >
                        A Place at the Beach–Windy Hill offers hours of fun in
                        the sun.
                      </Text>
                    </div>
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Additional Info
                    </Text>
                    <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Additional Info
                      </Text>
                      <Text
                        className="bg-white-A700 h-[57px] justify-center max-w-[946px] md:max-w-full outline outline-[2px] outline-gray-600_01 pb-[9px] pt-[18px] sm:px-5 px-[35px] rounded-[5px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl w-full"
                        size="txtRobotoRomanMedium24"
                      >
                        A Place at the Beach–Windy Hill offers hours of fun in
                        the sun.
                      </Text>
                    </div>
                  </div>
                  <div className="h-[132px] relative w-full">
                    <Text
                      className="mb-[-0.39px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 z-[1]"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Resort Features
                    </Text>
                    <div className="flex flex-col items-start justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Resort Features
                      </Text>
                      <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[2px] outline-gray-600_01 p-[7px] rounded-[5px] w-full">
                        <Text
                          className="md:ml-[0] ml-[18px] mt-0.5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          <>
                            WiFi (Free)
                            <br />
                            Exercise Room (On-Site)
                            <br />
                            Hot Tub (On-Site)
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-end mb-[undefinedpx] mt-auto mx-auto outline outline-[2px] outline-gray-600_01 p-[7px] rounded-[5px] w-full z-[1]">
                      <Text
                        className="md:ml-[0] ml-[18px] mt-0.5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                        size="txtRobotoRomanMedium24"
                      >
                        <>
                          WiFi (Free)
                          <br />
                          Exercise Room (On-Site)
                          <br />
                          Hot Tub (On-Site)
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="h-[99px] relative w-full">
                    <Text
                      className="mb-[-0.09px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 z-[1]"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Unit Features
                    </Text>
                    <div className="flex flex-col items-start justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Unit Features
                      </Text>
                      <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[2px] outline-gray-600_01 p-2.5 rounded-[5px] w-full">
                        <Text
                          className="mb-[26px] md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          <>
                            Balcony (All Units)
                            <br />
                            Kitchen (Full)
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start mb-[undefinedpx] mt-auto mx-auto outline outline-[2px] outline-gray-600_01 p-2.5 rounded-[5px] w-full z-[1]">
                      <Text
                        className="mb-[26px] md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                        size="txtRobotoRomanMedium24"
                      >
                        <>
                          Balcony (All Units)
                          <br />
                          Kitchen (Full)
                        </>
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="h-[131px] md:h-[141px] mt-3.5 relative w-full">
                  <div className="absolute bg-white-A700 bottom-[3%] h-24 inset-x-[0] mx-auto outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"></div>
                  <Text
                    className="absolute left-[0] md:text-2xl sm:text-[22px] text-[26px] text-gray-900 top-[0]"
                    size="txtRobotoRomanSemiBold26"
                  >
                    Area Features
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[3%] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                    size="txtRobotoRomanMedium24"
                  >
                    <>
                      Childrens Playground (Nearby)
                      <br />
                      Boating (Nearby)
                      <br />
                      Water Skiing (Nearby)
                    </>
                  </Text>
                  <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Area Features
                    </Text>
                    <div className="md:h-24 h-[100px] relative w-full">
                      <div className="absolute bg-white-A700 h-24 inset-x-[0] mx-auto outline outline-[2px] outline-gray-600_01 rounded-[5px] top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] left-[3%] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                        size="txtRobotoRomanMedium24"
                      >
                        <>
                          Childrens Playground (Nearby)
                          <br />
                          Boating (Nearby)
                          <br />
                          Water Skiing (Nearby)
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[139px] md:h-[325px] mt-[252px] p-0.5 relative w-1/5">
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
            <Text
              className="absolute right-[30%] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center top-[5%]"
              size="txtRobotoRomanSemiBold45"
            >
              Edit Details
            </Text>
          </div>
          <div className="absolute flex flex-col items-center justify-start right-[7%] top-[7%] w-[66%]">
            <div className="flex flex-col font-roboto items-start justify-start w-full">
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
            <div className="flex flex-col font-roboto justify-start mt-[737px] w-full">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                size="txtRobotoRomanSemiBold26"
              >
                Directions
              </Text>
              <div className="h-[226px] md:ml-[0] ml-[25px] relative w-[98%] md:w-full">
                <Text
                  className="mb-[-1.06px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl z-[1]"
                  size="txtRobotoRomanMedium24"
                >
                  Nearest Airport: Myrtle Beach/MYR
                </Text>
                <Img
                  className="h-[199px] mt-auto mx-auto object-cover w-full"
                  src="images/img_rectangle7.png"
                  alt="rectangleSeven_Three"
                />
              </div>
            </div>
            <Text
              className="leading-[70.00px] mt-[102px] text-2xl md:text-[22px] text-center text-shadow-ts2 text-white-A700 sm:text-xl w-[86%] sm:w-full"
              size="txtSourceSansProBold24"
            >
              CREATE NEW TIMESHARE
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[27%] h-[139px] md:h-[73px] left-[27%] p-0.5 md:px-5 w-[13%]">
          <Img
            className="absolute bottom-[18%] h-[57px] inset-x-[0] mx-auto"
            src="images/img_firstname.svg"
            alt="firstname_One"
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
        <div className="absolute bg-gray-900_87_02 bottom-[0] flex flex-col font-rubik inset-x-[0] items-center justify-start mx-auto p-[500px] md:px-10 sm:px-5 w-full">
          <div className="h-[274px] md:h-[951px] mb-[429px] mt-[248px] px-[7px] relative w-[98%] sm:w-full">
            <div className="bg-white-A700 h-[274px] m-auto rounded-[28px] w-[97%]"></div>
            <div className="absolute flex flex-col gap-[15px] h-max inset-[0] items-center justify-center m-auto w-[84%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800"
                size="txtRubikMedium36"
              >
                Add new timeshare
              </Text>
              <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                <Text
                  className="leading-[24.00px] text-2xl md:text-[22px] text-center text-gray-600_03 sm:text-xl w-[99%] sm:w-full"
                  size="txtRubikRegular24"
                >
                  Are you sure you want to create new timehshare ?
                </Text>
                <div className="flex flex-row gap-[15px] items-center justify-between w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[173px] text-base text-center"
                    shape="round"
                    color="gray_600_03"
                    size="xl"
                    variant="fill"
                  >
                    NO, CANCEL
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-medium min-w-[173px] text-base text-center"
                    onClick={() => navigate("/createtimeshare")}
                    shape="round"
                    color="red_300_02"
                    size="xl"
                    variant="fill"
                  >
                    YES
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTimeshareOnePage;
