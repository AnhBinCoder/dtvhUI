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

const UpdatesuccessfulPage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-mulish h-[1839px] mx-auto relative w-full">
        <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
        <Header className="absolute bg-gradient1  flex flex-col font-nicomoji inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full" />
        <div className="absolute flex flex-col font-roboto gap-[15px] justify-start md:px-5 right-[9%] top-[10%] w-[67%]">
          <Text
            className="md:ml-[0] ml-[301px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
            size="txtRobotoRomanSemiBold45"
          >
            Edit profile
          </Text>
          <div className="flex flex-col items-center justify-end p-3 w-full">
            <div className="flex flex-col items-start justify-start mb-[5px] mt-[87px] w-[98%] md:w-full">
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
                  alt="unsplashc8ta0gw_One"
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
                    name="group186"
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
                    name="group193"
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
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between outline outline-[2px] outline-gray-600_01 p-[9px] rounded-[5px] w-full">
                  <Text
                    className="sm:ml-[0] ml-[17px] sm:mt-0 mt-2 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                    size="txtRobotoRomanMedium24"
                  >
                    Mehrabbozorgi.business@gmail.com
                  </Text>
                  <Img
                    className="h-[29px] mr-3 sm:mt-0 my-[3px]"
                    src="images/img_checkmark_green_700.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRobotoRomanSemiBold26"
                >
                  Address
                </Text>
                <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[2px] outline-gray-600_01 p-3 rounded-[5px] w-full">
                  <Text
                    className="md:ml-[0] ml-[15px] mt-[3px] text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                    size="txtRobotoRomanMedium24"
                  >
                    33062 Zboncak isle
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[13px] w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                  size="txtRobotoRomanSemiBold26"
                >
                  Contact Number
                </Text>
                <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[2px] outline-gray-600_01 p-3 rounded-[5px] w-full">
                  <Text
                    className="md:ml-[0] ml-[15px] mt-1 text-2xl md:text-[22px] text-gray-600_01 sm:text-xl"
                    size="txtRobotoRomanMedium24"
                  >
                    58077.79
                  </Text>
                </div>
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
                    name="group188"
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
                  name="group190"
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
                  className="cursor-pointer font-semibold leading-[normal] min-w-[184px] rounded-[5px] sm:text-2xl md:text-[26px] text-[28px] text-center"
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
        <div className="font-inter h-[1303px] md:h-[1391px] mt-[90px] pl-0.5 pt-0.5 md:px-5 w-[24%]">
          <div className="bg-blue_gray-100_cc h-[1301px] m-auto w-[97%]"></div>
          <div className="absolute flex flex-col md:gap-10 gap-[119px] inset-x-[0] justify-start mx-auto top-[14%] w-[74%]">
            <Img
              className="h-[158px] md:h-auto ml-9 md:ml-[0] rounded-[50%] w-[67%]"
              src="images/img_unsplashc8ta0gwpbqg_158x164.png"
              alt="unsplashc8ta0gw_Two"
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
        <div className="absolute bg-blue_gray-900_87 flex flex-col inset-x-[0] items-end justify-start mx-auto p-[489px] md:px-10 sm:px-5 top-[0] w-full">
          <div className="h-[252px] md:h-[710px] mb-[296px] mt-[162px] pr-[7px] relative rounded-lg w-[87%] sm:w-full">
            <div className="font-rubik h-[252px] m-auto w-[99%] sm:w-full">
              <div className="bg-white-A700 h-[252px] m-auto rounded-[35px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[27px] md:text-[29px] text-[31px] text-center text-deep_orange-A700"
                size="txtRubikMedium31"
              >
                <>
                  Update Profile <br /> successful !!
                </>
              </Text>
            </div>
            <Button
              className="common-pointer absolute bottom-[12%] cursor-pointer font-roboto font-semibold inset-x-[0] leading-[normal] min-w-[184px] mx-auto rounded-[5px] sm:text-2xl md:text-[26px] text-[28px] text-center"
              onClick={() => navigate("/memberprofile")}
              color="amber_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesuccessfulPage;
