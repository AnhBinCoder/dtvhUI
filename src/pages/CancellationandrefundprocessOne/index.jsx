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
const tphcmOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CancellationandrefundprocessOnePage = () => {
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
        <div className="font-sfprodisplay md:h-[1222px] sm:h-[1301px] h-[1718px] md:px-5 relative w-full">
          <div className="md:h-[1222px] sm:h-[1301px] h-[1718px] m-auto w-full">
            <div className="md:h-[1222px] sm:h-[1301px] h-[1718px] m-auto w-full">
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
              <div
                className="common-pointer absolute bg-light_blue-A200 bottom-1/4 h-[41px] right-[12%] rounded-[5px] w-[55%]"
                onClick={() => navigate("/cancellationandrefundprocesstwo")}
              ></div>
            </div>
            <div className="absolute flex flex-col font-sourcesanspro gap-[33px] justify-start right-[7%] top-[5%] w-[65%]">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[114px] w-4/5 md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
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
                      <Line className="bg-blue_gray-100_02 h-1 mb-12 ml-[-0.01px] mt-auto w-[35%] z-[1]" />
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
                  <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start w-[97%] md:w-full">
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
                      className="mb-0.5 md:ml-[0] ml-[233px] text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Review
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-opensans md:gap-10 gap-[178px] items-center justify-start w-full">
                <Text
                  className="bg-gray-100_05 h-14 justify-center max-w-[932px] md:max-w-full pb-[15px] sm:pr-5 pr-[35px] pt-[19px] text-[15px] text-black-900 w-full"
                  size="txtOpenSansSemiBold15"
                >
                  Lê Dương
                </Text>
                <div className="bg-gray-100_05 flex flex-row items-end justify-start pr-[9px] py-[9px] w-full">
                  <Text
                    className="my-2 text-[15px] text-black-900"
                    size="txtOpenSansSemiBold15"
                  >
                    +84
                  </Text>
                  <Img
                    className="h-[11px] mb-3 ml-1 mt-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Line className="bg-gray-400_38 h-[30px] mb-[7px] ml-2 w-px" />
                  <Text
                    className="my-2 text-[15px] text-black-900"
                    size="txtOpenSansSemiBold15"
                  >
                    0123456789
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start right-[7%] top-[14%] w-[65%]">
            <Text
              className="text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              First Name
            </Text>
            <Text
              className="mt-[103px] text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              Last Name
            </Text>
            <Text
              className="bg-gray-100_05 h-14 justify-center max-w-[932px] md:max-w-full mt-0.5 sm:pr-5 pr-[35px] py-[17px] text-[15px] text-black-900 w-full"
              size="txtOpenSansSemiBold15"
            >
              Bảo Lâm
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[34px] text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              Phone
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[87px] text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              Email
            </Text>
            <Input
              name="frameSeventyOne"
              placeholder="LâmLDB@gmail.com"
              className="font-opensans font-semibold p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-[3px] w-full"
              shape="square"
              color="gray_100_05"
              size="3xl"
              variant="fill"
            ></Input>
            <Text
              className="mt-10 text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              Addresss
            </Text>
            <Input
              name="frameSeventyTwo"
              placeholder="1/12 Mai Chí Thọ P4 Q2"
              className="font-opensans font-semibold p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="mt-[5px] w-full"
              shape="square"
              color="gray_100_05"
              size="lg"
              variant="fill"
            ></Input>
            <div className="flex flex-row font-opensans sm:gap-10 items-start justify-between mt-[22px] w-[65%] md:w-full">
              <Text
                className="text-base text-black-900"
                size="txtOpenSansSemiBold16"
              >
                City
              </Text>
              <Text
                className="text-base text-black-900"
                size="txtOpenSansSemiBold16"
              >
                State
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-center justify-between mt-[3px] w-full">
              <SelectBox
                className="sm:flex-1 font-semibold text-[15px] text-left w-[39%] sm:w-full"
                placeholderClassName="text-black-900"
                indicator={
                  <Img
                    className="h-3 mr-[0] w-[27px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frameSeventyFour"
                options={tphcmOptionsList}
                isSearchable={false}
                placeholder="TPHCM"
                shape="square"
                color="gray_100_05"
                size="3xl"
                variant="fill"
              />
              <Input
                name="frameSeventySix"
                placeholder="TPHCM"
                className="font-semibold p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="flex sm:flex-1 sm:w-full"
                suffix={
                  <div className="mt-[9px] ml-[35px] bg-gray-900">
                    <Img
                      className="my-auto"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  </div>
                }
                shape="square"
                color="gray_100_05"
                size="3xl"
                variant="fill"
              ></Input>
            </div>
            <Text
              className="mt-[17px] text-base text-black-900"
              size="txtOpenSansSemiBold16"
            >
              Reason for cancellation
            </Text>
            <Input
              name="frame466"
              placeholder="Other Personal Reasons"
              className="font-opensans font-semibold p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="flex mt-[7px] w-full"
              suffix={
                <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-gray-900 my-1">
                  <Img
                    className="my-auto"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                </div>
              }
              shape="square"
              color="gray_100_05"
              size="lg"
              variant="fill"
            ></Input>
            <div className="bg-white-A700 border border-gray-600_01 border-solid flex flex-col font-opensans items-start justify-start md:ml-[0] ml-[3px] mt-[3px] rounded-[5px]">
              <Text
                className="leading-[30.00px] mb-0.5 md:ml-[0] ml-[11px] text-base text-black-900"
                size="txtOpenSansSemiBold16"
              >
                <>
                  Change of Plans
                  <br />
                  Health issues
                  <br />
                  Work Issues
                  <br />
                  Change in Financial Situation
                  <br />
                  Natural Disaster or Emergency Event
                  <br />
                  Traffic or Aviation Issues
                </>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[395px] mt-[18px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtSourceSansProBold36"
            >
              Continue
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationandrefundprocessOnePage;
