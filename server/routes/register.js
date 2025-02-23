const express = require("express");
const Register = require("../models/Register"); // Register model
const User = require("../models/User"); // User model
const router = express.Router();

// Register a new team
router.post("/", async (req, res) => {
    try {
        console.log("Received Request Body:", req.body); // Debugging

        const { team_name, team_id, member1, member2, member3, department, year, phone, college } = req.body;

        // Check if required fields are provided
        if (!team_name || !team_id || !member1 || !department || !year || !phone || !college) {
            return res.status(400).json({ error: "All required fields must be provided" });
        }

        // Save team registration data
        const newRegistration = new Register({
            team_name,
            team_id,
            member1,
            member2,
            member3,
            department,
            year,
            phone,
            college
        });

        await newRegistration.save();

        // Store team_id as username and password in User collection
        const newUser = new User({
            username: team_id.toString(),
            password: team_id.toString(),
        });

        await newUser.save();

        res.status(201).json({ message: "Registration successful!" });

    } catch (err) {
        console.error("❌ Registration Error:", err);
        res.status(400).json({ error: err.message });
    }
}



);
// Get team details by team_id
router.get("/team/:team_id", async (req, res) => {
  try {
      const team = await Register.findOne({ team_id: req.params.team_id });
      if (!team) {
          return res.status(404).json({ error: "Team not found" });
      }
      res.json(team);
  } catch (err) {
      res.status(500).json({ error: "Failed to fetch team data" });
  }
});
// Update team rank by _id
// Update team rank by team_id
router.put("/update/:team_id", async (req, res) => {
    try {
        const { team_name, member1, member2, member3, department, year, phone, college, scores, rank } = req.body;

        // Find the team by team_id and update the provided fields
        const updatedTeam = await Register.findOneAndUpdate(
            { team_id: req.params.team_id }, // Search condition
            { 
                $set: { team_name, member1, member2, member3, department, year, phone, college, scores, rank } 
            },
            { new: true, runValidators: true } // Return updated document & validate data
        );

        if (!updatedTeam) {
            return res.status(404).json({ error: "Team not found" });
        }

        res.json({ message: "Team details updated successfully!", team: updatedTeam });

    } catch (err) {
        console.error("❌ Update Error:", err);
        res.status(500).json({ error: "Failed to update team details" });
    }
});

// Get all teams
router.get("/teams", async (req, res) => {
    try {
        const teams = await Register.find().sort({ scores: -1 }); // Sort by score (highest first)
        res.json(teams);
    } catch (err) {
        console.error("❌ Error fetching teams:", err);
        res.status(500).json({ error: "Failed to fetch team data" });
    }
});

module.exports = router;
