import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Scoreboard.css";
import hackerVideo from "./video/video bg ctf.mp4"; 

const Scoreboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/register/teams"); // ✅ Correct API route

        // Ensure teams are sorted by rank in ascending order (1st rank first)
        const sortedTeams = response.data.sort((a, b) => a.rank - b.rank);
        setTeams(sortedTeams);
      } catch (error) {
        console.error("Error fetching scoreboard data:", error);
      }
    };

    fetchTeams();
    const interval = setInterval(fetchTeams, 60000); // Auto-refresh every 1 minute

    return () => clearInterval(interval); // Cleanup on unmount
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
            <th>Department</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.team_id}>
              <td className="rank">{team.rank}</td>
              <td className="team-name">{team.team_name}</td>
              <td>{team.year}</td>
              <td>{team.department}</td>
              <td className="score">{team.scores}</td> {/* ✅ Ensure correct field name */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
