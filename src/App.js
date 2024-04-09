import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollTop';
import Signup from "./components/Signup"
import Home from "./components/Home"
import GetStarted from "./components/GetStarted";
import VerifyEmail from './components/VerifyEmail';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/getstarted" element={<GetStarted />} />
        <Route path="signup/verifyemail" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  );
}