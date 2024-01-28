import React from "react";

import { Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Booking21Page = () => {
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
        <div className="bg-gray-400_02 flex flex-col font-poppins md:gap-10 gap-[77px] items-center justify-start mt-[249px] p-3 md:px-5 w-[45%] md:w-full">
          <Text
            className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtPoppinsRegular40"
          >
            Choose One
          </Text>
          <Img
            className="h-[91px] mb-[606px]"
            src="images/img_donatepp1.svg"
            alt="donateppOne"
          />
        </div>
        <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[196px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Booking21Page;
