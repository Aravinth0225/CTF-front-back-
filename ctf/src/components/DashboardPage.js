import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

const DashboardPage = () => {
  const [team, setTeam] = useState(null);
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
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h2>🏆 Team Dashboard</h2>

      {team ? (
        <table>
          <thead>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Score</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{team.team_id}</td>
              <td>{team.team_name}</td>
              <td>{team.scores}</td>
              <td>{team.rank}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading team details...</p>
      )}
    </div>
  );
};

export default DashboardPage;
