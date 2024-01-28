import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const RentExchangeThree = React.lazy(() => import("pages/RentExchangeThree"));
const RentExchangeFour = React.lazy(() => import("pages/RentExchangeFour"));
const CancelExchangeOne = React.lazy(() => import("pages/CancelExchangeOne"));
const RentExchangeFive = React.lazy(() => import("pages/RentExchangeFive"));
const RentExchangeEight = React.lazy(() => import("pages/RentExchangeEight"));
const RentExchangeSix = React.lazy(() => import("pages/RentExchangeSix"));
const RentExchangeSeven = React.lazy(() => import("pages/RentExchangeSeven"));
const CancelExchange = React.lazy(() => import("pages/CancelExchange"));
const RentExchange = React.lazy(() => import("pages/RentExchange"));
const RentExchangeTwo = React.lazy(() => import("pages/RentExchangeTwo"));
const CancellationandrefundprocessOne = React.lazy(
  () => import("pages/CancellationandrefundprocessOne"),
);
const RentExchangeOne = React.lazy(() => import("pages/RentExchangeOne"));
const CancellationandrefundprocessTwo = React.lazy(
  () => import("pages/CancellationandrefundprocessTwo"),
);
const Cancellationandrefundprocess = React.lazy(
  () => import("pages/Cancellationandrefundprocess"),
);
const CancelBooking = React.lazy(() => import("pages/CancelBooking"));
const BookingFour = React.lazy(() => import("pages/BookingFour"));
const BookingThree = React.lazy(() => import("pages/BookingThree"));
const Booking21 = React.lazy(() => import("pages/Booking21"));
const BookingTwo = React.lazy(() => import("pages/BookingTwo"));
const BookingOne = React.lazy(() => import("pages/BookingOne"));
const BookingFive = React.lazy(() => import("pages/BookingFive"));
const WaitlistExchangeRequestsTwo = React.lazy(
  () => import("pages/WaitlistExchangeRequestsTwo"),
);
const Wallet = React.lazy(() => import("pages/Wallet"));
const WalletOne = React.lazy(() => import("pages/WalletOne"));
const WaitlistExchangeRequests = React.lazy(
  () => import("pages/WaitlistExchangeRequests"),
);
const WaitlistExchangeRequestsOne = React.lazy(
  () => import("pages/WaitlistExchangeRequestsOne"),
);
const RequestAcceptView = React.lazy(() => import("pages/RequestAcceptView"));
const AcceptRequest = React.lazy(() => import("pages/AcceptRequest"));
const RequestListDetail = React.lazy(() => import("pages/RequestListDetail"));
const RequestList = React.lazy(() => import("pages/RequestList"));
const CreateTimeshare = React.lazy(() => import("pages/CreateTimeshare"));
const CreateTimeshareOne = React.lazy(() => import("pages/CreateTimeshareOne"));
const CreateTimeshareTwo = React.lazy(() => import("pages/CreateTimeshareTwo"));
const CreateTimeshareThree = React.lazy(
  () => import("pages/CreateTimeshareThree"),
);
const MyTimeshare = React.lazy(() => import("pages/MyTimeshare"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const MemberProfile = React.lazy(() => import("pages/MemberProfile"));
const Exchane8View = React.lazy(() => import("pages/Exchane8View"));
const Exchange7Success = React.lazy(() => import("pages/Exchange7Success"));
const Exchange6Confirm = React.lazy(() => import("pages/Exchange6Confirm"));
const Exchange5Exchanging = React.lazy(
  () => import("pages/Exchange5Exchanging"),
);
const Exchange4MyUnit = React.lazy(() => import("pages/Exchange4MyUnit"));
const Exchange3Detail = React.lazy(() => import("pages/Exchange3Detail"));
const Exchange2ExchangeList = React.lazy(
  () => import("pages/Exchange2ExchangeList"),
);
const ExchangeOne = React.lazy(() => import("pages/ExchangeOne"));
const TimeshareBookingDetail = React.lazy(
  () => import("pages/TimeshareBookingDetail"),
);
const ListTimeshareBooking = React.lazy(
  () => import("pages/ListTimeshareBooking"),
);
const ResetPasswordStepTwo = React.lazy(
  () => import("pages/ResetPasswordStepTwo"),
);
const ResetPasswordStepOne = React.lazy(
  () => import("pages/ResetPasswordStepOne"),
);
const ForgotPasswordStepTwo = React.lazy(
  () => import("pages/ForgotPasswordStepTwo"),
);
const ForgotPasswordStepOne = React.lazy(
  () => import("pages/ForgotPasswordStepOne"),
);
const Login = React.lazy(() => import("pages/Login"));
const SignUpTwo = React.lazy(() => import("pages/SignUpTwo"));
const SignUpOne = React.lazy(() => import("pages/SignUpOne"));
const Updatesuccessful = React.lazy(() => import("pages/Updatesuccessful"));
const Editprofile = React.lazy(() => import("pages/Editprofile"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/updatesuccessful" element={<Updatesuccessful />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/signuptwo" element={<SignUpTwo />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/forgotpasswordstepone"
            element={<ForgotPasswordStepOne />}
          />
          <Route
            path="/forgotpasswordsteptwo"
            element={<ForgotPasswordStepTwo />}
          />
          <Route
            path="/resetpasswordstepone"
            element={<ResetPasswordStepOne />}
          />
          <Route
            path="/resetpasswordsteptwo"
            element={<ResetPasswordStepTwo />}
          />
          <Route
            path="/listtimesharebooking"
            element={<ListTimeshareBooking />}
          />
          <Route
            path="/timesharebookingdetail"
            element={<TimeshareBookingDetail />}
          />
          <Route path="/exchangeone" element={<ExchangeOne />} />
          <Route
            path="/exchange2exchangelist"
            element={<Exchange2ExchangeList />}
          />
          <Route path="/exchange3detail" element={<Exchange3Detail />} />
          <Route path="/exchange4myunit" element={<Exchange4MyUnit />} />
          <Route
            path="/exchange5exchanging"
            element={<Exchange5Exchanging />}
          />
          <Route path="/exchange6confirm" element={<Exchange6Confirm />} />
          <Route path="/exchange7success" element={<Exchange7Success />} />
          <Route path="/exchane8view" element={<Exchane8View />} />
          <Route path="/memberprofile" element={<MemberProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mytimeshare" element={<MyTimeshare />} />
          <Route
            path="/createtimesharethree"
            element={<CreateTimeshareThree />}
          />
          <Route path="/createtimesharetwo" element={<CreateTimeshareTwo />} />
          <Route path="/createtimeshareone" element={<CreateTimeshareOne />} />
          <Route path="/createtimeshare" element={<CreateTimeshare />} />
          <Route path="/requestlist" element={<RequestList />} />
          <Route path="/requestlistdetail" element={<RequestListDetail />} />
          <Route path="/acceptrequest" element={<AcceptRequest />} />
          <Route path="/requestacceptview" element={<RequestAcceptView />} />
          <Route
            path="/waitlistexchangerequestsone"
            element={<WaitlistExchangeRequestsOne />}
          />
          <Route
            path="/waitlistexchangerequests"
            element={<WaitlistExchangeRequests />}
          />
          <Route path="/walletone" element={<WalletOne />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route
            path="/waitlistexchangerequeststwo"
            element={<WaitlistExchangeRequestsTwo />}
          />
          <Route path="/bookingfive" element={<BookingFive />} />
          <Route path="/bookingone" element={<BookingOne />} />
          <Route path="/bookingtwo" element={<BookingTwo />} />
          <Route path="/booking21" element={<Booking21 />} />
          <Route path="/bookingthree" element={<BookingThree />} />
          <Route path="/bookingfour" element={<BookingFour />} />
          <Route path="/cancelbooking" element={<CancelBooking />} />
          <Route
            path="/cancellationandrefundprocess"
            element={<Cancellationandrefundprocess />}
          />
          <Route
            path="/cancellationandrefundprocesstwo"
            element={<CancellationandrefundprocessTwo />}
          />
          <Route path="/rentexchangeone" element={<RentExchangeOne />} />
          <Route
            path="/cancellationandrefundprocessone"
            element={<CancellationandrefundprocessOne />}
          />
          <Route path="/rentexchangetwo" element={<RentExchangeTwo />} />
          <Route path="/rentexchange" element={<RentExchange />} />
          <Route path="/cancelexchange" element={<CancelExchange />} />
          <Route path="/rentexchangeseven" element={<RentExchangeSeven />} />
          <Route path="/rentexchangesix" element={<RentExchangeSix />} />
          <Route path="/rentexchangeeight" element={<RentExchangeEight />} />
          <Route path="/rentexchangefive" element={<RentExchangeFive />} />
          <Route path="/cancelexchangeone" element={<CancelExchangeOne />} />
          <Route path="/rentexchangefour" element={<RentExchangeFour />} />
          <Route path="/rentexchangethree" element={<RentExchangeThree />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
