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
      <Route path="/movie/create" element={<CreateTicket/>} />
      <Route path="/movie/edit" element={<Edit />} />
      <Route path="/movie/ticket" element={<Ticket />} />

      {/* event route */}
      <Route path="/event/landing" element={<Landing/>}/>
      <Route path="/event/create" element={<CreateEvent/>}/>
    </Routes>
  );
}

export default App;
