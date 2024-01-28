import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const SignUpOnePage = () => {
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
        <div className="flex flex-col h-[1024px] md:h-auto items-start justify-between max-w-[754px] p-[100px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 w-auto"
                size="txtInterBold32"
              >
                Create account
              </Text>
              <Text
                className="common-pointer text-base text-black-900_01 w-auto"
                size="txtInterRegular16"
                onClick={() => navigate("/login")}
              >
                <span className="text-black-900_01 font-inter text-left font-normal">
                  Already have an account?{" "}
                </span>
                <span className="text-indigo-600 font-inter text-left font-normal">
                  Login
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[554px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-full">
                  <Text
                    className="flex-1 outline outline-[0.5px] outline-black-900_99 pl-5 sm:pr-5 pr-[35px] py-3.5 rounded-[5px] text-base text-black-900_66 w-full"
                    size="txtInterRegular16Black90066"
                  >
                    First Name
                  </Text>
                  <Text
                    className="flex-1 outline outline-[0.5px] outline-black-900_99 pl-5 sm:pr-5 pr-[35px] py-3.5 rounded-[5px] text-base text-black-900_66 w-full"
                    size="txtInterRegular16Black90066"
                  >
                    Last Name
                  </Text>
                </div>
                <Input
                  name="frameEight"
                  placeholder="Email"
                  className="leading-[normal] p-0 placeholder:text-black-900_66 text-base text-left w-full"
                  wrapClassName="rounded-[5px] w-full"
                  type="email"
                  color="black_900_99"
                  size="2xl"
                  variant="outline"
                ></Input>
                <Input
                  name="frameEleven"
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-black-900_66 text-base text-left w-full"
                  wrapClassName="flex rounded-[5px] w-full"
                  type="password"
                  suffix={
                    <Img
                      className="h-[19px] ml-[35px] my-px"
                      src="images/img_thumbsup_black_900_01.svg"
                      alt="thumbs_up"
                    />
                  }
                  color="black_900_99"
                  size="2xl"
                  variant="outline"
                ></Input>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-auto sm:w-full">
                  <div className="border border-black-900 border-solid h-[18px] rounded-[3px] w-[18px]"></div>
                  <Text
                    className="text-black-900_01 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    <span className="text-black-900_01 font-inter text-left font-normal">
                      I agree to DopeSass{" "}
                    </span>
                    <span className="text-indigo-600 font-inter text-left font-normal">
                      Terms of service
                    </span>
                    <span className="text-black-900_01 font-inter text-left font-normal">
                      {" "}
                      and{" "}
                    </span>
                    <span className="text-indigo-600 font-inter text-left font-normal">
                      Privacy policy
                    </span>
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer font-semibold leading-[normal] rounded-[5px] text-base text-center w-full"
                onClick={() => navigate("/signuptwo")}
                color="indigo_600"
                size="xl"
                variant="fill"
              >
                Create Account
              </Button>
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-[554px] sm:w-full">
                  <Line className="bg-black-900_66 h-px w-[47%]" />
                  <Text
                    className="text-base text-black-900_01 w-auto"
                    size="txtInterRegular16"
                  >
                    or
                  </Text>
                  <Line className="bg-black-900_66 h-px w-[47%]" />
                </div>
                <div className="flex flex-col items-start justify-start w-[554px] sm:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[554px] sm:min-w-full rounded-[5px]"
                    leftIcon={
                      <Img
                        className="h-[19px] mb-px mr-2.5"
                        src="images/img_google_original.svg"
                        alt="Google - Original"
                      />
                    }
                    color="black_900_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="font-semibold leading-[normal] text-base text-left">
                      Continue with Google
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpOnePage;
