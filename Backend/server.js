const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const db = require("./config/db");
const route = require("./router/route");

dotenv.config();

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://restaurant-project-frontend-ten.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", async (req, res, next) => {
    try {
        await db();
        next();
    } catch (error) {
        next(error);
    }
});

app.use("/api", route);

app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);

    res.status(500).json({
        message: err.message
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log(
        `Server is running on port ${process.env.PORT || 5000}`
    );
});



// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const db = require("./config/db");
// const route = require("./router/route");

// dotenv.config();

// const app = express();

// app.use(cors({
//     origin: "https://restaurant-project-frontend-ten.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api", route);

// app.use((err, req, res, next) => {
//     console.error("SERVER ERROR:", err);

//     res.status(500).json({
//         message: err.message
//     });
// });

// db();

// app.listen(process.env.PORT || 5000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 5000}`);
// });