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

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/listofservices" element={<ListOfServices />} />
      <Route path='/faq' element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path='/businessVerification' element={<BusinessVerification />} />
      <Route path='/emailVerification' element={<EmailVerification />} />

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
      <Route path="/event/salesHistory" element={<EventHistory />} />
      <Route path="/event/editEvent" element={<EditEvent />} />
      <Route path="/event/moreEvents" element={<MoreEvents />} />


      {/* Transport route */}
      <Route path="/transport/ticketLanding" element={<TicketLanding />} />
      <Route path="/transport/createRoute" element={<CreateRoute/>} />
      <Route path="/transport/createVehicleInfo" element={<CreateVehicleInfo />} />
      <Route path="/transport/createTicketInfo" element={<CreateTicketInfo />} />
      <Route path="/transport/transportHistory" element={<TransportHistory />} />
      <Route path="/transport/createVehicleTicket" element={<CreateVehicleTicket />} />

      {/* Avaition */}
      <Route path="/aviation/ticketLanding" element={<AviationLanding/>} />
      <Route path="/aviation/createRouteInfo" element={<CreateRouteInfo/>} />
      <Route path="/aviation/createFlightInfo" element={<CreateFlightInfo/>} />
      <Route path="/aviation/aviationTicketInfo" element={<AviationTicketInfo/>} />
      <Route path="/transport/aviationtHistory" element={<AviationHistory />} />
      <Route path="/transport/createFlightTicket" element={<CreateFlightTicket/>} />
    </Routes>

  );
}

export default App;
