import React from "react";

import { Button, Img, Text } from "components";

const ResetPasswordStepTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="h-[1024px] sm:h-[1038px] md:px-5 relative w-[48%] md:w-full">
          <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto w-full">
            <Img
              className="h-[1024px] md:h-auto object-cover w-full"
              src="images/img_dinoreichmuth.png"
              alt="dinoreichmuth"
            />
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[686px] md:h-auto h-full inset-[0] items-start justify-end m-auto max-w-[686px] p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                size="txtInterBold36"
              >
                WandarShare
              </Text>
            </div>
            <div className="flex flex-col font-poppins h-[108px] md:h-auto items-start justify-start w-[575px] sm:w-full">
              <Text
                className="max-w-[575px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900_66"
                size="txtPoppinsBold36"
              >
                NEW LOOK. NEW DESTINATIONS. SAME GREAT BENEFITS.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[1024px] md:h-auto items-center justify-between max-w-[754px] p-[100px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[554px] sm:w-full">
              <div className="flex flex-col gap-5 items-center justify-center w-auto sm:w-full">
                <div className="bg-green-600_0c flex flex-col items-center justify-center p-2.5 rounded-[50%] w-[120px]">
                  <Img
                    className="h-[100px] w-[100px]"
                    src="images/img_search_green_600.svg"
                    alt="search"
                  />
                </div>
                <Text
                  className="text-black-900_01 text-center text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Password reset successfully
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] rounded-[5px] text-base text-center w-[554px]"
                color="indigo_600"
                size="xl"
                variant="fill"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordStepTwoPage;
