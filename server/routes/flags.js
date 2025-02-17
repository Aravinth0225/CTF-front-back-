const express = require("express");
const Flag = require("../models/Flag"); // Import the Flag model
const router = express.Router();

// Add a new challenge flag
router.post("/", async (req, res) => {
    try {
        const { challenge_id, flag, score } = req.body;

        // Validate input
        if (!challenge_id || !flag || score === undefined) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newFlag = new Flag({ challenge_id, flag, score });
        await newFlag.save();

        res.status(201).json({ message: "Challenge flag added successfully!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all challenge flags
router.get("/", async (req, res) => {
    try {
        const flags = await Flag.find();
        res.json(flags);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
