import React, { useState } from "react";
import "./Challenge31.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x31 = () => {
  const [ip, setIp] = useState("");
  const [flag, setFlag] = useState("");
  const correctIp ="182.71.102.213";
  const hiddenFlag = "CRACKED{ efhfuisifuidgjkdgdgjkdkgbb }";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ip === correctIp) {
      setFlag(hiddenFlag);
    } else {
      alert("Incorrect IP address. Try again.");
    }
  };

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Back Button */}
      <button className="back-button" onClick={() => window.history.back()} >Back</button>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">Challenge 0x31</h1>
        <p className="challenge-instruction">
          Website <strong>Sonalearn.org</strong>
        </p>
        
        <form onSubmit={handleSubmit} className="challenge-form">
          <input 
            type="text" 
            className="ip-input"
            placeholder="Enter IP " 
            value={ip} 
            onChange={(e) => setIp(e.target.value)} 
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        
        {flag && <p className="flag-display">{flag}</p>}
      </div>
      
      {/* Footer */}
      <footer className="footer">@ ByteBuster's Club 2025</footer>
    </div>
  );
};

export default Challenge0x31;
