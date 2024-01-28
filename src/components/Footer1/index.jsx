import React from "react";

import { Img, SelectBox, Text } from "components";

const languageThreeOptionsList = [
  { label: "Vietnamese", value: "option1" },
  { label: "Chinese", value: "option2" },
  { label: "Japanese", value: "option3" },
  { label: "English", value: "option4" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-2.5 mt-[87px] w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[81%] md:w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[19%] md:w-full">
                <div className="md:h-[46px] h-[57px] relative w-full">
                  <Text
                    className="absolute left-[0] text-[15px] text-white-A700_cc top-[0]"
                    size="txtMulishBold15"
                  >
                    Language
                  </Text>
                  <div className="absolute bg-blue_gray-900_02 border border-solid border-white-A700_33 bottom-[0] flex flex-row inset-x-[0] items-center justify-start mx-auto p-3 rounded-[3px] w-full">
                    <Img
                      className="h-[13px] md:h-auto ml-[7px] object-cover w-[11%]"
                      src="images/img_image26.png"
                      alt="imageTwentySix"
                    />
                    <SelectBox
                      className="sm:flex-1 font-mulish font-semibold leading-[normal] ml-[3px] mt-0.5 text-left text-sm text-white-A700_99 w-[82%] sm:w-full"
                      placeholderClassName="text-white-A700_99"
                      indicator={
                        <Img
                          className="h-3.5 mr-[0] w-3.5"
                          src="images/img_antdesigncaretdownoutlined.svg"
                          alt="ant-design:caret-down-outlined"
                        />
                      }
                      isMulti={false}
                      name="language_Three"
                      options={languageThreeOptionsList}
                      isSearchable={false}
                      placeholder="English (UK)"
                    />
                  </div>
                </div>
                <div className="h-14 md:h-[46px] relative w-full">
                  <Text
                    className="absolute left-[0] text-[15px] text-white-A700_cc top-[0]"
                    size="txtMulishBold15"
                  >
                    Currency
                  </Text>
                  <SelectBox
                    className="!text-white-A700_99 absolute border border-solid border-white-A700_33 bottom-[0] font-mulish font-semibold inset-x-[0] leading-[normal] mx-auto text-left text-sm w-full"
                    placeholderClassName="!text-white-A700_99"
                    indicator={
                      <Img
                        className="h-3.5 mr-[0] w-3.5 right-[0] absolute"
                        src="images/img_antdesigncaretdownoutlined.svg"
                        alt="ant-design:caret-down-outlined"
                      />
                    }
                    isMulti={false}
                    name="price"
                    options={priceOptionsList}
                    isSearchable={false}
                    placeholder="U.S. Dollar ($)"
                    shape="round"
                    color="blue_gray_900_02"
                    size="md"
                    variant="fill"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[151px] w-[37%] md:w-full">
                <div className="flex flex-row items-center justify-between w-[73%] md:w-full">
                  <Text
                    className="text-[15px] text-white-A700_cc"
                    size="txtMulishBold15"
                  >
                    Company
                  </Text>
                  <Text
                    className="text-[15px] text-white-A700_cc"
                    size="txtMulishBold15"
                  >
                    Help
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="leading-[30.00px] text-[15px] text-white-A700_99"
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
                    className="leading-[30.00px] text-[15px] text-white-A700_99"
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
              <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[186px]">
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
            <div className="bg-black-900_33 flex sm:flex-col flex-row md:gap-10 items-end justify-between p-0.5 w-full">
              <Text
                className="sm:ml-[0] ml-[132px] sm:mt-0 mt-9 text-[15px] text-white-A700_99"
                size="txtMulishRegular15"
              >
                Copyright 2021 Tour Guide. All Rights Reserved
              </Text>
              <Img
                className="h-[46px] mr-[132px] sm:mt-0 mt-[7px]"
                src="images/img_group91.svg"
                alt="groupNinetyOne"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
