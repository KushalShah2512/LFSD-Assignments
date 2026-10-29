const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Temporary user data
let users = [
    {
        id: 1,
        name: "Kushal Shah",
        email: "kushal@example.com"
    },
    {
        id: 2,
        name: "Rahul Patil",
        email: "rahul@example.com"
    }
];

// GET - Get all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// POST - Add a new user
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});

// PUT - Update user by ID
app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, email } = req.body;

    if (name) {
        user.name = name;
    }

    if (email) {
        user.email = email;
    }

    res.json({
        message: "User updated successfully",
        user: user
    });
});

// DELETE - Delete user by ID
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});