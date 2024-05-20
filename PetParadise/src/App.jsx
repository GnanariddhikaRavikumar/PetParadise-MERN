import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import Contact from './Components/Contact'
import Home from './Components/Home'
import Login from './Components/Login'
import Service from './Components/Services'
import About from './Components/About';
import axios from 'axios';

function App() {
 
  return (
    <>
      <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service/>}/>  
      </Routes>
    </Router>
    </>
  )
}

export default App
