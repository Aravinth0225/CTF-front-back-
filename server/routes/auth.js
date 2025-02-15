const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        console.log("🔍 Received Request:", req.body); // Debugging

        const { username, password } = req.body;

        // Ensure username is treated as a string
        const user = await User.findOne({ username: String(username) });

        console.log("🔍 Found User:", user); // Debugging

        if (!user) {
            return res.status(400).json({ success: false, message: "❌ Team ID not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ success: false, message: "❌ Incorrect Password" });
        }

        res.json({ success: true, message: "✅ Login Successful!" });

    } catch (err) {
        res.status(500).json({ success: false, message: "❌ Server Error" });
    }
});

module.exports = router;
