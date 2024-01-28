import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Exchane8ViewPage = () => {
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
          <Header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="flex flex-col font-volkhov items-center justify-end mt-[9px] p-[41px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col justify-start max-w-[1219px] mt-[11px] mx-auto w-full">
            <Text
              className="md:ml-[0] ml-[465px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center"
              size="txtVolkhovBold36"
            >
              Exchanged Detail
            </Text>
            <Img
              className="h-[50px] md:ml-[0] ml-[480px] mt-[21px]"
              src="images/img_group.svg"
              alt="group"
            />
            <div className="flex md:flex-col flex-row font-mulish md:gap-5 items-center justify-start mt-[169px] w-[93%] md:w-full">
              <div className="md:h-[260px] h-[261px] relative w-[48%] md:w-full">
                <div className="bg-white-A700_cc border border-black-900 border-solid h-[260px] m-auto w-full"></div>
                <div className="absolute bg-gray-100 flex flex-col md:h-auto h-max inset-[0] items-center justify-start m-auto p-5 rounded-[3px] w-[502px] sm:w-full">
                  <Text
                    className="capitalize leading-[22.00px] text-blue_gray-700 text-lg"
                    size="txtMulishRomanSemiBold18"
                  >
                    <span className="md:text-xl sm:text-lg text-blue_gray-700 font-mulish text-left text-[22px] font-semibold">
                      <>
                        Westminster to Greenwich River Thames
                        <br />
                        Da lat, VietNam.
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-mulish text-left font-semibold">
                      <>
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="md:text-[21px] sm:text-[19px] text-orange-600 font-mulish text-left text-[23px] font-extrabold">
                      <>
                        CCM
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-mulish text-left font-semibold">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="md:text-xl sm:text-lg text-blue_gray-700 font-mulish text-left text-[22px] font-bold">
                      January 20, 2024 - October 20, 2024{" "}
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[27px] items-center justify-start ml-2.5 md:ml-[0] p-1 w-[15%] md:w-full">
                <Img
                  className="h-[79px] mt-1.5"
                  src="images/img_forward.svg"
                  alt="forward"
                />
                <Text
                  className="mb-[34px] text-orange-600_01 text-xl"
                  size="txtLatoBold20"
                >
                  is exchange for
                </Text>
              </div>
              <div className="flex flex-col font-mulish items-center justify-start md:ml-[0] ml-[9px]">
                <Text
                  className="capitalize leading-[22.00px] text-blue_gray-700 text-lg text-shadow-ts2"
                  size="txtMulishRomanSemiBold18"
                >
                  <span className="md:text-xl sm:text-lg text-blue_gray-700 font-mulish text-left text-[22px] font-bold">
                    <>
                      Hoi An Boutique
                      <br />
                      Quang Nam, VietNam.
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="md:text-[21px] sm:text-[19px] text-orange-600 font-mulish text-left text-[23px] font-extrabold">
                    <>
                      BDC
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-700 font-mulish text-left font-semibold">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="md:text-xl sm:text-lg text-blue_gray-700 font-mulish text-left text-[22px] font-bold">
                    <>
                      January 20, 2024 - October 20, 2024
                      <br />
                    </>
                  </span>
                  <span className="md:text-xl sm:text-lg text-red-800 font-mulish text-left text-[22px] font-bold">
                    9 months{" "}
                  </span>
                </Text>
              </div>
            </div>
            <List
              className="bg-gray-50_02 border border-cyan-900_14 border-solid flex flex-col font-mulish gap-[50px] items-center ml-1.5 md:ml-[0] mt-[37px] p-[35px] sm:px-5 rounded-[3px] w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[93%] md:w-full">
                <div className="flex flex-col gap-[7px] justify-start w-[43%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_contrast_teal_200.svg"
                      alt="contrast"
                    />
                    <Text
                      className="capitalize text-blue_gray-900 text-xl w-auto"
                      size="txtMulishBold20"
                    >
                      Free cancel
                    </Text>
                  </div>
                  <Text
                    className="ml-10 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    Cancel up to 24 hours in advance to receive a full refund
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] justify-start w-[43%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_bxbxspraycan.svg"
                      alt="bxbxspraycan"
                    />
                    <Text
                      className="capitalize text-[22px] text-blue_gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtMulishBold22"
                    >
                      Health precautions
                    </Text>
                  </div>
                  <Text
                    className="ml-11 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    Special health and safety measures apply. Learn more
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[255px] items-center justify-start w-[86%] md:w-full">
                <div className="flex flex-col gap-1.5 justify-start w-[37%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_carbonapplicationmobile.svg"
                      alt="carbonapplicati"
                    />
                    <Text
                      className="capitalize text-[22px] text-blue_gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtMulishBold22"
                    >
                      Mobile ticketing
                    </Text>
                  </div>
                  <Text
                    className="ml-11 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    Use your phone or print your voucher
                  </Text>
                </div>
                <div className="flex flex-col gap-2 justify-start w-[38%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_antdesignfiel.svg"
                      alt="antdesignfiel"
                    />
                    <Text
                      className="capitalize text-[22px] text-blue_gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtMulishBold22"
                    >
                      Duration 3.5 hours
                    </Text>
                  </div>
                  <Text
                    className="ml-11 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    Check availability to see starting times.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[308px] items-start justify-start w-4/5 md:w-full">
                <div className="flex flex-col gap-[7px] justify-start w-[34%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_fluentflashch.svg"
                      alt="fluentflashch"
                    />
                    <Text
                      className="capitalize text-[22px] text-blue_gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtMulishBold22"
                    >
                      Instant confirmation
                    </Text>
                  </div>
                  <Text
                    className="ml-10 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    Don’t wait for the confirmation!
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 justify-start md:mt-0 mt-0.5 w-[33%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_healthiconscallcentre.svg"
                      alt="healthiconscall"
                    />
                    <Text
                      className="capitalize text-[22px] text-blue_gray-900 sm:text-lg md:text-xl w-auto"
                      size="txtMulishBold22"
                    >
                      Live tour guide in English
                    </Text>
                  </div>
                  <Text
                    className="ml-11 md:ml-[0] text-blue_gray-700 text-lg"
                    size="txtMulishRegular18"
                  >
                    English
                  </Text>
                </div>
              </div>
            </List>
            <div
              className="common-pointer bg-yellow-600_01 flex md:flex-col flex-row font-lato gap-[29px] items-center justify-center md:ml-[0] ml-[505px] mr-[472px] mt-[37px] pl-[13px] pt-[13px] rounded-[12px] shadow-bs9 w-1/5 md:w-full"
              onClick={() => navigate("/homepage")}
            >
              <Text
                className="md:ml-[0] ml-[77px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                size="txtLatoExtraBold22"
              >
                Home
              </Text>
              <Img
                className="h-[34px] md:mt-0 mt-[5px]"
                src="images/img_group15091.svg"
                alt="group15091"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[189px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Exchane8ViewPage;
