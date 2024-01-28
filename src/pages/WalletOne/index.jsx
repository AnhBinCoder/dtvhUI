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

const WalletOnePage = () => {
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
        <div className="font-sfprodisplay sm:h-[1301px] h-[1718px] md:h-[1799px] md:px-5 relative w-full">
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
                <div className="bg-gray-100_90 flex flex-row font-sfprodisplay gap-3 items-center justify-start px-3 py-4 rounded-md w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_thumbsup_purple_300_20x20.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="flex-1 text-[17px] text-purple-300 w-auto"
                    size="txtSFProDisplayMedium17Purple300"
                  >
                    My Wallet
                  </Text>
                </div>
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
                  color="white_A700_7e"
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
          <div className="absolute flex md:flex-col flex-row font-roboto md:gap-[47px] items-start justify-between right-[3%] top-[4%] w-[73%]">
            <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtRobotoRomanSemiBold45"
              >
                My Wallet
              </Text>
              <Img
                className="h-[62px] mt-[17px]"
                src="images/img_group.svg"
                alt="vector"
              />
              <div className="flex flex-col font-poppins md:gap-10 gap-[61px] items-start justify-start mt-[54px] w-full">
                <div className="bg-gray-100_03 flex flex-col justify-start md:ml-[0] ml-[3px] p-[7px] rounded-[40px] w-full">
                  <div className="h-[185px] md:ml-[0] ml-[200px] relative w-[42%]">
                    <Img
                      className="h-[116px] mb-[-5.02px] ml-[63px] w-[116px] z-[1]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <div className="h-[73px] mt-auto mx-auto w-full">
                      <Text
                        className="mb-[-1.28px] ml-[71px] text-gray-900_87_03 text-sm z-[1]"
                        size="txtPoppinsRegular14"
                      >
                        Your Balance
                      </Text>
                      <Text
                        className="mt-auto mx-auto text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                        size="txtPoppinsRegular36"
                      >
                        {" "}
                        8.250.000 VND
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[87%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[5px] items-end justify-between w-full">
                          <div className="h-[70px] md:h-[77px] sm:mt-0 mt-[7px] relative w-[71%] sm:w-full">
                            <div className="absolute flex flex-row gap-[27px] h-full inset-y-[0] items-start justify-center left-[9%] my-auto w-[46%]">
                              <div className="bg-blue-400_01 flex flex-col items-center justify-start mb-4 p-[13px] rounded-[12px] w-[53px]">
                                <div className="flex flex-col items-center justify-start w-[26px] md:w-full">
                                  <Img
                                    className="h-[27px] w-[26px]"
                                    src="images/img_user.svg"
                                    alt="user"
                                  />
                                </div>
                              </div>
                              <Text
                                className="mt-[49px] text-blue_gray-900_09 text-sm tracking-[0.30px]"
                                size="txtPoppinsRegular14Bluegray90009"
                              >
                                Send Money
                              </Text>
                            </div>
                            <Line className="absolute bg-gray-100_03 bottom-[31%] h-px inset-x-[0] mx-auto w-full" />
                          </div>
                          <div className="flex sm:flex-1 flex-row gap-[13px] items-start justify-start w-[29%] sm:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[63px] items-end justify-start mb-[13px] p-3 w-[34%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group44.svg')",
                              }}
                            >
                              <Img
                                className="h-[22px] mb-3 mt-[3px] w-[21px]"
                                src="images/img_user_white_a700.svg"
                                alt="user_One"
                              />
                            </div>
                            <Text
                              className="mt-[55px] text-blue_gray-900_09 text-sm tracking-[0.30px]"
                              size="txtPoppinsRegular14Bluegray90009"
                            >
                              Bill Payment
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[13px] w-[97%] md:w-full">
                          <div className="h-[69px] relative w-[73%] sm:w-full">
                            <div className="h-[69px] m-auto w-full">
                              <div className="absolute flex flex-row gap-7 h-full inset-y-[0] items-end justify-center left-[9%] my-auto w-[49%]">
                                <Img
                                  className="h-[67px]"
                                  src="images/img_user_purple_400_02.svg"
                                  alt="user_Two"
                                />
                                <Text
                                  className="mt-12 text-blue_gray-900_09 text-sm tracking-[0.30px]"
                                  size="txtPoppinsRegular14Bluegray90009"
                                >
                                  Top up Wallet
                                </Text>
                              </div>
                              <Line className="absolute bg-gray-100_03 h-px inset-x-[0] mx-auto top-[38%] w-full" />
                            </div>
                            <Img
                              className="absolute h-5 left-[13%] top-[20%]"
                              src="images/img_download.svg"
                              alt="download"
                            />
                          </div>
                          <div className="flex flex-col justify-start w-[26%] sm:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[46px] items-end justify-end p-2 rounded-[12px] w-[37%] md:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group113.svg')",
                              }}
                            >
                              <Img
                                className="h-[25px] mt-[3px] w-6"
                                src="images/img_download_white_a700.svg"
                                alt="download_One"
                              />
                            </div>
                            <Text
                              className="md:ml-[0] ml-[63px] mt-[3px] text-blue_gray-900_09 text-sm tracking-[0.30px]"
                              size="txtPoppinsRegular14Bluegray90009"
                            >
                              Withdraw
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray-100_03 h-px mt-5 w-[71%]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[31px] items-start justify-start mb-[122px] ml-9 md:ml-[0] mr-[19px] mt-[9px] w-[91%] md:w-full">
                    <Text
                      className="text-gray-900_87_03 text-sm tracking-[0.30px]"
                      size="txtPoppinsRegular14"
                    >
                      Transactions
                    </Text>
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col mx-auto w-full">
                        <div className="flex flex-col mx-auto w-full">
                          <div className="flex flex-col justify-start mx-auto w-full">
                            <Button
                              className="flex h-10 items-center justify-center mr-[521px] rounded-[15px] w-10"
                              color="blue_400_19"
                              size="sm"
                              variant="fill"
                            >
                              <Img src="images/img_cart.svg" alt="cart" />
                            </Button>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[113px] w-4/5 md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                    size="txtPoppinsMedium13"
                                  >
                                    SendSend
                                  </Text>
                                  <Text
                                    className="text-[13px] text-blue_gray-900_09 text-right tracking-[0.30px]"
                                    size="txtPoppinsMedium13"
                                  >
                                    326.800
                                  </Text>
                                </div>
                                <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                                  <Text
                                    className="text-blue_gray-800_87 text-xs tracking-[0.30px]"
                                    size="txtPoppinsRegular12"
                                  >
                                    Nov 17
                                  </Text>
                                  <Text
                                    className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                    size="txtPoppinsRegular12"
                                  >
                                    Minimarket Anugrah
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start mt-[-9.06px] mx-auto w-full z-[1]">
                            <Button
                              className="flex h-10 items-center justify-center mr-[517px] rounded-[15px] w-10"
                              color="purple_400_63"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                src="images/img_close_purple_400_02.svg"
                                alt="close"
                              />
                            </Button>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[113px] w-4/5 md:w-full">
                              <div className="flex flex-col items-end justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                    size="txtPoppinsMedium13"
                                  >
                                    SendSend
                                  </Text>
                                  <Text
                                    className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                    size="txtPoppinsMedium13"
                                  >
                                    326.800
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[286px] items-center justify-end mt-0.5 w-[94%] md:w-full">
                                  <Text
                                    className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                    size="txtPoppinsRegular12"
                                  >
                                    Nov 17
                                  </Text>
                                  <Text
                                    className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                    size="txtPoppinsRegular12"
                                  >
                                    Football Game
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start mt-[-7.71px] mx-auto w-full z-[1]">
                          <Button
                            className="flex h-10 items-center justify-center mr-[517px] rounded-[15px] w-10"
                            color="orange_600_63"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_camera.svg" alt="camera" />
                          </Button>
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[113px] mt-0.5 w-4/5 md:w-full">
                            <div className="flex flex-col items-end justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Text
                                  className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                  size="txtPoppinsMedium13"
                                >
                                  Top up{" "}
                                </Text>
                                <Text
                                  className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                  size="txtPoppinsMedium13"
                                >
                                  326.800
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[294px] items-center justify-end w-[94%] md:w-full">
                                <Text
                                  className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                  size="txtPoppinsRegular12"
                                >
                                  Nov 17
                                </Text>
                                <Text
                                  className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                  size="txtPoppinsRegular12"
                                >
                                  DSLR Camera
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start mt-[-7.82px] mx-auto w-full z-[1]">
                        <div className="flex flex-col h-10 items-center justify-start w-10">
                          <Button
                            className="flex h-10 items-center justify-center rounded-[15px] w-10"
                            color="teal_400_63"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_bag.svg" alt="bag" />
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[113px] mt-0.5 w-4/5 md:w-full">
                          <div className="flex flex-col items-end justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                size="txtPoppinsMedium13"
                              >
                                Top up
                              </Text>
                              <Text
                                className="text-[13px] text-blue_gray-900_09 tracking-[0.30px]"
                                size="txtPoppinsMedium13"
                              >
                                326.800
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[313px] items-start justify-end w-[94%] md:w-full">
                              <Text
                                className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                size="txtPoppinsRegular12"
                              >
                                Nov 17
                              </Text>
                              <Text
                                className="text-blue_gray-800_87 text-right text-xs tracking-[0.30px]"
                                size="txtPoppinsRegular12"
                              >
                                Stationary
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[26px] w-[25px]"
                  src="images/img_favorite_blue_gray_900_03.svg"
                  alt="favorite"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[187px] w-[35%] md:w-full">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-sfprodisplay items-center justify-start ml-1 md:ml-[0] p-5 rounded-[14px] w-[85%] md:w-full">
                <div className="flex flex-row gap-[179px] h-7 md:h-auto items-center justify-start w-[265px]">
                  <Text
                    className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                    size="txtSFProDisplayMedium22"
                  >
                    Cards
                  </Text>
                  <Img
                    className="h-5 w-5"
                    src="images/img_videocamera_gray_900_01.svg"
                    alt="videocamera"
                  />
                </div>
                <List
                  className="flex flex-col font-manrope gap-[13px] items-center mt-[17px] w-full"
                  orientation="vertical"
                >
                  <div className="md:h-36 h-[157px] relative rounded-[12px] w-full">
                    <div className="md:h-36 h-[157px] m-auto w-full">
                      <div className="md:h-36 h-[157px] m-auto w-full">
                        <div className="absolute bg-gradient3  h-36 inset-x-[0] mx-auto rounded-[12px] top-[0] w-[97%]"></div>
                        <div className="absolute backdrop-opacity-[0.5] bg-purple-A400_02 blur-[60.00px] h-[98px] right-[0] rounded-[54px] top-[0] w-[41%]"></div>
                        <div className="absolute backdrop-opacity-[0.5] bg-purple-A400_02 blur-[100.00px] bottom-[0] h-[127px] left-[0] rounded-[64px] w-32"></div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[74px] inset-x-[0] mx-auto"
                        src="images/img_group238401_white_a700.svg"
                        alt="group238401"
                      />
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[12%] w-[83%]">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-white-A700_e5 tracking-[0.16px]"
                            size="txtManropeSemiBold16"
                          >
                            Logo
                          </Text>
                          <Text
                            className="text-base text-white-A700_e5 tracking-[0.16px]"
                            size="txtManropeSemiBold16"
                          >
                            Logo
                          </Text>
                        </div>
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.16px]"
                          size="txtManropeSemiBold16"
                        >
                          4586 1223 4567 8910
                        </Text>
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[10px] text-white-A700_b2 w-auto"
                              size="txtManropeMedium10"
                            >
                              Card Name
                            </Text>
                            <Text
                              className="text-[8px] text-white-A700_e5 w-auto"
                              size="txtManropeBold8"
                            >
                              Kang Parjono
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[10px] text-white-A700_b2 w-auto"
                              size="txtManropeMedium10"
                            >
                              Valid Till
                            </Text>
                            <Text
                              className="text-[8px] text-white-A700_e5 w-auto"
                              size="txtManropeBold8"
                            >
                              02/10
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[157px] relative rounded-[12px] w-full">
                    <div className="h-[157px] m-auto w-full">
                      <div className="h-[157px] m-auto w-full">
                        <div className="absolute h-36 inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute bg-deep_purple-A200 h-36 inset-[0] justify-center m-auto rounded-[12px] w-[97%]"></div>
                          <div className="absolute backdrop-opacity-[0.5] bg-cyan-A200 blur-[100.00px] h-[122px] right-[0] rounded-[80px] top-[0] w-[61%]"></div>
                        </div>
                        <div className="absolute backdrop-opacity-[0.5] bg-light_blue-A400 blur-[100.00px] h-[157px] inset-y-[0] left-[0] my-auto rounded-[78px] w-[45%]"></div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[75px] inset-x-[0] items-end justify-end mx-auto p-[3px] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group238401_white_a700.svg')",
                        }}
                      >
                        <div className="backdrop-opacity-[0.5] bg-purple-400_01 blur-[80.00px] h-[37px] mr-[25px] mt-[31px] rounded-[44px] w-[34%]"></div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[12%] w-[83%]">
                      <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-white-A700_e5 tracking-[0.16px]"
                            size="txtManropeSemiBold16"
                          >
                            Logo
                          </Text>
                          <Text
                            className="text-base text-white-A700_e5 tracking-[0.16px]"
                            size="txtManropeSemiBold16"
                          >
                            Logo
                          </Text>
                        </div>
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.16px]"
                          size="txtManropeSemiBold16"
                        >
                          4586 1223 4567 8910
                        </Text>
                        <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[10px] text-white-A700_b2 w-auto"
                              size="txtManropeMedium10"
                            >
                              Card Name
                            </Text>
                            <Text
                              className="text-[8px] text-white-A700_e5 w-auto"
                              size="txtManropeBold8"
                            >
                              Kang Parjono
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-[10px] text-white-A700_b2 w-auto"
                              size="txtManropeMedium10"
                            >
                              Valid Till
                            </Text>
                            <Text
                              className="text-[8px] text-white-A700_e5 w-auto"
                              size="txtManropeBold8"
                            >
                              02/10
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[263px] mt-5 rounded-[10px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-1"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                  shape="round"
                  color="pink_50_03"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-medium leading-[normal] text-base text-left">
                    Create new card
                  </div>
                </Button>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold font-darkergrotesque h-[46px] mt-[9px] rounded-[10px] text-base text-center w-[344px]"
                onClick={() => navigate("/wallet")}
                shape="round"
                size="lg"
                variant="gradient"
                color="pink_200_pink_300"
              >
                Add Money
              </Button>
              <div className="flex flex-col font-poppins items-center justify-start md:ml-[0] ml-[25px] mt-[22px] w-[94%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[42%] md:w-full">
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        shape="circle"
                        color="indigo_50"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[19px]"
                          src="images/img_bitcoin.svg"
                          alt="bitcoin"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-gray-900_03 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Achain news
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-2 w-full">
                    <div className="bg-pink-200_01 h-[190px] relative rounded-[25px] w-full">
                      <div className="absolute h-[190px] inset-y-[0] my-auto right-[0] w-[89%]">
                        <div className="absolute flex h-[190px] inset-y-[0] justify-end my-auto right-[0] w-[73%]">
                          <div className="backdrop-opacity-[0.5] bg-gray-900_7e blur-[34.00px] h-[38px] ml-auto mr-4 mt-auto rotate-[20deg] rounded-[56px] w-[53%]"></div>
                          <Img
                            className="absolute h-[190px] inset-[0] m-auto object-cover rounded-[25px] w-[215px]"
                            src="images/img_illustrationrobot.png"
                            alt="illustrationrob"
                          />
                        </div>
                        <div className="backdrop-opacity-[0.5] bg-orange-200_7e blur-[34.00px] h-[31px] mt-[50px] rounded-[39px] w-[27%]"></div>
                        <Img
                          className="absolute h-[86px] left-[0] object-cover rounded-[25px] top-[0] w-[98px]"
                          src="images/img_illustrationbtc.png"
                          alt="illustrationbtc"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[114px] left-[0] object-cover rounded-[25px] w-[202px]"
                        src="images/img_illustrationother.png"
                        alt="illustrationoth"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[51px] text-gray-900_03 text-sm w-full"
                    size="txtPoppinsMedium14"
                  >
                    Participate in the Corra Finance Airdrop on CoinMarketCap
                  </Text>
                  <div className="flex flex-row gap-2.5 items-start justify-start mt-[9px] w-[32%] md:w-full">
                    <Img
                      className="h-[18px] w-[17px]"
                      src="images/img_frame1.svg"
                      alt="frameOne"
                    />
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtPoppinsMedium14Gray500"
                    >
                      3 days ago
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletOnePage;
