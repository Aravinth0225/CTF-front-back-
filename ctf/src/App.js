import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register.jsx";
import TechCategories from "./components/TechCategories";
import About from "./components/About.jsx";
import DashboardPage from "./components/DashboardPage";
import FlagForm from "./components/FlagForm";
import Scoreboard from "./components/Scoreboard";
//import Categories from "./components/Categories";

// Background Video
// import bgVideo from "./video/videoplayback.mp4";
// import bgVideo from "./video/video bg ctf.mp4";
import bgVideo from "./video/bg-img.mp4";


//challenges
import Challenge0x01 from "./components/challenges/Challenge0x01/Challenge0x01.jsx";
import Challenge0x02 from "./components/challenges/Challenge0x02/Challenge0x02.jsx";
import Challenge0x03 from "./components/challenges/Challenge0x03/Challenge0x03.jsx";
import Challenge0x04 from "./components/challenges/Challenge0x04/Challenge0x04.jsx";
import Challenge0x05 from "./components/challenges/Challenge0x05/Challenge0x05.jsx";
import Challenge0x06 from "./components/challenges/Challenge0x06/Challenge0x06.jsx";
import Challenge0x07 from "./components/challenges/Challenge0x07/Challenge0x07.jsx";
import Challenge0x08 from "./components/challenges/Challenge0x08/Challenge0x08.jsx";
import Challenge0x09 from "./components/challenges/Challenge0x09/Challenge0x09.jsx";
import Challenge0x10 from "./components/challenges/Challenge0x10/Challenge0x10.jsx";
import Challenge0x11 from "./components/challenges/Challenge0x11/Challenge0x11.jsx";
import Challenge0x12 from "./components/challenges/Challenge0x12/Challenge0x12.jsx";
import Challenge0x13 from "./components/challenges/Challenge0x13/Challenge0x13.jsx";
import Challenge0x14 from "./components/challenges/Challenge0x14/Challenge0x14.jsx";
import Challenge0x15 from "./components/challenges/Challenge0x15/Challenge0x15.jsx";
import Challenge0x16 from "./components/challenges/Challenge0x16/Challenge0x16.jsx";
import Challenge0x17 from "./components/challenges/Challenge0x17/Challenge0x17.jsx";
import Challenge0x18 from "./components/challenges/Challenge0x18/Challenge0x18.jsx";
import Challenge0x19 from "./components/challenges/Challenge0x19/Challenge0x19.jsx";
import Challenge0x20 from "./components/challenges/Challenge0x20/Challenge0x20.jsx";
import Challenge0x21 from "./components/challenges/Challenge0x21/Challenge0x21.jsx";
import Challenge0x22 from "./components/challenges/Challenge0x22/Challenge0x22.jsx";
import Challenge0x23 from "./components/challenges/Challenge0x23/Challenge0x23.jsx";
import Challenge0x24 from "./components/challenges/Challenge0x24/Challenge0x24.jsx";
import Challenge0x25 from "./components/challenges/Challenge0x25/Challenge0x25.jsx";
import Challenge0x26 from "./components/challenges/Challenge0x26/Challenge0x26.jsx";
import Challenge0x27 from "./components/challenges/Challenge0x27/Challenge0x27.jsx";
import Challenge0x28 from "./components/challenges/Challenge0x28/Challenge0x28.jsx";
import Challenge0x29 from "./components/challenges/Challenge0x29/Challenge0x29.jsx";
import Challenge0x30 from "./components/challenges/Challenge0x30/Challenge0x30.jsx";
import Challenge0x31 from "./components/challenges/Challenge0x31/Challenge0x31.jsx";
import Challenge0x32 from "./components/challenges/Challenge0x32/Challenge0x32.jsx";
import Challenge0x33 from "./components/challenges/Challenge0x33/Challenge0x33.jsx";
import Challenge0x34 from "./components/challenges/Challenge0x34/Challenge0x34.jsx";
import Challenge0x35 from "./components/challenges/Challenge0x35/Challenge0x35.jsx";
import Challenge0x36 from "./components/challenges/Challenge0x36/Challenge0x36.jsx";
import Challenge0x37 from "./components/challenges/Challenge0x37/Challenge0x37.jsx";
import Challenge0x38 from "./components/challenges/Challenge0x38/Challenge0x38.jsx";
import Challenge0x39 from "./components/challenges/Challenge0x39/Challenge0x39.jsx";



import axios, { formToJSON } from "axios";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/register") // ✅ Fetch data from your MongoDB backend
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <Navbar /> {/* ✅ Added Navbar */}
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <video autoPlay loop muted className="background-video">
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <Hero />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />.
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<TechCategories />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/flags" element={<FlagForm />} />



<Route path="/challenges/0x01" element={<Challenge0x01 />} />
<Route path="/challenges/0x02" element={<Challenge0x02 />} />
<Route path="/challenges/0x03" element={<Challenge0x03 />} />
<Route path="/challenges/0x04" element={<Challenge0x04 />} />
<Route path="/challenges/0x05" element={<Challenge0x05 />} />
<Route path="/challenges/0x06" element={<Challenge0x06 />} />
<Route path="/challenges/0x07" element={<Challenge0x07 />} />
<Route path="/challenges/0x08" element={<Challenge0x08 />} />
<Route path="/challenges/0x09" element={<Challenge0x09 />} />
<Route path="/challenges/0x10" element={<Challenge0x10 />} />
<Route path="/challenges/0x11" element={<Challenge0x11 />} />
<Route path="/challenges/0x12" element={<Challenge0x12 />} />
<Route path="/challenges/0x13" element={<Challenge0x13 />} />
<Route path="/challenges/0x14" element={<Challenge0x14 />} />
<Route path="/challenges/0x15" element={<Challenge0x15 />} />
<Route path="/challenges/0x16" element={<Challenge0x16 />} />
<Route path="/challenges/0x17" element={<Challenge0x17 />} />
<Route path="/challenges/0x18" element={<Challenge0x18 />} />
<Route path="/challenges/0x19" element={<Challenge0x19 />} />
<Route path="/challenges/0x20" element={<Challenge0x20 />} />
<Route path="/challenges/0x21" element={<Challenge0x21 />} />
<Route path="/challenges/0x22" element={<Challenge0x22 />} />
<Route path="/challenges/0x23" element={<Challenge0x23 />} />
<Route path="/challenges/0x24" element={<Challenge0x24 />} />
<Route path="/challenges/0x25" element={<Challenge0x25 />} />
<Route path="/challenges/0x26" element={<Challenge0x26 />} />
<Route path="/challenges/0x27" element={<Challenge0x27 />} />
<Route path="/challenges/0x28" element={<Challenge0x28 />} />
<Route path="/challenges/0x29" element={<Challenge0x29 />} />
<Route path="/challenges/0x30" element={<Challenge0x30 />} />
<Route path="/challenges/0x31" element={<Challenge0x31 />} />
<Route path="/challenges/0x32" element={<Challenge0x32 />} />
<Route path="/challenges/0x33" element={<Challenge0x33 />} />
<Route path="/challenges/0x34" element={<Challenge0x34 />} />
<Route path="/challenges/0x35" element={<Challenge0x35 />} />
<Route path="/challenges/0x36" element={<Challenge0x36 />} />
<Route path="/challenges/0x37" element={<Challenge0x37 />} />
<Route path="/challenges/0x38" element={<Challenge0x38 />} />
<Route path="/challenges/0x39" element={<Challenge0x39 />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;