import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ListOfServices from './pages/ListOfServices';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import SignUp from './pages/Signup';
import BusinessVerification from './pages/BusinessVerification';
import Login from './pages/Login';
import EmailVerification from './pages/Otp';
import Event from './pages/Movies/Landing';
// import CreateTicket from './pages/Movies/CreateContent';
import Edit from './pages/Movies/Edit';
import CreateTicket from './pages/Movies/CreateContent';
import Ticket from './pages/Movies/Ticket';
import Landing from './pages/Event/Landing';
import CreateEvent from './pages/Event/CreateEvent';
import SalesHistory from './pages/Movies/SalesHistory';
import EditMovie from './pages/Movies/EditMovie';
import CreateTicketEvent from './pages/Event/CreateTicket';
import EditEvent from './pages/Event/EditEvent';
import Edit2 from './pages/Event/Edit2';
import EventHistory from './pages/Event/SalesHistory';
import ActiveMovies from './pages/Movies/ActiveMovies';
import MoreEvents from './pages/Event/MoreEvents';
import TransportHistory from './pages/Transport/TransportHistory';
import CreateRoute from './pages/Transport/CreateRoute';
import CreateTicketInfo from './pages/Transport/CreateTicketInfo';
import CreateVehicleInfo from './pages/Transport/CreateVehicleInfo';
import CreateVehicleTicket from './pages/Transport/CreateVehicleTicket';
import TicketLanding from './pages/Transport/TicketLanding';
import AviationLanding from './pages/Aviation/AviationLanding';
import AviationRouteInfo from './pages/Aviation/CreateRouteInfo';
import CreateRouteInfo from './pages/Aviation/CreateRouteInfo';
import CreateFlightInfo from './pages/Aviation/CreateFlightInfo';
import AviationTicketInfo from './pages/Aviation/AviationTicketInfo';
import AviationHistory from './pages/Aviation/AviationHistory';
import CreateFlightTicket from './pages/Aviation/CreateFlightTicket';
import BillingServicesProfile from './pages/Billing/BillingServiceProfile';
import MyWallet from './pages/Wallet/MyWallet';
import Profile from './pages/Profile';
import Kyc from './pages/Kyc';
import TwoFa from './pages/2FA';
import Withdraw from './pages/Withdraw';
import EventList from './pages/List/Event';
import Transportlist from './pages/List/Transport';
import SingleTransport from './pages/List/SingleTransport';
import AviationList from './pages/List/Aviation';
import SingleAviation from './pages/List/SingleAviation';
import CinemaList from './pages/List/Cinema';
import SingleCinema from './pages/List/SingleCinema';
import ServicesList from './pages/service/ElectricityService';
import AirtimeService from './pages/service/AirtimeService';
import MedicalService from './pages/service/Medical';
import ForgotPassword from './pages/ForgotPassword';
import Otpp from './pages/Otpp';
import Reset from './pages/Reset';
// import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/listofservices" element={<ListOfServices />} />
      <Route path='/faq' element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/business/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path='/businessVerification' element={<BusinessVerification />} />
      <Route path='/emailVerification' element={<EmailVerification />} />
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/confirmEmail" element={<Otpp/>}/>
      <Route path="/reset" element={<Reset/>}/>

      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/kyc" element={<Kyc />} />
      <Route path="/profile/2fa" element={<TwoFa />} />

      {/* movie route */}
      <Route path="/movie/landing" element={<Event />} />
      <Route path="/movie/create" element={<CreateTicket />} />
      <Route path="/movie/edit" element={<Edit />} />
      <Route path="/movie/ticket" element={<Ticket />} />
      <Route path="/movie/salesHistory" element={<SalesHistory />} />
      <Route path="/movie/editmovie" element={<EditMovie />} />
      <Route path="/movie/createticket" element={<EditMovie />} />
      <Route path="/movie/activeMovies" element={<ActiveMovies />} />

      {/* event route */}
      <Route path="/event/landing" element={<Landing />} />
      <Route path="/event/create" element={<CreateEvent />} />
      <Route path="/event/edit" element={<Edit2 />} />
      <Route path="/event/createEventTicket" element={<CreateTicketEvent />} />
      {/* <Route path="/event/salesHistory" element={<EventHistory />} /> */}
      <Route path="/event/editEvent" element={<EditEvent />} />
      <Route path="/event/moreEvents" element={<MoreEvents />} />


      {/* Transport route */}
      <Route path="/transport/ticketLanding" element={<TicketLanding />} />
      <Route path="/transport/createRoute" element={<CreateRoute />} />
      <Route path="/transport/createVehicleInfo" element={<CreateVehicleInfo />} />
      <Route path="/transport/createTicketInfo" element={<CreateTicketInfo />} />
      <Route path="/transport/transportHistory" element={<TransportHistory />} />
      <Route path="/transport/createVehicleTicket" element={<CreateVehicleTicket />} />

      {/* Avaition */}
      <Route path="/aviation/ticketLanding" element={<AviationLanding />} />
      <Route path="/aviation/createRouteInfo" element={<CreateRouteInfo />} />
      <Route path="/aviation/createFlightInfo" element={<CreateFlightInfo />} />
      <Route path="/aviation/aviationTicketInfo" element={<AviationTicketInfo />} />
      <Route path="/aviation/aviationtHistory" element={<AviationHistory />} />
      <Route path="/aviation/createFlightTicket" element={<CreateFlightTicket />} />

      {/* BillingServicesProfile */}
      {/* <Route path="/billing/billingServicesProfile" element={<BillingServicesProfile/>} /> */}

      {/* Wallet */}
      <Route path="/wallet/myWallet" element={<MyWallet />} />


      <Route path="/list/event" element={<EventList />} />
      <Route path="/list/transport" element={<Transportlist />} />
      <Route path="/list/cinema" element={<CinemaList />} />
      <Route path="/list/aviation" element={<AviationList />} />
      <Route path="/list/single/transport" element={<SingleTransport />} />
      <Route path="/list/single/aviation" element={<SingleAviation />} />
      <Route path="/list/single/cinema" element={<SingleCinema />} />

      <Route path="/services/electricity" element={<ServicesList />} />
      <Route path="/services/airtime" element={<AirtimeService/>} />
      <Route path="/services/medical" element={<MedicalService/>} />
    </Routes>

  );
}

export default App;
