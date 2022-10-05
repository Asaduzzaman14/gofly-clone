import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import CountractUs from './components/pages/CountractUs';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contract-us" element={<CountractUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
