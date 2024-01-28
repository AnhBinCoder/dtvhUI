import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Exchange7SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-nicomoji h-[1684px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[798px] items-center justify-start w-full">
            <div className="h-[468px] md:px-5 relative w-full">
              <Img
                className="h-[468px] m-auto object-cover w-full"
                src="images/img_rectangle140_468x1440.png"
                alt="rectangle140"
              />
              <Header className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            </div>
            <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center md:px-5 w-full" />
          </div>
        </div>
        <div className="absolute flex flex-col font-lato inset-x-[0] items-center justify-start max-w-[1063px] mx-auto p-[7px] md:px-5 top-[31%] w-full">
          <div className="flex flex-col md:gap-10 gap-[151px] justify-start mb-[31px] mt-[41px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-600_02"
              size="txtLatoBold30"
            >
              <>
                You will exchange this timeshare from January 20, 2024 to
                October 20, 2024. If you have any problem, you can contact us
                via Email or Mobile-phone. <br />
                Thank you for choose us.
              </>
            </Text>
            <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-start justify-between md:ml-[0] ml-[69px] w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[7px]">
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
              <div className="flex flex-col font-lato gap-[33px] items-center justify-start w-[31%] md:w-full">
                <div className="bg-yellow-600_01 flex flex-row gap-[19px] items-center justify-end pl-[13px] pt-[13px] rounded-[12px] shadow-bs9 w-full">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtLatoExtraBold22"
                  >
                    Confirm
                  </Text>
                  <Img
                    className="h-[34px] mt-[5px]"
                    src="images/img_group15091.svg"
                    alt="group15091"
                  />
                </div>
                <div className="bg-blue_gray-400 flex flex-row gap-[26px] items-center justify-end pl-[13px] pt-[13px] rounded-[12px] shadow-bs9 w-full">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtLatoExtraBold22"
                  >
                    Cancel
                  </Text>
                  <Img
                    className="h-[34px] mt-[5px]"
                    src="images/img_group15091.svg"
                    alt="group15091_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-500_7f flex flex-col font-roboto h-full inset-[0] items-center justify-center m-auto p-[493px] md:px-10 sm:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[683px] items-center justify-start my-[7px] p-[52px] md:px-5 w-[99%] md:w-full"
            style={{
              backgroundImage: "url('images/img_paymentsuccessful.svg')",
            }}
          >
            <div className="flex flex-col gap-[51px] items-center justify-start mb-[45px] mt-[119px] w-[96%] md:w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-auto">
                <Img
                  className="h-[123px] md:h-auto object-cover w-[123px]"
                  src="images/img_successiconcomponent.png"
                  alt="successiconcomp"
                />
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanRegular24"
                  >
                    Exchange Successfully
                  </Text>
                  <Text
                    className="max-w-[328px] md:max-w-full text-black-900 text-center text-xl"
                    size="txtRobotoRomanMedium20"
                  >
                    <>
                      You can view exchange detail
                      <br />
                      or go back
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-9 items-center justify-start w-[57%] md:w-full">
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[184px] rounded-[5px] text-center text-xl"
                  onClick={() => navigate("/exchane8view")}
                  color="yellow_600_01"
                  size="md"
                  variant="fill"
                >
                  View detail
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[184px] rounded-[5px] text-center text-xl"
                  onClick={() => navigate("/exchangeone")}
                  color="yellow_600_01"
                  size="md"
                  variant="fill"
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange7SuccessPage;
