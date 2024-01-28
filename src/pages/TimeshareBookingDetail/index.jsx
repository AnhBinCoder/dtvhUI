import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Header2 from "components/Header2";

const jan21Jan232024OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const recommendedOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const travelerTypeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ratingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TimeshareBookingDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header2 className="border-b border-gray-300 border-solid flex md:flex-col font-nicomoji md:gap-10 h-[90px] md:h-auto items-center justify-between px-10 md:px-5 w-full" />
          <Text
            className="mt-[57px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
            size="txtVolkhovBold36"
          >
            Hoi An Central Boutique
          </Text>
          <div className="flex flex-row font-mulish gap-2.5 items-center justify-start mt-[60px] md:px-5 w-[341px]">
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
            <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
              <RatingBar
                className="flex justify-between w-20"
                value={5}
                starCount={5}
                color="#cfd9de"
                activeColor="#ffa331"
                size={16}
              ></RatingBar>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtMulishSemiBold14Gray600"
              >
                (348 reviews)
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish gap-[30px] items-start justify-start max-w-[1178px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-3 w-[66%] md:w-full">
              <Img
                className="h-[460px] md:h-auto object-cover w-full"
                src="images/img_image39.png"
                alt="imageThirtyNine"
              />
              <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between mt-2.5 w-full">
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle158_100x120.png"
                  alt="rectangle158"
                />
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle159.png"
                  alt="rectangle159"
                />
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle160.png"
                  alt="rectangle160"
                />
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle161.png"
                  alt="rectangle161"
                />
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle162.png"
                  alt="rectangle162"
                />
                <Img
                  className="flex-1 h-[100px] md:h-auto object-cover w-full"
                  src="images/img_rectangle163.png"
                  alt="rectangle163"
                />
              </div>
              <div className="bg-gray-50_02 border border-cyan-900_14 border-solid flex flex-col items-center justify-start mt-[30px] p-[38px] sm:px-5 rounded-[3px] w-full">
                <List
                  className="flex flex-col gap-[30px] items-center mb-0.5 w-[98%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-[9px] justify-start w-[43%] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_contrast_teal_200.svg"
                          alt="contrast"
                        />
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Free cancellation
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] md:ml-[0] ml-[26px] text-blue_gray-700 text-sm w-[91%] sm:w-full"
                        size="txtMulishRegular14"
                      >
                        Cancel up to 24 hours in advance to receive a full
                        refund
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[9px] justify-start w-[43%] sm:w-full">
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
                          Health precautions
                        </Text>
                      </div>
                      <Text
                        className="leading-[22.00px] ml-7 md:ml-[0] text-blue_gray-700 text-sm w-[91%] sm:w-full"
                        size="txtMulishRegular14"
                      >
                        Special health and safety measures apply. Learn more
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                    <div className="flex flex-col gap-[11px] justify-start w-[41%] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_carbonapplicationmobile.svg"
                          alt="carbonapplicati"
                        />
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Mobile ticketing
                        </Text>
                      </div>
                      <Text
                        className="ml-7 md:ml-[0] text-blue_gray-700 text-sm"
                        size="txtMulishRegular14"
                      >
                        Use your phone or print your voucher
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 justify-start w-[43%] sm:w-full">
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
                          Duration 3.5 hours
                        </Text>
                      </div>
                      <Text
                        className="ml-7 md:ml-[0] text-blue_gray-700 text-sm"
                        size="txtMulishRegular14"
                      >
                        Check availability to see starting times.
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[89%] md:w-full">
                    <div className="flex flex-col gap-2.5 justify-start w-[38%] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_fluentflashch.svg"
                          alt="fluentflashch"
                        />
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Instant confirmation
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[26px] text-blue_gray-700 text-sm"
                        size="txtMulishRegular14"
                      >
                        Don’t wait for the confirmation!
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] justify-start w-[36%] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_healthiconscallcentre.svg"
                          alt="healthiconscall"
                        />
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Live tour guide in English
                        </Text>
                      </div>
                      <Text
                        className="ml-7 md:ml-[0] text-blue_gray-700 text-sm"
                        size="txtMulishRegular14"
                      >
                        English
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="md:h-[535px] h-[538px] relative w-[33%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded shadow-bs8 w-[98%]">
                <Text
                  className="capitalize md:ml-[0] ml-[3px] text-blue_gray-900_04 text-lg"
                  size="txtMulishBold18"
                >
                  Exchange Booking
                </Text>
                <Text
                  className="capitalize ml-32 md:ml-[0] mt-[162px] text-center text-gray-600 text-sm"
                  size="txtMulishSemiBold14Gray600"
                >
                  subtotal
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[63px] mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-center text-teal-200"
                  size="txtMulishBlack30"
                >
                  600.000VND
                </Text>
                <Button
                  className="common-pointer capitalize cursor-pointer font-bold h-[50px] leading-[normal] md:ml-[0] ml-[7px] mt-[29px] rounded-[3px] text-[15px] text-center w-[310px]"
                  onClick={() => navigate("/bookingone")}
                  color="teal_200"
                  size="xl"
                  variant="fill"
                >
                  confirm booking
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[310px] md:ml-[0] ml-[7px] mt-[18px] rounded-[3px]"
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
                  className="cursor-pointer flex items-center justify-center mb-[11px] min-w-[310px] md:ml-[0] ml-[7px] mt-[18px] rounded-[3px]"
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
              <div className="absolute flex flex-col gap-2 inset-x-[0] justify-start mx-auto top-[17%] w-full">
                <Text
                  className="capitalize md:ml-[0] ml-[30px] text-[15px] text-blue_gray-900"
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
              <Line className="absolute bg-gray-100 h-px inset-x-[0] mx-auto top-[12%] w-[98%]" />
            </div>
          </div>
          <div className="flex flex-col gap-7 items-center justify-start mt-[31px] md:px-5 w-[54%] md:w-full">
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
          <div className="flex flex-col items-center justify-start mt-[26px] md:px-5 w-[58%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Activity
              </Text>
              <div className="flex flex-col font-volkhov gap-[9px] items-start justify-start mt-[11px] w-full">
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  What you will do
                </Text>
                <div className="flex sm:flex-col flex-row font-mulish gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-32"
                    src="images/img_group415.svg"
                    alt="group415"
                  />
                  <Text
                    className="leading-[30.00px] text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    <>
                      Visit the official website of Hoi An Central Boutique
                      <br />
                      Enter your desired check-in and check-out dates, as well
                      as the number of guests and rooms required.
                      <br />
                      Browse through the available room types and select the one
                      that best suits your preferences and budget.
                      <br />
                      Complete the reservation process by providing your
                      personal details, contact information, and payment details
                      as required.
                      <br />
                      Review the booking details, including the total cost,
                      cancellation policy, and any additional amenities or
                      services offered.
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100_03 h-px mt-[23px] w-[94%]" />
              <Text
                className="capitalize mt-[23px] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                What is included / not included
              </Text>
              <div className="flex flex-row font-volkhov items-center justify-between mt-[19px] w-[51%] md:w-full">
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Includes
                </Text>
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Not Includes
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-mulish sm:gap-10 gap-[78px] items-center justify-start mt-[9px] w-[68%] md:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start w-[44%] sm:w-full">
                  <Img
                    className="h-[98px]"
                    src="images/img_notification.svg"
                    alt="notification"
                  />
                  <Text
                    className="leading-[30.00px] text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    <>
                      Double-decker Routemaster tour
                      <br />
                      Short trip along the River Thames
                      <br />
                      Changing of the Guard
                      <br />
                      Gratuities
                    </>
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-[44%] sm:w-full">
                  <Img
                    className="h-[98px]"
                    src="images/img_notification.svg"
                    alt="notification_One"
                  />
                  <Text
                    className="leading-[30.00px] text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    <>
                      Double-decker Routemaster tour
                      <br />
                      Short trip along the River Thames
                      <br />
                      Changing of the Guard
                      <br />
                      Gratuities
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100_03 h-px mt-6 w-[94%]" />
              <Text
                className="capitalize mt-7 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Safety
              </Text>
              <div className="flex flex-col font-volkhov gap-[9px] items-start justify-start mt-[13px] w-[45%] md:w-full">
                <Text
                  className="capitalize text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Health precautions
                </Text>
                <div className="flex flex-row font-mulish gap-2.5 items-center justify-start w-full">
                  <Img
                    className="h-[98px]"
                    src="images/img_notification.svg"
                    alt="notification_Two"
                  />
                  <Text
                    className="leading-[30.00px] text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    <>
                      All required protective equipment is provided
                      <br />
                      All areas that customers touch are frequently cleaned
                      <br />
                      You must keep social distance while in vehicles
                      <br />
                      The number of visitors is limited to reduce crowds
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100_03 h-px mt-[26px] w-[94%]" />
              <Text
                className="capitalize mt-6 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Details
              </Text>
              <div className="flex sm:flex-col flex-row font-volkhov sm:gap-5 items-start justify-start mt-4 w-[52%] md:w-full">
                <Text
                  className="capitalize sm:mt-0 mt-0.5 text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Language
                </Text>
                <Text
                  className="capitalize mb-0.5 sm:ml-[0] ml-[65px] text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Duration
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[77px] text-[15px] text-blue_gray-900"
                  size="txtVolkhovBold15Bluegray900"
                >
                  Number of people
                </Text>
              </div>
              <div className="flex flex-row font-mulish items-start justify-start mt-[7px] w-[44%] md:w-full">
                <div className="flex flex-col gap-[22px] items-center justify-start mt-[11px] w-[3%]">
                  <div className="bg-blue_gray-700 h-2 rounded-[50%] w-2"></div>
                  <div className="bg-blue_gray-700 h-2 rounded-[50%] w-2"></div>
                </div>
                <Text
                  className="leading-[30.00px] ml-2.5 text-blue_gray-700 text-sm"
                  size="txtMulishSemiBold14"
                >
                  <>
                    English
                    <br />
                    Vietnamese
                  </>
                </Text>
                <div className="bg-blue_gray-700 h-2 mb-[41px] ml-[43px] mt-[11px] rounded-[50%] w-2"></div>
                <Text
                  className="ml-2.5 mt-[5px] text-blue_gray-700 text-sm"
                  size="txtMulishSemiBold14"
                >
                  2 hours
                </Text>
                <div className="bg-blue_gray-700 h-2 mb-[41px] ml-[78px] mt-[11px] rounded-[50%] w-2"></div>
                <Text
                  className="ml-2.5 mt-[7px] text-blue_gray-700 text-sm"
                  size="txtMulishSemiBold14"
                >
                  5 People
                </Text>
              </div>
              <Text
                className="capitalize mt-[19px] text-[15px] text-blue_gray-900"
                size="txtVolkhovBold15Bluegray900"
              >
                Meeting point address
              </Text>
              <div className="flex md:flex-col flex-row font-mulish gap-2.5 items-start justify-start mt-2.5 w-[94%] md:w-full">
                <div className="bg-blue_gray-700 h-2 mb-[62px] md:mt-0 mt-2 rounded-[50%] w-2"></div>
                <Text
                  className="leading-[24.00px] text-blue_gray-700 text-sm w-[98%] sm:w-full"
                  size="txtMulishSemiBold14"
                >
                  <>
                    Meet your guide inside the west entrance of Altab Ali Park
                    (Whitechapel Road). It&#39;s opposite the entrance to
                    Aldgate East Tube Station and the Whitechapel Gallery. Look
                    for a guide wearing SMT attire and holding a red SMT flag
                  </>
                </Text>
              </div>
              <Text
                className="capitalize mt-3 text-sm text-teal-200 underline"
                size="txtMulishExtraBold14"
              >
                Open in Google Maps{" "}
              </Text>
              <Img
                className="h-[340px] sm:h-auto mt-4 object-cover rounded-[10px] w-[94%] md:w-full"
                src="images/img_rectangle208.png"
                alt="rectangle208"
              />
            </div>
          </div>
          <div className="flex flex-col font-volkhov items-center justify-start max-w-[1178px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Line className="bg-blue_gray-100_03 h-px w-full" />
              <div className="flex flex-col items-center justify-start mt-[30px] w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                    size="txtVolkhovBold22"
                  >
                    Related tours in Today
                  </Text>
                  <Img
                    className="h-[49px]"
                    src="images/img_group211.svg"
                    alt="group211"
                  />
                </div>
                <div className="sm:h-[1694px] h-[405px] md:h-[832px] relative w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-[9px] rounded-[3px] shadow-bs7 w-[24%]">
                    <div className="md:h-[179px] sm:h-[248px] h-[323px] relative w-[95%]">
                      <div className="absolute bottom-[0] sm:h-[248px] h-[298px] md:h-[72px] inset-x-[0] mx-auto w-[89%]">
                        <div className="absolute sm:h-[245px] h-[270px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute h-[241px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                            <Text
                              className="absolute bottom-[22%] inset-x-[0] mx-auto text-base text-blue_gray-900 text-shadow-ts w-max"
                              size="txtVolkhovRegular16"
                            >
                              Hoi An Central Boutique
                            </Text>
                            <div className="absolute flex flex-col font-mulish md:gap-10 gap-[209px] h-full inset-y-[0] justify-start left-[1%] my-auto w-3/5">
                              <Img
                                className="h-3.5"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <Text
                                className="md:ml-[0] ml-[23px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                Duration 2 hours
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[215px] justify-start left-[0] w-[62%]">
                            <Img
                              className="h-3"
                              src="images/img_car.svg"
                              alt="car"
                            />
                            <Text
                              className="md:ml-[0] ml-[25px] text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Transport Facility
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[218px] justify-start left-[0] w-[45%]">
                          <Img
                            className="h-3"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="ml-6 md:ml-[0] text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[179px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                        src="images/img_image39.png"
                        alt="imageThirtyNine_One"
                      />
                    </div>
                    <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                    <div className="flex flex-row font-mulish items-end justify-between mt-[3px] w-[86%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-[5px] w-[31%]">
                        <RatingBar
                          className="flex justify-between w-[70px]"
                          value={4}
                          starCount={5}
                          color="#cfd9de"
                          activeColor="#ffa331"
                          size={13}
                        ></RatingBar>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          584 reviews
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20Teal200"
                        >
                          $5000
                        </Text>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per month
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 inset-[0] justify-center m-auto w-[49%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col items-center justify-end py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="md:h-[179px] sm:h-[248px] h-[323px] relative w-[93%]">
                        <div className="absolute bottom-[0] sm:h-[248px] h-[298px] md:h-[72px] inset-x-[0] mx-auto w-[91%]">
                          <div className="absolute sm:h-[245px] h-[270px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                            <div className="absolute h-[241px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                              <Text
                                className="absolute bottom-[22%] inset-x-[0] mx-auto text-base text-blue_gray-900 text-shadow-ts w-max"
                                size="txtVolkhovRegular16"
                              >
                                King Koi Hoi An
                              </Text>
                              <div className="absolute flex flex-col font-mulish md:gap-10 gap-[209px] h-full inset-y-[0] justify-start left-[1%] my-auto w-3/5">
                                <Img
                                  className="h-3.5"
                                  src="images/img_clock.svg"
                                  alt="clock"
                                />
                                <Text
                                  className="md:ml-[0] ml-[23px] text-blue_gray-700 text-sm"
                                  size="txtMulishSemiBold14"
                                >
                                  Duration 2 hours
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[215px] justify-start left-[0] w-[62%]">
                              <Img
                                className="h-3"
                                src="images/img_car.svg"
                                alt="car"
                              />
                              <Text
                                className="md:ml-[0] ml-[25px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                Transport Facility
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[218px] justify-start left-[0] w-[45%]">
                            <Img
                              className="h-3"
                              src="images/img_settings_blue_gray_700.svg"
                              alt="settings"
                            />
                            <Text
                              className="ml-6 md:ml-[0] text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Family Plan
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[179px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                          src="images/img_image40.png"
                          alt="imageForty"
                        />
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-[3px] w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={13}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20Teal200"
                          >
                            $3000
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-end py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="md:h-[179px] sm:h-[248px] h-[323px] relative w-[93%]">
                        <div className="absolute bottom-[0] sm:h-[248px] h-[298px] md:h-[72px] inset-x-[0] mx-auto w-[91%]">
                          <div className="absolute sm:h-[245px] h-[270px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                            <div className="absolute h-[241px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                              <Text
                                className="absolute bottom-[12%] inset-x-[0] leading-[22.00px] mx-auto text-base text-blue_gray-900 text-shadow-ts w-full"
                                size="txtVolkhovRegular16"
                              >
                                Hoi An History Hotel: First Hotel at an ancient
                                city
                              </Text>
                              <div className="absolute flex flex-col font-mulish md:gap-10 gap-[209px] h-full inset-y-[0] justify-start left-[1%] my-auto w-3/5">
                                <Img
                                  className="h-3.5"
                                  src="images/img_clock.svg"
                                  alt="clock"
                                />
                                <Text
                                  className="md:ml-[0] ml-[23px] text-blue_gray-700 text-sm"
                                  size="txtMulishSemiBold14"
                                >
                                  Duration 2 hours
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[215px] justify-start left-[0] w-[62%]">
                              <Img
                                className="h-3"
                                src="images/img_car.svg"
                                alt="car"
                              />
                              <Text
                                className="md:ml-[0] ml-[25px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                Transport Facility
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[218px] justify-start left-[0] w-[45%]">
                            <Img
                              className="h-3"
                              src="images/img_settings_blue_gray_700.svg"
                              alt="settings"
                            />
                            <Text
                              className="ml-6 md:ml-[0] text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Family Plan
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[179px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                          src="images/img_image41.png"
                          alt="imageFortyOne"
                        />
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-[3px] w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={13}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20Teal200"
                          >
                            $3500
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col h-full items-center justify-end ml-auto my-auto py-[9px] rounded-[3px] shadow-bs7 w-[24%]">
                    <div className="md:h-[179px] sm:h-[248px] h-[323px] relative w-[93%]">
                      <div className="absolute bottom-[0] sm:h-[248px] h-[298px] md:h-[72px] inset-x-[0] mx-auto w-[91%]">
                        <div className="absolute sm:h-[245px] h-[270px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute h-[241px] md:h-[72px] inset-x-[0] mx-auto top-[0] w-full">
                            <Text
                              className="absolute bottom-[12%] inset-x-[0] leading-[22.00px] mx-auto text-base text-blue_gray-900 text-shadow-ts w-full"
                              size="txtVolkhovRegular16"
                            >
                              Moutain House: Hunt clouds on the hills
                            </Text>
                            <div className="absolute flex flex-col font-mulish md:gap-10 gap-[209px] h-full inset-y-[0] justify-start left-[1%] my-auto w-3/5">
                              <Img
                                className="h-3.5"
                                src="images/img_clock.svg"
                                alt="clock_One"
                              />
                              <Text
                                className="md:ml-[0] ml-[23px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                Duration 2 hours
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[215px] justify-start left-[0] w-[62%]">
                            <Img
                              className="h-3"
                              src="images/img_car.svg"
                              alt="car_One"
                            />
                            <Text
                              className="md:ml-[0] ml-[25px] text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Transport Facility
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col font-mulish md:gap-10 gap-[218px] justify-start left-[0] w-[45%]">
                          <Img
                            className="h-3"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings_One"
                          />
                          <Text
                            className="ml-6 md:ml-[0] text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[179px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                        src="images/img_image42.png"
                        alt="imageFortyTwo"
                      />
                    </div>
                    <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                    <div className="flex flex-row font-mulish items-end justify-between mt-[3px] w-[86%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-[5px] w-[31%]">
                        <RatingBar
                          className="flex justify-between w-[70px]"
                          value={4}
                          starCount={5}
                          color="#cfd9de"
                          activeColor="#ffa331"
                          size={13}
                        ></RatingBar>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          584 reviews
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20Teal200"
                        >
                          $4000
                        </Text>
                        <Text
                          className="text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per month
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-[0] justify-center m-auto w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="h-[180px] relative w-[95%]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[99%]"
                          src="images/img_rectangle129.png"
                          alt="rectangle129"
                        />
                        <Img
                          className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_image39.png"
                          alt="imageThirtyNine"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900 text-shadow-ts"
                          size="txtVolkhovRegular16"
                        >
                          Hoi An Central Boutique
                        </Text>
                        <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Duration 2 hours
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport Facility
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="ml-1 text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={14}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start">
                          <Text
                            className="text-[15px] text-right text-shadow-ts text-teal-200"
                            size="txtVolkhovBold15"
                          >
                            100.000.000vnđ
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="h-[180px] relative w-[93%]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_rectangle129_180x250.png"
                          alt="rectangle129"
                        />
                        <Img
                          className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_image40.png"
                          alt="imageForty"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-900 text-shadow-ts"
                          size="txtVolkhovRegular16"
                        >
                          King Koi Hoi An
                        </Text>
                        <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Duration 2 hours
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport Facility
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="ml-1 text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={14}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start">
                          <Text
                            className="text-[15px] text-right text-shadow-ts text-teal-200"
                            size="txtVolkhovBold15"
                          >
                            100.000.000vnđ
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="h-[180px] relative w-[93%]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_rectangle129_1.png"
                          alt="rectangle129"
                        />
                        <Img
                          className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_image41.png"
                          alt="imageFortyOne"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                        <Text
                          className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                          size="txtVolkhovRegular16"
                        >
                          Hoi An History Hotel: First Hotel at an ancient city
                        </Text>
                        <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Duration 2 hours
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport Facility
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="ml-1 text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={14}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start">
                          <Text
                            className="text-[15px] text-right text-shadow-ts text-teal-200"
                            size="txtVolkhovBold15"
                          >
                            100.000.000vnđ
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-[9px] rounded-[3px] shadow-bs7 w-full">
                      <div className="h-[180px] relative w-[93%]">
                        <Img
                          className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_rectangle129_2.png"
                          alt="rectangle129"
                        />
                        <Img
                          className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_image42.png"
                          alt="imageFortyTwo"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                        <Text
                          className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                          size="txtVolkhovRegular16"
                        >
                          Moutain House: Hunt clouds on the hills
                        </Text>
                        <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Duration 2 hours
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport Facility
                          </Text>
                        </div>
                        <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="ml-1 text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                      <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                        <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                          <RatingBar
                            className="flex justify-between w-[70px]"
                            value={4}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={14}
                          ></RatingBar>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            584 reviews
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start">
                          <Text
                            className="text-[15px] text-right text-shadow-ts text-teal-200"
                            size="txtVolkhovBold15"
                          >
                            100.000.000vnđ
                          </Text>
                          <Text
                            className="text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per month
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <Line className="bg-blue_gray-100_03 h-px mt-[49px] w-full" />
              <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between mt-[22px] w-[96%] md:w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovBold36"
                  >
                    Latest Stories
                  </Text>
                  <Text
                    className="leading-[25.00px] text-base text-gray-600 w-full"
                    size="txtMulishSemiBold16Gray600"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                  </Text>
                </div>
                <Button
                  className="capitalize cursor-pointer font-bold md:mt-0 my-[30px] rounded-[3px] text-center text-sm w-[190px]"
                  color="blue_gray_700"
                  size="xl"
                  variant="fill"
                >
                  View All Images
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[43px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                    src="images/img_rectangle45.png"
                    alt="rectangleFortyFive"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="mt-1 text-gray-600 text-sm"
                        size="txtMulishSemiBold14Gray600"
                      >
                        Jackie Moncada
                      </Text>
                    </div>
                    <Text
                      className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                      size="txtVolkhovRegular18"
                    >
                      7 Signs and Symptoms of Iodine Deficiency
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                    src="images/img_rectangle45_200x270.png"
                    alt="rectangleFortyFive"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="mt-1 text-gray-600 text-sm"
                        size="txtMulishSemiBold14Gray600"
                      >
                        Jackie Moncada
                      </Text>
                    </div>
                    <Text
                      className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                      size="txtVolkhovRegular18"
                    >
                      How to Fix Your Sleep Schedule: 7 Easy Ways
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                    src="images/img_rectangle45_1.png"
                    alt="rectangleFortyFive"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="mt-1 text-gray-600 text-sm"
                        size="txtMulishSemiBold14Gray600"
                      >
                        Jackie Moncada
                      </Text>
                    </div>
                    <Text
                      className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                      size="txtVolkhovRegular18"
                    >
                      10 Proven Health Benefits of Cinnamon
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs7 w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                    src="images/img_rectangle45_2.png"
                    alt="rectangleFortyFive"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="mt-1 text-gray-600 text-sm"
                        size="txtMulishSemiBold14Gray600"
                      >
                        Jackie Moncada
                      </Text>
                    </div>
                    <Text
                      className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                      size="txtVolkhovRegular18"
                    >
                      11 Health Benefits of Turmeric and Curcumin
                    </Text>
                  </div>
                </div>
              </List>
              <Line className="bg-blue_gray-100_03 h-px mt-[39px] w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1170px] mt-7 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Customer Review
              </Text>
              <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[22%] md:w-full">
                  <div className="flex flex-row gap-[13px] items-start justify-start w-full">
                    <Text
                      className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
                      size="txtMulishBlack48"
                    >
                      4,30
                    </Text>
                    <Text
                      className="capitalize mt-[21px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-600"
                      size="txtMulishLight23"
                    >
                      854 reviews
                    </Text>
                  </div>
                  <RatingBar
                    className="flex justify-between w-[250px]"
                    value={4}
                    starCount={5}
                    color="#cfd9de"
                    activeColor="#ffa331"
                    size={50}
                  ></RatingBar>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                  <List
                    className="flex flex-col gap-2.5 items-center pt-[30px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-1 flex-row items-start justify-between mr-1 my-0 w-[99%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishBold14Bluegray700"
                      >
                        Transportation
                      </Text>
                      <div className="h-2.5 my-1 overflow-hidden relative">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-yellow_600  rounded-[3px]"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtMulishBold14Gray600"
                      >
                        30
                      </Text>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishBold14Bluegray700"
                      >
                        Guide
                      </Text>
                      <div className="h-2.5 sm:ml-[0] ml-[90px] sm:mt-0 my-1 overflow-hidden relative w-[58%]">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-yellow_600  rounded-[3px]"
                          style={{ width: "91%" }}
                        ></div>
                      </div>
                      <Text
                        className="ml-2.5 sm:ml-[0] text-gray-600 text-sm"
                        size="txtMulishBold14Gray600"
                      >
                        4.8
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between my-0 w-full">
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishBold14Bluegray700"
                      >
                        Value for money
                      </Text>
                      <div className="h-2.5 my-1 overflow-hidden relative">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-yellow_600  rounded-[3px]"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <Text
                        className="text-gray-600 text-sm"
                        size="txtMulishBold14Gray600"
                      >
                        4.5
                      </Text>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                      <Text
                        className="text-blue_gray-700 text-sm"
                        size="txtMulishBold14Bluegray700"
                      >
                        Safety
                      </Text>
                      <div className="h-2.5 sm:ml-[0] ml-[85px] sm:mt-0 my-1 overflow-hidden relative w-[58%]">
                        <div className="w-full h-full absolute bg-gray_200 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-yellow_600  rounded-[3px]"
                          style={{ width: "81%" }}
                        ></div>
                      </div>
                      <Text
                        className="ml-2.5 sm:ml-[0] text-gray-600 text-sm"
                        size="txtMulishBold14Gray600"
                      >
                        4.0
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-gray-50_02 border border-cyan-900_14 border-solid flex md:flex-col flex-row font-mulish md:gap-5 items-center justify-start mt-7 p-[15px] rounded-[3px] w-full">
                <div className="flex md:flex-1 flex-row items-end justify-center md:ml-[0] ml-[15px] w-[9%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_evafunneloutline.svg"
                    alt="evafunneloutlin"
                  />
                  <Text
                    className="mb-[3px] ml-[5px] mt-[7px] text-[15px] text-blue_gray-900_04"
                    size="txtMulishBold15Bluegray90004"
                  >
                    Filtering:
                  </Text>
                </div>
                <SelectBox
                  className="!text-blue_gray-700 border-4 border-solid border-white-A700 md:flex-1 font-semibold leading-[normal] ml-5 md:ml-[0] shadow-bs8 text-[15px] text-left w-[18%] md:w-full"
                  placeholderClassName="!text-blue_gray-700"
                  indicator={
                    <Img
                      className="h-3.5 mr-[0] w-3.5"
                      src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                      alt="ant-design:caret-down-outlined"
                    />
                  }
                  isMulti={false}
                  name="group315"
                  options={recommendedOptionsList}
                  isSearchable={false}
                  placeholder="Recommended"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                />
                <SelectBox
                  className="!text-blue_gray-700 border-4 border-solid border-white-A700 md:flex-1 font-semibold leading-[normal] ml-2.5 md:ml-[0] shadow-bs8 text-[15px] text-left w-[18%] md:w-full"
                  placeholderClassName="!text-blue_gray-700"
                  indicator={
                    <Img
                      className="h-3.5 mr-[0] w-3.5"
                      src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                      alt="ant-design:caret-down-outlined"
                    />
                  }
                  isMulti={false}
                  name="group316"
                  options={travelerTypeOptionsList}
                  isSearchable={false}
                  placeholder="Traveler type"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                />
                <SelectBox
                  className="!text-blue_gray-700 border-4 border-solid border-white-A700 md:flex-1 font-semibold leading-[normal] ml-2.5 md:ml-[0] shadow-bs8 text-[15px] text-left w-[18%] md:w-full"
                  placeholderClassName="!text-blue_gray-700"
                  indicator={
                    <Img
                      className="h-3.5 mr-[0] w-3.5"
                      src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                      alt="ant-design:caret-down-outlined"
                    />
                  }
                  isMulti={false}
                  name="group317"
                  options={ratingOptionsList}
                  isSearchable={false}
                  placeholder="Rating"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                />
                <Input
                  name="group318"
                  placeholder="Search Here"
                  className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-semibold leading-[normal] p-0 text-[15px] text-left w-full"
                  wrapClassName="border border-blue_gray-100_04 border-solid flex md:flex-1 ml-2.5 md:ml-[0] rounded-[3px] w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-[18px] mr-[5px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row font-mulish md:gap-[57px] items-start justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:mt-0 mt-0.5 w-[18%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse60.png"
                    alt="ellipseSixty"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Arlene McCoy
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_bicheckall.svg"
                          alt="bicheckall"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-[13px] text-gray-600"
                      size="txtMulishSemiBold13"
                    >
                      2 October 2012
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[78%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15Bluegray900"
                    >
                      Good Timeshare, really well organised
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[9%]">
                      <Text
                        className="capitalize text-[13px] text-gray-600"
                        size="txtMulishSemiBold13"
                      >
                        Helpful?
                      </Text>
                      <Text
                        className="capitalize text-[13px] text-teal-200"
                        size="txtMulishBold13"
                      >
                        Yes
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] text-blue_gray-700 text-sm w-[76%] sm:w-full"
                    size="txtMulishRegular14"
                  >
                    <>
                      The tour was very well organised. One minus is that you
                      get completely bombarded with information. You also have
                      to stand up for too long at the private entrance to the
                      Tower of London, which leads to a lack of time later.
                      Lunch was the same, too stress, the quality was great but
                      you couldn&#39;t enjoy it. I&#39;d like to ask the
                      organisers: please
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[26px] w-full" />
              <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-start justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-row gap-[19px] items-center justify-between md:mt-0 mt-0.5 w-[18%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse60_60x60.png"
                    alt="ellipseSixty_One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Jenny Wilson
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_bicheckall.svg"
                          alt="bicheckall_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-[13px] text-gray-600"
                      size="txtMulishSemiBold13"
                    >
                      2 October 2012
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[78%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15Bluegray900"
                    >
                      Informative but disappointed not seeing changing of the
                      guards
                    </Text>
                    <div className="flex sm:flex-1 flex-row gap-[9px] items-start justify-between w-[9%] sm:w-full">
                      <Text
                        className="capitalize text-[13px] text-gray-600"
                        size="txtMulishSemiBold13"
                      >
                        Helpful?
                      </Text>
                      <Text
                        className="capitalize text-[13px] text-teal-200"
                        size="txtMulishBold13"
                      >
                        Yes
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] text-blue_gray-700 text-sm w-[76%] sm:w-full"
                    size="txtMulishRegular14"
                  >
                    <>
                      The tour was very well organised. One minus is that you
                      get completely bombarded with information. You also have
                      to stand up for too long at the private entrance to the
                      Tower of London, which leads to a lack of time later.
                      Lunch was the same, too stress, the quality was great but
                      you couldn&#39;t enjoy it. I&#39;d like to ask the
                      organisers: please
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[26px] w-full" />
              <div className="flex md:flex-col flex-row font-mulish md:gap-[45px] items-start justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:mt-0 mt-0.5 w-[19%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse60_1.png"
                    alt="ellipseSixty_Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Ralph Edwards
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_bicheckall.svg"
                          alt="bicheckall_Two"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-[13px] text-gray-600"
                      size="txtMulishSemiBold13"
                    >
                      2 October 2012
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[78%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15Bluegray900"
                    >
                      I love their way of style
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[9%]">
                      <Text
                        className="capitalize text-[13px] text-gray-600"
                        size="txtMulishSemiBold13"
                      >
                        Helpful?
                      </Text>
                      <Text
                        className="capitalize text-[13px] text-teal-200"
                        size="txtMulishBold13"
                      >
                        Yes
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] text-blue_gray-700 text-sm w-[76%] sm:w-full"
                    size="txtMulishRegular14"
                  >
                    <>
                      The tour was very well organised. One minus is that you
                      get completely bombarded with information. You also have
                      to stand up for too long at the private entrance to the
                      Tower of London, which leads to a lack of time later.
                      Lunch was the same, too stress, the quality was great but
                      you couldn&#39;t enjoy it. I&#39;d like to ask the
                      organisers: please
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[26px] w-full" />
              <div className="flex md:flex-col flex-row font-mulish md:gap-[42px] items-start justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:mt-0 mt-0.5 w-[19%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse60_2.png"
                    alt="ellipseSixty_Three"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Courtney Henry
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_bicheckall.svg"
                          alt="bicheckall_Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-[3px] text-[13px] text-gray-600"
                      size="txtMulishSemiBold13"
                    >
                      2 October 2012
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[78%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15Bluegray900"
                    >
                      Enjoyed very much
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[9%]">
                      <Text
                        className="capitalize text-[13px] text-gray-600"
                        size="txtMulishSemiBold13"
                      >
                        Helpful?
                      </Text>
                      <Text
                        className="capitalize text-[13px] text-teal-200"
                        size="txtMulishBold13"
                      >
                        Yes
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] text-blue_gray-700 text-sm w-[76%] sm:w-full"
                    size="txtMulishRegular14"
                  >
                    <>
                      The tour was very well organised. One minus is that you
                      get completely bombarded with information. You also have
                      to stand up for too long at the private entrance to the
                      Tower of London, which leads to a lack of time later.
                      Lunch was the same, too stress, the quality was great but
                      you couldn&#39;t enjoy it. I&#39;d like to ask the
                      organisers: please
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[26px] w-full" />
              <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-start justify-between mt-[26px] w-full">
                <div className="flex md:flex-1 flex-row gap-5 items-center justify-between md:mt-0 mt-0.5 w-[17%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse60_3.png"
                    alt="ellipseSixty_Four"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-blue_gray-900 w-auto"
                          size="txtMulishBold15Bluegray900"
                        >
                          Devon Lane
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_bicheckall.svg"
                          alt="bicheckall_Four"
                        />
                      </div>
                    </div>
                    <Text
                      className="capitalize mt-1 text-[13px] text-gray-600"
                      size="txtMulishSemiBold13"
                    >
                      2 October 2012
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[78%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15Bluegray900"
                    >
                      Nice!!!!!!!
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[9%]">
                      <Text
                        className="capitalize text-[13px] text-gray-600"
                        size="txtMulishSemiBold13"
                      >
                        Helpful?
                      </Text>
                      <Text
                        className="capitalize text-[13px] text-teal-200"
                        size="txtMulishBold13"
                      >
                        Yes
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[24.00px] text-blue_gray-700 text-sm w-[76%] sm:w-full"
                    size="txtMulishRegular14"
                  >
                    <>
                      The tour was very well organised. One minus is that you
                      get completely bombarded with information. You also have
                      to stand up for too long at the private entrance to the
                      Tower of London, which leads to a lack of time later.
                      Lunch was the same, too stress, the quality was great but
                      you couldn&#39;t enjoy it. I&#39;d like to ask the
                      organisers: please
                    </>
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[26px] w-full" />
              <Text
                className="capitalize md:ml-[0] ml-[511px] mt-10 text-center text-sm text-teal-200 underline"
                size="txtMulishBold14Teal200"
              >
                View More Comments
              </Text>
            </div>
          </div>
          <footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[59px] md:px-5 w-full">
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
                            name="language_Four"
                            options={languageFourOptionsList}
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
                          name="price_Three"
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
      </div>
    </>
  );
};

export default TimeshareBookingDetailPage;
