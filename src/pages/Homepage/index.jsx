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
  Text,
} from "components";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start overflow-auto w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[740px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
              <Img
                className="h-[740px] m-auto object-cover w-full"
                src="images/img_rectangle140.png"
                alt="rectangle140"
              />
              <Img
                className="absolute h-[589px] inset-y-[0] left-[0] my-auto object-cover w-[62%]"
                src="images/img_ellipse51.png"
                alt="ellipseFiftyOne"
              />
            </div>
            <div className="absolute bg-gradient  flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex md:flex-col flex-row font-nicomoji md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] mt-[-NaNpx] mx-auto px-10 sm:px-5 w-full z-[1]">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700 w-auto"
                  size="txtNicoMojiRegular26"
                >
                  WandarShare
                </Text>
                <div className="flex md:flex-1 md:flex-col flex-row font-mulish gap-10 items-center justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-end justify-start w-auto sm:w-full">
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtMulishRomanExtraBold15"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtMulishSemiBold15"
                    >
                      About Us
                    </Text>
                    <Text
                      className="common-pointer text-[15px] text-white-A700 w-auto"
                      size="txtMulishSemiBold15"
                      onClick={() => navigate("/exchangeone")}
                    >
                      Exchange Timeshare
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[15px] text-white-A700 w-auto"
                    >
                      <Text size="txtMulishSemiBold15">Contact Us</Text>
                    </a>
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtMulishSemiBold15"
                    >
                      Help
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-extrabold rounded-[3px] text-base text-center w-[140px]"
                    onClick={() => navigate("/signupone")}
                    color="yellow_600"
                    size="lg"
                    variant="fill"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto mt-[-NaNpx] mx-auto w-[62%] z-[1]">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center text-shadow-ts"
                size="txtVolkhovBold48"
              >
                We Find The Best Timeshares For You
              </Text>
              <Text
                className="leading-[25.00px] mt-[22px] text-base text-blue_gray-900 text-center text-shadow-ts1 w-[65%] sm:w-full"
                size="txtMulishSemiBold16"
              >
                More than 100 timeshare are waiting for your choose.
              </Text>
              <div className="flex flex-row font-mulish gap-2.5 items-center justify-center mt-[18px] w-[27%] md:w-full">
                <Img
                  className="h-[100px] md:h-auto object-cover w-[100px]"
                  src="images/img_group153.png"
                  alt="group153"
                />
                <Text
                  className="text-blue_gray-900 text-center text-xl"
                  size="txtMulishBold20"
                >
                  Watch Video
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[-45px] mx-auto w-[70%] z-[1]">
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[18px] rounded-[10px] shadow-bs4 w-full">
                <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start ml-0.5 md:ml-[0] w-1/5 md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[15px] text-teal-200"
                      size="txtMulishExtraBold15"
                    >
                      Location
                    </Text>
                    <Text
                      className="italic mt-1 text-gray-600 text-sm"
                      size="txtMulishSemiBoldItalic14"
                    >
                      Search For A Destination
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-5 md:h-px md:ml-[0] ml-[142px] md:mt-0 my-[17px] md:w-full w-px" />
                <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[22px] w-[17%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text
                      className="text-[15px] text-teal-200"
                      size="txtMulishExtraBold15"
                    >
                      Guests
                    </Text>
                    <Text
                      className="italic text-gray-600 text-sm"
                      size="txtMulishSemiBoldItalic14"
                    >
                      How many Guests?
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-5 md:h-px md:ml-[0] ml-[60px] md:mt-0 my-[17px] md:w-full w-px" />
                <div className="flex md:flex-1 flex-row gap-1.5 items-start justify-center ml-6 md:ml-[0] w-[10%] md:w-full">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[15px] text-teal-200"
                      size="txtMulishExtraBold15"
                    >
                      Date
                    </Text>
                    <Text
                      className="italic mt-1 text-gray-600 text-sm"
                      size="txtMulishSemiBoldItalic14"
                    >
                      Pick a date
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-extrabold min-w-[150px] md:ml-[0] ml-[122px] rounded-[27px] text-base text-center"
                  onClick={() => navigate("/exchange2exchangelist")}
                  color="yellow_600"
                  size="lg"
                  variant="fill"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[74px] md:px-5">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center text-shadow-ts"
              size="txtVolkhovBold36"
            >
              Explore Popular Cities
            </Text>
            <Text
              className="leading-[25.00px] text-base text-center text-gray-600 w-full"
              size="txtMulishSemiBold16Gray600"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </Text>
          </div>
          <div className="flex-wrap gap-2.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-center justify-center max-w-[1110px] mt-10 mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              Da Lat
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              Nha Trang
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] shadow-bs5 text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="fill"
            >
              Hoi an
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              Sapa
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              Phu Yen
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              Ha Noi
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              TP HCM
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="lg"
              variant="outline"
            >
              BangKok
            </Button>
          </div>
          <div className="flex flex-col max-w-[1171px] mt-[18px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[500px] mx-auto object-cover w-full"
              src="images/img_image38.png"
              alt="imageThirtyEight"
            />
            <div className="flex flex-col items-center justify-start mt-[-68px] mx-auto w-[95%] z-[1]">
              <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[49px] md:px-10 sm:px-5 rounded-[3px] shadow-bs6 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[9px]">
                  <Text
                    className="md:text-5xl text-[64px] text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovBold64"
                  >
                    Hoi An
                  </Text>
                  <Text
                    className="leading-[25.00px] text-base text-gray-600 w-full"
                    size="txtMulishSemiBold16Gray600"
                  >
                    Hoi An is an ancient city located in the central region of
                    Vietnam. It is well known for its beautiful architecture,
                    charming atmosphere, and delicious food.{" "}
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[43%] md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[212px] rounded-[3px] shadow-bs5"
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-[5px]"
                          src="images/img_zondiconstravelbus.svg"
                          alt="zondicons:travel-bus"
                        />
                      }
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <div className="!text-purple-200 font-bold leading-[normal] text-left text-sm">
                        Public Transportations
                      </div>
                    </Button>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[196px] rounded-[3px] shadow-bs5"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="!text-teal-200 font-bold leading-[normal] text-left text-sm">
                          Nature & Adventure
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[224px] rounded-[3px] shadow-bs5"
                        leftIcon={
                          <Img
                            className="h-5 mb-px mr-[5px]"
                            src="images/img_zondiconstraveltaxicab.svg"
                            alt="zondicons:travel-taxi-cab"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="!text-yellow-800 font-bold leading-[normal] text-left text-sm">
                          Private Transportations
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[70%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[160px] rounded-[3px] shadow-bs5"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_icoutlinecardtravel.svg"
                            alt="ic:outline-card-travel"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="!text-red-500 font-bold leading-[normal] text-left text-sm">
                          Business Tours
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[130px] rounded-[3px] shadow-bs5"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_icoutlinemodeoftravel.svg"
                            alt="ic:outline-mode-of-travel"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="!text-blue-400 font-bold leading-[normal] text-left text-sm">
                          Local Visit
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-volkhov md:gap-10 gap-[77px] items-center justify-start mt-[31px] w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1170px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                <div className="h-[180px] relative w-[95%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[99%]"
                    src="images/img_rectangle129.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image39.png"
                    alt="imageThirtyNine"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An Central Boutique
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_180x250.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image40.png"
                    alt="imageForty"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    King Koi Hoi An
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_1.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image41.png"
                    alt="imageFortyOne"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An History Hotel: First Hotel at an ancient city
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_2.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Moutain House: Hunt clouds on the hills
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="font-mulish md:h-[590px] h-[621px] md:px-5 relative w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="h-[590px] relative w-full">
                  <Img
                    className="h-[590px] m-auto object-cover w-full"
                    src="images/img_rectangle158.png"
                    alt="rectangle158"
                  />
                  <div className="absolute bg-gradient2  h-[590px] inset-[0] justify-center m-auto w-full"></div>
                </div>
              </div>
              <div className="absolute md:h-[574px] h-[581px] inset-y-[0] left-[10%] my-auto w-2/5 sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[547px] left-[0]"
                  src="images/img_ellipse54.svg"
                  alt="ellipseFiftyFour"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[53px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group212.svg')" }}
                >
                  <Img
                    className="h-[429px] md:h-auto mb-[9px] mt-[30px] object-cover w-[89%]"
                    src="images/img_ellipse52.png"
                    alt="ellipseFiftyTwo"
                  />
                </div>
              </div>
              <div className="absolute md:h-[391px] h-[491px] right-[13%] top-[0] w-[36%] sm:w-full">
                <div className="absolute flex flex-col gap-[19px] inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                  <div className="flex h-[297px] justify-end relative w-4/5 sm:w-full">
                    <Text
                      className="absolute bottom-[10%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-shadow-ts text-white-A700 w-max"
                      size="txtVolkhovBold36WhiteA700"
                    >
                      Peacefulllife of Hoi An
                    </Text>
                    <Button
                      className="cursor-pointer font-extrabold font-mulish leading-[normal] mb-[85px] min-w-[130px] mt-auto rounded-[15px] text-center text-xs uppercase"
                      color="teal_A100"
                      size="sm"
                      variant="fill"
                    >
                      Trending Now
                    </Button>
                    <div className="absolute flex flex-row font-mulish gap-[27px] h-full inset-[0] items-end justify-between m-auto w-[99%]">
                      <div className="flex flex-col md:gap-10 gap-[267px] justify-start w-[42%]">
                        <Img
                          className="h-3 w-[11px]"
                          src="images/img_linkedin_white_a700.svg"
                          alt="linkedin_One"
                        />
                        <Text
                          className="ml-4 md:ml-[0] text-sm text-white-A700"
                          size="txtMulishSemiBold14WhiteA700"
                        >
                          Quang Nam, Viet Nam
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[278px] w-[53%]">
                        <RatingBar
                          className="flex justify-between mb-0.5 w-20"
                          value={5}
                          starCount={5}
                          color="#cfd9de"
                          activeColor="#ffa331"
                          size={16}
                        ></RatingBar>
                        <Text
                          className="text-center text-sm text-white-A700 uppercase"
                          size="txtMulishBold14"
                        >
                          4.9
                        </Text>
                        <Text
                          className="text-center text-sm text-white-A700"
                          size="txtMulishSemiBold14WhiteA700"
                        >
                          (300 reviews)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[25.00px] text-base text-white-A700 w-full"
                    size="txtMulishSemiBold16WhiteA700"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Text>
                </div>
                <div className="absolute bottom-[0] flex h-[296px] justify-end left-[0] w-[69%]">
                  <Button
                    className="common-pointer absolute bottom-[1%] cursor-pointer font-extrabold left-[0] min-w-[200px] rounded-[25px] text-base text-center"
                    onClick={() => navigate("/exchangeone")}
                    color="yellow_600"
                    size="xl"
                    variant="fill"
                  >
                    Exchange Now
                  </Button>
                  <Line className="bg-white-A700_4c h-4 mb-[19px] ml-auto mr-[126px] mt-auto w-px" />
                  <Img
                    className="absolute h-[296px] inset-y-[0] my-auto right-[0]"
                    src="images/img_group192.svg"
                    alt="group192"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-start mt-[74px] md:px-5">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
              size="txtVolkhovBold36"
            >
              Featured Destinations
            </Text>
            <Text
              className="leading-[25.00px] text-base text-gray-600 w-full"
              size="txtMulishSemiBold16Gray600"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-volkhov gap-3 items-center justify-between max-w-[1431px] mt-[70px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[78%] md:w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end sm:ml-[0] hover:mx-0 py-[9px] rounded-[3px] hover:shadow-bs7 shadow-bs7 hover:w-full w-full"
                onClick={() => navigate("/timesharebookingdetail")}
              >
                <div className="h-[180px] relative w-[95%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[99%]"
                    src="images/img_rectangle129.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image39.png"
                    alt="imageThirtyNine"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An Central Boutique
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer md:h-[401px] h-[405px] sm:ml-[0] hover:mx-0 hover:relative relative hover:shadow-bs7 hover:w-full w-full">
                <div className="absolute bg-white-A700 flex flex-col gap-3 h-full inset-[0] items-center justify-center m-auto pl-[9px] py-[9px] rounded-[3px] shadow-bs7 w-[97%]">
                  <div className="h-[180px] relative w-full">
                    <Img
                      className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[97%]"
                      src="images/img_rectangle129_180x250.png"
                      alt="rectangle129"
                    />
                    <Img
                      className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-[97%]"
                      src="images/img_image40.png"
                      alt="imageForty"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                    <Text
                      className="text-base text-blue_gray-900 text-shadow-ts"
                      size="txtVolkhovRegular16"
                    >
                      King Koi Hoi An
                    </Text>
                    <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[59%] md:w-full">
                      <Img
                        className="h-4 w-4"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishSemiBold14"
                      >
                        Duration 2 hours
                      </Text>
                    </div>
                    <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[61%] md:w-full">
                      <Img
                        className="h-3.5"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishSemiBold14"
                      >
                        Transport Facility
                      </Text>
                    </div>
                    <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[44%] md:w-full">
                      <Img
                        className="h-3.5"
                        src="images/img_settings_blue_gray_700.svg"
                        alt="settings"
                      />
                      <Text
                        className="ml-1 text-blue_gray-700 text-sm"
                        size="txtMulishSemiBold14"
                      >
                        Family Plan
                      </Text>
                    </div>
                    <div className="flex flex-row font-mulish items-end justify-between mt-[23px] w-full">
                      <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                          584 reviews
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start">
                        <Text
                          className="text-[15px] text-right text-shadow-ts text-teal-200"
                          size="txtVolkhovBold15"
                        >
                          100.000.000vnđ
                        </Text>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per month
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-gray-200 bottom-[13%] h-px inset-x-[0] mx-auto w-[97%]" />
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end sm:ml-[0] hover:mx-0 py-[9px] rounded-[3px] hover:shadow-bs7 shadow-bs7 hover:w-full w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_1.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image41.png"
                    alt="imageFortyOne"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An History Hotel: First Hotel at an ancient city
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end sm:ml-[0] hover:mx-0 py-[9px] rounded-[3px] hover:shadow-bs7 shadow-bs7 hover:w-full w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_2.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Moutain House: Hunt clouds on the hills
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex sm:flex-col flex-row font-mulish sm:gap-5 items-end justify-end mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start sm:mt-0 mt-1.5 w-[31%] sm:w-full">
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
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start sm:ml-[0] ml-[46px]">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[223px]">
                    <Text
                      className="text-[15px] text-right text-shadow-ts text-teal-200"
                      size="txtVolkhovBold15"
                    >
                      100.000.000vnđ
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="font-mulish h-[405px] md:h-[406px] relative w-[22%] md:w-full">
              <div className="flex flex-col h-full items-end justify-end m-auto pl-[9px] py-[9px] w-full">
                <div className="flex flex-col items-start justify-start mt-[348px] pr-1.5 pt-1.5 w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
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
                      584 reviews
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col font-volkhov h-full inset-y-[0] items-center justify-start left-[0] my-auto py-2.5 rounded-[3px] shadow-bs7 w-[89%]">
                <Img
                  className="h-[180px] md:h-auto object-cover w-[93%]"
                  src="images/img_rectangle129.png"
                  alt="rectangle129"
                />
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Westminster to Huong River Thames
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mb-[41px] mt-[18px] w-full" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between max-w-[1170px] mt-[85px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                size="txtVolkhovBold36"
              >
                From The Gallery
              </Text>
              <Text
                className="leading-[25.00px] text-base text-gray-600 w-full"
                size="txtMulishSemiBold16Gray600"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-bold md:mt-0 my-[30px] rounded-[3px] text-center text-sm w-[190px]"
              color="blue_gray_700"
              size="xl"
              variant="fill"
            >
              View All Images
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle148.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle149.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle150.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle151.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle152.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle153.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle154.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle155.png"
                alt="rectangle"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between max-w-[1170px] mt-[81px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                size="txtVolkhovBold36"
              >
                Latest Stories
              </Text>
              <Text
                className="leading-[25.00px] text-base text-gray-600 w-full"
                size="txtMulishSemiBold16Gray600"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-bold md:mt-0 my-[30px] rounded-[3px] text-center text-sm w-[190px]"
              color="blue_gray_700"
              size="xl"
              variant="fill"
            >
              View All Posts
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1170px] mt-[59px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  7 Signs and Symptoms of Iodine Deficiency
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_200x270.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  How to Fix Your Sleep Schedule: 7 Easy Ways
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_1.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  10 Proven Health Benefits of Cinnamon
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_2.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  11 Health Benefits of Turmeric and Curcumin
                </Text>
              </div>
            </div>
          </List>
          <footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[157px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mt-[81px] w-full">
              <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-4/5 md:w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[69%] md:w-full">
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
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[27%] md:w-full">
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
                            name="language_One"
                            options={languageOneOptionsList}
                            isSearchable={false}
                            placeholder="English (UK)"
                          />
                        </div>
                        <Text
                          className="mt-[13px] text-[15px] text-white-A700_cc"
                          size="txtMulishBold15"
                        >
                          Currency
                        </Text>
                        <Input
                          name="price"
                          placeholder="U.S. Dollar ($)"
                          className="font-semibold leading-[normal] p-0 placeholder:text-white-A700_99 text-left text-sm w-full"
                          wrapClassName="border border-solid border-white-A700_33 flex mt-2 rounded-[3px] w-full"
                          suffix={
                            <Img
                              className="mt-px mb-0.5 h-3.5 ml-[35px]"
                              src="images/img_antdesigncaretdownoutlined.svg"
                              alt="ant-design:caret-down-outlined"
                            />
                          }
                          color="blue_gray_900_02"
                          size="3xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <Text
                        className="leading-[30.00px] md:ml-[0] ml-[151px] text-[15px] text-white-A700_99"
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
                  <div className="flex flex-col gap-[13px] items-start justify-start">
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
                <div className="bg-black-900_33 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-2.5 w-full">
                  <Text
                    className="sm:ml-[0] ml-[125px] text-[15px] text-white-A700_99"
                    size="txtMulishRegular15"
                  >
                    Copyright 2021 Tour Guide. All Rights Reserved
                  </Text>
                  <Img
                    className="h-10 mr-[125px]"
                    src="images/img_group91.svg"
                    alt="groupNinetyOne"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
