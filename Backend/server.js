const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./config/db");
const route = require("./router/route");

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://restaurant-project-frontend-ten.vercel.app"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db();

app.use("/api", route);

app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);
    res.status(500).json({
        message: err.message
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});