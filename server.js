require("dotenv").config();
const studentRoutes = require("./routes/studentRoutes");

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

app.get("/", (req, res) => {
    res.send("Welcome to Student API!");
});