import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

const languageThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RequestListDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header3 className="border-b border-gray-300 border-solid flex md:flex-col font-nicomoji md:gap-10 h-[90px] md:h-auto items-center justify-between px-10 md:px-5 w-full" />
          <Text
            className="md:ml-[0] ml-[134px] mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
            size="txtVolkhovBold36"
          >
            Westminster to Greenwich River Thames
          </Text>
          <div className="flex flex-row font-mulish gap-2.5 items-center justify-start md:ml-[0] ml-[135px] mt-[65px] md:px-5 w-[341px]">
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
                className="h-[364px] md:h-auto object-cover w-full"
                src="images/img_image39_364x770.png"
                alt="imageThirtyNine"
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
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[303px] py-[11px] rounded shadow-bs8 w-[32%] md:w-full">
              <Text
                className="capitalize md:ml-[0] ml-[30px] text-blue_gray-900_04 text-lg"
                size="txtMulishBold18"
              >
                Timeshare Owner
              </Text>
              <Line className="bg-gray-100 h-px mt-[15px] w-full" />
              <div className="flex flex-col items-start justify-start mb-[23px] md:ml-[0] ml-[30px] mt-[27px] w-[84%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="capitalize text-[15px] text-blue_gray-900"
                    size="txtMulishBold15Bluegray900"
                  >
                    Owner: Lê Dương Bảo Lâm
                  </Text>
                </div>
                <Text
                  className="capitalize mt-[15px] text-[15px] text-blue_gray-900"
                  size="txtMulishBold15Bluegray900"
                >
                  User id: 123456789{" "}
                </Text>
                <Text
                  className="capitalize mt-[17px] text-[15px] text-blue_gray-900"
                  size="txtMulishBold15Bluegray900"
                >
                  Timeshare Id: Abc123123
                </Text>
                <Text
                  className="capitalize mt-[18px] text-[15px] text-blue_gray-900"
                  size="txtMulishBold15Bluegray900"
                >
                  Location: Quảng Nam, Việt Nam
                </Text>
                <Button
                  className="common-pointer capitalize cursor-pointer font-bold h-[50px] leading-[normal] mt-6 rounded-[3px] text-[15px] text-center w-[310px]"
                  onClick={() => navigate("/acceptrequest")}
                  color="teal_200"
                  size="xl"
                  variant="fill"
                >
                  Accept request
                </Button>
                <Button
                  className="common-pointer capitalize cursor-pointer font-bold h-[50px] mt-[27px] rounded-[3px] text-[15px] text-center w-[310px]"
                  onClick={() => navigate("/requestlist")}
                  color="gray_600"
                  size="xl"
                  variant="outline"
                >
                  Cancel request
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
          <div className="h-[474px] md:h-[525px] md:ml-[0] ml-[132px] mt-[51px] md:px-5 relative w-[54%] md:w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Map location
              </Text>
              <Line className="bg-blue_gray-100_03 h-px mt-[76px] w-full" />
              <Text
                className="capitalize mt-[350px] text-sm text-teal-200 underline"
                size="txtMulishExtraBold14"
              >
                Open in Google Maps{" "}
              </Text>
            </div>
            <Img
              className="absolute h-[397px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
          </div>
          <Footer1 className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[193px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RequestListDetailPage;
