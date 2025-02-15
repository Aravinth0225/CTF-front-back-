const mongoose = require("mongoose");

const FlagSchema = new mongoose.Schema({
    challenge_id: { type: String, required: true, unique: true },
    flag: { type: String, required: true },
    score: { type: Number, required: true }
});

module.exports = mongoose.model("Flag", FlagSchema);
