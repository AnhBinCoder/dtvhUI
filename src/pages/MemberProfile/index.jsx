import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const languageFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MemberProfilePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="font-roboto sm:h-[1332px] h-[1749px] md:h-[1812px] md:px-5 relative w-full">
          <div className="flex flex-col md:gap-10 gap-20 h-full justify-start ml-auto mr-[137px] mt-[87px] w-[64%]">
            <Text
              className="md:ml-[0] ml-[332px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
              size="txtRobotoRomanSemiBold45"
            >
              {" "}
              Profile
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[147px] items-end justify-start md:mt-0 mt-[70px] w-[70%] md:w-full">
                  <div className="md:h-[1189px] h-[592px] sm:h-[672px] mr-1 relative w-full">
                    <div className="flex flex-col h-full items-start justify-start m-auto w-[84%]">
                      <div className="flex flex-row gap-[66px] items-start justify-start w-[55%] md:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          First Name:{" "}
                        </Text>
                        <Text
                          className="mt-0.5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Mehrab
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[73px] items-end justify-start mt-12 w-[55%] md:w-full">
                        <Text
                          className="mb-[3px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Last Name:
                        </Text>
                        <Text
                          className="mt-[5px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Bozorgi
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[53px] items-start justify-start mt-[49px] w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Email:{" "}
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Mehrabbozorgi.business@gmail.com
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[58px] items-start justify-start mt-[45px] w-[71%] md:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Address:{" "}
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          33062 Zboncak isle
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[89px] items-start justify-start mt-[47px] w-3/4 md:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          Contact Number:
                        </Text>
                        <Text
                          className="mt-[3px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          58077.79
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start mt-12 w-[32%] md:w-full">
                        <Text
                          className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          City:
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Mehrab
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[35px] items-start justify-start mt-[43px] w-[36%] md:w-full">
                        <Text
                          className="mb-0.5 md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                          size="txtRobotoRomanSemiBold26"
                        >
                          State:
                        </Text>
                        <Text
                          className="mt-1 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Bozorgi
                        </Text>
                      </div>
                    </div>
                    <div className="absolute md:h-[1189px] sm:h-[588px] h-[592px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[1189px] h-[587px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                            <Line className="bg-black-900 md:h-1 h-[582px] md:mt-0 mt-[5px] w-1 md:w-full" />
                            <Line className="bg-black-900 h-[3px] mb-[582px] w-full" />
                          </div>
                        </div>
                        <Line className="absolute bg-white-A700 bottom-[4%] h-px inset-x-[0] mx-auto w-full" />
                      </div>
                      <Line className="absolute bg-black-900 h-[588px] inset-y-[0] my-auto right-[0] w-px" />
                      <Line className="absolute bg-black-900 bottom-[0] h-[3px] inset-x-[0] mx-auto w-[99%]" />
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[381px] sm:min-w-full rounded-[5px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                    onClick={() => navigate("/editprofile")}
                    color="amber_900"
                    size="2xl"
                    variant="fill"
                  >
                    EDIT PROFILE
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-[29px] items-end justify-start w-1/5 md:w-full">
                  <Img
                    className="h-[157px] md:h-auto rounded-[50%] w-full"
                    src="images/img_unsplashc8ta0gwpbqg_157x177.png"
                    alt="unsplashc8ta0gw_One"
                  />
                  <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Update avatar
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[2px] outline-gray-600_01 p-2.5 rounded-[5px] w-full">
                      <Text
                        className="mb-1 md:text-2xl sm:text-[22px] text-[26px] text-red-300_01"
                        size="txtRobotoRomanSemiBold26Red30001"
                      >
                        Chose file
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute font-sfprodisplay md:h-[1332px] h-[1749px] inset-[0] justify-center m-auto w-full">
            <div className="absolute md:h-[1332px] h-[1418px] left-[0] top-[0] w-[24%]">
              <div className="bg-blue_gray-100_cc h-[1332px] mx-auto w-full"></div>
              <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[12%] w-3/4">
                <Img
                  className="h-[158px] md:h-auto ml-9 md:ml-[0] rounded-[50%] w-[67%]"
                  src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                  alt="unsplashc8ta0gw_Two"
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
                    <div className="bg-white-A700_90 flex flex-row font-sfprodisplay gap-3 items-center justify-start px-3 py-4 rounded-lg w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Text
                        className="flex-1 text-[17px] text-purple-300 w-auto"
                        size="txtSFProDisplayMedium17Purple300"
                      >
                        Account
                      </Text>
                    </div>
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
            <footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center mt-[69px] w-full">
                <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-center w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[82%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[67%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[86%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700_cc"
                          size="txtMulishBold15"
                        >
                          Language
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[289px] text-[15px] text-white-A700_cc"
                          size="txtMulishBold15"
                        >
                          Company
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[201px] text-[15px] text-white-A700_cc"
                          size="txtMulishBold15"
                        >
                          Help
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start mb-0.5 md:mt-0 mt-3.5 w-[27%] md:w-full">
                          <div className="bg-blue_gray-900_02 border border-solid border-white-A700_33 flex flex-row items-center justify-start p-3 rounded-[3px] w-full">
                            <Img
                              className="h-[13px] md:h-auto ml-[7px] object-cover w-[11%]"
                              src="images/img_image26.png"
                              alt="imageTwentySix"
                            />
                            <SelectBox
                              className="sm:flex-1 font-semibold leading-[normal] ml-[3px] mt-0.5 text-left text-sm text-white-A700_99 w-[82%] sm:w-full"
                              placeholderClassName="text-white-A700_99"
                              indicator={
                                <Img
                                  className="h-3.5 mr-[0] w-3.5"
                                  src="images/img_antdesigncaretdownoutlined.svg"
                                  alt="ant-design:caret-down-outlined"
                                />
                              }
                              isMulti={false}
                              name="language_Five"
                              options={languageFiveOptionsList}
                              isSearchable={false}
                              placeholder="English (UK)"
                            />
                          </div>
                          <Text
                            className="text-[15px] text-white-A700_cc"
                            size="txtMulishBold15"
                          >
                            Currency
                          </Text>
                          <Input
                            name="price"
                            placeholder="U.S. Dollar ($)"
                            className="font-semibold leading-[normal] p-0 placeholder:text-white-A700_99 text-left text-sm w-full"
                            wrapClassName="border border-solid border-white-A700_33 flex mt-[21px] rounded-[3px] w-full"
                            suffix={
                              <Img
                                className="mt-px mb-0.5 h-3.5 ml-[35px]"
                                src="images/img_antdesigncaretdownoutlined.svg"
                                alt="ant-design:caret-down-outlined"
                              />
                            }
                            color="blue_gray_900_02"
                            size="2xl"
                            variant="fill"
                          ></Input>
                        </div>
                        <Text
                          className="leading-[30.00px] mb-[30px] md:ml-[0] ml-[151px] text-[15px] text-white-A700_99"
                          size="txtMulishRegular15"
                        >
                          <>
                            About Us
                            <br />
                            Blog
                            <br />
                            Press Room
                            <br />
                            Careers
                          </>
                        </Text>
                        <Text
                          className="leading-[30.00px] md:ml-[0] ml-[186px] text-[15px] text-white-A700_99"
                          size="txtMulishRegular15"
                        >
                          <>
                            Contact us
                            <br />
                            FAQs
                            <br />
                            Terms and conditions
                            <br />
                            Privacy policy
                            <br />
                            Sitemap
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start w-[19%] md:w-full">
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-[15px] text-white-A700_cc"
                          >
                            <Text size="txtMulishBold15">
                              Payment methods possible
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-evenly mt-[30px]">
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image28.png"
                                alt="imageTwentyEight"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image37.png"
                                alt="imageThirtySeven"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image29.png"
                                alt="imageTwentyNine"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image31.png"
                                alt="imageThirtyOne"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image33.png"
                                alt="imageThirtyThree"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row items-center justify-evenly mt-[5px]">
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image34.png"
                                alt="imageThirtyFour"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image35.png"
                                alt="imageThirtyFive"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image36.png"
                                alt="imageThirtySix"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image27.png"
                                alt="imageTwentySeven"
                              />
                              <Img
                                className="h-[26px] md:h-auto object-cover w-[18%]"
                                src="images/img_image30.png"
                                alt="imageThirty"
                              />
                            </div>
                          </a>
                        </li>
                      </ul>
                      <Text
                        className="text-[15px] text-white-A700_cc"
                        size="txtMulishBold15"
                      >
                        Company
                      </Text>
                      <Text
                        className="text-[15px] text-white-A700_99"
                        size="txtMulishRegular15"
                      >
                        Become a Tour guide for Us
                      </Text>
                    </div>
                  </div>
                  <div className="bg-black-900_33 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-1.5 w-full">
                    <Text
                      className="ml-32 sm:ml-[0] text-[15px] text-white-A700_99"
                      size="txtMulishRegular15"
                    >
                      Copyright 2021 Tour Guide. All Rights Reserved
                    </Text>
                    <Img
                      className="h-[43px] mb-[3px] mr-32"
                      src="images/img_group91.svg"
                      alt="groupNinetyOne"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfilePage;
