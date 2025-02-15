import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import logo from "../images/th3cyb3rhub-fav.png"; // Replace with your logo path

const hackerQuotes = [
  "“Hackers don’t break in, they log in.”",
  "“There’s no patch for human curiosity.”",
  "“Every lock has a key. Every system has a flaw.”",
  "“Give me a keyboard, and I will rule the world.”",
  "“The quieter you become, the more you are able to hear.”",
  "“Hacking is not a crime; it’s an art of understanding.”",
  "“Technology trust is a good thing, but control is a better one.”",
  "“Think before you click. Hackers don’t need a backdoor when you open the front.”"
];

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const navigate = useNavigate();

  // Change quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % hackerQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <h1 className="glow-text">Welcome to Capture The Flag</h1>
        <p className="quote fade-in">{hackerQuotes[quoteIndex]}</p>
        <p className="glow-text">Get Into Our World !. </p>
      </div>

      {/* Buttons at the bottom */}
      <div className="button-container">
        <button className="hero-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="hero-button" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Hero;
