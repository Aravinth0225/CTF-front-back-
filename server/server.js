const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit if MongoDB connection fails
    });

// Default Route
app.get("/", (req, res) => {
    res.send("✅ Server is up and running!");
});

// Routes
try {
    const authRoutes = require("./routes/auth");
    app.use("/api/auth", authRoutes);
} catch (err) {
    console.error("❌ Error loading authRoutes:", err);
}

try {
    const registerRoutes = require("./routes/register");
    app.use("/api/register", registerRoutes);
} catch (err) {
    console.error("❌ Error loading registerRoutes:", err);
}

// Handle 404 for Undefined Routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route Not Found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
