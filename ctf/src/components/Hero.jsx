import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import logo from "../images/th3cyb3rhub-fav.png";

const hackerQuotes = [
  "“ Hackers don’t break in, they log in ”",
  "“ There’s no patch for human curiosity ”",
  "“ Every lock has a key. Every system has a flaw ”",
  "“ Give me a keyboard, and I will rule the world ”",
  "“ The quieter you become, the more you are able to hear ”",
  "“ Hacking is not a crime; it’s an art of understanding ”",
  "“ Technology trust is a good thing, but control is a better one ”",
  "“ Think before you click. Hackers don’t need a backdoor when you open the front ”"
];

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % hackerQuotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hero-container">
        <h1 className="glow-text">Welcome to Capture The Flag</h1>
        <p className="quote fade-in">{hackerQuotes[quoteIndex]}</p>
        <p className="glow-text">Get Into Our World ! </p>

        {/* Card Section */}
        <div className="card-section">
          <div className="card">
            <h2 className="card-title">Beginner</h2>
            <p>Perfect for newcomers, learn the basics of ethical hacking and security challenges.</p>
          </div>

          <div className="card">
            <h2 className="card-title">Challenger</h2>
            <p>Take on intermediate challenges and test your skills with real-world scenarios.</p>
          </div>

          <div className="card">
            <h2 className="card-title">Master</h2>
            <p>For the elite, solve the toughest security puzzles and prove your expertise.</p>
          </div>
        </div>
        <div className="card-buttons">
              <button className="hero-button" onClick={() => navigate("/login")}>LOGIN</button>
              <button className="hero-button" onClick={() => navigate("/register")}>REGISTER</button>
            </div>
      </div>
    </div>
  );
};

export default Hero;
