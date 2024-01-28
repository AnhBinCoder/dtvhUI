import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Datepicker, Img, Input, SelectBox, Text } from "components";
import Header1 from "components/Header1";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ExchangeOnePage = () => {
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
          <Header1 className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="flex flex-col font-volkhov gap-[15px] h-[101px] md:h-auto items-center justify-start max-w-[1134px] mt-[29px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-auto"
            size="txtVolkhovBold36"
          >
            NEW LOOK. NEW DESTINATIONS. SAME GREAT BENEFITS.
          </Text>
          <Img
            className="h-10 w-[283px]"
            src="images/img_frame.svg"
            alt="frame"
          />
        </div>
        <div className="flex flex-col font-mulish items-start justify-start max-w-[1075px] mt-[35px] mx-auto p-[21px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-5 mt-[34px] w-[79%] md:w-full">
            <div className="flex flex-col h-[142px] md:h-auto items-start justify-start max-w-[808px] w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full">
                <div className="flex flex-col font-sourceserifpro items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                    size="txtSourceSerifProSemiBold36"
                  >
                    Search Exchange Timeshare Availability
                  </Text>
                </div>
                <Text
                  className="max-w-[750px] md:max-w-full text-gray-600_02 text-xl"
                  size="txtLatoRegular20"
                >
                  Use the filters below to search our exchange availability and
                  find your desired destination. Prime members save on Exchange
                  Fees and Upgrades, so be sure to add the Prime membership to
                  your purchase when checking out.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-11 items-center justify-start mt-[41px] w-[90%] md:w-full">
              <div className="flex flex-col gap-[5px] items-start justify-start w-[47%] md:w-full">
                <Text
                  className="capitalize text-blue_gray-900 text-xl"
                  size="txtMulishBold20"
                >
                  Search From
                </Text>
                <Datepicker
                  className="frame462"
                  placeholder="20/01/2024"
                ></Datepicker>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-[47%] md:w-full">
                <Text
                  className="capitalize text-blue_gray-900 text-xl"
                  size="txtMulishBold20"
                >
                  Search To
                </Text>
                <Datepicker
                  className="frame462_One"
                  placeholder="20/10/2024"
                ></Datepicker>
              </div>
            </div>
            <div className="flex flex-col justify-start mt-9 w-[90%] md:w-full">
              <Text
                className="capitalize text-blue_gray-900 text-xl"
                size="txtMulishBold20"
              >
                Region/State
              </Text>
              <div className="bg-gray-100 flex flex-row h-[52px] md:h-auto items-center justify-start max-w-[720px] md:ml-[0] ml-[5px] mt-0.5 p-5 rounded-[3px] w-full">
                <Text
                  className="text-blue_gray-700 text-sm w-auto"
                  size="txtMulishSemiBold14"
                >
                  Da Lat, VietNam
                </Text>
                <Img
                  className="h-3 w-2.5"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-[39px] w-[90%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[7%] md:w-full">
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtMulishBold15Bluegray900"
                >
                  Adults
                </Text>
                <Button
                  className="cursor-pointer font-semibold h-[54px] rounded-[3px] text-center text-sm w-[50px]"
                  color="gray_100"
                  size="xl"
                  variant="fill"
                >
                  4
                </Button>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[41px] w-[9%] md:w-full">
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtMulishBold15Bluegray900"
                >
                  Children
                </Text>
                <Button
                  className="cursor-pointer font-semibold h-[54px] rounded-[3px] text-center text-sm w-[50px]"
                  color="gray_100"
                  size="xl"
                  variant="fill"
                >
                  6
                </Button>
              </div>
              <div
                className="common-pointer bg-yellow-600_01 font-lato md:h-[34px] h-[53px] md:ml-[0] ml-[328px] md:mt-0 mt-7 pl-[18px] pt-[18px] relative rounded-[12px] shadow-bs9 w-[34%] md:w-full"
                onClick={() => navigate("/exchange2exchangelist")}
              >
                <Img
                  className="absolute bottom-[0] h-[34px] right-[0]"
                  src="images/img_group15091.svg"
                  alt="group15091"
                />
                <Text
                  className="absolute bottom-[26%] inset-x-[0] mx-auto text-base text-black-900 text-center w-max"
                  size="txtLatoSemiBold16"
                >
                  Search Availability
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[76px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mt-[81px] w-full">
            <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[81%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[68%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[86%] md:w-full">
                    <Text
                      className="text-[15px] text-white-A700_cc"
                      size="txtMulishBold15"
                    >
                      Language
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[289px] text-[15px] text-white-A700_cc"
                      size="txtMulishBold15"
                    >
                      Company
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[201px] text-[15px] text-white-A700_cc"
                      size="txtMulishBold15"
                    >
                      Help
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[27%] md:w-full">
                      <div className="bg-blue_gray-900_02 border border-solid border-white-A700_33 flex flex-row items-center justify-start p-3 rounded-[3px] w-full">
                        <Img
                          className="h-[13px] md:h-auto ml-[7px] object-cover w-[11%]"
                          src="images/img_image26.png"
                          alt="imageTwentySix"
                        />
                        <SelectBox
                          className="sm:flex-1 font-semibold leading-[normal] ml-[3px] mt-0.5 text-left text-sm text-white-A700_99 w-[82%] sm:w-full"
                          placeholderClassName="text-white-A700_99"
                          indicator={
                            <Img
                              className="h-3.5 mr-[0] w-3.5"
                              src="images/img_antdesigncaretdownoutlined.svg"
                              alt="ant-design:caret-down-outlined"
                            />
                          }
                          isMulti={false}
                          name="language_One"
                          options={languageOneOptionsList}
                          isSearchable={false}
                          placeholder="English (UK)"
                        />
                      </div>
                      <Text
                        className="mt-[13px] text-[15px] text-white-A700_cc"
                        size="txtMulishBold15"
                      >
                        Currency
                      </Text>
                      <Input
                        name="price"
                        placeholder="U.S. Dollar ($)"
                        className="font-semibold leading-[normal] p-0 placeholder:text-white-A700_99 text-left text-sm w-full"
                        wrapClassName="border border-solid border-white-A700_33 flex mt-2 rounded-[3px] w-full"
                        suffix={
                          <Img
                            className="mt-px mb-0.5 h-3.5 ml-[35px]"
                            src="images/img_antdesigncaretdownoutlined.svg"
                            alt="ant-design:caret-down-outlined"
                          />
                        }
                        color="blue_gray_900_02"
                        size="2xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[151px] text-[15px] text-white-A700_99"
                      size="txtMulishRegular15"
                    >
                      <>
                        About Us
                        <br />
                        Blog
                        <br />
                        Press Room
                        <br />
                        Careers
                      </>
                    </Text>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[186px] text-[15px] text-white-A700_99"
                      size="txtMulishRegular15"
                    >
                      <>
                        Contact us
                        <br />
                        FAQs
                        <br />
                        Terms and conditions
                        <br />
                        Privacy policy
                        <br />
                        Sitemap
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start">
                  <Text
                    className="text-[15px] text-white-A700_cc"
                    size="txtMulishBold15"
                  >
                    Company
                  </Text>
                  <Text
                    className="text-[15px] text-white-A700_99"
                    size="txtMulishRegular15"
                  >
                    Become a Tour guide for Us
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_33 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-2.5 w-full">
                <Text
                  className="sm:ml-[0] ml-[125px] text-[15px] text-white-A700_99"
                  size="txtMulishRegular15"
                >
                  Copyright 2021 Tour Guide. All Rights Reserved
                </Text>
                <Img
                  className="h-10 mr-[125px]"
                  src="images/img_group91.svg"
                  alt="groupNinetyOne"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ExchangeOnePage;
