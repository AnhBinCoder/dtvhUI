import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BookingFourPage = () => {
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
          <Header4 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="bg-orange-A200_e5 flex flex-col items-center justify-start mt-[117px] p-[50px] md:px-5 w-[30%] md:w-full">
          <div className="flex flex-col font-roboto gap-[30px] items-center justify-start mt-[121px] w-auto">
            <Img
              className="h-[123px] w-[123px]"
              src="images/img_successiconco.svg"
              alt="successiconco"
            />
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtRobotoRomanSemiBold24"
              >
                Payment Successful
              </Text>
              <Text
                className="max-w-[328px] md:max-w-full text-base text-black-900 text-center"
                size="txtRobotoRomanMedium16"
              >
                Your transaction has successfully been completed. For more
                details, check your transaction history.
              </Text>
            </div>
          </div>
          <Text
            className="common-pointer mt-[143px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
            size="txtLatoExtraBold22"
            onClick={() => navigate("/bookingfive")}
          >
            Booking Detail
          </Text>
          <div className="bg-orange-A200_d8 flex flex-col font-roboto h-[100px] items-center justify-start mb-[135px] mt-[46px] p-[18px] rounded-[50%] w-[100px]">
            <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_home.svg"
                alt="home_One"
              />
              <Text
                className="text-black-900 text-center text-sm w-auto"
                size="txtRobotoRomanRegular14"
              >
                Home
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[265px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BookingFourPage;
