import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordStepOnePage = () => {
  const navigate = useNavigate();

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
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-center w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 w-auto"
                size="txtInterBold32"
              >
                Forgot Password
              </Text>
              <Text
                className="max-w-[554px] md:max-w-full text-base text-black-900_01"
                size="txtInterRegular16"
              >
                Enter the email you used to create your account so we can send
                you instructions on how to reset your password.
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[554px] sm:w-full">
              <Input
                name="frameTwentyTwo"
                placeholder="Email"
                className="leading-[normal] p-0 placeholder:text-black-900_66 text-base text-left w-full"
                wrapClassName="rounded-[5px] w-full"
                type="email"
                color="black_900_99"
                size="2xl"
                variant="outline"
              ></Input>
              <Button
                className="common-pointer cursor-pointer font-semibold leading-[normal] rounded-[5px] text-base text-center w-[554px]"
                onClick={() => navigate("/forgotpasswordsteptwo")}
                color="indigo_600"
                size="xl"
                variant="fill"
              >
                Send
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold leading-[normal] rounded-[5px] text-base text-center w-[554px]"
                onClick={() => navigate("/login")}
                color="black_900_01"
                size="xl"
                variant="outline"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordStepOnePage;
