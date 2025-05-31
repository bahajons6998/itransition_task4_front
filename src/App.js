import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Blocked from "./pages/Blocked";
import Navbar from "./pages/Navbar";
import NoFound from "./pages/NoFound";


function App() {
  return (
    <div className="App">
      {console.log(process.env.REACT_APP_BASE_URL)}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blocked" element={<Blocked />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
