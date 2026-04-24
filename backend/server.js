const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ message: "Login Success ✅" });
    } else {
        res.json({ message: "Invalid Credentials ❌" });
    }
});

// Start server
app.listen(7000, () => {
    console.log("Server running on http://localhost:7000");
});