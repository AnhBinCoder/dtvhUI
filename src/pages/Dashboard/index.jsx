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

const DashboardPage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-sfprodisplay md:gap-5 items-start justify-evenly max-w-[1403px] mx-auto md:px-5 w-full">
            <div className="md:h-[1329px] h-[1331px] pt-0.5 relative w-[24%] md:w-full">
              <Img
                className="h-[1329px] m-auto object-cover w-full"
                src="images/img_rectangle34624352_1329x333.png"
                alt="rectangle346243"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[13%] w-3/4">
                <Img
                  className="h-[158px] md:h-auto ml-9 md:ml-[0] rounded-[50%] w-[67%]"
                  src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                  alt="unsplashc8ta0gw_One"
                />
                <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start w-[248px]">
                  <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                    <div className="bg-white-A700_a8 flex flex-row font-inter gap-3 items-center justify-start px-3 py-4 rounded-lg shadow-bs w-[248px]">
                      <Img
                        className="h-5 w-5"
                        src="images/img_grid_purple_300.svg"
                        alt="grid"
                      />
                      <Text
                        className="text-[17px] text-purple-300 text-shadow-ts2 w-auto"
                        size="txtInterMedium17Purple300"
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
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px] rounded-md"
                      onClick={() => navigate("/memberprofile")}
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
            <div className="flex md:flex-1 flex-col font-roboto gap-[37px] justify-start md:mt-0 mt-[87px] w-[77%] md:w-full">
              <Text
                className="md:ml-[0] ml-[340px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtRobotoRomanSemiBold45"
              >
                Dashboard
              </Text>
              <div className="flex flex-col font-sfprodisplay gap-6 h-[989px] md:h-auto items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="bg-gray-200_87 flex flex-row gap-[230px] items-center justify-start px-5 py-3 rounded-[10px] w-auto">
                      <Text
                        className="text-[17px] text-blue_gray-900_99 w-auto"
                        size="txtSFProDisplayMedium17Bluegray90099"
                      >
                        Search for anything....
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_contrast_blue_gray_900_06.svg"
                        alt="contrast"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-[26px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-end justify-end pl-3.5 py-3.5 rounded-[14px] w-full">
                        <div className="flex flex-col gap-[22px] items-start justify-start mt-1 w-auto">
                          <Img
                            className="h-11 w-[218px]"
                            src="images/img_frame427319361.svg"
                            alt="frame427319361"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[0.50px] w-[158px]"
                            size="txtInterRegular25"
                          >
                            632.000VND
                          </Text>
                          <div className="flex flex-row gap-[22px] items-end justify-start w-auto">
                            <div className="flex flex-col font-sfprodisplay items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_87 tracking-[0.32px] w-auto"
                                size="txtSFProDisplayMedium16"
                              >
                                Total Balance
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium font-satoshi h-[31px] leading-[normal] rounded-[15px] text-center text-xs w-[73px]"
                              color="cyan_50"
                              size="sm"
                              variant="fill"
                            >
                              +1,29%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[11px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-[22px] h-[149px] md:h-auto items-start justify-start mt-2.5 w-[218px]">
                          <Img
                            className="h-11 w-[218px]"
                            src="images/img_frame427319358.svg"
                            alt="frame427319358"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[0.50px] w-[153px]"
                            size="txtInterRegular25"
                          >
                            567.000VND
                          </Text>
                          <div className="flex flex-row gap-[23px] items-end justify-start w-auto">
                            <div className="flex flex-col font-sfprodisplay items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_87 tracking-[0.32px] w-auto"
                                size="txtSFProDisplayMedium16"
                              >
                                Total Income
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium font-satoshi h-[31px] leading-[normal] rounded-[15px] text-center text-xs w-[73px]"
                              color="red_50"
                              size="sm"
                              variant="fill"
                            >
                              +1,29%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-end justify-end p-1.5 rounded-[14px] w-full">
                        <div className="flex flex-col gap-[22px] h-[150px] md:h-auto items-start justify-start mb-1 mt-[15px] w-[218px]">
                          <Img
                            className="h-11 w-[218px]"
                            src="images/img_frame427319355.svg"
                            alt="frame427319355"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[0.50px] w-[155px]"
                            size="txtInterRegular25"
                          >
                            789.000VND
                          </Text>
                          <div className="flex flex-row gap-[22px] items-end justify-start w-auto">
                            <div className="flex flex-col font-sfprodisplay items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_87 tracking-[0.32px] w-auto"
                                size="txtSFProDisplayMedium16"
                              >
                                Total Savings
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium font-satoshi h-[31px] leading-[normal] rounded-[15px] text-center text-xs w-[73px]"
                              color="cyan_50"
                              size="sm"
                              variant="fill"
                            >
                              +1,29%
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[11px] rounded-[14px] w-full">
                        <div className="flex flex-col gap-[22px] h-[150px] md:h-auto items-start justify-start mt-2.5 w-auto">
                          <Img
                            className="h-11 w-[218px]"
                            src="images/img_frame427319353.svg"
                            alt="frame427319353"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 tracking-[0.50px] w-[157px]"
                            size="txtInterRegular25"
                          >
                            355.000VND
                          </Text>
                          <div className="flex flex-row gap-[22px] items-end justify-start w-auto">
                            <div className="flex flex-col font-sfprodisplay items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_87 tracking-[0.32px] w-auto"
                                size="txtSFProDisplayMedium16"
                              >
                                Total Expenses
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium font-satoshi h-[31px] leading-[normal] rounded-[15px] text-center text-xs w-[73px]"
                              color="red_50"
                              size="sm"
                              variant="fill"
                            >
                              +1,29%
                            </Button>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex md:flex-col flex-row font-sfprodisplay gap-[18px] items-start justify-start w-auto md:w-full">
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-6 sm:px-5 rounded-[14px] w-[71%] md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[299px] items-center justify-between w-auto md:w-full">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-auto"
                                size="txtSFProDisplayMedium28"
                              >
                                Analytics
                              </Text>
                              <div className="flex flex-row gap-8 items-center justify-start w-auto">
                                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                    <div className="bg-purple-300 h-2.5 rounded-[50%] w-2.5"></div>
                                    <Text
                                      className="text-[15px] text-gray-900_01 w-auto"
                                      size="txtSFProDisplayMedium15"
                                    >
                                      Income
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                    <div className="bg-pink-50_01 h-2.5 rounded-[50%] w-2.5"></div>
                                    <Text
                                      className="text-[15px] text-gray-900_01 w-auto"
                                      size="txtSFProDisplayMedium15"
                                    >
                                      Outcome
                                    </Text>
                                  </div>
                                </div>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[79px] rounded-md"
                                  rightIcon={
                                    <Img
                                      className="h-2.5 mt-1 mb-[3px] ml-4"
                                      src="images/img_checkmark_blue_gray_900_03.svg"
                                      alt="checkmark"
                                    />
                                  }
                                  shape="round"
                                  color="gray_300_01"
                                  size="md"
                                  variant="outline"
                                >
                                  <div className="font-medium leading-[normal] text-[15px] text-center">
                                    2022
                                  </div>
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[15px] justify-start w-full">
                                <div className="flex md:flex-col flex-row gap-6 items-end justify-between w-full">
                                  <div className="flex flex-col gap-11 items-end justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_7f text-right w-auto"
                                      size="txtSFProDisplayMedium16Gray9007f"
                                    >
                                      50K
                                    </Text>
                                    <Text
                                      className="text-base text-gray-900_7f text-right w-auto"
                                      size="txtSFProDisplayMedium16Gray9007f"
                                    >
                                      40K
                                    </Text>
                                    <Text
                                      className="text-base text-gray-900_7f text-right w-auto"
                                      size="txtSFProDisplayMedium16Gray9007f"
                                    >
                                      30K
                                    </Text>
                                    <Text
                                      className="text-base text-gray-900_7f text-right w-auto"
                                      size="txtSFProDisplayMedium16Gray9007f"
                                    >
                                      20K
                                    </Text>
                                    <Text
                                      className="text-base text-gray-900_7f text-right w-auto"
                                      size="txtSFProDisplayMedium16Gray9007f"
                                    >
                                      10K
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-[251px] md:mt-0 mt-[22px]"
                                    src="images/img_group238398.svg"
                                    alt="group238398"
                                  />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-14 items-start justify-start md:ml-[0] ml-[70px] w-auto sm:w-full">
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Jan
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Feb
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Mar
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Apr
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    May
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Jun
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Jul
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-gray-900_7f w-auto"
                                    size="txtSFProDisplayMedium15Gray9007f"
                                  >
                                    Aug
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[18px] w-[692px]"
                            src="images/img_group238388.svg"
                            alt="group238388"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-[19px] rounded-[14px] w-[28%] md:w-full">
                        <div className="flex flex-row gap-[179px] items-center justify-between w-auto">
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
                          className="flex flex-col font-manrope gap-3 items-center mt-[15px] w-full"
                          orientation="vertical"
                        >
                          <div className="bg-gradient3  h-36 relative rounded-[12px] w-full">
                            <div className="h-36 m-auto w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-row gap-[29px] items-start justify-between w-full">
                                  <div className="backdrop-opacity-[0.5] bg-purple-A400_02 blur-[100.00px] h-[114px] mt-[30px] rounded-[64px] w-1/2"></div>
                                  <div className="backdrop-opacity-[0.5] bg-purple-A400_02 blur-[60.00px] h-[98px] mb-[46px] rounded-[49px] w-[99px]"></div>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[61px] inset-x-[0] mx-auto object-cover"
                                src="images/img_group238401.png"
                                alt="group238401"
                              />
                            </div>
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[86%]">
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
                          <div className="bg-deep_purple-A200 h-36 relative rounded-[12px] w-full">
                            <div className="h-36 m-auto w-full">
                              <div className="h-36 m-auto w-full">
                                <div className="absolute backdrop-opacity-[0.5] bg-cyan-A200 blur-[100.00px] h-[122px] right-[0] rounded-[75px] top-[0] w-[59%]"></div>
                                <div className="absolute backdrop-opacity-[0.5] bg-light_blue-A400 blur-[100.00px] h-36 inset-y-[0] left-[0] my-auto rounded-[72px] w-[47%]"></div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[62px] inset-x-[0] items-end justify-end mx-auto pt-5 px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group238401.png')",
                                }}
                              >
                                <div className="backdrop-opacity-[0.5] bg-purple-400_01 blur-[80.00px] h-[27px] mt-[15px] rounded-[44px] w-[41%]"></div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[86%]">
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
                          className="cursor-pointer flex items-center justify-center min-w-[254px] mt-[19px] rounded-[10px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-1"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="pink_50_03"
                          size="lg"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-base text-left">
                            Create new card
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-sfprodisplay gap-[18px] items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-2.5 rounded-[14px] w-[71%] md:w-full">
                      <div className="flex flex-col gap-5 h-[169px] md:h-auto items-start justify-start mb-4 w-auto md:w-full">
                        <div className="flex md:flex-col flex-row gap-14 items-center justify-start w-auto md:w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-auto"
                            size="txtSFProDisplayMedium28"
                          >
                            Transaction
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-auto sm:w-full">
                            <Input
                              name="frame427319380"
                              placeholder="Search history..."
                              className="leading-[normal] p-0 placeholder:text-gray-900_75 text-[17px] text-left w-full"
                              wrapClassName="flex rounded-[10px] w-auto sm:w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-5 ml-[35px]"
                                  src="images/img_contrast_gray_900_01.svg"
                                  alt="contrast"
                                />
                              }
                              color="gray_100_02"
                              size="xl"
                              variant="fill"
                            ></Input>
                            <Input
                              name="frame427319379"
                              placeholder="10 May - 20 May"
                              className="font-medium leading-[normal] p-0 placeholder:text-gray-900_a2 text-[17px] text-left w-full"
                              wrapClassName="flex rounded-[10px] w-[43%] sm:w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-0.5 h-5 mr-3"
                                  src="images/img_calendar_gray_900_01.svg"
                                  alt="calendar"
                                />
                              }
                              suffix={
                                <Img
                                  className="mt-0.5 mb-1 h-4 ml-4"
                                  src="images/img_checkmark_gray_900_01.svg"
                                  alt="checkmark"
                                />
                              }
                              color="gray_900_33"
                              size="xl"
                              variant="outline"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                          <div className="bg-gray-100_02 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex flex-row gap-3 items-center justify-start md:mt-0 my-[7px] w-auto">
                              <Line className="bg-gray-900_4c h-[23px] w-px" />
                              <Text
                                className="text-gray-900_87_01 text-lg w-auto"
                                size="txtSFProDisplayRegular18"
                              >
                                Name
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[215px] md:mt-0 my-[7px] w-auto">
                              <Line className="bg-gray-900_4c h-[23px] w-px" />
                              <Text
                                className="text-gray-900_87_01 text-lg w-auto"
                                size="txtSFProDisplayRegular18"
                              >
                                Date
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[158px] md:mt-0 my-[7px] w-auto">
                              <Line className="bg-gray-900_4c h-[23px] w-px" />
                              <Text
                                className="text-gray-900_87_01 text-lg w-auto"
                                size="txtSFProDisplayRegular18"
                              >
                                Price
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[87px] md:mt-0 my-[7px] w-auto">
                              <Line className="bg-gray-900_4c h-[23px] w-px" />
                              <Text
                                className="text-gray-900_87_01 text-lg w-auto"
                                size="txtSFProDisplayRegular18"
                              >
                                Status
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <div className="flex flex-row font-sfprodisplay gap-4 items-center justify-start w-auto">
                              <div className="bg-gray-200_01 h-[50px] rounded-[50%] w-[50px]"></div>
                              <Text
                                className="text-gray-900_01 text-lg w-auto"
                                size="txtSFProDisplayRegular18Gray90001"
                              >
                                Adobe After Effect
                              </Text>
                            </div>
                            <Text
                              className="text-gray-900_01 text-lg"
                              size="txtSFProDisplayRegular18Gray90001"
                            >
                              Sat, 20 Apr 2022
                            </Text>
                            <Text
                              className="text-gray-900_01 text-lg"
                              size="txtSFProDisplayRegular18Gray90001"
                            >
                              $80.09
                            </Text>
                            <Button
                              className="cursor-pointer font-medium font-satoshi h-[31px] leading-[normal] sm:mt-0 my-[9px] rounded-[15px] text-center text-xs w-[98px]"
                              color="cyan_50"
                              size="sm"
                              variant="fill"
                            >
                              Completed
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[19px] rounded-[14px] w-[28%] md:w-full">
                      <div className="flex flex-col gap-[26px] items-start justify-start mb-1 mt-[9px] w-auto">
                        <div className="flex flex-row gap-[78px] items-center justify-start w-auto">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_01 w-auto"
                            size="txtSFProDisplayMedium28"
                          >
                            Instalment
                          </Text>
                          <a
                            href="javascript:"
                            className="text-gray-900_7f text-lg w-auto"
                          >
                            <Text size="txtSFProDisplayMedium18">See all</Text>
                          </a>
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-start w-auto">
                          <Text
                            className="text-gray-900_01 text-xl w-auto"
                            size="txtSFProDisplayMedium20"
                          >
                            House installments
                          </Text>
                          <div className="flex flex-col gap-4 items-end justify-start w-auto">
                            <div className="bg-gray-100_01 flex flex-col items-start justify-start rounded w-full">
                              <div className="bg-purple-300 h-4 rounded w-[61%]"></div>
                            </div>
                            <div className="flex flex-row gap-[41px] items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtSFProDisplayRegular16"
                              >
                                Collected
                              </Text>
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtSFProDisplayRegular16"
                              >
                                $150.000 / $200.000{" "}
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
          </div>
          <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
