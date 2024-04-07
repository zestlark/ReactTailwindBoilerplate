import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup"
import Home from "./components/Home"
import GetStarted from "./components/GetStarted";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/getstarted" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}