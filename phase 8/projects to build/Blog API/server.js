// server.js
const express = require("express");
const app = express();
const postsRoute = require("./routes/posts");

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the Blog API 🚀");
});

// Use posts route
app.use("/api/posts", postsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
