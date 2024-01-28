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

const CancellationandrefundprocessTwoPage = () => {
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
        <div className="md:h-[1222px] sm:h-[1301px] h-[1718px] md:px-5 relative w-full">
          <div className="font-sfprodisplay md:h-[1222px] sm:h-[1301px] h-[1718px] m-auto w-full">
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
            <div className="absolute bg-blue_gray-100_01 flex flex-col font-sourcesanspro md:gap-10 gap-[75px] items-center justify-end p-[19px] right-[6%] rounded-[5px] top-[17%] w-[66%]">
              <div className="bg-white-A700 border border-black-900 border-solid h-[214px] mt-[49px] rounded-[15px] w-[96%]"></div>
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-2 rounded-[15px]">
                <Text
                  className="leading-[25.00px] mt-[11px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900"
                  size="txtSourceSansProSemiBold27"
                >
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    Customer Name:{" "}
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      Nguyen Van A<br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    Address:{" "}
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      123 ABC Street, XYZ District, Ho Chi Minh City
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    Phone Number:
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    {" "}
                    0123 456 789
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    <>
                      <br />
                      Email:{" "}
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      nguyenvana@example.com
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    <>
                      Booking information:
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      Cancellation Date: February 12, 2024
                      <br />
                      Timeshare Start Date: February 15, 2024
                      <br />
                      Special Requirements: No special requirements
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    <>
                      Pay:
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      Payment Method: Credit Card (Visa)
                      <br />
                      Card Number: **** **** **** 1234 (only last 4 numbers are
                      displayed)
                      <br />
                      Payment Time: Booking Date
                      <br />
                      Total Amount: 6,000,000 VND
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-semibold">
                    <>
                      Note:
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-sourcesanspro text-left font-light">
                    <>
                      The customer has paid 100% of the booking value in
                      advance.
                      <br />
                      Cancellation policy: 90% refund of booking value if
                      canceled 3 days in advance.
                      <br />
                      Customers have no special requirements.
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div
            className="common-pointer absolute bg-light_blue-A200 bottom-[26%] h-[45px] right-[11%] rounded-[5px] w-[54%]"
            onClick={() => navigate("/rentexchangetwo")}
          ></div>
          <div className="absolute flex flex-col font-sourcesanspro items-center justify-start right-[13%] top-[5%] w-[52%]">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-[99%] md:w-full">
                <div className="flex relative w-[86%] md:w-full">
                  <div className="md:h-[104px] h-[110px] my-auto w-[66%] sm:w-full">
                    <Line className="absolute bg-light_green-600_01 bottom-[44%] h-1 inset-x-[0] mx-auto w-[53%]" />
                    <Button
                      className="absolute cursor-pointer font-semibold h-[104px] left-[0] rounded-[50%] text-4xl sm:text-[32px] md:text-[34px] text-center top-[0] w-[104px]"
                      shape="circle"
                      color="light_green_600"
                      size="2xl"
                      variant="fill"
                    >
                      1
                    </Button>
                    <div className="absolute bg-light_green-600_01 bottom-[0] flex flex-col h-[104px] items-center justify-start p-6 sm:px-5 right-[0] rounded-[50%] w-[104px]">
                      <Text
                        className="mb-[9px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                        size="txtSourceSansProSemiBold36WhiteA700"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-light_green-600_01 h-1 mb-12 ml-[-0.01px] mt-auto w-[35%] z-[1]" />
                </div>
                <Button
                  className="cursor-pointer font-semibold h-[104px] md:mt-0 mt-1.5 rounded-[50%] text-4xl sm:text-[32px] md:text-[34px] text-center w-[104px]"
                  shape="circle"
                  color="light_green_600_01"
                  size="2xl"
                  variant="fill"
                >
                  3
                </Button>
              </div>
              <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-start w-[98%] md:w-full">
                <Text
                  className="text-base text-black-900 text-center"
                  size="txtOpenSansRomanSemiBold16"
                >
                  See refund policy
                </Text>
                <Text
                  className="ml-48 md:ml-[0] text-base text-black-900_cc"
                  size="txtOpenSansRomanBold16"
                >
                  Fill in details
                </Text>
                <Text
                  className="md:ml-[0] ml-[237px] text-base text-black-900_cc"
                  size="txtOpenSansRomanBold16"
                >
                  Review
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute leading-[5.00px] right-[0] text-black-900 text-xl top-[22%]"
            size="txtSourceSansProSemiBold20"
          >
            <span className="text-black-900 font-sourcesanspro text-left font-semibold">
              <>
                Booking cancellation date: February 12, 2024
                <br />
                Timeshare will start date: February 15, 2024
                <br />
                Amount paid for booking: 6,000,000 VND
                <br />
                Percentage payable upon cancellation (according to total
                amount): 10%
                <br />
                Fee payable upon cancellation: 600,000 VND
                <br />
                <br />
              </>
            </span>
            <span className="md:text-[22px] sm:text-xl text-red-600 font-sourcesanspro text-left text-2xl font-semibold">
              Total amount refunded: 5,400,000 VND
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default CancellationandrefundprocessTwoPage;
