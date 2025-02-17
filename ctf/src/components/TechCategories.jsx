import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./TechCategories.css";
import bgVideo from "../video/video bg ctf.mp4"; 

const challenges = [
  { name: "0x01", points: "25 points", description: "DECRYPT THE CIPHER", difficulty: "EASY" },
  { name: "0x02", points: "25 points", description: "HELP", difficulty: "EASY" },
  { name: "0x03", points: "25 points", description: "QR code encrypt", difficulty: "EASY" },
  { name: "0x04", points: "25 points", description: "QUIZ", difficulty: "EASY" },
  { name: "0x05", points: "25 points", description: ".py bug fix", difficulty: "EASY" },
  { name: "0x06", points: "25 points", description: "JOIN", difficulty: "EASY" },
  { name: "0x07", points: "100 points", description: "Get through it", difficulty: "MEDIUM" },
  { name: "0x08", points: "100 points", description: "ISO", difficulty: "MEDIUM" },
  { name: "0x09", points: "100 points", description: "HDF5 MAN", difficulty: "MEDIUM" },
  { name: "0x10", points: "100 points", description: "Get through it", difficulty: "MEDIUM" },
  { name: "0x11", points: "100 points", description: "ISO", difficulty: "MEDIUM" },
  { name: "0x12", points: "100 points", description: "HDF5 MAN", difficulty: "MEDIUM" },
  { name: "0x13", points: "50 points", description: "HTTP-packets", difficulty: "EASY" },
  { name: "0x14", points: "50 points", description: "Be a Detective and Find the Secrets", difficulty: "EASY" },
  { name: "0x15", points: "50 points", description: "Be a Detective and Find the Secrets", difficulty: "EASY" },
  { name: "0x16", points: "50 points", description: "HTTP-packets", difficulty: "EASY" },
  { name: "0x17", points: "50 points", description: "Be a Detective and Find the Secrets", difficulty: "EASY" },
  { name: "0x18", points: "50 points", description: "Be a Detective and Find the Secrets", difficulty: "EASY" },
  { name: "0x19", points: "50 points", description: "Crack the Arcane Calculator", difficulty: "EASY" },
  { name: "0x20", points: "200 points", description: "XOR Decryption –", difficulty: "HARD" },
  { name: "0x21", points: "100 points", description: "Brute Force Attack*", difficulty: "MEDIUM" },
  { name: "0x22", points: "50 Points", description: "Break Me", difficulty: "EASY" },
  { name: "0x23", points: "50 Points", description: "Wait for the Onion to peel", difficulty: "EASY" },
  { name: "0x24", points: "50 points", description: "Decrypt the flag", difficulty: "EASY" },
  { name: "0x25", points: "50 points", description: "Find Me inSide Me", difficulty: "EASY" },
  { name: "0x26", points: "200 points", description: "Pixelass", difficulty: "HARD" },
  { name: "0x27", points: "100 points", description: "~Audio~", difficulty: "MEDIUM" },
  { name: "0x28", points: "100 points", description: "~DIG IT~", difficulty: "MEDIUM" },
  { name: "0x29", points: "100 points", description: "~Attack~", difficulty: "EASY" },
  { name: "0x30", points: "100 points", description: "~Attack~", difficulty: "EASY" },
  { name: "0x31", points: "50 points", description: "XSS Attack", difficulty: "MEDIUM" },
  { name: "0x32", points: "50 points", description: "SQL Injection", difficulty: "MEDIUM" },
  { name: "0x33", points: "50 points", description: "Broken Authentication", difficulty: "HARD" },
  { name: "0x34", points: "50 points", description: "XSS Attack", difficulty: "MEDIUM" },
  { name: "0x35", points: "50 points", description: "SQL Injection", difficulty: "MEDIUM" },
  { name: "0x36", points: "50 points", description: "Broken Authentication", difficulty: "HARD" },
  { name: "0x37", points: "50 points", description: "Just Connect to SSH - GET a Flag", difficulty: "EASY" },
  { name: "0x38", points: "50 points", description: "Strings STR", difficulty: "EASY" },
  { name: "0x39", points: "100 points", description: "Debugger --", difficulty: "HARD" },
  
];

const TechCategories = () => {
  const [completed, setCompleted] = useState({});
  const navigate = useNavigate(); 

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      {/* Background Video */}
      <video autoPlay loop muted className="tech-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="tech-content"> <br />
        <h1 className="tech-title">Challenges</h1>
        <p className="tech-subtitle">“Every lock has a key. Every system has a flaw.”</p>
        <div className="tech-underline"></div>
        <br />
        <div className="tech-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="tech-card">
              <h2 className="tech-card-title">{challenge.name}</h2>
              <p className="tech-card-count">{challenge.points}</p>
              <p className="tech-card-description">{challenge.description}</p>
              <span className="tech-difficulty">{challenge.difficulty}</span>
            
              <div className={`tech-status ${completed[index] ? "completed" : "not-completed"}`}>
                {completed[index] ? "COMPLETED SUCCESSFULLY" : "NOT COMPLETED YET"}
              </div>

              {/* "Go There" button navigates to the challenge page */}
              <button className="tech-button" onClick={() => navigate(`/challenges/${challenge.name}`)}>
                Go There
              </button>

              <button className="tech-button">💡 Get HINT</button>
              <br /> <br />

              <div class="flag-container">
                <input type="text" className="flag-input" placeholder="Enter Flag" />
                <button className="flag-submit" onClick={() => handleSubmit(index)}>GO!</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCategories;
