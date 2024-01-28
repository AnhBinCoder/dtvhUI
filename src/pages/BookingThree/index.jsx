import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BookingThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="font-nicomoji h-[468px] md:px-5 relative w-full">
          <Img
            className="h-[468px] m-auto object-cover w-full"
            src="images/img_rectangle140_468x1440.png"
            alt="rectangle140"
          />
          <Header4 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="border border-black-900_4f border-solid flex flex-col font-sourcesanspro items-end justify-end max-w-[1305px] mt-[62px] mx-auto p-9 md:px-5 rounded-[17px] w-full">
          <div className="flex flex-col gap-[31px] items-center justify-start mr-[215px] mt-[7px] w-[61%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-[98%] md:w-full">
              <div className="flex relative w-[86%] md:w-full">
                <div className="md:h-[104px] h-[110px] my-auto w-[66%] sm:w-full">
                  <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[0] w-[79%]">
                    <Button
                      className="common-pointer cursor-pointer font-semibold h-[104px] rounded-[50%] text-[17.44px] text-center w-[104px]"
                      onClick={() => navigate("/bookingone")}
                      shape="circle"
                      color="light_green_600"
                      size="3xl"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Line className="bg-light_green-600 h-1 mb-[41px] mt-[58px] w-[68%]" />
                  </div>
                  <div className="absolute bg-light_green-600 bottom-[0] flex flex-col h-[104px] items-center justify-end p-[41px] md:px-10 sm:px-5 right-[0] rounded-[50%] w-[104px]">
                    <Text
                      className="text-[17.44px] text-center text-white-A700"
                      size="txtSourceSansProSemiBold1744WhiteA700"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <Line className="bg-light_green-600 h-1 mb-[47px] ml-[-0.49px] mt-auto w-[35%] z-[1]" />
              </div>
              <Button
                className="cursor-pointer font-semibold h-[104px] md:mt-0 mt-1.5 rounded-[50%] text-[17.44px] text-center w-[104px]"
                shape="circle"
                color="light_green_600"
                size="3xl"
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
                Booking
              </Text>
              <Text
                className="md:ml-[0] ml-[209px] text-base text-black-900_cc"
                size="txtOpenSansRomanBold16"
              >
                Payment Methods
              </Text>
              <Text
                className="md:ml-[0] ml-[166px] text-base text-black-900_cc"
                size="txtOpenSansRomanBold16"
              >
                Confirm Payment
              </Text>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col font-darkergrotesque gap-[15px] h-[558px] items-center justify-start mt-[131px] p-[22px] md:px-5 w-[32%] md:w-full"
          style={{ backgroundImage: "url('images/img_group105.svg')" }}
        >
          <div className="h-[109px] relative w-[30%]">
            <div className="bg-gradient6  h-[91px] m-auto rounded-[49px] shadow-bs15 w-[84%]"></div>
            <div className="absolute h-[109px] inset-[0] justify-center m-auto w-full">
              <div className="bg-gradient6  h-[109px] m-auto rounded-[59px] shadow-bs15 w-full"></div>
              <Img
                className="absolute bottom-[13%] h-[71px] inset-x-[0] mx-auto object-cover"
                src="images/img_home_71x78.png"
                alt="home_One"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[26px] w-[99%] md:w-full">
            <Text
              className="capitalize text-gray-900_05 text-xl"
              size="txtDarkerGrotesqueBold20"
            >
              {" "}
              confirm payment{" "}
            </Text>
            <div className="flex flex-col gap-[13px] items-center justify-start mt-[26px] w-[95%] md:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  Date:
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  05 December 2022
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  Reference Num
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  #54463873456
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-10 w-full">
              <Line className="bg-gray-300_02 h-px w-full" />
              <div className="flex flex-row items-start justify-between mt-[19px] w-[95%] md:w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  Sender
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  Michel jems
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-3 w-[95%] md:w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  Receiver
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  Johal Musti
                </Text>
              </div>
              <Line className="bg-gray-300_02 h-px mt-[38px] w-full" />
              <div className="flex flex-row items-start justify-between mt-[19px] w-[95%] md:w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  Total fees
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  660.000VNND
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[13px] w-[95%] md:w-full">
                <Text
                  className="text-[13px] text-gray-600_04"
                  size="txtDarkerGrotesqueSemiBold13"
                >
                  your balance
                </Text>
                <Text
                  className="text-gray-900_06 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14"
                >
                  1.000.000VND
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[11px] w-[95%] md:w-full">
                <Text
                  className="mt-0.5 text-blue_gray-900_10 text-sm"
                  size="txtDarkerGrotesqueSemiBold14Bluegray90010"
                >
                  ramaining balance
                </Text>
                <Text
                  className="mb-0.5 text-green-900 text-right text-sm"
                  size="txtDarkerGrotesqueSemiBold14Green900"
                >
                  340.000VND
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="common-pointer cursor-pointer font-bold font-darkergrotesque h-[57px] rounded-[10px] text-base text-center w-[449px]"
          onClick={() => navigate("/bookingfour")}
          shape="round"
          size="xl"
          variant="gradient"
          color="pink_200_pink_300"
        >
          Confirm
        </Button>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[255px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingThreePage;
