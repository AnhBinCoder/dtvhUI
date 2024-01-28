import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EditprofilePage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-gradient1  flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-inter gap-[25px] items-start justify-start md:px-5 w-[92%] md:w-full">
            <div className="md:h-[1329px] h-[1331px] pr-0.5 pt-0.5 relative w-[26%] md:w-full">
              <Img
                className="h-[1329px] m-auto object-cover w-[99%]"
                src="images/img_rectangle34624352.png"
                alt="rectangle346243"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[13%] w-[74%]">
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
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="text-[17px] text-black-900_cc w-auto"
                        size="txtInterMedium17Black900cc"
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
                      <div className="font-medium leading-[normal] text-[17px] text-left">
                        Waitlist Requests
                      </div>
                    </Button>
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
            <div className="flex flex-col font-roboto gap-[15px] justify-start md:mt-0 mt-[91px] w-[73%] md:w-full">
              <Text
                className="md:ml-[0] ml-[311px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                size="txtRobotoRomanSemiBold45"
              >
                Edit profile
              </Text>
              <div className="flex flex-col items-center justify-end p-[22px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[5px] mt-[67px] w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-full">
                    <Text
                      className="mt-[46px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                      size="txtRobotoRomanSemiBold45"
                    >
                      Edit profile
                    </Text>
                    <Img
                      className="h-[123px] md:h-auto rounded-[50%]"
                      src="images/img_unsplashc8ta0gwpbqg_123x131.png"
                      alt="unsplashc8ta0gw_Two"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-7 w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        First Name
                      </Text>
                      <Input
                        name="groupTwelve"
                        placeholder="Mehrab"
                        className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                        color="white_A700"
                        size="2xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        Last Name
                      </Text>
                      <Input
                        name="groupNineteen"
                        placeholder="Bozorgi"
                        className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_One"
                      placeholder="Mehrabbozorgi.business@gmail.com"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="flex outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                      type="email"
                      suffix={
                        <Img
                          className="mt-auto mb-1 ml-[35px]"
                          src="images/img_checkmark_green_700.svg"
                          alt="checkmark"
                        />
                      }
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Address
                    </Text>
                    <Input
                      name="groupSeventeen"
                      placeholder="33062 Zboncak isle"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Contact Number
                    </Text>
                    <Input
                      name="groupEighteen"
                      placeholder="58077.79"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[13px] w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtRobotoRomanSemiBold26"
                      >
                        City
                      </Text>
                      <div className="bg-white-A700 flex flex-row items-end justify-between outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full">
                        <Text
                          className="mb-[3px] ml-[18px] mt-1.5 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                          size="txtRobotoRomanMedium24"
                        >
                          Mehrab
                        </Text>
                        <Img
                          className="h-[39px] mr-1"
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
                      <Input
                        name="groupFourteen"
                        placeholder="Bozorgi"
                        className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="flex outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                        suffix={
                          <Img
                            className="ml-[35px] my-auto"
                            src="images/img_keyboardarrowdown.svg"
                            alt="Keyboard arrow down"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                      size="txtRobotoRomanSemiBold26"
                    >
                      Password
                    </Text>
                    <Input
                      name="groupSixteen"
                      placeholder="sbdfbnd65sfdvb s"
                      className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-gray-600_01 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="flex outline outline-[2px] outline-gray-600_01 rounded-[5px] w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px ml-[35px]"
                          src="images/img_checkmark_green_700.svg"
                          alt="checkmark"
                        />
                      }
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start mt-[43px] w-[44%] md:w-full">
                    <Button
                      className="!text-amber-900 cursor-pointer leading-[normal] min-w-[184px] outline outline-[1px] outline-amber-900 rounded-[5px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[184px] rounded-[5px] sm:text-2xl md:text-[26px] text-[28px] text-center"
                      onClick={() => navigate("/updatesuccessful")}
                      color="amber_900"
                      size="sm"
                      variant="fill"
                    >
                      Save
                    </Button>
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

export default EditprofilePage;
