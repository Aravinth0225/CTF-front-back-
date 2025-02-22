import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Scoreboard.css";
import hackerVideo from "./video/video bg ctf.mp4"; 

const Scoreboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/scores") // Adjust API endpoint
      .then((response) => {
        // Sort teams by score in descending order
        const sortedTeams = response.data.sort((a, b) => b.score - a.score);
        setTeams(sortedTeams);
      })
      .catch((error) => {
        console.error("Error fetching scoreboard data:", error);
      });
  }, []);

  return (
    <div className="scoreboard-container">
      <video autoPlay loop muted className="bg-video">
       <source src={hackerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <h2 className="title">Leaderboard</h2>
      <table className="scoreboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Year</th>
            <th>Dept</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.team_id}>
              <td className="rank">{index + 1}</td>
              <td className="team-name">{team.team_name}</td>
              <td>{team.year}</td>
              <td>{team.dept}</td>
              <td className="score">{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
