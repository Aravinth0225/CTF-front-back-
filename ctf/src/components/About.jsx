import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Byte Busters CTF Event</h1>
      <p className="about-subtitle">Welcome to an exciting Capture The Flag event!</p>

      <h2>Contact</h2>
      <p>For any queries, concerns, or clarifications, please contact the event organizers:</p>
      <ul>
        <li><strong>Kishore Kumar:</strong> 8838582534</li>
        <li><strong>Janagan:</strong> 9363290615</li>
        {/* <li><strong>Infant Calvin:</strong> 6369631371</li>
        <li><strong>Karthickeyan:</strong> 9751990206</li> */}
      </ul>

      <h2>Table of Contents</h2>
      <ol>
        <li>Introduction</li>
        <li>Getting Started</li>
        <li>Rules and Guidelines</li>
        <li>Scoring</li>
        <li>Hints and Assistance</li>
        <li>Reporting Issues</li>
        <li>Prizes</li>
        <li>Contact</li>
      </ol>

      <h2>1. Introduction</h2>
      <p>
        Welcome to our Capture The Flag (CTF) event! This competition is designed to test your cybersecurity skills, 
        problem-solving abilities, and creativity. The objective is to find hidden flags within various challenges, each representing a unique security vulnerability or puzzle.
      </p>

      <h2>2. Getting Started</h2>
      <ul>
        <li><strong>Registration:</strong> Ensure you have registered for the event. If not, contact the organizers.</li>
        <li><strong>Accessing Challenges:</strong> Log in to the CTF platform using your credentials.</li>
        <li><strong>Selecting Challenges:</strong> Browse and choose challenges that interest you.</li>
      </ul>

      <h2>3. Rules and Guidelines</h2>
      <ul>
        <li><strong>Fair Play:</strong> Cheating, sharing answers, or exploiting the platform is prohibited.</li>
        <li><strong>Legal Compliance:</strong> Stay within legal boundaries. Unauthorized access outside the event scope is forbidden.</li>
        <li><strong>Respect:</strong> Treat all participants and organizers with courtesy.</li>
      </ul>

      <h2>4. Scoring</h2>
      <ul>
        <li><strong>Flag Submission:</strong> Each challenge contains a hidden flag. Submit it on the platform for points.</li>
        <li><strong>Scoring System:</strong> Points are awarded based on challenge difficulty.</li>
        <li><strong>Leaderboard:</strong> Track rankings based on total points earned.</li>
      </ul>

      <h2>5. Hints and Assistance</h2>
      <ul>
        <li><strong>Hints:</strong> If stuck, request a hint via the platform.</li>
        <li><strong>Community Forums:</strong> Engage with participants and discuss strategies.</li>
      </ul>

      <h2>6. Reporting Issues</h2>
      <ul>
        <li><strong>Technical Issues:</strong> Report platform problems to the organizers.</li>
        <li><strong>Security Concerns:</strong> Report vulnerabilities found in challenges.</li>
      </ul>

      <h2>7. Prizes</h2>
      <p>Winners will receive exciting prizes! Details will be communicated at the end of the event.</p>

      <p className="footer">© Byte Busters Club 2025</p>
    </div>
  );
};

export default About;