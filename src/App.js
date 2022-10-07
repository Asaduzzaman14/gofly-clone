import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import CountractUs from './components/pages/CountractUs';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hotels from './components/pages/Hotels';
import Medical from './components/pages/Medical';
import AllFlights from './components/pages/AllFlights';
import Dashbord from './components/pages/Dashboard/Dashbord';
import AllFlight from './components/pages/Dashboard/AllFlight';
import AllOrders from './components/pages/Dashboard/AllOrders';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contract-us" element={<CountractUs />}></Route>

        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/medical" element={<Medical />}></Route>
        <Route path="/flights" element={<AllFlights />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>


        <Route path="dashborad" element={<><Dashbord></Dashbord></>}>

          <Route path="allFlight" element={<AllFlight></AllFlight>}> </Route>
          <Route path="orders" element={<AllOrders></AllOrders>}> </Route>


        </Route>



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
