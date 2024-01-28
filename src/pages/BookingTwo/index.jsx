import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BookingTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji gap-7 items-center justify-start mx-auto w-full">
        <div className="h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <Header4 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="flex flex-col items-center justify-end p-[21px] sm:px-5 w-full">
          <div className="border border-black-900_4f border-solid font-sourcesanspro h-[245px] sm:h-[255px] md:h-[588px] max-w-[1345px] mt-[13px] mx-auto md:px-5 relative rounded-[17px] w-full">
            <div className="flex flex-row sm:gap-10 h-full items-start justify-between ml-auto mr-[254px] mt-[38px] w-[55%]">
              <div
                className="common-pointer bg-light_green-600 flex flex-col h-[104px] items-start justify-end mb-1.5 p-10 sm:px-5 rounded-[50%] w-[104px]"
                onClick={() => navigate("/bookingone")}
              >
                <Text
                  className="ml-1 md:ml-[0] text-[17.44px] text-center text-white-A700"
                  size="txtSourceSansProSemiBold1744WhiteA700"
                >
                  1
                </Text>
              </div>
              <div className="bg-blue_gray-100_01 flex flex-col h-[104px] items-center justify-start mt-1.5 p-[35px] sm:px-5 rounded-[50%] w-[104px]">
                <Text
                  className="mb-[11px] text-[17.44px] text-black-900_51 text-center"
                  size="txtSourceSansProSemiBold1744"
                >
                  3
                </Text>
              </div>
            </div>
            <div className="absolute border border-black-900_4f border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-[38px] sm:px-5 rounded-[17px] w-full">
              <div className="flex flex-col items-center justify-start mb-3 mr-[205px] w-[59%] md:w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-[99%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold h-[104px] mb-1.5 rounded-[50%] text-[17.44px] text-center w-[104px]"
                      shape="circle"
                      color="light_green_600"
                      size="3xl"
                      variant="fill"
                    >
                      1
                    </Button>
                    <div className="h-[104px] md:h-[106px] md:mt-0 my-0.5 relative w-[72%] md:w-full">
                      <div className="absolute bottom-[42%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Line className="bg-light_green-600 h-1 w-[42%]" />
                          <Line className="bg-light_green-600 h-1 w-[42%]" />
                        </div>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-semibold h-full inset-[0] justify-center m-auto rounded-[50%] text-[17.44px] text-center w-[104px]"
                        shape="circle"
                        color="light_green_600"
                        size="3xl"
                        variant="fill"
                      >
                        2
                      </Button>
                    </div>
                    <div className="bg-blue_gray-100_01 flex flex-col h-[104px] items-center justify-start md:mt-0 mt-1.5 p-[35px] sm:px-5 rounded-[50%] w-[104px]">
                      <Text
                        className="mb-[11px] text-[17.44px] text-black-900_51 text-center"
                        size="txtSourceSansProSemiBold1744"
                      >
                        3
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start w-[98%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-base text-black-900 text-center"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Booking
                    </Text>
                    <Text
                      className="ml-52 md:ml-[0] md:mt-0 mt-[5px] text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Payment Methods
                    </Text>
                    <Text
                      className="mb-[5px] md:ml-[0] ml-[164px] text-base text-black-900_cc"
                      size="txtOpenSansRomanBold16"
                    >
                      Confirm Payment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[62px] text-base text-black-900_cc"
            size="txtOpenSansRomanBold16"
          >
            payment methods
          </Text>
          <div className="bg-gray-400_02 flex flex-col items-start justify-start mt-8 p-2 md:px-5 w-[46%] md:w-full">
            <div className="flex flex-col gap-[22px] justify-start mb-[474px] md:ml-[0] ml-[39px] w-[81%] md:w-full">
              <div className="flex flex-row gap-[31px] items-end justify-end md:ml-[0] ml-[222px] w-[56%] md:w-full">
                <div className="flex flex-col font-poppins gap-[7px] items-center justify-start w-2/5">
                  <Img
                    className="h-[25px]"
                    src="images/img_vector3.svg"
                    alt="vectorThree"
                  />
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[111px] md:w-full">
                    <div className="md:h-[75px] h-[78px] relative w-full">
                      <div className="absolute bg-blue_gray-200 border-4 border-blue_gray-700_02 border-solid flex flex-col h-full inset-y-[0] items-end justify-start left-[0] my-auto pb-[3px] px-[3px] rounded-[12px] w-[91%]">
                        <div className="flex flex-col justify-start mb-[3px] w-[90%] md:w-full">
                          <Img
                            className="h-1 ml-10 md:ml-[0] rounded-[1px] w-[3px]"
                            src="images/img_rectangle28.svg"
                            alt="rectangleTwentyEight"
                          />
                          <Img
                            className="h-1.5 md:ml-[0] ml-[50px] mt-1.5"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <div className="flex flex-row items-end justify-start mt-2.5 w-full">
                            <Img
                              className="h-[39px]"
                              src="images/img_settings_blue_gray_700_01.svg"
                              alt="settings"
                            />
                            <Img
                              className="h-1 mb-[3px] ml-[49px] mt-[31px] rotate-[90deg] rounded-[50%] w-1"
                              src="images/img_rectangle31.svg"
                              alt="rectangleThirtyOne"
                            />
                            <Img
                              className="h-1 mb-[3px] ml-[7px] mt-[31px] rotate-[90deg] rounded-[50%] w-[10%]"
                              src="images/img_rectangle31.svg"
                              alt="rectangleThirty"
                            />
                          </div>
                          <Img
                            className="h-1 ml-5 md:ml-[0] rotate-[90deg] rounded-[50%] w-1"
                            src="images/img_rectangle31.svg"
                            alt="rectangleTwentySeven"
                          />
                        </div>
                      </div>
                      <Switch
                        onColor="#b1b5b8"
                        offColor="#b1b5b8"
                        onHandleColor="#b2bbc3"
                        offHandleColor="#b2bbc3"
                        value={false}
                        className="absolute border-4 border-blue_gray-700_01 border-solid inset-y-[0] my-auto right-[0] w-[48%]"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[3px] text-gray-900_87_03 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Your Balance
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-bold font-manrope mt-[87px] text-center text-sm w-[140px]"
                  onClick={() => navigate("/booking21")}
                  shape="round"
                  color="amber_300"
                  size="xl"
                  variant="fill"
                >
                  add
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start mr-[130px] w-3/4 md:w-full">
                <div className="flex flex-col font-darkergrotesque gap-3 items-center justify-start sm:mt-0 mt-[53px] w-[33%] sm:w-full">
                  <div className="bg-gradient5  h-[107px] md:h-[26px] p-[35px] sm:px-5 relative rounded-[30px] shadow-bs14 w-full">
                    <Img
                      className="absolute h-6 inset-x-[0] mx-auto top-[33%]"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                    <Img
                      className="common-pointer absolute bottom-[35%] h-[26px] inset-x-[0] mx-auto"
                      src="images/img_vector.svg"
                      alt="vector"
                      onClick={() => navigate("/bookingthree")}
                    />
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                    size="txtDarkerGrotesqueSemiBold24"
                  >
                    My Wallet
                  </Text>
                </div>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-900"
                  size="txtPoppinsRegular36"
                >
                  {" "}
                  500.000VND{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingTwoPage;
