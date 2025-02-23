import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      localStorage.removeItem("loggedInTeam"); // Clear local storage
      navigate("/"); // Redirect to home
      alert("Logout Success");
    } catch (err) {
      console.error("❌ Logout failed", err);
      alert("❌ Logout failed");
    }
    
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/scoreboard">Scoreboard</Link>
        </li>
        <li>
          <Link to="/categories">Challenges</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="#" onClick={handleLogout} className="logout-link">
    Log Out
  </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
