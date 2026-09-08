const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const db=require('../Backend/config/db')
const route=require('../Backend/router/route')

dotenv.config();

const app=express();

const corsOptions = {
    origin: "https://restaurant-project1-psi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));

// app.use(cors({
//     origin: "https://restaurant-project1-psi.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


db();

app.use('/api',route)


app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);

    res.status(500).json({
        message: err.message
    });
});

app.listen(process.env.PORT,()=>{console.log(`Server is running on port ${process.env.PORT}`)})

