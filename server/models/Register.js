const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    team_name: { type: String, required: true },
    team_id: { type: Number, required: true, unique: true },
    member1: { type: String, required: true },
    member2: { type: String },
    member3: { type: String },
    department: { type: String, required: true },
    year: { type: Number, required: true },
    phone: { type: Number, required: true },
    scores: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    college: { type: String, required: true }
});

module.exports = mongoose.model("Register", RegisterSchema);







