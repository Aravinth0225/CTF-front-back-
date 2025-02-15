const express = require("express");
const Register = require("../models/Register");
const router = express.Router();

// Register a new team
router.post("/", async (req, res) => {
  try {
    const newRegistration = new Register(req.body);
    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
