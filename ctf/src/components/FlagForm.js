import React, { useState } from "react";

const FlagForm = () => {
    const [challengeId, setChallengeId] = useState("");
    const [flag, setFlag] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFlag = {
            challenge_id: challengeId,
            flag: flag,
            score: Number(score),
        };

        try {
            const response = await fetch("http://localhost:5000/api/flags", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newFlag),
            });

            const data = await response.json();
            alert(data.message || "Flag submitted successfully!");

            setChallengeId("");
            setFlag("");
            setScore("");
        } catch (error) {
            alert("Error submitting flag");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2>Submit Flag</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Challenge ID" 
                    value={challengeId} 
                    onChange={(e) => setChallengeId(e.target.value)} 
                    required 
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }} 
                />
                <input 
                    type="text" 
                    placeholder="Flag" 
                    value={flag} 
                    onChange={(e) => setFlag(e.target.value)} 
                    required 
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }} 
                />
                <input 
                    type="number" 
                    placeholder="Score" 
                    value={score} 
                    onChange={(e) => setScore(e.target.value)} 
                    required 
                    style={{ width: "100%", padding: "8px", marginBottom: "10px" }} 
                />
                <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FlagForm;
