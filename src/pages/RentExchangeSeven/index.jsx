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

const RentExchangeSevenPage = () => {
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
        <div className="font-inter sm:h-[1301px] md:h-[1485px] h-[1718px] md:px-5 relative w-full">
          <div className="absolute bg-blue_gray-100_cc flex flex-col md:gap-10 gap-[119px] items-center justify-start left-[0] p-[30px] sm:px-5 top-[0] w-[23%]">
            <Img
              className="h-[158px] md:h-auto mt-[72px] rounded-[50%] w-[62%]"
              src="images/img_unsplashc8ta0gwpbqg_158x164.png"
              alt="unsplashc8ta0gw_One"
            />
            <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start mb-[399px] w-[248px]">
              <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                <div className="bg-white-A700_a8 flex flex-row gap-3 items-center justify-start px-3 py-4 rounded-lg shadow-bs w-[248px]">
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
                    src="images/img_lock_gray_900_01.svg"
                    alt="lock"
                  />
                  <Text
                    className="flex-1 text-[17px] text-blue_gray-900_03 w-auto"
                    size="txtSFProDisplayMedium17Bluegray90003"
                  >
                    Account
                  </Text>
                </div>
                <Input
                  name="frameTwo"
                  placeholder="Rent/Exchange"
                  value={frametwovalue}
                  onChange={(e) => setFrametwovalue(e)}
                  className="!placeholder:text-purple-300 !text-purple-300 font-medium leading-[normal] p-0 text-[17px] text-left w-full"
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
          <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full" />
          <div className="absolute flex flex-col font-sourcesanspro gap-[11px] items-start justify-start right-[6%] top-[6%] w-[66%]">
            <div className="flex flex-col gap-[41px] justify-start w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] w-[79%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold h-[104px] mb-1.5 rounded-[50%] text-4xl sm:text-[32px] md:text-[34px] text-center w-[104px]"
                      shape="circle"
                      color="light_green_600"
                      size="2xl"
                      variant="fill"
                    >
                      1
                    </Button>
                    <div className="flex md:mt-0 mt-1.5 relative w-[72%] md:w-full">
                      <div className="md:h-[103px] h-[104px] my-auto w-[59%]">
                        <Line className="absolute bg-blue_gray-100_02 h-1 inset-y-[0] left-[0] my-auto w-[71%]" />
                        <div className="absolute bg-blue_gray-100_01 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-6 sm:px-5 right-[0] rounded-[50%] w-[104px]">
                          <Text
                            className="mb-[9px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_51 text-center"
                            size="txtSourceSansProSemiBold36"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-100_02 h-1 ml-[-0.01px] my-auto w-[42%] z-[1]" />
                    </div>
                    <Button
                      className="cursor-pointer font-semibold h-[104px] md:mt-0 mt-1.5 rounded-[50%] text-4xl sm:text-[32px] md:text-[34px] text-center w-[104px]"
                      shape="circle"
                      color="blue_gray_100_01"
                      size="2xl"
                      variant="fill"
                    >
                      3
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <Text
                      className="md:mt-0 mt-0.5 text-base text-black-900 text-center"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      See refund policy
                    </Text>
                    <Text
                      className="ml-48 md:ml-[0] md:mt-0 mt-0.5 text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Fill in details
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[238px] text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Review
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-100_01 flex flex-col md:gap-10 gap-[75px] items-center justify-end p-[19px] rounded-[5px] w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[214px] mt-[49px] rounded-[15px] w-[96%]"></div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-2 rounded-[15px]">
                  <Text
                    className="leading-[25.00px] mt-[11px] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 text-justify"
                    size="txtSourceSansProSemiBold27"
                  >
                    <span className="text-black-900 font-sourcesanspro font-semibold">
                      <>
                        1. Cancellation and Refund Policy:
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-semibold">
                      {" "}
                      - Cancellation 1 day before:{" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-light">
                      <>
                        If you cancel your reservation 1 day before the check-in
                        date, you will be charged a cancellation fee and will
                        only be refunded 50% of the total reservation value. The
                        remaining 50% can be retained as a cancellation fee.
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-semibold">
                      {" "}
                      - Cancel 3 days in advance:{" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-light">
                      <>
                        If you cancel 3 days in advance, you are entitled to
                        receive a refund of 90% of the total booking value. Only
                        10% of the booking value will be retained as a
                        cancellation fee.
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-semibold">
                      {" "}
                      - Cancel 5 days in advance:{" "}
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-light">
                      <>
                        If you cancel 5 days in advance, you will receive a full
                        refund of the booking value, meaning 100% of the total
                        value.
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-sourcesanspro font-semibold">
                      <>
                        2. Processing Time:
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-light">
                      <>
                        {" "}
                        Refund processing times may also vary and it may take a
                        number of business days for the refund amount to be
                        reflected in your account.
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-sourcesanspro font-semibold">
                      <>
                        3. Contact Customer Support:
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-sourcesanspro text-2xl font-light">
                      {" "}
                      If you need assistance or have specific questions about
                      cancellations and refunds, you should contact customer
                      support directly.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-end p-[7px] rounded-[5px] w-[38%] md:w-full">
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-row items-center justify-end ml-5 md:ml-[0] mt-0.5 p-[3px] rounded-[5px] w-[7%] md:w-full">
                <Img
                  className="h-[5px] w-1.5"
                  src="images/img_line19.svg"
                  alt="lineNineteen"
                />
                <Img
                  className="h-3"
                  src="images/img_checkmark_black_900.svg"
                  alt="checkmark_One"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-light_blue-A200 h-[45px] md:ml-[0] ml-[111px] rounded-[5px] w-[82%]"
              onClick={() => navigate("/rentexchangeeight")}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentExchangeSevenPage;
