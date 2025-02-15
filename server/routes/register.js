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

module.exports = router;
