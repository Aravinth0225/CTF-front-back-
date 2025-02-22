import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import hackerVideo from "./video/video bg ctf.mp4"; // Your background video

const DashboardPage = () => {
  const [team, setTeam] = useState(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInTeam = localStorage.getItem("loggedInTeam");

    if (!loggedInTeam) {
      alert("❌ No team logged in. Redirecting to login.");
      navigate("/");
      return;
    }

    axios
      .get(`http://localhost:5000/api/register/team/${loggedInTeam}`)
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <video autoPlay loop muted className="background-video">
        <source src={hackerVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>

      <div className="content">
        {/* Left Section - Team Name, Quote, and Rank */}
        <div className="left-section">
          <h3 className="hacker-text">TEAM NAME :</h3>
          <h1 className="team-name">{team ? team.team_name : "Loading..."}</h1>
          <p className="motto">
            Hey Team {team?.team_name}, cracking the code and owning the leaderboard!
          </p>
          <h3 className="hacker-text">RANK :</h3>
          <h1 className="rank">{team ? `${team.rank}` : "N/A"}</h1>
        </div>

        {/* Right Section - Scores & Time */}
        <div className="right-section">
          <h3 className="hacker-text">SCORES! :</h3>
          <h1 className="score">{team ? team.scores : "0"}</h1>
          <h3 className="hacker-text">TIME :</h3>
          <h1 className="time">{time}</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
