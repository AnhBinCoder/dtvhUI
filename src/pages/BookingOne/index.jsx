import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";

const vietNamOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BookingOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
              <div className="header-row mt-6 mb-5">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                  size="txtNicoMojiRegular26"
                >
                  WandarShare
                </Text>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col font-mulish sm:hidden items-center justify-start w-auto">
                <ul className="flex sm:flex-col flex-row gap-[30px] sm:hidden items-end justify-start w-auto common-row-list">
                  <li>
                    <a className="hover:font-extrabold text-[15px] text-white-A700">
                      <Text
                        className="common-pointer"
                        size="txtMulishRomanSemiBold15"
                        onClick={() => navigate("/homepage")}
                      >
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishRomanSemiBold15">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-extrabold text-[15px] text-white-A700">
                      <Text
                        className="common-pointer"
                        size="txtMulishRomanExtraBold15"
                        onClick={() => navigate("/exchangeone")}
                      >
                        Exchange Timeshare
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishSemiBold15">Contact Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-extrabold text-[15px] text-white-A700"
                    >
                      <Text size="txtMulishSemiBold15">Help</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <Img
                className="common-pointer h-[71px] md:h-auto sm:hidden rounded-[50%]"
                src="images/img_unsplashc8ta0gwpbqg_71x75.png"
                alt="unsplashc8ta0gw"
                onClick={() => navigate("/memberprofile")}
              />
            </div>
          </header>
        </div>
        <div className="flex flex-col font-sourcesanspro items-center justify-start mt-[25px] pt-1.5 w-full">
          <div className="flex flex-col max-w-[1294px] mx-auto md:px-5 relative w-full">
            <div className="flex sm:h-[244px] h-[245px] md:h-[434px] justify-end mx-auto w-full">
              <div className="flex flex-col h-full items-center justify-start mb-[33px] ml-auto mr-[254px] mt-auto w-[57%]">
                <div className="flex flex-col gap-[22px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <Button
                      className="cursor-pointer font-semibold h-[104px] mb-1.5 rounded-[50%] text-[17.44px] text-center w-[104px]"
                      shape="circle"
                      color="light_green_600"
                      size="3xl"
                      variant="fill"
                    >
                      1
                    </Button>
                    <div className="flex md:mt-0 mt-1.5 relative w-[72%] md:w-full">
                      <div className="md:h-[103px] h-[104px] my-auto w-[59%]">
                        <Line className="absolute bg-light_green-600 h-1 inset-y-[0] left-[0] my-auto w-[71%]" />
                        <div className="absolute bg-blue_gray-100_01 flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[35px] sm:px-5 right-[0] rounded-[50%] w-[104px]">
                          <Text
                            className="mb-[11px] text-[17.44px] text-black-900_51 text-center"
                            size="txtSourceSansProSemiBold1744"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-light_green-600 h-1 ml-[-0.01px] my-auto w-[42%] z-[1]" />
                    </div>
                    <Button
                      className="cursor-pointer font-semibold h-[104px] md:mt-0 mt-1.5 rounded-[50%] text-[17.44px] text-center w-[104px]"
                      shape="circle"
                      color="blue_gray_100_01"
                      size="3xl"
                      variant="fill"
                    >
                      3
                    </Button>
                  </div>
                  <div className="flex flex-row font-opensans gap-[194px] items-center justify-start md:ml-[0] ml-[21px] w-[56%] md:w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Booking
                    </Text>
                    <Text
                      className="text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Payment Methods
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute border border-black-900_4f border-solid flex flex-col font-opensans h-full inset-[0] items-end justify-center m-auto p-8 sm:px-5 rounded-[17px] w-full">
                <Text
                  className="mr-[201px] mt-[158px] text-base text-black-900_cc"
                  size="txtOpenSansRomanBold16"
                >
                  Confirm Payment
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-center justify-end ml-[235px] mt-[-2px] pt-[18px] px-[18px] shadow-bs13 w-[39%] z-[1]">
              <div className="flex flex-col items-start justify-start mt-[13px] w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row font-opensans sm:gap-[58px] items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                    size="txtOpenSansRomanSemiBold24"
                  >
                    Aug 2, 2023 - Aug 5, 2023
                  </Text>
                  <Text
                    className="leading-[30.00px] text-2xl md:text-[22px] text-black-900_cc sm:text-xl"
                    size="txtOpenSansRomanSemiBold24"
                  >
                    4 days 3 Nights
                  </Text>
                </div>
                <Text
                  className="mt-[17px] text-blue_gray-900 text-shadow-ts text-xl"
                  size="txtVolkhovBold20"
                >
                  Hoi An Central Boutique
                </Text>
                <Text
                  className="md:ml-[0] ml-[374px] mt-2 text-blue-900 text-right text-sm underline"
                  size="txtOpenSansRomanSemiBold14"
                >
                  Change
                </Text>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[58px] mt-[27px] w-[13%] md:w-full">
                  <Img
                    className="h-[7px]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <Img
                    className="h-[7px] ml-[3px]"
                    src="images/img_signal.svg"
                    alt="signal_One"
                  />
                  <Img
                    className="h-[7px] ml-[3px]"
                    src="images/img_signal.svg"
                    alt="signal_Two"
                  />
                  <Img
                    className="h-[7px] ml-[3px]"
                    src="images/img_signal.svg"
                    alt="signal_Three"
                  />
                  <Img
                    className="h-[7px] ml-[3px]"
                    src="images/img_signal.svg"
                    alt="signal_Four"
                  />
                </div>
                <Line className="bg-black-900_1e h-px mt-[3px] w-[94%]" />
                <div className="flex sm:flex-col flex-row font-opensans gap-[31px] items-center justify-start mt-7 w-[84%] md:w-full">
                  <div className="bg-blue_gray-100_05 flex flex-col items-center justify-start w-[48%] sm:w-full">
                    <Img
                      className="h-[162px] md:h-auto object-cover rounded-bl rounded-br w-full"
                      src="images/img_image39_140x169.png"
                      alt="imageThirtyNine"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[45%] sm:w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        className="h-8 md:h-auto object-cover w-[18%]"
                        src="images/img_image22.png"
                        alt="imageTwentyTwo"
                      />
                      <Text
                        className="sm:flex-1 leading-[20.00px] text-base text-gray-700_01 w-[74%] sm:w-full"
                        size="txtOpenSansRegular16"
                      >
                        2 Person Accomodation
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[23px] w-[85%] md:w-full">
                      <Img
                        className="h-8 md:h-auto object-cover w-[21%]"
                        src="images/img_image23.png"
                        alt="imageTwentyThree"
                      />
                      <Text
                        className="mb-[3px] mt-1.5 text-base text-gray-700_01"
                        size="txtOpenSansRegular16"
                      >
                        King Size Bed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-end justify-start mt-[30px] w-[66%] md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_wifi22.svg"
                        alt="wifiTwentyTwo"
                      />
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-[5px]">
                        <Text
                          className="text-base text-gray-700_01"
                          size="txtOpenSansRegular16"
                        >
                          Free Wifi
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col font-opensans items-center justify-start ml-auto mr-14 mt-[-2px] p-5 shadow-bs13 w-[39%] z-[1]">
              <div className="flex flex-col items-start justify-start mb-[91px] mt-[23px] w-[97%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[9px] w-[73%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-black-900_d3 text-xl"
                      size="txtOpenSansRomanSemiBold20"
                    >
                      Subtotal :{" "}
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
                      size="txtOpenSansRomanSemiBold24Black900d3"
                    >
                      {" "}
                      600.000VND
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[43px] items-center justify-start w-[96%] md:w-full">
                    <Text
                      className="text-black-900_d3 text-xl"
                      size="txtOpenSansRomanSemiBold20"
                    >
                      Taxes & Fees :{" "}
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_d3 sm:text-xl"
                      size="txtOpenSansRomanSemiBold24Black900d3"
                    >
                      {" "}
                      60.000VND
                    </Text>
                  </div>
                </div>
                <Line className="bg-black-900_30 h-px mt-[54px] w-full" />
                <div className="flex sm:flex-col flex-row gap-11 items-center justify-start md:ml-[0] ml-[9px] mt-[13px] w-[84%] md:w-full">
                  <Text
                    className="text-black-900_e2 text-xl"
                    size="txtOpenSansRomanSemiBold20Black900e2"
                  >
                    Total Pay :{" "}
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_e2"
                    size="txtOpenSansRomanSemiBold32"
                  >
                    {" "}
                    660.000VND
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[186px] mt-[11px] text-base text-black-900_e2"
                  size="txtOpenSansRomanSemiBold16Black900e2"
                >
                  (Incl. of all taxes)
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col font-opensans items-center justify-start p-[7px] shadow-bs13 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1382px] mb-[71px] mx-auto md:px-5 w-full">
              <div className="flex flex-col justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[580px] text-base text-black-900_cc text-center"
                  size="txtOpenSansRomanBold16"
                >
                  Contact your infomation
                </Text>
                <div className="flex flex-row sm:gap-10 gap-[640px] items-center justify-start ml-1.5 md:ml-[0] mt-8 w-[57%] md:w-full">
                  <Text
                    className="text-[13.08px] text-black-900"
                    size="txtOpenSansSemiBold1308"
                  >
                    FIrst Name
                  </Text>
                  <Text
                    className="text-[13.08px] text-black-900"
                    size="txtOpenSansSemiBold1308"
                  >
                    Last Name
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mt-1 w-full">
                  <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between w-[99%] md:w-full">
                    <Text
                      className="bg-gray-100_05 h-14 justify-center max-w-[651px] md:max-w-full pb-[17px] sm:pr-5 pr-[35px] pt-5 text-[13.08px] text-black-900 w-full"
                      size="txtOpenSansSemiBold1308"
                    >
                      Lê Dương
                    </Text>
                    <Text
                      className="bg-gray-100_05 h-14 justify-center max-w-[651px] md:max-w-full sm:pr-5 pr-[35px] py-[18px] text-[13.08px] text-black-900 w-full"
                      size="txtOpenSansSemiBold1308"
                    >
                      Bảo Lâm
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans sm:gap-10 items-center justify-between mt-[18px] w-[55%] md:w-full">
                    <Text
                      className="text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Phone
                    </Text>
                    <Text
                      className="text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between mt-1 w-[99%] md:w-full">
                    <div className="bg-gray-100_05 flex flex-row items-center justify-start pr-[9px] py-[9px]">
                      <Text
                        className="text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        +84
                      </Text>
                      <Img
                        className="h-3 ml-2"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Line className="bg-gray-400_38 h-[30px] mb-[7px] ml-[5px] w-px" />
                      <Text
                        className="text-[13.08px] text-black-900"
                        size="txtOpenSansSemiBold1308"
                      >
                        0123456789
                      </Text>
                    </div>
                    <Input
                      name="frameSeventyOne"
                      placeholder="LâmLDB@gmail.com"
                      className="font-semibold p-0 placeholder:text-black-900 sm:pr-5 text-[13.08px] text-left w-full"
                      wrapClassName="pb-[17px] pr-[35px] pt-5 md:w-full"
                      shape="square"
                      color="gray_100_05"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[18px] text-[13.08px] text-black-900"
                    size="txtOpenSansSemiBold1308"
                  >
                    Addresss
                  </Text>
                  <Text
                    className="bg-gray-100_05 h-14 justify-center max-w-[651px] md:max-w-full mt-1 pb-[17px] sm:pr-5 pr-[35px] pt-5 text-[13.08px] text-black-900 w-full"
                    size="txtOpenSansSemiBold1308"
                  >
                    1/12 Mai Chí Thọ P4 Q2
                  </Text>
                  <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start mt-[18px] w-[87%] md:w-full">
                    <Text
                      className="text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      CIty
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[366px] text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      State
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[369px] text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Postal Code
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[281px] text-[13.08px] text-black-900"
                      size="txtOpenSansSemiBold1308"
                    >
                      Country
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-start mt-[3px] w-full">
                    <Input
                      name="frameSeventyFour"
                      placeholder="TPHCM"
                      className="font-semibold p-0 placeholder:text-black-900 text-[13.08px] text-left w-full"
                      wrapClassName="flex md:flex-1 w-[19%] md:w-full"
                      suffix={
                        <div className="mt-0.5 mb-[3px] ml-[35px] sm:w-full sm:mx-0 w-[2%] bg-gray-900">
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
                    <Input
                      name="frameSeventySix"
                      placeholder="TPHCM"
                      className="font-semibold p-0 placeholder:text-black-900 text-[13.08px] text-left w-full"
                      wrapClassName="md:flex-1 md:ml-[0] ml-[140px] w-[19%] md:w-full"
                      shape="square"
                      color="gray_100_05"
                      size="3xl"
                      variant="fill"
                    ></Input>
                    <Text
                      className="bg-gray-100_05 h-[51px] justify-center ml-36 md:ml-[0] sm:pr-5 pr-[35px] py-4 text-[13.08px] text-black-900 w-[252px]"
                      size="txtOpenSansSemiBold1308"
                    >
                      007000
                    </Text>
                    <SelectBox
                      className="md:flex-1 font-semibold md:ml-[0] ml-[100px] text-[13.08px] text-left w-[18%] md:w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-3 mr-[0] w-[25px]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameSeventyEight"
                      options={vietNamOptionsList}
                      isSearchable={false}
                      placeholder="Viet Nam"
                      shape="square"
                      color="gray_100_05"
                      size="xl"
                      variant="fill"
                    />
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold font-sourcesanspro min-w-[651px] md:min-w-full md:ml-[0] ml-[363px] mt-[92px] outline outline-[0.5px] outline-black-900_1e rounded text-[17.44px] text-center"
                    onClick={() => navigate("/bookingtwo")}
                    color="amber_600"
                    size="xl"
                    variant="fill"
                  >
                    Continute
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingOnePage;
