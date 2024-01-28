import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bankCardOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const caOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WalletPage = () => {
  const navigate = useNavigate();

  const [frametwovalue, setFrametwovalue] = React.useState("");

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
        <div className="font-sfprodisplay md:h-[1222px] sm:h-[1302px] h-[1718px] md:px-5 relative w-full">
          <div className="md:h-[1222px] sm:h-[1302px] h-[1718px] m-auto w-full">
            <div className="absolute bg-blue_gray-100_cc flex flex-col md:gap-10 gap-[119px] items-center justify-start left-[0] p-[30px] sm:px-5 top-[0] w-[23%]">
              <Img
                className="h-[158px] md:h-auto mt-[72px] rounded-[50%] w-[62%]"
                src="images/img_unsplashc8ta0gwpbqg_158x164.png"
                alt="unsplashc8ta0gw_One"
              />
              <div className="flex flex-col gap-6 h-[492px] md:h-auto items-start justify-start mb-[399px] w-[248px]">
                <div className="flex flex-col gap-1 items-start justify-start w-[248px]">
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                    onClick={() => navigate("/dashboard")}
                    leftIcon={
                      <Img
                        className="h-5 mr-3 my-px"
                        src="images/img_grid_blue_gray_900_03.svg"
                        alt="grid"
                      />
                    }
                    shape="round"
                    color="white_A700_a8"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-blue_gray-900_03 font-inter font-medium leading-[normal] text-[17px] text-left">
                      Dashboard
                    </div>
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px] rounded-md"
                    onClick={() => navigate("/mytimeshare")}
                    leftIcon={
                      <Img
                        className="h-5 mb-0.5 mr-3"
                        src="images/img_thumbsup.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="white_A700_90"
                    size="xl"
                    variant="fill"
                  >
                    <div className="font-inter font-medium leading-[normal] text-[17px] text-left">
                      My timeshare
                    </div>
                  </Button>
                  <div className="bg-gray-100_90 flex flex-row font-sfprodisplay gap-3 items-center justify-start px-3 py-4 rounded-md w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_thumbsup_purple_300_20x20.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="flex-1 text-[17px] text-purple-300 w-auto"
                      size="txtSFProDisplayMedium17Purple300"
                    >
                      My Wallet
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                    onClick={() => navigate("/memberprofile")}
                    leftIcon={
                      <Img
                        className="h-5 mr-3 my-px"
                        src="images/img_lock_gray_900_01.svg"
                        alt="lock"
                      />
                    }
                    shape="round"
                    color="white_A700_90"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-blue_gray-900_03 font-medium font-sfprodisplay leading-[normal] text-[17px] text-left">
                      Account
                    </div>
                  </Button>
                  <Input
                    name="frameTwo"
                    placeholder="Rent/Exchange"
                    value={frametwovalue}
                    onChange={(e) => setFrametwovalue(e)}
                    className="!placeholder:text-blue_gray-900_03 !text-blue_gray-900_03 font-inter font-medium leading-[normal] p-0 text-[17px] text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-0.5 cursor-pointer h-5 mr-3"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#292d32"
                        className="cursor-pointer h-5 my-auto"
                        onClick={() => setFrametwovalue("")}
                        style={{
                          visibility:
                            frametwovalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    }
                    shape="round"
                    color="white_A700_7e"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[248px]"
                    onClick={() => navigate("/waitlistexchangerequestsone")}
                    leftIcon={
                      <Img
                        className="h-5 mb-0.5 mr-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                    shape="round"
                    color="gray_100_90"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-inter font-medium leading-[normal] text-[17px] text-left">
                      Waitlist Requests
                    </div>
                  </Button>
                </div>
                <Line className="bg-gray-900_4c h-px w-full" />
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Input
                    name="frameTwo_One"
                    placeholder="Help Center"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-900_01 text-[17px] text-left w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-5 mr-3"
                        src="images/img_videocamera.svg"
                        alt="video_camera"
                      />
                    }
                    shape="round"
                    color="gray_100_90"
                    size="2xl"
                    variant="fill"
                  ></Input>
                  <div className="bg-gray-100_90 flex flex-row gap-3 items-center justify-start px-3 py-4 rounded-md w-[248px]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_mobile.svg"
                      alt="mobile"
                    />
                    <Text
                      className="flex-1 text-[17px] text-gray-900_01 w-auto"
                      size="txtSFProDisplayMedium17"
                    >
                      Dark Mode
                    </Text>
                    <Switch
                      onColor="#d9d9d9"
                      offColor="#d9d9d9"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={false}
                      className="w-[17%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Footer className="absolute bg-blue_gray-900_01 bottom-[0] flex font-mulish inset-x-[0] items-center justify-center mx-auto w-full" />
            <div className="absolute flex flex-col font-roboto gap-[9px] items-center justify-start right-[23%] top-[3%] w-[36%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-[57%] md:w-full">
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                    size="txtRobotoRomanSemiBold45"
                  >
                    Add New Card
                  </Text>
                  <Img
                    className="h-[62px]"
                    src="images/img_group.svg"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-col font-nunito gap-3 items-center justify-start mt-10 w-[91%] md:w-full">
                  <div className="flex flex-col items-start justify-start pb-[15px] w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Wallet name
                    </Text>
                    <Input
                      name="groupTwentySeven"
                      placeholder="Visa"
                      className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-300 border-solid mt-[3px] rounded w-full"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-4 w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Wallet type
                    </Text>
                    <SelectBox
                      className="!text-blue_gray-700_03 border border-blue_gray-300 border-solid mt-0.5 rounded text-left text-sm w-full"
                      placeholderClassName="!text-blue_gray-700_03"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown_blue_gray_700_03.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupThirtySeven"
                      options={bankCardOptionsList}
                      isSearchable={false}
                      placeholder="Bank card"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-nunito items-center justify-start mt-[27px] py-[5px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end mb-1 sm:px-5 px-[23px] w-full">
                    <div className="h-[34px] relative w-1/2 sm:w-full">
                      <div className="bg-indigo-500 h-[34px] m-auto rotate-[180deg] rounded-br rounded-tr w-full"></div>
                      <Text
                        className="absolute bottom-[15%] inset-x-[0] mx-auto text-[15px] text-center text-white-A700 tracking-[-0.24px] w-max"
                        size="txtNunitoRegular15"
                      >
                        Visa
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer min-w-[229px] rounded-br rounded-tr text-[15px] text-center tracking-[-0.24px]"
                      color="indigo_500"
                      size="sm"
                      variant="outline"
                    >
                      Mastercard
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col font-nunito items-center justify-start mt-5 w-[91%] md:w-full">
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="flex flex-col items-start justify-start mt-[18px] w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Card number
                    </Text>
                    <div className="bg-white-A700 border border-red-A400 border-solid flex flex-row items-center justify-between mt-[3px] p-1.5 rounded w-full">
                      <Text
                        className="ml-1 text-blue_gray-700_03 text-sm"
                        size="txtNunitoRegular14"
                      >
                        4287 8874 9511 3263
                      </Text>
                      <div className="bg-gray-100_04 border border-gray-300_01 border-solid h-7 mb-1.5 rounded-[5px] w-[11%]"></div>
                      <Img
                        className="h-[11px] mr-4"
                        src="images/img_settings_indigo_500_01.svg"
                        alt="settings"
                      />
                    </div>
                    <Text
                      className="text-red-A400 text-xs"
                      size="txtNunitoRegular12RedA400"
                    >
                      Incorrect card number
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[7px] w-full">
                    <div className="flex sm:flex-1 flex-col items-start justify-start pb-4 w-[49%] sm:w-full">
                      <Text
                        className="text-blue_gray-300 text-xs"
                        size="txtNunitoRegular12"
                      >
                        Expiry date
                      </Text>
                      <Input
                        name="language_Three"
                        placeholder="MM  /  YY"
                        className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-300 border-solid mt-0.5 rounded w-full"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start pb-[15px] w-[49%] sm:w-full">
                      <Text
                        className="text-blue_gray-300 text-xs"
                        size="txtNunitoRegular12"
                      >
                        Secure code
                      </Text>
                      <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-row items-start justify-between mt-[3px] p-1.5 rounded w-full">
                        <Text
                          className="ml-1 mt-1 text-blue_gray-300 text-sm"
                          size="txtNunitoRegular14Bluegray300"
                        >
                          ***
                        </Text>
                        <div className="bg-gray-100_04 border border-gray-300_01 border-solid flex flex-col h-7 items-center justify-start mb-1.5 mr-[73px] p-1.5 rounded-[5px] w-7">
                          <Img
                            className="h-4 w-4"
                            src="images/img_inbox.svg"
                            alt="inbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[9px] pb-[15px] w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Name on card
                    </Text>
                    <Input
                      name="groupTwentyNine"
                      placeholder="Irene Ramos"
                      className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-300 border-solid mt-[3px] rounded w-full"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-3 pb-4 w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Country registration
                    </Text>
                    <Input
                      name="groupTwentyEight"
                      placeholder="United State"
                      className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-300 border-solid mt-0.5 rounded w-full"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-2.5 pb-4 w-full">
                    <Text
                      className="text-blue_gray-300 text-xs"
                      size="txtNunitoRegular12"
                    >
                      Zip code
                    </Text>
                    <Input
                      name="groupThirtyOne"
                      placeholder="17121-1300"
                      className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                      wrapClassName="border border-blue_gray-300 border-solid mt-0.5 rounded w-full"
                      color="white_A700"
                      size="3xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[9px] w-full">
                    <div className="flex flex-col items-start justify-start pb-4">
                      <Text
                        className="text-blue_gray-300 text-xs"
                        size="txtNunitoRegular12"
                      >
                        City, state
                      </Text>
                      <Input
                        name="groupThirtyTwo"
                        placeholder="San-Francisco"
                        className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                        wrapClassName="border border-blue_gray-300 border-solid mt-0.5 rounded w-full"
                        color="white_A700"
                        size="3xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <SelectBox
                      className="!text-blue_gray-700_03 border border-blue_gray-300 border-solid sm:flex-1 mb-[18px] sm:mt-0 mt-[21px] rounded text-left text-sm w-[30%] sm:w-full"
                      placeholderClassName="!text-blue_gray-700_03"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown_blue_gray_700_03.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame279"
                      options={caOptionsList}
                      isSearchable={false}
                      placeholder="CA"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-nunito items-start justify-start pb-[15px] w-[91%] md:w-full">
                <Text
                  className="text-blue_gray-300 text-xs"
                  size="txtNunitoRegular12"
                >
                  Address
                </Text>
                <Input
                  name="groupThirtySix"
                  placeholder="509 Adele Mills Suite 833"
                  className="!placeholder:text-blue_gray-700_03 !text-blue_gray-700_03 p-0 text-left text-sm w-full"
                  wrapClassName="border border-blue_gray-300 border-solid mt-[3px] rounded w-full"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Img
              className="absolute bottom-[28%] h-[26px] left-1/4 w-[25px]"
              src="images/img_favorite_blue_gray_900_03.svg"
              alt="favorite"
            />
          </div>
          <div className="absolute flex flex-col font-nunito md:gap-10 gap-[746px] justify-start right-[24%] top-[23%] w-[34%]">
            <Text
              className="ml-3 md:ml-[0] text-blue_gray-300 text-xs"
              size="txtNunitoRegular12"
            >
              Card type
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[481px] sm:min-w-full rounded text-base text-center tracking-[1.00px] uppercase"
              onClick={() => navigate("/walletone")}
              color="indigo_500"
              size="xl"
              variant="fill"
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
