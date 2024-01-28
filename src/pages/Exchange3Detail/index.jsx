import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header2 from "components/Header2";

const jan21Jan232024OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Exchange3DetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header2 className="border-b border-gray-300 border-solid flex md:flex-col font-nicomoji md:gap-10 h-[90px] md:h-auto items-center justify-between px-10 md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[135px] mt-[81px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
            size="txtVolkhovBold36"
          >
            Hoi An Central Boutique
          </Text>
          <div className="flex flex-row font-mulish gap-2.5 items-center justify-start md:ml-[0] ml-[135px] mt-9 md:px-5 w-[341px]">
            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
              <Img
                className="h-3.5 w-[11px]"
                src="images/img_linkedin_gray_600.svg"
                alt="linkedin"
              />
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtMulishSemiBold14Gray600"
              >
                Quang Nam
              </Text>
            </div>
            <div className="bg-black-900_7f h-3 w-[1%]"></div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtMulishSemiBold14Gray600"
              >
                VietNam
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish gap-[30px] items-start justify-start max-w-[1170px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
              <Img
                className="h-[365px] md:h-auto object-cover w-full"
                src="images/img_image39.png"
                alt="imageForty"
              />
              <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between mt-[7px] w-full">
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle158_100x120.png"
                  alt="rectangle158"
                />
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle159.png"
                  alt="rectangle159"
                />
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle160.png"
                  alt="rectangle160"
                />
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle161.png"
                  alt="rectangle161"
                />
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle162.png"
                  alt="rectangle162"
                />
                <Img
                  className="flex-1 h-[79px] md:h-auto object-cover w-full"
                  src="images/img_rectangle163.png"
                  alt="rectangle163"
                />
              </div>
              <List
                className="bg-gray-50_02 border border-cyan-900_14 border-solid flex flex-col gap-[41px] items-center mt-[25px] p-[26px] sm:px-5 rounded-[3px] w-full"
                orientation="vertical"
              >
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[94%] md:w-full">
                  <div className="flex flex-col justify-start w-[11%] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start mr-2 w-auto">
                      <Img
                        className="h-4 w-4"
                        src="images/img_contrast_teal_200.svg"
                        alt="contrast"
                      />
                      <Text
                        className="capitalize text-[15px] text-blue_gray-900 w-auto"
                        size="txtMulishBold15Bluegray900"
                      >
                        Area
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[26px] mt-0.5 text-blue_gray-700 text-sm"
                      size="txtMulishRomanBold14"
                    >
                      400m²{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start w-[43%] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_bxbxspraycan.svg"
                        alt="bxbxspraycan"
                      />
                      <Text
                        className="capitalize text-[15px] text-blue_gray-900 w-auto"
                        size="txtMulishBold15Bluegray900"
                      >
                        Direction
                      </Text>
                    </div>
                    <Text
                      className="leading-[22.00px] ml-7 md:ml-[0] text-blue_gray-700 text-sm w-[91%] sm:w-full"
                      size="txtMulishRegular14"
                    >
                      The resort faces south, is airy, cool in summer and warm
                      in winter.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
                  <div className="flex flex-col justify-start w-[19%] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start mr-[17px] w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_carbonapplicationmobile.svg"
                        alt="carbonapplicati"
                      />
                      <Text
                        className="capitalize text-[15px] text-blue_gray-900 w-auto"
                        size="txtMulishBold15Bluegray900"
                      >
                        Apartment
                      </Text>
                    </div>
                    <Text
                      className="ml-7 md:ml-[0] text-blue_gray-700 text-sm"
                      size="txtMulishRegular14"
                    >
                      40 Billions Vnđ
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start w-[44%] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_antdesignfiel.svg"
                        alt="antdesignfiel"
                      />
                      <Text
                        className="capitalize text-[15px] text-blue_gray-900 w-auto"
                        size="txtMulishBold15Bluegray900"
                      >
                        Rooms
                      </Text>
                    </div>
                    <Text
                      className="leading-[22.00px] ml-7 md:ml-[0] text-blue_gray-700 text-sm w-[91%] sm:w-full"
                      size="txtMulishRegular14"
                    >
                      5 bedrooms, 5 bathrooms, private toilet and 2 kitchens
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[13px] justify-start mb-[260px] py-[13px] rounded shadow-bs8 w-[32%] md:w-full">
              <Text
                className="capitalize md:ml-[0] ml-[30px] text-blue_gray-900_04 text-lg"
                size="txtMulishBold18"
              >
                Exchange Booking
              </Text>
              <div className="flex flex-col items-center justify-start mb-[22px] w-full">
                <Line className="bg-gray-100 h-px w-full" />
                <div className="flex flex-col gap-[9px] justify-start mt-[11px] w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[29px] text-[15px] text-blue_gray-900"
                    size="txtMulishBold15Bluegray900"
                  >
                    From
                  </Text>
                  <SelectBox
                    className="capitalize font-semibold h-11 text-left text-sm w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                        alt="ant-design:caret-down-outlined"
                      />
                    }
                    isMulti={false}
                    name="frameTwenty"
                    options={jan21Jan232024OptionsList}
                    isSearchable={false}
                    placeholder="Jan 21 - Jan 23 2024"
                    shape="round"
                    color="gray_100"
                    size="md"
                    variant="fill"
                  />
                </div>
                <Button
                  className="common-pointer capitalize cursor-pointer font-bold h-[50px] leading-[normal] mt-[78px] rounded-[3px] text-[15px] text-center w-[310px]"
                  onClick={() => navigate("/exchange4myunit")}
                  color="teal_200"
                  size="xl"
                  variant="fill"
                >
                  Choose your timeshare
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[310px] mt-[18px] rounded-[3px]"
                  leftIcon={
                    <div className="mt-px mb-0.5 mr-2.5 w-4 border-gray-600 border-2 border-solid">
                      <Img src="images/img_favorite.svg" alt="favorite" />
                    </div>
                  }
                  color="gray_600"
                  size="xl"
                  variant="outline"
                >
                  <div className="capitalize font-bold text-[15px] text-center">
                    Save to wishlist
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[310px] mt-[18px] rounded-[3px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5"
                      src="images/img_question.svg"
                      alt="question"
                    />
                  }
                  color="gray_600"
                  size="lg"
                  variant="outline"
                >
                  <div className="capitalize font-bold text-[15px] text-center">
                    Share the activity
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[135px] mt-[51px] md:px-5 w-[54%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Description
              </Text>
              <Text
                className="leading-[24.00px] text-[15px] text-blue_gray-700"
                size="txtMulishRegular15Bluegray700"
              >
                <span className="text-blue_gray-700 font-mulish text-left font-normal">
                  <>
                    Hoi An Center Bontique is an art tea house located in the
                    heart of the Hoi An Ancient Town in Vietnam. Thebsite offers
                    an immersive experience of traditional art, tea culture, and
                    local cuisine. The center features a range of artwork from
                    different artists, tea ceremonies, cooking classes, and
                    guided walking tours. Visitors can also enjoy a cup of rare
                    Vietnamese teas while taking in the beautiful surroundings.
                    <br />
                    <br />
                    You&#39;re eligible for a Genius discount at Hoian Central
                    Hotel! To save at this property, all you have to do is{" "}
                  </>
                </span>
                <a
                  href="javascript:"
                  className="text-blue_gray-700 font-mulish text-left font-normal underline"
                >
                  sign in
                </a>
                <span className="text-blue_gray-700 font-mulish text-left font-normal">
                  <>
                    .<br />
                    Situated in Hoi An, 200 metres from Assembly Hall of
                    Chaozhou Chinese Congregation, Hoian Central Hotel features
                    accommodation with free bikes, free private parking, an
                    outdoor swimming pool and a garden. This 3-star hotel offers
                    an ATM and a concierge service. The accommodation provides a
                    24-hour front desk, airport transfers, a shared lounge and
                    free WiFi. The hotel will provide guests with
                    air-conditioned rooms offering a desk, a kettle, a minibar,
                    a safety deposit box, a flat-screen TV and a private
                    bathroom with a bidet. All rooms have a wardrobe. Hoian
                    Central Hotel offers a terrace. Hoi An Historic Museum is
                    less than 1 km from the accommodation, while Japanese
                    Covered Bridge is a 11-minute walk from the property. The
                    nearest airport is Da Nang International Airport, 30 km from
                    Hoian Central Hotel.
                    <br />
                    <br />
                    Couples particularly like the location — they rated it 9.8
                    for a two-person trip.
                  </>
                </span>
              </Text>
            </div>
            <Line className="bg-blue_gray-100_03 h-px w-full" />
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[135px] mt-[51px] md:px-5 w-[54%] md:w-full">
            <Text
              className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
              size="txtVolkhovBold22"
            >
              Map location
            </Text>
            <div className="h-[333px] md:h-[361px] mt-7 relative w-full">
              <Line className="bg-blue_gray-100_03 h-px mt-[47px] mx-auto w-full" />
              <Img
                className="absolute h-[333px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle208.png"
                alt="rectangle208"
              />
            </div>
            <Text
              className="capitalize mt-[65px] text-sm text-teal-200 underline"
              size="txtMulishExtraBold14"
            >
              Open in Google Maps{" "}
            </Text>
          </div>
          <Footer1 className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[193px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Exchange3DetailPage;
